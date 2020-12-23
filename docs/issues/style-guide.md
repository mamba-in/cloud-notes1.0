# data-middle-platform 风格指南

::: tip Tip
本项目的风格指南主要是参照 `vue` 官方的风格指南。大部分规则也都配置在了`eslint-plugin-vue`之中，当没有遵循规则的时候会报错，详细内容见 eslint 配置。
:::

## Component

所有的`Component`文件都是以大写开头 (PascalCase)，这也是[官方推荐](https://cn.vuejs.org/v2/style-guide/index.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)，除了`index.vue`
例子：

- `@/components/Pagination/index.vue`
- `@/views/example/components/Button.vue`

## JS 文件

所有的`.js`文件都遵循横线连接 (kebab-case)。

例子：

- `@/utils/scroll-to.js`
- `@/utils/get-page-title.js`

## Views

在`views`文件下，代表路由的`.vue`文件都使用横线连接 (kebab-case)，代表路由的`文件夹`也是使用同样的规则。
例子：

- `@/views/error-page/index.vue`
- `@/views/data/open-api.vue`

使用横线连接 (kebab-case)来命名`views`主要是出于以下几个考虑。

- 横线连接 (kebab-case) 也是[官方推荐](https://cn.vuejs.org/v2/style-guide/index.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)的命名规范之一
- `views`下的`.vue`文件代表的是一个路由，所以它需要和`component`进行区分(component 都是大写开头)
- 页面的`url` 也都是横线连接的，比如https://localhost/data/open-api，所以路由对应的view应该要保持统一
- 没有大小写敏感问题
