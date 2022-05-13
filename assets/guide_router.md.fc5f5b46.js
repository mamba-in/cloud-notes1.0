import{_ as s,f as a,j as t,N as n,e as p}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"\u8DEF\u7531","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":3,"title":"\u6A21\u5757\u8BF4\u660E","slug":"\u6A21\u5757\u8BF4\u660E"},{"level":3,"title":"\u591A\u7EA7\u8DEF\u7531","slug":"\u591A\u7EA7\u8DEF\u7531"},{"level":2,"title":"\u56FE\u6807","slug":"\u56FE\u6807"},{"level":2,"title":"\u65B0\u589E\u8DEF\u7531","slug":"\u65B0\u589E\u8DEF\u7531"},{"level":3,"title":"\u5982\u4F55\u65B0\u589E\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757","slug":"\u5982\u4F55\u65B0\u589E\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757"},{"level":3,"title":"\u9A8C\u8BC1","slug":"\u9A8C\u8BC1"},{"level":2,"title":"\u8DEF\u7531\u5237\u65B0","slug":"\u8DEF\u7531\u5237\u65B0"},{"level":3,"title":"\u5B9E\u73B0","slug":"\u5B9E\u73B0"},{"level":3,"title":"Redirect","slug":"redirect"},{"level":2,"title":"\u9875\u9762\u8DF3\u8F6C","slug":"\u9875\u9762\u8DF3\u8F6C"},{"level":3,"title":"\u65B9\u5F0F","slug":"\u65B9\u5F0F"}],"relativePath":"guide/router.md","lastUpdated":1652416785010}',o={},e=n(`<h1 id="\u8DEF\u7531"><a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531</h1><p>\u9879\u76EE\u8DEF\u7531\u914D\u7F6E\u5B58\u653E\u4E8E <a href="https://code.99elink.com/wanglei/mingtian-transportation/-/tree/master/src/router/routes" target="_blank" rel="noopener noreferrer">src/router/routes</a> \u4E0B\u9762\u3002 <a href="https://code.99elink.com/wanglei/mingtian-transportation/-/tree/master/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a>\u7528\u4E8E\u5B58\u653E\u8DEF\u7531\u6A21\u5757\uFF0C\u5728\u8BE5\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u4F1A\u81EA\u52A8\u6CE8\u518C\u3002</p><h2 id="\u914D\u7F6E"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u6A21\u5757\u8BF4\u660E"><a class="header-anchor" href="#\u6A21\u5757\u8BF4\u660E" aria-hidden="true">#</a> \u6A21\u5757\u8BF4\u660E</h3><p>\u5728 <a href="https://code.99elink.com/wanglei/mingtian-transportation/-/tree/master/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a> \u5185\u7684 <code>.ts</code> \u6587\u4EF6\u4F1A\u88AB\u89C6\u4E3A\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757\u3002</p><p>\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757\u5305\u542B\u4EE5\u4E0B\u7ED3\u6784</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppRouteModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/types&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">LAYOUT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/constant&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dashboard<span class="token operator">:</span> AppRouteModule <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> <span class="token constant">LAYOUT</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/about/index&#39;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    hideChildrenInMenu<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&#39;\u5173\u4E8E&#39;</span><span class="token punctuation">,</span>
    orderNo<span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;AboutPage&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/sys/about/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;\u5173\u4E8E&#39;</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;simple-icons:about-dot-me&#39;</span><span class="token punctuation">,</span>
        hideMenu<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> dashboard<span class="token punctuation">;</span>

