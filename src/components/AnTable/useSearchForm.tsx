import { defaultsDeep, isArray, merge } from 'lodash-es'
import type { Ref } from 'vue'
import { AnFormProps } from '../AnForm/Form'
import { AnFormItemProps } from '../AnForm/FormItem'
import { UseFormOptions } from '../AnForm/useForm'
import { FormItem, useFormItems } from '../AnForm/useFormItems'
import { AnTableInstance } from './Table'

export type ExtendFormItem = Partial<
  FormItem & {
    /**
     * 从新建弹窗继承表单项
     * @example
     * ```ts
     * 'name'
     * ```
     */
    extend: string
  }
>

export type SearchFormItem = ExtendFormItem & {
  /**
   * 是否点击图标后进行搜索
   * @description 仅 setter: 'search' 类型可用
   * @default
   * ```ts
   * false
   * ```
   */
  searchable?: boolean
  /**
   * 是否回车后进行查询
   * @default
   * ```ts
   * false
   * ```
   */
  enterable?: boolean
}

export type SearchForm = Omit<UseFormOptions, 'items' | 'submit'> & {
  /**
   * 搜索表单项
   * @example
   * ```ts
   * [{
   *   extend: 'name' // 从 create.items 继承
   * }]
   * ```
   */
  items?: SearchFormItem[]
  /**
   * 是否隐藏查询按钮
   * @default
   * ```tsx
   * false
   * ```
   */
  hideSearch?: boolean
}

export function useSearchForm(search: SearchForm | SearchFormItem[], extendItems: AnFormItemProps[] = [], tableRef: Ref<AnTableInstance | null>): AnFormProps | undefined {
  if (isArray(search)) {
    search = { items: search }
  }

  const { items: _items = [], hideSearch, model: _model, formProps: _formProps } = search
  const extendMap = extendItems.reduce((m, v) => ((m[v.field] = v), m), {} as Record<string, AnFormItemProps>)

  const props = {
    items: [] as AnFormItemProps[],
    model: _model ?? {},
    formProps: defaultsDeep({}, _formProps, { layout: 'inline' }),
  }

  const defualts: Partial<AnFormItemProps> = {
    setter: 'input',
    itemProps: {
      hideLabel: true,
    },
    setterProps: {},
  }

  const items: FormItem[] = []

  for (const _item of _items) {
    const { searchable, enterable, field, extend, ...itemRest } = _item
    if ((field || extend) === 'submit' && hideSearch) {
      continue
    }
    let item: FormItem = defaultsDeep({ field }, itemRest, defualts)
    if (extend) {
      const extendItem = extendMap[extend]
      if (extendItem) {
        item = merge({}, extendItem, itemRest)
      }
    }
    if (item.setter === 'search') {
      Object.assign(item.setterProps!, {
        onSearch: () => tableRef.value?.reload(),
        onPressEnter: () => tableRef.value?.reload(),
      })
    }
    if (item.setterProps) {
      ;(item.setterProps as any).placeholder = (item.setterProps as any).placeholder ?? item.label
    }
    items.push(item)
  }

  props.items = useFormItems(items, props.model)

  return props
}
