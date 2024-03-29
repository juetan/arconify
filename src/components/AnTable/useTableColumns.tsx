import { Divider, Link, Message, TableColumnData } from '@arco-design/web-vue'
import { defaultsDeep } from 'lodash-es'
import { Ref } from 'vue'
import { Recordable, delConfirm, delOptions } from '../AnForm/util'
import { AnTableInstance } from './Table'

interface TableBaseColumn {
  /**
   * 类型
   * @example
   * ```tsx
   * 'delete'
   * ```
   */
  type?: undefined
}

interface TableIndexColumn {
  /**
   * 类型
   */
  type: 'index'
}

interface TableColumnButton {
  /**
   * 特殊类型
   * @example
   * ```ts
   * 'delete'
   * ```
   */
  type?: 'modify' | 'delete'
  /**
   * 确认弹窗配置
   * @example
   * ```ts
   * '确定删除吗?'
   * ```
   */
  confirm?: string
  /**
   * 按钮文本
   * @example
   * ```ts
   * '修改'
   * ```
   */
  text?: string
  /**
   * 按钮参数
   * @see ALink
   */
  buttonProps?: Recordable
  /**
   * 按钮图标
   */
  icon?: string
  /**
   * 是否可见
   * @example
   * ```ts
   * (props) => props.record.status === 1
   * ```
   */
  visible?: (args: Recordable) => boolean
  /**
   * 是否禁用
   * @example
   * ```ts
   * (props) => props.record.status === 1
   * ```
   */
  disable?: (args: Recordable) => boolean
  /**
   * 处理函数
   * @example
   * ```ts
   * (props) => api.user.rmUser(props.record.id)
   * ```
   */
  onClick?: (props: any) => any | Promise<any>
}

interface TableButtonColumn {
  /**
   * 类型
   */
  type: 'button'
  /**
   * 按钮列表
   * @example
   * ```ts
   * [{
   *   type: 'delete',
   *   text: '删除',
   *   onClick: (args) => api.user.rmUser(args.record.id)
   * }]
   * ```
   */
  buttons: TableColumnButton[]
}

interface TableDropdownColumn {
  /**
   * 类型
   */
  type: 'dropdown'
  /**
   * 下拉列表
   */
  dropdowns: any[]
}

export type TableColumn = TableColumnData & (TableIndexColumn | TableBaseColumn | TableButtonColumn | TableDropdownColumn)

function useRowDelete(btn: TableColumnButton, tableRef: Ref<AnTableInstance | null>) {
  const onClick = btn.onClick
  let confirm = btn.confirm ?? {}
  if (typeof confirm === 'string') {
    confirm = { content: confirm }
  }
  defaultsDeep(btn, {
    buttonProps: {
      status: 'danger',
    },
  })
  btn.onClick = async props => {
    delConfirm({
      ...delOptions,
      ...confirm,
      async onBeforeOk() {
        const res: any = await onClick?.(props)
        const msg = res?.data?.message
        msg && Message.success(`提示: ${msg}`)
        tableRef.value?.refresh()
      },
    })
  }
  return btn
}

function useRowModify(btn: TableColumnButton, tableRef: Ref<AnTableInstance | null>) {
  const onClick = btn.onClick
  btn.onClick = async props => {
    const data = (await onClick?.(props)) ?? props.record
    tableRef.value?.modifyRef?.open(data)
  }
  return btn
}

export function useTableColumns(data: TableColumn[], tableRef: Ref<AnTableInstance | null>) {
  const columns: TableColumnData[] = []

  for (let column of data) {
    //   if (column.type === "index") {
    //     column = useTableIndexColumn(column);
    //   }

    if (column.type === 'button') {
      column = useTableButtonColumn(column, tableRef)
    }

    //   if (column.type === "dropdown") {
    //     column = useTableDropdownColumn(column);
    //   }

    columns.push(column)
  }

  return columns
}

function useTableButtonColumn(column: TableButtonColumn & TableColumnData, tableRef: Ref<AnTableInstance | null>) {
  const items: TableColumnButton[] = []

  defaultsDeep(column, { align: 'right', title: '操作' })

  for (let button of column.buttons) {
    if (button.type === 'delete') {
      button = useRowDelete(button, tableRef)
    }
    if (button.type === 'modify') {
      button = useRowModify(button, tableRef)
    }
    items.push(button)
  }

  column.render = props => {
    return items.map((item, index) => {
      if (item.visible && !item.visible(props)) {
        return null
      }
      return (
        <>
          {index !== 0 && <Divider direction="vertical" margin={4} />}
          <Link {...item.buttonProps} disabled={item.disable?.(props)} onClick={() => item.onClick?.(props)}>
            {item.text}
          </Link>
        </>
      )
    })
  }

  return column
}
