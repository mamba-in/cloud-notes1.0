import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";const f='{"title":"\u7EC4\u4EF6\u6CE8\u518C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6309\u9700\u5F15\u5165","slug":"\u6309\u9700\u5F15\u5165"},{"level":3,"title":"tsx \u6587\u4EF6\u6CE8\u518C","slug":"tsx-\u6587\u4EF6\u6CE8\u518C"},{"level":2,"title":"\u5168\u5C40\u6CE8\u518C","slug":"\u5168\u5C40\u6CE8\u518C"},{"level":3,"title":"\u5168\u5C40\u6309\u9700\u6CE8\u518C","slug":"\u5168\u5C40\u6309\u9700\u6CE8\u518C"},{"level":3,"title":"\u5168\u91CF\u6CE8\u518C","slug":"\u5168\u91CF\u6CE8\u518C"}],"relativePath":"guide/component.md","lastUpdated":1652416785004}',p={},o=t(`__VP_STATIC_START__<h1 id="\u7EC4\u4EF6\u6CE8\u518C"><a class="header-anchor" href="#\u7EC4\u4EF6\u6CE8\u518C" aria-hidden="true">#</a> \u7EC4\u4EF6\u6CE8\u518C</h1><h2 id="\u6309\u9700\u5F15\u5165"><a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a> \u6309\u9700\u5F15\u5165</h2><p>\u9879\u76EE\u76EE\u524D\u7684\u7EC4\u4EF6\u6CE8\u518C\u673A\u5236\u662F\u6309\u9700\u6CE8\u518C\uFF0C\u662F\u5728\u9700\u8981\u7528\u5230\u7684\u9875\u9762\u624D\u5F15\u5165\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubMenu</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SubMenu</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menu</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub-menu</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sub-menu</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menu</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Menu</span><span class="token operator">:</span> Menu<span class="token punctuation">,</span>
    <span class="token literal-property property">SubMenu</span><span class="token operator">:</span> Menu<span class="token punctuation">.</span>SubMenu
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="tsx-\u6587\u4EF6\u6CE8\u518C"><a class="header-anchor" href="#tsx-\u6587\u4EF6\u6CE8\u518C" aria-hidden="true">#</a> tsx \u6587\u4EF6\u6CE8\u518C</h3><p><strong>tsx \u6587\u4EF6\u5185\u4E0D\u80FD\u4F7F\u7528\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6</strong></p><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.SubMenu</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.SubMenu</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5168\u5C40\u6CE8\u518C"><a class="header-anchor" href="#\u5168\u5C40\u6CE8\u518C" aria-hidden="true">#</a> \u5168\u5C40\u6CE8\u518C</h2><p>\u5982\u679C\u4E0D\u4E60\u60EF\u6309\u9700\u5F15\u5165\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u8FDB\u884C\u5168\u5C40\u6CE8\u518C\u3002\u5168\u5C40\u6CE8\u518C\u4E5F\u5206\u4E24\u79CD\u65B9\u5F0F</p><h3 id="\u5168\u5C40\u6309\u9700\u6CE8\u518C"><a class="header-anchor" href="#\u5168\u5C40\u6309\u9700\u6CE8\u518C" aria-hidden="true">#</a> \u5168\u5C40\u6309\u9700\u6CE8\u518C</h3><p>\u53EA\u6CE8\u518C\u9700\u8981\u7684\u7EC4\u4EF6</p><p>\u4EE3\u7801\u5730\u5740\uFF1A<a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/registerGlobComp.ts" target="_blank" rel="noopener noreferrer">src/components/registerGlobComp.ts</a></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  <span class="token comment">// Need</span>
  Button <span class="token keyword">as</span> AntButton<span class="token punctuation">,</span>
  Optional
  Select<span class="token punctuation">,</span>
  Alert<span class="token punctuation">,</span>
  Checkbox<span class="token punctuation">,</span>
  DatePicker<span class="token punctuation">,</span>
  Radio<span class="token punctuation">,</span>
  Switch<span class="token punctuation">,</span>
  Card<span class="token punctuation">,</span>
  List<span class="token punctuation">,</span>
  Tabs<span class="token punctuation">,</span>
  Descriptions<span class="token punctuation">,</span>
  Tree<span class="token punctuation">,</span>
  Table<span class="token punctuation">,</span>
  Divider<span class="token punctuation">,</span>
  Modal<span class="token punctuation">,</span>
  Drawer<span class="token punctuation">,</span>
  Dropdown<span class="token punctuation">,</span>
  Tag<span class="token punctuation">,</span>
  Tooltip<span class="token punctuation">,</span>
  Badge<span class="token punctuation">,</span>
  Popover<span class="token punctuation">,</span>
  Upload<span class="token punctuation">,</span>
  Transfer<span class="token punctuation">,</span>
  Steps<span class="token punctuation">,</span>
  PageHeader<span class="token punctuation">,</span>
  Result<span class="token punctuation">,</span>
  Empty<span class="token punctuation">,</span>
  Avatar<span class="token punctuation">,</span>
  Menu<span class="token punctuation">,</span>
  Breadcrumb<span class="token punctuation">,</span>
  Form<span class="token punctuation">,</span>
  Input<span class="token punctuation">,</span>
  Row<span class="token punctuation">,</span>
  Col<span class="token punctuation">,</span>
  Spin<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">registerGlobComp</span><span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Select<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Alert<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Breadcrumb<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Checkbox<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DatePicker<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Radio<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Switch<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Card<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>List<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Descriptions<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Tree<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Table<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Divider<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Modal<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Drawer<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Dropdown<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Tag<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Tooltip<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Badge<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Popover<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Upload<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Transfer<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Steps<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>PageHeader<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Result<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Empty<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Avatar<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Menu<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Tabs<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Form<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Input<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Row<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Col<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Spin<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5168\u91CF\u6CE8\u518C"><a class="header-anchor" href="#\u5168\u91CF\u6CE8\u518C" aria-hidden="true">#</a> \u5168\u91CF\u6CE8\u518C</h3><ul><li>\u5728<code>main.ts</code>\u5185</li></ul><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/dist/antd.less&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u5220\u9664\u4EE5\u4E0B\u4EE3\u7801</li></ul><div class="language-ts"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEV</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;ant-design-vue/dist/antd.less&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,18),c=[o];function e(u,l,i,k,r,d){return a(),s("div",null,c)}var m=n(p,[["render",e]]);export{f as __pageData,m as default};
