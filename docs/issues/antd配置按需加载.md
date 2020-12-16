# ant-design 按需加载配置

- 使用[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

```bash
npm install babel-plugin-import --save-dev
```

- 配置 babel

```js
{
  'plugins': [
    'dynamic-import-node',
    ['import', { 'libraryName': 'ant-design-vue', 'libraryDirectory': 'es', 'style': true }] // `style: true` 会加载 less 文件
  ]
}
```

:::warning warning
注意 webpack 中配置 less-loader，否则会出现以下报错
:::

```markdown
Failed to compile.

./node_modules/ant-design-vue/es/button/style/index.less (./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-3-1!./node_modules/postcss-loader/src??ref--10-oneOf-3-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-3-3!./node_modules/ant-design-vue/es/button/style/index.less)
Module build failed (from ./node_modules/less-loader/dist/cjs.js):

// https://github.com/ant-design/ant-motion/issues/44
.bezierEasingMixin();
^
Inline JavaScript is not enabled. Is it set in your options?
in /Users/wanglei/work/TEST/vue-admin-template/vue-admin-template/node_modules/ant-design-vue/es/style/color/bezierEasing.less (line 110, column 0)
```

## 解决方案

在 webpack 配置中添加 less 相关配置，开启`javascriptEnabled: true`

```js
css: {
  loaderOptions: {
    less: {
      // DO NOT REMOVE THIS LINE
      javascriptEnabled: true
    }
  }
}
```
