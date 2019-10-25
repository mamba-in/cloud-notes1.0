# Vue 项目跨域问题

::: tip 说明
这里说的是 `v-cli3.x` 版本构建的项目
:::

v-cli3.x 配置参考里有个`proxy`属性，用来解决代理服务

### devSever.proxy

- Type: `string | object`  
  如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。

```js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
```

上边的`/api`是指接口实际请求的 baseURL

```js
// 例如这是你之前axios调接口用的baseURL
const http = axios.create({
  baseURL: 'https://mamba-in.github.io/cloud-notes/',
  timeout: 30000
})
// 使用代理后baseURL变成`/api`
const http = axios.create({
  baseURL: '/api',
  timeout: 30000
})
```
