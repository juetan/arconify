import { Button } from '@arco-design/web-vue'
import { isFunction } from 'lodash-es'
import { Component, Ref, reactive, ref } from 'vue'
import { AnTable, AnTableInstance, AnTableProps } from './Table'
import { UseCreateFormOptions, useCreateForm } from './useCreateForm'
import { ModifyForm, useModifyForm } from './useModiyForm'
import { SearchForm, SearchFormItem, useSearchForm } from './useSearchForm'
import { TableColumn, useTableColumns } from './useTableColumns'

export interface UseAnTableOptions extends Pick<AnTableProps, 'data' | 'tableProps' | 'tableSlots' | 'paging' | 'actions' | 'widgets'> {
  /**
   * 唯一ID
   * @example
   * ```ts
   * 'UserTable'
   * ```
   */
  id?: string
  /**
   * 表格列
   * @example
   * ```ts
   * [{
   *   dataIndex: 'title',
   *   title: '标题'
   * }]
   * ```
   */
  columns?: TableColumn[]
  /**
   * 搜索表单
   * @example
   * ```ts
   * [{
   *   field: 'name',
   *   label: '用户名称',
   *   setter: 'input'
   * }]
   * ```
   */
  search?: SearchFormItem[] | SearchForm
  /**
   * 新建弹窗
   * @example
   * ```ts
   * {
   *   title: '添加用户',
   *   items: [],
   *   submit: (model) => {}
   * }
   * ```
   */
  create?: UseCreateFormOptions
  /**
   * 修改弹窗
   * @example
   * ```ts
   * {
   *   extend: true, // 基于新建弹窗扩展
   *   title: '修改用户',
   *   submit: (model) => {}
   * }
   * ```
   */
  modify?: ModifyForm
}

function useButtons(buttons: any[], tableRef: Ref<AnTableInstance | null>) {
  console.log(tableRef)
  const result: Component[] = []
  for (const button of buttons) {
    if (button.render) {
      result.push(button.render)
      continue
    }
    result.push(() => {
      if (button.visible && !button.visible()) {
        return null
      }
      return (
        <Button onClick={() => button.onClick?.()} disabled={button.disable?.()} {...button.buttonProps}>
          {{
            icon: button.icon ? () => <i class={button.icon}></i> : null,
            default: button.text ? () => button.text : null,
          }}
        </Button>
      )
    })
  }
  return result
}

export function useTableProps(options: UseAnTableOptions, tableRef: Ref<AnTableInstance | null>): AnTableProps {
  const { data, tableProps = {}, tableSlots } = options

  const paging = { hide: false, showTotal: true, showPageSize: true, ...(options.paging ?? {}) }
  const search = options.search && useSearchForm(options.search, [], tableRef)
  const create = options.create && useCreateForm(options.create)
  const modify = options.modify && useModifyForm(options, create?.model ?? {}, tableRef)
  const actions = options.actions && useButtons(options.actions, tableRef)
  const widgets = options.widgets && useButtons(options.widgets, tableRef)
  const columns = useTableColumns(options.columns ?? [], tableRef)

  const onPageChange = tableProps.onPageChange
  const onPageSizeChange = tableProps.onPageSizeChange

  tableProps.onPageChange = (page: number) => {
    onPageChange?.(page)
    tableRef.value?.load(page)
  }

  tableProps.onPageSizeChange = (size: number) => {
    onPageSizeChange?.(size)
    tableRef.value?.load(1, size)
  }

  const props = {
    tableProps,
    tableSlots,
    columns,
    data,
    search,
    paging,
    create,
    modify,
    actions,
    widgets,
  }

  return props
}

type UseAnTableOptionsFn = (tableRef: Ref<AnTableInstance | null>) => UseAnTableOptions

/**
 * 构建一个表格组件
 * @example
 * ```html
 * <template>
 *  <UserTable></UserTable>
 * </template>
 *
 * <script lang="ts" setup>
 * const UserTable = useTable({
 *  data() {
 *    return [{ name: '测试' }]
 *  },
 *  columns: [
 *   { title: '名字', dataIndex: 'name' }
 *  ]
 * })
 * <script>
 * ```
 */
export function useAnTable(options: UseAnTableOptions | UseAnTableOptionsFn) {
  const tableRef = ref<AnTableInstance | null>(null)
  const refresh = () => tableRef.value?.refresh()
  const reload = () => tableRef.value?.reload()

  const option: UseAnTableOptions = isFunction(options) ? options(tableRef) : options
  const rawProps = useTableProps(option, tableRef)
  const props = reactive(rawProps)

  const component = {
    name: 'AnTableWrapper',
    tableRef,
    refresh,
    reload,
    render() {
      return (
        <AnTable
          ref={(el: any) => (tableRef.value = el)}
          data={props.data}
          columns={props.columns}
          paging={props.paging}
          search={props.search as any}
          create={props.create as any}
          modify={props.modify as any}
          actions={props.actions}
          widgets={props.widgets}
          tableProps={props.tableProps}
          tableSlots={props.tableSlots}
        ></AnTable>
      )
    },
  }

  return component
}
