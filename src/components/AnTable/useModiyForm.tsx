import { AnFormModalProps, FormItem, FormModalUseOptions, useFormModalProps } from '../AnForm'
import { cloneDeep, defaults, merge } from 'lodash-es'
import { AnTableInstance } from './Table'
import { ExtendFormItem } from './useSearchForm'
import { UseTableOptions } from './useTable'
import { Recordable } from '../AnForm'
import { Ref } from 'vue'

export type ModifyForm = Omit<FormModalUseOptions, 'items' | 'trigger'> & {
  /**
   * 是否继承新建弹窗
   * @default
   * ```ts
   * false
   * ```
   */
  extend?: boolean
  /**
   * 表单项
   * ```tsx
   * [{
   *   extend: 'name', // 从 create.items 中继承
   * }]
   * ```
   */
  items?: ExtendFormItem[]
}

export function useModifyForm(options: UseTableOptions, createModel: Recordable, tableRef: Ref<AnTableInstance | null>): AnFormModalProps | undefined {
  const { create, modify, columns } = options

  if (!modify) {
    return undefined
  }

  for (const column of columns ?? []) {
    if (column.type === 'button') {
      const btn = column.buttons.find(i => i.type === 'modify')
      if (!btn) {
        column.buttons.unshift({
          text: '修改',
          type: 'modify',
          onClick({ record }) {
            tableRef.value?.modifyRef?.open(record)
          },
        })
      } else {
        const onClick = btn.onClick
        defaults(btn, { text: '修改' })
        btn.onClick = props => {
          const data = onClick?.(props) ?? props.record
          tableRef.value?.modifyRef?.open(data)
        }
      }
      break
    }
  }

  let result: FormModalUseOptions = { items: [], model: cloneDeep(createModel) }
  if (modify.extend && create) {
    result = merge({}, create)
  }
  result = merge(result, modify)

  if (modify.items) {
    const items: FormItem[] = []
    const createItemMap: Record<string, FormItem> = {}
    for (const item of create?.items ?? []) {
      createItemMap[item.field] = item
    }
    for (let item of modify.items ?? []) {
      if (item.extend) {
        item = merge({}, createItemMap[item.field!] ?? {}, item)
      }
      items.push(item as any)
    }
    if (items.length) {
      result.items = items
    }
  }

  return useFormModalProps(result)
}
