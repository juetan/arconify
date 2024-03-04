基于 Arco Design 的 Vue3 组件库，一个 hook 完成表单/表格增删改查等日常工作。

## 功能特点

- 一个 hook 即可定义完常规逻辑
- 完善的 Typescript 类型支持，
- 完善的文档注释，配合 VsCode 智能提示快速上手
-

## 快速上手

1. 请确保项目内安装有以下依赖：

```
- vue
- @arco-design/web-vue
- lodash-es
```

2. 使用以下命令安装依赖：

```bash
pnpm i arconify -D
```

3. 在组件中使用

```vue
<template>
  <UserTable></UserTable>
</template>

<script lang="ts" setup>
import { useAnTable } from 'arconify'
import 'arconify/es/style.css'

const UserTable = useAnTable({
  data: (params) => {
    return {
      data: [],
      total: 100
    }
  },
  columns: [
    {
      title: '名字',
      dataIndex: 'name'
    }
  ],
})
</script>
```

## 问题记录

- defineComponent类型无法推导？与npm依赖有关，临时移除该文件。
- import xx from '..../node_modules/xx/vue' 即使指定 external？移除 tsconfig.json 中的 compilerOptions.paths。
- 莫名的 import 'vue'？源码内使用具名导入，如 import x from './a/b' 而不是 联合导出，如 import x from './a'。