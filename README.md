## 问题记录

- defineComponent类型无法推导？与npm依赖有关，临时移除该文件。
- import xx from '..../node_modules/xx/vue' 即使指定 external？移除 tsconfig.json 中的 compilerOptions.paths。
- 莫名的 import 'vue'？源码内使用具名导入，如 import x from './a/b' 而不是 联合导出，如 import x from './a'。