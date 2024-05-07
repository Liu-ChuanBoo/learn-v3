/// <reference types="vite/client" />
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const vueComponent: DefineComponent<{}, {}, any>;
    export default vueComponent;
}
// 在 vite + vue3 的项目中这几句类型声明很重要，否则编辑器会提示 ts 错误【TS 提示 ”无法找到 *.vue 声明文件“】