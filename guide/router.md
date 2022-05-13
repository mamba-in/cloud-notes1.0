# 路由

项目路由配置存放于 [src/router/routes](https://code.99elink.com/wanglei/mingtian-transportation/-/tree/master/src/router/routes) 下面。 [src/router/routes/modules](https://code.99elink.com/wanglei/mingtian-transportation/-/tree/master/src/router/routes/modules)用于存放路由模块，在该目录下的文件会自动注册。

## 配置

### 模块说明

在 [src/router/routes/modules](https://code.99elink.com/wanglei/mingtian-transportation/-/tree/master/src/router/routes/modules) 内的 `.ts` 文件会被视为一个路由模块。

一个路由模块包含以下结构

```ts
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  meta: {
    hideChildrenInMenu: true,
    title: '关于',
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('/@/views/sys/about/index.vue'),
      meta: {
        title: '关于',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;

```

### 多级路由

::: warning 注意事项

- 整个项目所有路由 `name` 不能重复
- 所有的多级路由最终都会转成二级路由，所以不能内嵌子路由
- 除了 layout 对应的 path 前面需要加 `/`，其余子路由都不要以`/`开头

:::

**示例**

```ts
import type { AppRouteModule } from '/@/router/types';
import { getParentLayout, LAYOUT } from '/@/router/constant';
const permission: AppRouteModule = {
  path: '/level',
  name: 'Level',
  component: LAYOUT,
  redirect: '/level/menu1/menu1-1/menu1-1-1',
  meta: {
    icon: 'ion:menu-outline',
    title: t('routes.demo.level.level'),
  },

  children: [
    {
      path: 'tabs/:id', 
      name: 'TabsParams',
      component: getParentLayout('TabsParams'),
      meta: {
        carryParam: true,
        hidePathForChildren: true, // 本级path将会在子级菜单中合成完整path时会忽略这一层级
      },
      children: [
        path: 'tabs/id1', // 其上级有标记hidePathForChildren，所以本级在生成菜单时最终的path为  /level/tabs/id1
        name: 'TabsParams',
        component: getParentLayout('TabsParams'),
        meta: {
          carryParam: true,
          ignoreRoute: true,  // 本路由仅用于菜单生成，不会在实际的路由表中出现
        },
      ]
    },
    {
      path: 'menu1',
      name: 'Menu1Demo',
      component: getParentLayout('Menu1Demo'),
      meta: {
        title: 'Menu1',
      },
      redirect: '/level/menu1/menu1-1/menu1-1-1',
      children: [
        {
          path: 'menu1-1',
          name: 'Menu11Demo',
          component: getParentLayout('Menu11Demo'),
          meta: {
            title: 'Menu1-1',
          },
          redirect: '/level/menu1/menu1-1/menu1-1-1',
          children: [
            {
              path: 'menu1-1-1',
              name: 'Menu111Demo',
              component: () => import('/@/views/demo/level/Menu111.vue'),
              meta: {
                title: 'Menu111',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default permission;
```

<!-- ### 外链

只需要将 `path` 设置为需要跳转的**HTTP 地址**即可

```ts
{
  path: 'https://mamba-in.github.io/cloud-notes/',
  name: 'DocExternal',
  component: IFrame,
  meta: {
    title: t('routes.demo.iframe.docExternal'),
  },
}
``` -->

## 图标

这里的 `icon` 配置，会同步到 **菜单**（icon 的值可以查看[此处](../components/icon.md)）。

## 新增路由

### 如何新增一个路由模块

1. 在 [src/router/routes/modules](https://code.99elink.com/wanglei/mingtian-transportation/-/tree/master/src/router/routes/modules) 内新增一个模块文件。

示例，新增 test.ts 文件

```ts
import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  meta: {
    hideChildrenInMenu: true,
    title: '关于',
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('/@/views/sys/about/index.vue'),
      meta: {
        title: '关于',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
```

此时路由已添加完成，不需要手动引入，放在[src/router/routes/modules](https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules) 内的文件会自动被加载。

### 验证

访问 **ip:端口/about/index** 出现对应组件内容即代表成功

## 路由刷新

项目中采用的是**重定向**方式

### 实现

```ts
import { useRedo } from '/@/hooks/web/usePage';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const redo = useRedo();
    // 执行刷新
    redo();
    return {};
  },
});
```

### Redirect

[src/views/sys/redirect/index.vue](https://code.99elink.com/wanglei/mingtian-transportation/-/blob/master/src/views/sys/redirect/index.vue)

```ts
import { defineComponent, unref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Redirect',
  setup() {
    const { currentRoute, replace } = useRouter();
    const { params, query } = unref(currentRoute);
    const { path } = params;
    const _path = Array.isArray(path) ? path.join('/') : path;
    replace({
      path: '/' + _path,
      query,
    });
    return {};
  },
});
```

## 页面跳转

页面跳转建议采用项目提供的 `useGo`

### 方式

```ts
import { useGo } from '/@/hooks/web/usePage';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const go = useGo();

    // 执行刷新
    go();
    go(PageEnum.Home);
    return {};
  },
});
```