</code></pre></div><h3 id="\u591A\u7EA7\u8DEF\u7531"><a class="header-anchor" href="#\u591A\u7EA7\u8DEF\u7531" aria-hidden="true">#</a> \u591A\u7EA7\u8DEF\u7531</h3><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F\u4E8B\u9879</p><ul><li>\u6574\u4E2A\u9879\u76EE\u6240\u6709\u8DEF\u7531 <code>name</code> \u4E0D\u80FD\u91CD\u590D</li><li>\u6240\u6709\u7684\u591A\u7EA7\u8DEF\u7531\u6700\u7EC8\u90FD\u4F1A\u8F6C\u6210\u4E8C\u7EA7\u8DEF\u7531\uFF0C\u6240\u4EE5\u4E0D\u80FD\u5185\u5D4C\u5B50\u8DEF\u7531</li><li>\u9664\u4E86 layout \u5BF9\u5E94\u7684 path \u524D\u9762\u9700\u8981\u52A0 <code>/</code>\uFF0C\u5176\u4F59\u5B50\u8DEF\u7531\u90FD\u4E0D\u8981\u4EE5<code>/</code>\u5F00\u5934</li></ul></div><p><strong>\u793A\u4F8B</strong></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppRouteModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/types&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getParentLayout<span class="token punctuation">,</span> <span class="token constant">LAYOUT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/constant&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> permission<span class="token operator">:</span> AppRouteModule <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/level&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Level&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> <span class="token constant">LAYOUT</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;ion:menu-outline&#39;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.demo.level.level&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;tabs/:id&#39;</span><span class="token punctuation">,</span> 
      name<span class="token operator">:</span> <span class="token string">&#39;TabsParams&#39;</span><span class="token punctuation">,</span>
      component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token string">&#39;TabsParams&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        carryParam<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        hidePathForChildren<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u672C\u7EA7path\u5C06\u4F1A\u5728\u5B50\u7EA7\u83DC\u5355\u4E2D\u5408\u6210\u5B8C\u6574path\u65F6\u4F1A\u5FFD\u7565\u8FD9\u4E00\u5C42\u7EA7</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token punctuation">[</span>
        path<span class="token operator">:</span> <span class="token string">&#39;tabs/id1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5176\u4E0A\u7EA7\u6709\u6807\u8BB0hidePathForChildren\uFF0C\u6240\u4EE5\u672C\u7EA7\u5728\u751F\u6210\u83DC\u5355\u65F6\u6700\u7EC8\u7684path\u4E3A  /level/tabs/id1</span>
        name<span class="token operator">:</span> <span class="token string">&#39;TabsParams&#39;</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token string">&#39;TabsParams&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          carryParam<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          ignoreRoute<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u672C\u8DEF\u7531\u4EC5\u7528\u4E8E\u83DC\u5355\u751F\u6210\uFF0C\u4E0D\u4F1A\u5728\u5B9E\u9645\u7684\u8DEF\u7531\u8868\u4E2D\u51FA\u73B0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;menu1&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Menu1Demo&#39;</span><span class="token punctuation">,</span>
      component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token string">&#39;Menu1Demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;Menu1&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;menu1-1&#39;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&#39;Menu11Demo&#39;</span><span class="token punctuation">,</span>
          component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token string">&#39;Menu11Demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&#39;Menu1-1&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">&#39;menu1-1-1&#39;</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">&#39;Menu111Demo&#39;</span><span class="token punctuation">,</span>
              <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/demo/level/Menu111.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;Menu111&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> permission<span class="token punctuation">;</span>
</code></pre></div>`,11),c=n(`<h2 id="\u56FE\u6807"><a class="header-anchor" href="#\u56FE\u6807" aria-hidden="true">#</a> \u56FE\u6807</h2><p>\u8FD9\u91CC\u7684 <code>icon</code> \u914D\u7F6E\uFF0C\u4F1A\u540C\u6B65\u5230 <strong>\u83DC\u5355</strong>\uFF08icon \u7684\u503C\u53EF\u4EE5\u67E5\u770B<a href="./../components/icon.html">\u6B64\u5904</a>\uFF09\u3002</p><h2 id="\u65B0\u589E\u8DEF\u7531"><a class="header-anchor" href="#\u65B0\u589E\u8DEF\u7531" aria-hidden="true">#</a> \u65B0\u589E\u8DEF\u7531</h2><h3 id="\u5982\u4F55\u65B0\u589E\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757"><a class="header-anchor" href="#\u5982\u4F55\u65B0\u589E\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757" aria-hidden="true">#</a> \u5982\u4F55\u65B0\u589E\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757</h3><ol><li>\u5728 <a href="https://code.99elink.com/wanglei/mingtian-transportation/-/tree/master/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a> \u5185\u65B0\u589E\u4E00\u4E2A\u6A21\u5757\u6587\u4EF6\u3002</li></ol><p>\u793A\u4F8B\uFF0C\u65B0\u589E test.ts \u6587\u4EF6</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppRouteModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/types&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">LAYOUT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/constant&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dashboard<span class="token operator">:</span> AppRouteModule <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> <span class="token constant">LAYOUT</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/about/index&#39;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    hideChildrenInMenu<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&#39;\u5173\u4E8E&#39;</span><span class="token punctuation">,</span>
    orderNo<span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;AboutPage&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/sys/about/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;\u5173\u4E8E&#39;</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;simple-icons:about-dot-me&#39;</span><span class="token punctuation">,</span>
        hideMenu<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> dashboard<span class="token punctuation">;</span>
</code></pre></div><p>\u6B64\u65F6\u8DEF\u7531\u5DF2\u6DFB\u52A0\u5B8C\u6210\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u5F15\u5165\uFF0C\u653E\u5728<a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a> \u5185\u7684\u6587\u4EF6\u4F1A\u81EA\u52A8\u88AB\u52A0\u8F7D\u3002</p><h3 id="\u9A8C\u8BC1"><a class="header-anchor" href="#\u9A8C\u8BC1" aria-hidden="true">#</a> \u9A8C\u8BC1</h3><p>\u8BBF\u95EE <strong>ip:\u7AEF\u53E3/about/index</strong> \u51FA\u73B0\u5BF9\u5E94\u7EC4\u4EF6\u5185\u5BB9\u5373\u4EE3\u8868\u6210\u529F</p><h2 id="\u8DEF\u7531\u5237\u65B0"><a class="header-anchor" href="#\u8DEF\u7531\u5237\u65B0" aria-hidden="true">#</a> \u8DEF\u7531\u5237\u65B0</h2><p>\u9879\u76EE\u4E2D\u91C7\u7528\u7684\u662F<strong>\u91CD\u5B9A\u5411</strong>\u65B9\u5F0F</p><h3 id="\u5B9E\u73B0"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRedo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/usePage&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> redo <span class="token operator">=</span> <span class="token function">useRedo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6267\u884C\u5237\u65B0</span>
    <span class="token function">redo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="redirect"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> Redirect</h3><p><a href="https://code.99elink.com/wanglei/mingtian-transportation/-/blob/master/src/views/sys/redirect/index.vue" target="_blank" rel="noopener noreferrer">src/views/sys/redirect/index.vue</a></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Redirect&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> currentRoute<span class="token punctuation">,</span> replace <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> params<span class="token punctuation">,</span> query <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>currentRoute<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> params<span class="token punctuation">;</span>
    <span class="token keyword">const</span> _path <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">?</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> path<span class="token punctuation">;</span>
    <span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> _path<span class="token punctuation">,</span>
      query<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u9875\u9762\u8DF3\u8F6C"><a class="header-anchor" href="#\u9875\u9762\u8DF3\u8F6C" aria-hidden="true">#</a> \u9875\u9762\u8DF3\u8F6C</h2><p>\u9875\u9762\u8DF3\u8F6C\u5EFA\u8BAE\u91C7\u7528\u9879\u76EE\u63D0\u4F9B\u7684 <code>useGo</code></p><h3 id="\u65B9\u5F0F"><a class="header-anchor" href="#\u65B9\u5F0F" aria-hidden="true">#</a> \u65B9\u5F0F</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useGo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/usePage&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> go <span class="token operator">=</span> <span class="token function">useGo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u6267\u884C\u5237\u65B0</span>
    <span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">go</span><span class="token punctuation">(</span>PageEnum<span class="token punctuation">.</span>Home<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,21);function u(l,r,k,i,d,m){return p(),a("div",null,[e,t(` ### \u5916\u94FE

\u53EA\u9700\u8981\u5C06 \`path\` \u8BBE\u7F6E\u4E3A\u9700\u8981\u8DF3\u8F6C\u7684**HTTP \u5730\u5740**\u5373\u53EF

\`\`\`ts
{
  path: 'https://mamba-in.github.io/cloud-notes/',
  name: 'DocExternal',
  component: IFrame,
  meta: {
    title: t('routes.demo.iframe.docExternal'),
  },
}
\`\`\` `),c])}var f=s(o,[["render",u]]);export{g as __pageData,f as default};
