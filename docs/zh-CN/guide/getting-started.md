# 快速上手

通过该章节，你将了解到如何快速开始使用 Arconify UI。在开始之前，你需要掌握了 [Vue3](https://v3.cn.vuejs.org/) 的基本使用。

## 要求

为了减少不必要的重复依赖，部分依赖外置，因此需要你的项目内有如下依赖：

- [lodash-es]()：工具库
- [@arco-design/web-vue]()：字条跳动出品的 Vue3 组件库

## 安装

根据你使用的包管理工具，选择以下其中一种命令进行安装：

```sh
# 使用 pnpm
pnpm add arconify -D

# 使用 yarn
yarn add arconify -D

# 使用 npm
npm install arconify -D
```

## 使用

目前只有两个组件且采用 hook 形式调用，因此不用注册组件，只需引入 css 文件即可。在 src/main.ts 文件中，导入 css 文件：

```ts
// src/main.ts
import 'arconify/es/style.css'
```

然后，在你需要使用的地方，按如下方式调用：

```vue
<template>
  <UserForm></UserForm>
</template>

<script lang="ts" setup>
import { useForm } from 'arconify'

const UserForm = useForm({
  items: [
    {
      label: '名字',
      field: 'name',
      setter: 'input'
    },
    {
      label: '性别',
      field: 'gender',
      setter: 'select',
      options: [
        {
          label: '男',
          value: 1,
        },
        {
          label: '女',
          value: 0
        }
      ]
    },
    {
      label: '备注',
      field: 'description',
      setter: 'textarea'
    }
  ],
  submit(model) {
    console.log(model);
    return {
      message: '成功'
    }
  }
})
</script>
```
