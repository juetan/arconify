# Form 表单

以 hook 形式构建一个表单，内置常用的快捷功能。

## 基础表单

通过 `useForm` 构建一个表单组件，其结果返回一个对象，该对象可以作为组件使用。默认情况下，表单的 model 通过 items 中的 field 字段收集，

:::demo form/basis
:::

## 表单数据

表单的 model 默认从 items 中收集，你可以在 item 中通过 value 定义默认值，或者使用 model 属性定义。model 将会与 items 中收集到的值合并，且 model 优先级更高。

:::demo form/custom
:::

## 字段语法

item 中的 field 字段支持特殊语法，以应对日期控件多个值等情况，目前支持数组结构语法和对象结构语法，submit 中拿到的值就是解析后的值。

:::demo form/field
:::

## 表单项

通过 items 属性定义表单项，每个表单项等价于 Arco Design 中的 FormItem。除 label/field 等部分参数外，其余表单项参数均可通过 itemProps 和 itemSlots 透传。

:::demo form/item
:::

## 表单控件

通过 item 的 setter/setterProps/setterSlots 属性定义输入控件，setterProps 和 setterSlots 会随着 setter 的不同提供对应的类型提示，使用 Vs Code 可获得智能提示。

:::demo form/setter
:::

## 表单规则

通过 item 的 required/rules 属性定义，其中 rules 做了便捷处理，可传入字符串或对象，字符串表示使用预定义规则，对象表示自定义规则：

:::demo form/rule
:::

## 参数透传

通过 formProps 可向原 Form 组件传递参数，除 model 等部分参数外均可透传。备注：原 Form 组件没有插槽。

:::demo form/form
:::

## 提交表单

通过 submit 定义提交处理，若不设置该参数将不显示提交按钮，以下是不设置该参数的实例：

:::demo form/dashed
:::

## 表单引用

useForm 返回一个对象，对象内包含一个 formRef 引用，表单挂载后可以使用：

:::demo form/ref
:::

### useForm 类型

```ts
useTable(options: UseFormOptions | ((formRef: AnFormInstance) => UseFormOptions)): FormReturn

interface FormReturn {
  // 组件名字
  name: string,
  // 表单实例
  formRef: Ref<AnFormInstance | null>,
  // 渲染函数
  render: () => JSX.Element
}
```

### UseFormOptions 属性

| 名称        | 类型                  | 说明                                                                            | 默认值 | 始于 |
| ----------- | --------------------- | ------------------------------------------------------------------------------- | ------ | ---- |
| `items`     | `UseFormItem[]`       | 表单项列表                                                                      |        | -    |
| `submit`    | `Sunbmit`             | 提交表单                                                                        |        | -    |
| `formProps` | `ArcoFormProps`       | 传递给表单的参数，请查阅 [组件文档](https://arco.design/vue/component/form#API) | `{}`   | -    |
| `model`     | `Record<string, any>` | 默认从 items 收集                                                               |        | -    |

### UseFormItem 类型

| 名称          | 类型                                     | 说明                                                                                  | 默认值    | 始于 |
| ------------- | ---------------------------------------- | ------------------------------------------------------------------------------------- | --------- | ---- |
| `label`       | `string`                                 | 表单项标题                                                                            |           | -    |
| `field`       | `string`                                 | 字段名，支持特殊语法: `'[name1, name2]'` 或 `'{ name1, name2 }'`                      |           | -    |
| `value`       | `any`                                    | 默认值                                                                                | undefined | -    |
| `setter`      | `SetterType`                             | 控件类型                                                                              | input     | -    |
| `setterProps` | `{}`                                     | 控件参数，随 setter 变化                                                              |           | -    |
| `setterSlots` | `{}`                                     | 控件插槽，随 setter 变化                                                              |           | -    |
| `options`     | `Options[] \| () => Options[]`           | 控件为 select 等时用到                                                                |           | -    |
| `itemProps`   | `ArcoItemProps`                          | 传递给表单项组件的参数，请查阅 [组件文档](https://arco.design/vue/component/form#API) |           | -    |
| `itemSlots`   | `ArcoItemSlots`                          | 传递给表单项组件的插槽                                                                |           | -    |
| `required`    | `boolean`                                | 是否必填                                                                              |           | -    |
| `rules`       | `Rule[]`                                 | 表单规则                                                                              |           | -    |
| `visiable`    | `(params: AnFormItemFnProps) => boolean` | 是否显示                                                                              |           | -    |
| `disable`     | `(params: AnFormItemFnProps) => boolean` | 是否禁用                                                                              |           | -    |

### SetterType 类型

| 类型         | 说明                                                                                                            | 默认值 | 始于 |
| ------------ | --------------------------------------------------------------------------------------------------------------- | ------ | ---- |
| `input`      | 输入框，参数和插槽类型，请查阅 [组件文档](https://arco.design/vue/component/input)                              |        | -    |
| `password`   | 密码框，参数和插槽类型，请查阅 [组件文档](https://arco.design/vue/component/password)                           |        | -    |
| `textarea`   | 文本框，参数和插槽类型，请查阅 [组件文档](https://arco.design/vue/component/textarea)                           |        | -    |
| `select`     | 下拉框，配合 options 属性 ，参数和插槽类型，请查阅 [组件文档](https://arco.design/vue/component/select)         |        | -    |
| `number`     | 数字框 ，参数和插槽类型，请查阅 [组件文档](https://arco.design/vue/component/input-number)                      |        | -    |
| `treeSelect` | 树级选择框，配合 options 属性，参数和插槽类型，请查阅 [组件文档](https://arco.design/vue/component/tree-select) |        | -    |
| `time`       | 时间选择框，参数和插槽类型，请查阅 [组件文档](https://arco.design/vue/component/time)                           |        | -    |
| `cascader`   | 层叠选择框，参数和插槽类型，请查阅 [组件文档](https://arco.design/vue/component/cascader)                       |        | -    |
| `date`       | 日期选择框，参数和插槽类型，请查阅 [组件文档](https://arco.design/vue/component/date)                           |        | -    |
| `dateRnage`  | 日期范围选择框，参数和插槽类型，请查阅 [组件文档](https://arco.design/vue/component/date-range)                 |        | -    |

### ArcoItemSlots 类型

| 名称      | 类型                                       | 说明     | 默认值 | 始于 |
| --------- | ------------------------------------------ | -------- | ------ | ---- |
| `default` | `(params: AnFormItemFnProps) => Component` | 默认插槽 |        | -    |
| `help`    | `(params: AnFormItemFnProps) => Component` | 帮助信息 |        | -    |
| `extra`   | `(params: AnFormItemFnProps) => Component` | 额外内容 |        | -    |
| `label`   | `(params: AnFormItemFnProps) => Component` | 标签     |        | -    |

### AnFormItemFnProps 类型

| 名称    | 类型                  | 说明       | 默认值 | 始于 |
| ------- | --------------------- | ---------- | ------ | ---- |
| `item`  | `UseFormItem`         | 表单项     |        | -    |
| `items` | `UseFormItem[]`       | 表单项列表 |        | -    |
| `model` | `Record<string, any>` | 表单数据   |        | -    |

### Rule 类型

```ts
type Rule = FieldStringRule | AnFormItemRule

// 字符串类型
type FieldStringRule = 'string' | 'number' | 'password' | 'required' | 'email' | 'url' | 'ip' | 'phone' | 'idcard' | 'alphabet'

// 对象类型
type AnFormItemRule = FieldRule & { disable?: ({ item, items, model }) => boolean }
```
