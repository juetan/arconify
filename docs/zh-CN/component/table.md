# Table 表格

以 hook 形式构建一个表格，依赖于 useForm 和 useFormModal，内置常用的快捷功能。

## 基础表格

使用 useTable 构建一个表格组件，其结果返回一个对象，该对象可以作为组件使用。

:::demo table/basis
:::

## 表格列

通过 columns 定义表格列，除原有参数外还支持 type 指定特殊类型列，例如操作列。

:::demo table/columns
:::

## 数据来源

通过 data 属性定义数据来源，可以是数组和函数，如果是函数需返回数组或 `{ data, total }` 对象。

:::demo table/data
:::

## 分页操作

通过 paging 属性定义分页，类型参考原表格 pagination 参数，可通过 `{ hide: () => boolean }` 动态显示/隐藏分页。

:::demo table/paging
:::

## 查询操作

通过 search 属性定义查询表单，可以是 useForm 参数或 useForm 中的 items 数组。

:::demo table/search
:::

## 新增操作

通过 create 属性定义新增表单，参数为 useFormModal 类型，将在表格左上角添加新增按钮。

:::demo table/create
:::

## 修改操作

通过 modify 属性定义修改表单，参数为 useFormModal 的型变版，可通过 `extend: true` 继承 create 并自行覆盖。此外，如果表格列存在 `type: 'button'`，将会自动注入一个修改按钮，也可以显示定义一个按钮对象，并在 onClick 返回新的表单 model。

:::demo table/modify
:::

## 删除操作

通过 columns 的 `type: delete` 定义删除操作。

:::demo table/delete
:::

## 操作栏

通过 actions 属性定义操作栏的元素，默认是按钮，位于新增按钮旁边。可以指定 render 属性，进行自定义渲染。

:::demo table/actions
:::

## 部件栏

通过 widgets 属性定义部件栏的元素，默认是按钮，位于查询表单右边。可以指定 render 属性，进行自定义渲染。

:::demo table/widgets
:::

## 参数透传

通过 tableProps 和 tableSlots 可以传递参数给表格组件。

:::demo table/table
:::

## 运行时

如果需要用到运行时，可以给 useTable 传入函数，函数参数为 tableRef 实例，在挂载后可使用。以增加一个刷新按钮为例。

:::demo table/ref
:::

## useTable

```ts
useTable(options: UseTableOptions | UseTableOptionsFn): TableReturn

// 函数参数
type UseTableOptionsFn = (tableRef: Ref<AnTableInstance | null>) => UseTableOptions

// 返回对象
interface TableReturn {
  // 组件名字
  name: string,
  // 表格实例
  tableRef: Ref<AnTableInstance | null>,
  // 刷新表格
  refresh: () => void,
  // 重载表格，重置分页
  reload: () => void,
  // 渲染函数
  render: () => JSX.Element
}
```

## AnTableInstance

| 名称         | 类型                                | 说明                     | 默认值 | 始于 |
| ------------ | ----------------------------------- | ------------------------ | ------ | ---- |
| `loading`    | `boolean`                           | 是否加载数据中           |        | -    |
| `renderData` | `TableData[]`                       | 实际传给 Table 的数据    |        | -    |
| `tableRef`   | `ArcoTableInstance`                 | 原表格组件实例           |        | -    |
| `searchRef`  | `AnFormInstance`                    | 搜索组件实例             |        | -    |
| `createRef`  | `AnFormModalInstance`               | 新增组件实例             |        | -    |
| `modifyRef`  | `AnFormModalInstance`               | 修改组件实例             |        | -    |
| `load`       | `(params: Params) => Promise<void>` | 手动加载数据             |        | -    |
| `refresh`    | `() => Promise<void>`               | 刷新表格数据，不重置分页 |        | -    |
| `reload`     | `() => Promise<void>`               | 刷新表格数据，重置分页   |        | -    |

## UseTableOptions

| 名称         | 类型                                       | 说明                                                                         | 默认值 | 始于 |
| ------------ | ------------------------------------------ | ---------------------------------------------------------------------------- | ------ | ---- |
| `data`       | `TableData[] \| TableDataFn`               | 表格数据源                                                                   |        | -    |
| `columns`    | `UseTableColumn[]`                         | 表格列                                                                       | `[]`   | -    |
| `paging`     | `Pagination & { visible?: () => boolean }` | 表格分页，请查阅 [组件文档](https://arco.design/vue/component/pagination)    | `{}`   | -    |
| `search`     | `UseFormOptions`                           | 查询表单，请查阅 [useForm](/zh-CN/component/form.html)                       |        | -    |
| `create`     | `UseFormModalOptions`                      | 新增表单弹窗                                                                 |        | -    |
| `modify`     | `MofifyFormOptions`                        | 修改表单弹窗                                                                 |        | -    |
| `actions`    | `any[]`                                    | 操作栏元素列表                                                               |        | -    |
| `widgets`    | `any[]`                                    | 部件栏元素列表                                                               |        | -    |
| `tableProps` | `ArcoTableProps`                           | 传递给表格的参数，请查阅 [组件文档](https://arco.design/vue/component/table) |        | -    |
| `tableSlots` | `ArcoTableSlots`                           | 传递给表格的插槽，请查阅 [组件文档](https://arco.design/vue/component/table) |        | -    |

## UseTableColumn

| 名称      | 类型                                   | 说明                       | 默认值 | 始于 |
| --------- | -------------------------------------- | -------------------------- | ------ | ---- |
| `type`    | `'index' \| 'button'`                  | 特殊类型                   |        | -    |
| `visible` | `(column: TableColumnData) => boolean` | 是否可见                   |        | -    |
| `buttons` | `Button[]`                             | 当 `type: 'button'` 时有效 |        | -    |

## TableDataFn

```ts
data(params: Params) => MaybePromise<TableData[] | { data: TableData[], total: number }>

interface Params {
  // 当前页
  page: number,
  // 每页数量
  size: number,
  // 搜索表单数据
  [key: string]: any
}
```
