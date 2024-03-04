# Form 表单

以 hook 形式构建一个表单，内置常用的快捷功能。

## 基础表单

通过 `useForm` 构建一个表单组件。默认情况下，表单的 model 通过 items 中的 field 字段收集，

:::demo form/basis
:::

## 表单数据

表单的 model 默认从 items 中收集，你可以在 item 中通过 value 定义默认值，或者使用 model 属性定义。model 将会与 items 中收集到的值合并，且 model 优先级更高。

:::demo form/custom
:::

## 表单项

通过 items 定义表单项，表单项的参数如下

## 提交表单

通过 submit 定义提交处理，若不设置该参数将不显示提交按钮，以下是不设置该参数的实例：

:::demo form/dashed
:::

