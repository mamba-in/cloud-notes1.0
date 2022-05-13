import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";const m='{"title":"\u83DC\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u83DC\u5355\u9879\u7C7B\u578B","slug":"\u83DC\u5355\u9879\u7C7B\u578B"},{"level":2,"title":"\u83DC\u5355\u6A21\u5757","slug":"\u83DC\u5355\u6A21\u5757"},{"level":2,"title":"\u65B0\u589E\u83DC\u5355","slug":"\u65B0\u589E\u83DC\u5355"},{"level":2,"title":"\u83DC\u5355\u6392\u5E8F","slug":"\u83DC\u5355\u6392\u5E8F"}],"relativePath":"guide/menu.md","lastUpdated":1652416785007}',p={},o=t(`__VP_STATIC_START__<h1 id="\u83DC\u5355"><a class="header-anchor" href="#\u83DC\u5355" aria-hidden="true">#</a> \u83DC\u5355</h1><p>\u9879\u76EE\u83DC\u5355\u914D\u7F6E\u5B58\u653E\u4E8E <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/menus" target="_blank" rel="noopener noreferrer">src/router/menus</a> \u4E0B\u9762</p><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u83DC\u5355\u5FC5\u987B\u548C\u8DEF\u7531\u5339\u914D\u624D\u80FD\u663E\u793A</p></div><h2 id="\u83DC\u5355\u9879\u7C7B\u578B"><a class="header-anchor" href="#\u83DC\u5355\u9879\u7C7B\u578B" aria-hidden="true">#</a> \u83DC\u5355\u9879\u7C7B\u578B</h2><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Menu</span> <span class="token punctuation">{</span>
  <span class="token comment">//  \u83DC\u5355\u540D</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u83DC\u5355\u56FE\u6807,\u5982\u679C\u6CA1\u6709\uFF0C\u5219\u4F1A\u5C1D\u8BD5\u4F7F\u7528route.meta.icon</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u83DC\u5355\u8DEF\u5F84</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u662F\u5426\u7981\u7528</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5B50\u83DC\u5355</span>
  children<span class="token operator">?</span><span class="token operator">:</span> Menu<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// \u83DC\u5355\u6807\u7B7E\u8BBE\u7F6E</span>
  tag<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E3Atrue\u5219\u663E\u793A\u5C0F\u5706\u70B9</span>
    dot<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5185\u5BB9</span>
    content<span class="token operator">:</span> <span class="token builtin">string</span>&#39;<span class="token punctuation">;</span>
    <span class="token comment">// \u7C7B\u578B</span>
    type<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;primary&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warn&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// \u662F\u5426\u9690\u85CF\u83DC\u5355</span>
  hideMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u83DC\u5355\u6A21\u5757"><a class="header-anchor" href="#\u83DC\u5355\u6A21\u5757" aria-hidden="true">#</a> \u83DC\u5355\u6A21\u5757</h2><p>\u4E00\u4E2A\u83DC\u5355\u6587\u4EF6\u4F1A\u88AB\u5F53\u4F5C\u4E00\u4E2A\u6A21\u5757</p><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>children \u7684 path \u5B57\u6BB5\u4E0D\u9700\u8981\u4EE5<code>/</code>\u5F00\u5934</p></div><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> MenuModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/types&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useI18n&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menu<span class="token operator">:</span> MenuModule <span class="token operator">=</span> <span class="token punctuation">{</span>
  orderNo<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  menu<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.dashboard&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>

    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;analysis&#39;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.analysis&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;workbench&#39;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.workbench&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> menu<span class="token punctuation">;</span>
</code></pre></div><p>\u4EE5\u4E0A\u6A21\u5757\u4F1A\u8F6C\u5316\u6210\u4EE5\u4E0B\u7ED3\u6784</p><div class="language-ts"><pre><code><span class="token punctuation">[</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.dashboard&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;dashboard/analysis&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.analysis&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;dashboard/workbench&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.workbench&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="\u65B0\u589E\u83DC\u5355"><a class="header-anchor" href="#\u65B0\u589E\u83DC\u5355" aria-hidden="true">#</a> \u65B0\u589E\u83DC\u5355</h2><p>\u76F4\u63A5\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/menus/modules" target="_blank" rel="noopener noreferrer">src/router/menus/modules</a> \u5185\u65B0\u589E\u4E00\u4E2A\u6A21\u5757\u6587\u4EF6\u5373\u53EF\u3002</p><p>\u4E0D\u9700\u8981\u624B\u52A8\u5F15\u5165\uFF0C\u653E\u5728<a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/menus/modules" target="_blank" rel="noopener noreferrer">src/router/routes/menus/modules</a> \u5185\u7684\u6587\u4EF6\u4F1A\u81EA\u52A8\u88AB\u52A0\u8F7D\u3002</p><h2 id="\u83DC\u5355\u6392\u5E8F"><a class="header-anchor" href="#\u83DC\u5355\u6392\u5E8F" aria-hidden="true">#</a> \u83DC\u5355\u6392\u5E8F</h2><p>\u5728\u83DC\u5355\u6A21\u5757\u5185\uFF0C\u8BBE\u7F6E <code>orderNo</code> \u53D8\u91CF\uFF0C\u6570\u503C\u8D8A\u5927\uFF0C\u6392\u5E8F\u8D8A\u9760\u540E</p>__VP_STATIC_END__`,16),e=[o];function c(r,l,u,i,k,d){return a(),s("div",null,e)}var b=n(p,[["render",c]]);export{m as __pageData,b as default};
