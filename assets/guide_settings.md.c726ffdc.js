import{_ as n,f as s,e as a,N as p}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"\u9879\u76EE\u914D\u7F6E\u9879","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u73AF\u5883\u53D8\u91CF\u914D\u7F6E","slug":"\u73AF\u5883\u53D8\u91CF\u914D\u7F6E"},{"level":3,"title":"\u914D\u7F6E\u9879\u8BF4\u660E","slug":"\u914D\u7F6E\u9879\u8BF4\u660E"},{"level":3,"title":".env","slug":"env"},{"level":3,"title":".env.development","slug":"env-development"},{"level":3,"title":".env.production","slug":"env-production"},{"level":2,"title":"\u751F\u4EA7\u73AF\u5883\u52A8\u6001\u914D\u7F6E","slug":"\u751F\u4EA7\u73AF\u5883\u52A8\u6001\u914D\u7F6E"},{"level":3,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"},{"level":3,"title":"\u4F5C\u7528","slug":"\u4F5C\u7528"},{"level":3,"title":"\u5982\u4F55\u83B7\u53D6\u5168\u5C40\u53D8\u91CF","slug":"\u5982\u4F55\u83B7\u53D6\u5168\u5C40\u53D8\u91CF"},{"level":3,"title":"\u5982\u4F55\u65B0\u589E(\u65B0\u589E\u4E00\u4E2A\u53EF\u52A8\u6001\u4FEE\u6539\u7684\u914D\u7F6E\u9879)","slug":"\u5982\u4F55\u65B0\u589E-\u65B0\u589E\u4E00\u4E2A\u53EF\u52A8\u6001\u4FEE\u6539\u7684\u914D\u7F6E\u9879"},{"level":2,"title":"\u9879\u76EE\u914D\u7F6E","slug":"\u9879\u76EE\u914D\u7F6E"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84","slug":"\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84"},{"level":3,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E-1"},{"level":2,"title":"\u7F13\u5B58\u914D\u7F6E","slug":"\u7F13\u5B58\u914D\u7F6E"},{"level":2,"title":"\u591A\u8BED\u8A00\u914D\u7F6E","slug":"\u591A\u8BED\u8A00\u914D\u7F6E"},{"level":2,"title":"\u4E3B\u9898\u8272\u914D\u7F6E","slug":"\u4E3B\u9898\u8272\u914D\u7F6E"},{"level":2,"title":"\u6837\u5F0F\u914D\u7F6E","slug":"\u6837\u5F0F\u914D\u7F6E"},{"level":3,"title":"css \u524D\u7F00\u8BBE\u7F6E","slug":"css-\u524D\u7F00\u8BBE\u7F6E"},{"level":3,"title":"\u524D\u7F00\u4F7F\u7528","slug":"\u524D\u7F00\u4F7F\u7528"},{"level":2,"title":"\u989C\u8272\u914D\u7F6E","slug":"\u989C\u8272\u914D\u7F6E"},{"level":2,"title":"\u7EC4\u4EF6\u9ED8\u8BA4\u53C2\u6570\u914D\u7F6E","slug":"\u7EC4\u4EF6\u9ED8\u8BA4\u53C2\u6570\u914D\u7F6E"}],"relativePath":"guide/settings.md","lastUpdated":1652416785011}',t={},o=p(`<h1 id="\u9879\u76EE\u914D\u7F6E\u9879"><a class="header-anchor" href="#\u9879\u76EE\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u9879\u76EE\u914D\u7F6E\u9879</h1><p>\u7528\u4E8E\u4FEE\u6539\u9879\u76EE\u7684\u914D\u8272\u3001\u5E03\u5C40\u3001\u7F13\u5B58\u3001\u591A\u8BED\u8A00\u3001\u7EC4\u4EF6\u9ED8\u8BA4\u914D\u7F6E</p><h2 id="\u73AF\u5883\u53D8\u91CF\u914D\u7F6E"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF\u914D\u7F6E" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF\u914D\u7F6E</h2><p>\u9879\u76EE\u7684\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\u4F4D\u4E8E\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 <a href="https://github.com/vbenjs/vue-vben-admin/blob/main/.env" target="_blank" rel="noopener noreferrer">.env</a>\u3001<a href="https://github.com/vbenjs/vue-vben-admin/blob/main/.env.development" target="_blank" rel="noopener noreferrer">.env.development</a>\u3001<a href="https://github.com/vbenjs/vue-vben-admin/blob/main/.env.production" target="_blank" rel="noopener noreferrer">.env.production</a></p><p>\u5177\u4F53\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/vitejs/vite#modes-and-environment-variables" target="_blank" rel="noopener noreferrer">Vite \u6587\u6863</a></p><div class="language-bash"><pre><code>.env                <span class="token comment"># \u5728\u6240\u6709\u7684\u73AF\u5883\u4E2D\u88AB\u8F7D\u5165</span>
.env.local          <span class="token comment"># \u5728\u6240\u6709\u7684\u73AF\u5883\u4E2D\u88AB\u8F7D\u5165\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>         <span class="token comment"># \u53EA\u5728\u6307\u5B9A\u7684\u6A21\u5F0F\u4E2D\u88AB\u8F7D\u5165</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>.local   <span class="token comment"># \u53EA\u5728\u6307\u5B9A\u7684\u6A21\u5F0F\u4E2D\u88AB\u8F7D\u5165\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565</span>

</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u9192</p><ul><li>\u53EA\u6709\u4EE5 <code>VITE_ </code> \u5F00\u5934\u7684\u53D8\u91CF\u4F1A\u88AB\u5D4C\u5165\u5230\u5BA2\u6237\u7AEF\u4FA7\u7684\u5305\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u9879\u76EE\u4EE3\u7801\u4E2D\u8FD9\u6837\u8BBF\u95EE\u5B83\u4EEC\uFF1A</li></ul><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_PROT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4EE5 <code>VITE_GLOB_*</code> \u5F00\u5934\u7684\u7684\u53D8\u91CF\uFF0C\u5728\u6253\u5305\u7684\u65F6\u5019\uFF0C\u4F1A\u88AB\u52A0\u5165<a href="#%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E5%8A%A8%E6%80%81%E9%85%8D%E7%BD%AE">_app.config.js</a>\u914D\u7F6E\u6587\u4EF6\u5F53\u4E2D.</li></ul></div><h3 id="\u914D\u7F6E\u9879\u8BF4\u660E"><a class="header-anchor" href="#\u914D\u7F6E\u9879\u8BF4\u660E" aria-hidden="true">#</a> \u914D\u7F6E\u9879\u8BF4\u660E</h3><h3 id="env"><a class="header-anchor" href="#env" aria-hidden="true">#</a> .env</h3><p>\u6240\u6709\u73AF\u5883\u9002\u7528</p><div class="language-bash"><pre><code><span class="token comment"># \u7AEF\u53E3\u53F7</span>
<span class="token assign-left variable">VITE_PORT</span><span class="token operator">=</span><span class="token number">3100</span>
<span class="token comment"># \u7F51\u7AD9\u6807\u9898</span>
<span class="token assign-left variable">VITE_GLOB_APP_TITLE</span><span class="token operator">=</span>vben admin
<span class="token comment"># \u7B80\u79F0\uFF0C\u7528\u4E8E\u914D\u7F6E\u6587\u4EF6\u540D\u5B57 \u4E0D\u8981\u51FA\u73B0\u7A7A\u683C\u3001\u6570\u5B57\u5F00\u5934\u7B49\u7279\u6B8A\u5B57\u7B26</span>
<span class="token assign-left variable">VITE_GLOB_APP_SHORT_NAME</span><span class="token operator">=</span>vben_admin
</code></pre></div><h3 id="env-development"><a class="header-anchor" href="#env-development" aria-hidden="true">#</a> .env.development</h3><p>\u5F00\u53D1\u73AF\u5883\u9002\u7528</p><div class="language-bash"><pre><code><span class="token comment"># \u662F\u5426\u5F00\u542Fmock\u6570\u636E\uFF0C\u5173\u95ED\u65F6\u9700\u8981\u81EA\u884C\u5BF9\u63A5\u540E\u53F0\u63A5\u53E3</span>
<span class="token assign-left variable">VITE_USE_MOCK</span><span class="token operator">=</span>true
<span class="token comment"># \u8D44\u6E90\u516C\u5171\u8DEF\u5F84,\u9700\u8981\u4EE5 /\u5F00\u5934\u548C\u7ED3\u5C3E</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
<span class="token comment"># \u662F\u5426\u5220\u9664Console.log</span>
<span class="token assign-left variable">VITE_DROP_CONSOLE</span><span class="token operator">=</span>false
<span class="token comment"># \u672C\u5730\u5F00\u53D1\u4EE3\u7406\uFF0C\u53EF\u4EE5\u89E3\u51B3\u8DE8\u57DF\u53CA\u591A\u5730\u5740\u4EE3\u7406</span>
<span class="token comment"># \u5982\u679C\u63A5\u53E3\u5730\u5740\u5339\u914D\u5230\uFF0C\u5219\u4F1A\u8F6C\u53D1\u5230http://localhost:3000\uFF0C\u9632\u6B62\u672C\u5730\u51FA\u73B0\u8DE8\u57DF\u95EE\u9898</span>
<span class="token comment"># \u53EF\u4EE5\u6709\u591A\u4E2A\uFF0C\u6CE8\u610F\u591A\u4E2A\u4E0D\u80FD\u6362\u884C\uFF0C\u5426\u5219\u4EE3\u7406\u5C06\u4F1A\u5931\u6548</span>
<span class="token assign-left variable">VITE_PROXY</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;/api&quot;</span>,<span class="token string">&quot;http://localhost:3000&quot;</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token string">&quot;api1&quot;</span>,<span class="token string">&quot;http://localhost:3001&quot;</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token string">&quot;/upload&quot;</span>,<span class="token string">&quot;http://localhost:3001/upload&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment"># \u63A5\u53E3\u5730\u5740</span>
<span class="token comment"># \u5982\u679C\u6CA1\u6709\u8DE8\u57DF\u95EE\u9898\uFF0C\u76F4\u63A5\u5728\u8FD9\u91CC\u914D\u7F6E\u5373\u53EF</span>
<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>/api
<span class="token comment"># \u6587\u4EF6\u4E0A\u4F20\u63A5\u53E3  \u53EF\u9009</span>
<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload
<span class="token comment"># \u63A5\u53E3\u5730\u5740\u524D\u7F00\uFF0C\u6709\u4E9B\u7CFB\u7EDF\u6240\u6709\u63A5\u53E3\u5730\u5740\u90FD\u6709\u524D\u7F00\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u7EDF\u4E00\u52A0\uFF0C\u65B9\u4FBF\u5207\u6362</span>
<span class="token assign-left variable">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">=</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u8FD9\u91CC\u914D\u7F6E\u7684 <code>VITE_PROXY</code> \u4EE5\u53CA <code>VITE_GLOB_API_URL</code>, /api \u9700\u8981\u662F\u552F\u4E00\u7684\uFF0C\u4E0D\u8981\u548C\u63A5\u53E3\u6709\u7684\u540D\u5B57\u51B2\u7A81</p><p>\u5982\u679C\u4F60\u7684\u63A5\u53E3\u662F <code>http://localhost:3000/api</code> \u4E4B\u7C7B\u7684\uFF0C\u8BF7\u8003\u8651\u5C06 <code>VITE_GLOB_API_URL=/xxxx</code> \u6362\u6210\u522B\u7684\u540D\u5B57</p></div><h3 id="env-production"><a class="header-anchor" href="#env-production" aria-hidden="true">#</a> .env.production</h3><p>\u751F\u4EA7\u73AF\u5883\u9002\u7528</p><div class="language-bash"><pre><code><span class="token comment"># \u662F\u5426\u5F00\u542Fmock</span>
<span class="token assign-left variable">VITE_USE_MOCK</span><span class="token operator">=</span>true
<span class="token comment"># \u63A5\u53E3\u5730\u5740 \u53EF\u4EE5\u7531nginx\u505A\u8F6C\u53D1\u6216\u8005\u76F4\u63A5\u5199\u5B9E\u9645\u5730\u5740</span>
<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>/api
<span class="token comment"># \u6587\u4EF6\u4E0A\u4F20\u5730\u5740 \u53EF\u4EE5\u7531nginx\u505A\u8F6C\u53D1\u6216\u8005\u76F4\u63A5\u5199\u5B9E\u9645\u5730\u5740</span>
<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload
<span class="token comment"># \u63A5\u53E3\u5730\u5740\u524D\u7F00\uFF0C\u6709\u4E9B\u7CFB\u7EDF\u6240\u6709\u63A5\u53E3\u5730\u5740\u90FD\u6709\u524D\u7F00\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u7EDF\u4E00\u52A0\uFF0C\u65B9\u4FBF\u5207\u6362</span>
<span class="token assign-left variable">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">=</span>
<span class="token comment"># \u662F\u5426\u5220\u9664Console.log</span>
<span class="token assign-left variable">VITE_DROP_CONSOLE</span><span class="token operator">=</span>true
<span class="token comment"># \u8D44\u6E90\u516C\u5171\u8DEF\u5F84,\u9700\u8981\u4EE5 / \u5F00\u5934\u548C\u7ED3\u5C3E</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
<span class="token comment"># \u6253\u5305\u662F\u5426\u8F93\u51FAgz\uFF5Cbr\u6587\u4EF6</span>
<span class="token comment"># \u53EF\u9009: gzip | brotli | none</span>
<span class="token comment"># \u4E5F\u53EF\u4EE5\u6709\u591A\u4E2A, \u4F8B\u5982 \u2018gzip\u2019|&#39;brotli&#39;,\u8FD9\u6837\u4F1A\u540C\u65F6\u751F\u6210 .gz\u548C.br\u6587\u4EF6</span>
VITE_BUILD_COMPRESS <span class="token operator">=</span> <span class="token string">&#39;gzip&#39;</span>
<span class="token comment"># \u6253\u5305\u662F\u5426\u538B\u7F29\u56FE\u7247</span>
VITE_USE_IMAGEMIN <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token comment"># \u6253\u5305\u662F\u5426\u5F00\u542Fpwa\u529F\u80FD</span>
VITE_USE_PWA <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token comment"># \u662F\u5426\u517C\u5BB9\u65E7\u7248\u6D4F\u89C8\u5668\u3002\u5F00\u542F\u540E\u6253\u5305\u65F6\u95F4\u4F1A\u6162\u4E00\u500D\u5DE6\u53F3\u3002\u4F1A\u591A\u6253\u51FA\u65E7\u6D4F\u89C8\u5668\u517C\u5BB9\u5305,\u4E14\u4F1A\u6839\u636E\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u81EA\u52A8\u4F7F\u7528\u76F8\u5E94\u7684\u7248\u672C</span>
VITE_LEGACY <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre></div><h2 id="\u751F\u4EA7\u73AF\u5883\u52A8\u6001\u914D\u7F6E"><a class="header-anchor" href="#\u751F\u4EA7\u73AF\u5883\u52A8\u6001\u914D\u7F6E" aria-hidden="true">#</a> \u751F\u4EA7\u73AF\u5883\u52A8\u6001\u914D\u7F6E</h2><h3 id="\u8BF4\u660E"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h3><p>\u5F53\u6267\u884C<code>yarn build</code>\u6784\u5EFA\u9879\u76EE\u4E4B\u540E\uFF0C\u4F1A\u81EA\u52A8\u751F\u6210 <code>_app.config.js</code> \u6587\u4EF6\u5E76\u63D2\u5165 <code>index.html</code>\u3002</p><p><strong>\u6CE8\u610F: \u5F00\u53D1\u73AF\u5883\u4E0D\u4F1A\u751F\u6210</strong></p><div class="language-js"><pre><code><span class="token comment">// _app.config.js</span>
<span class="token comment">// \u53D8\u91CF\u540D\u547D\u540D\u89C4\u5219  __PRODUCTION__xxx_CONF__   xxx\uFF1A\u4E3A.env\u914D\u7F6E\u7684VITE_GLOB_APP_SHORT_NAME</span>
window<span class="token punctuation">.</span>__PRODUCTION__VUE_VBEN_ADMIN__CONF__ <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token operator">:</span> <span class="token string">&#39;vben admin&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token operator">:</span> <span class="token string">&#39;vue_vben_admin&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL</span><span class="token operator">:</span> <span class="token string">&#39;/app&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_UPLOAD_URL</span><span class="token operator">:</span> <span class="token string">&#39;/upload&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u4F5C\u7528"><a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a> \u4F5C\u7528</h3><p><code>_app.config.js</code> \u7528\u4E8E\u9879\u76EE\u5728\u6253\u5305\u540E\uFF0C\u9700\u8981\u52A8\u6001\u4FEE\u6539\u914D\u7F6E\u7684\u9700\u6C42\uFF0C\u5982\u63A5\u53E3\u5730\u5740\u3002\u4E0D\u7528\u91CD\u65B0\u8FDB\u884C\u6253\u5305\uFF0C\u53EF\u5728\u6253\u5305\u540E\u4FEE\u6539 <code>/dist/_app.config.js</code> \u5185\u7684\u53D8\u91CF\uFF0C\u5237\u65B0\u5373\u53EF\u66F4\u65B0\u4EE3\u7801\u5185\u7684\u5C40\u90E8\u53D8\u91CF\u3002</p><h3 id="\u5982\u4F55\u83B7\u53D6\u5168\u5C40\u53D8\u91CF"><a class="header-anchor" href="#\u5982\u4F55\u83B7\u53D6\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u5982\u4F55\u83B7\u53D6\u5168\u5C40\u53D8\u91CF</h3><p>\u60F3\u8981\u83B7\u53D6 <code>_app.config.js</code> \u5185\u7684\u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/hooks/setting/index.ts" target="_blank" rel="noopener noreferrer">src/hooks/setting/index.ts</a> \u63D0\u4F9B\u7684\u51FD\u6570\u6765\u8FDB\u884C\u83B7\u53D6</p><h3 id="\u5982\u4F55\u65B0\u589E-\u65B0\u589E\u4E00\u4E2A\u53EF\u52A8\u6001\u4FEE\u6539\u7684\u914D\u7F6E\u9879"><a class="header-anchor" href="#\u5982\u4F55\u65B0\u589E-\u65B0\u589E\u4E00\u4E2A\u53EF\u52A8\u6001\u4FEE\u6539\u7684\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u5982\u4F55\u65B0\u589E(\u65B0\u589E\u4E00\u4E2A\u53EF\u52A8\u6001\u4FEE\u6539\u7684\u914D\u7F6E\u9879)</h3><ol><li><p>\u9996\u5148\u5728 <code>.env</code> \u6216\u8005\u5BF9\u5E94\u7684\u5F00\u53D1\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u5185\uFF0C\u65B0\u589E\u9700\u8981\u53EF\u52A8\u6001\u914D\u7F6E\u7684\u53D8\u91CF\uFF0C\u9700\u8981\u4EE5 <code>VITE_GLOB_</code>\u5F00\u5934</p></li><li><p><code>VITE_GLOB_</code> \u5F00\u5934\u7684\u53D8\u91CF\u4F1A\u81EA\u52A8\u52A0\u5165\u73AF\u5883\u53D8\u91CF\uFF0C\u901A\u8FC7\u5728 <code>src/types/config.d.ts</code> \u5185\u4FEE\u6539 <code>GlobEnvConfig</code> \u548C <code>GlobConfig</code> \u4E24\u4E2A\u73AF\u5883\u53D8\u91CF\u7684\u503C\u6765\u5B9A\u4E49\u65B0\u6DFB\u52A0\u7684\u7C7B\u578B</p></li><li><p><a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/hooks/setting/index.ts" target="_blank" rel="noopener noreferrer">useGlobSetting</a> \u51FD\u6570\u4E2D\u6DFB\u52A0\u521A\u65B0\u589E\u7684\u8FD4\u56DE\u503C\u5373\u53EF</p></li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_UPLOAD_URL</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token constant">ENV</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useGlobSetting <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">SettingWrap</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Take global configuration</span>
  <span class="token keyword">const</span> <span class="token literal-property property">glob</span><span class="token operator">:</span> Readonly<span class="token operator">&lt;</span>GlobConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">apiUrl</span><span class="token operator">:</span> <span class="token constant">VITE_GLOB_API_URL</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shortName</span><span class="token operator">:</span> <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token punctuation">,</span>
    <span class="token literal-property property">urlPrefix</span><span class="token operator">:</span> <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token punctuation">,</span>
    <span class="token literal-property property">uploadUrl</span><span class="token operator">:</span> <span class="token constant">VITE_GLOB_UPLOAD_URL</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> glob <span class="token keyword">as</span> Readonly<span class="token operator">&lt;</span>GlobConfig<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="\u9879\u76EE\u914D\u7F6E"><a class="header-anchor" href="#\u9879\u76EE\u914D\u7F6E" aria-hidden="true">#</a> \u9879\u76EE\u914D\u7F6E</h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u9879\u76EE\u914D\u7F6E\u6587\u4EF6\u7528\u4E8E\u914D\u7F6E\u9879\u76EE\u5185\u5C55\u793A\u7684\u5185\u5BB9\u3001\u5E03\u5C40\u3001\u6587\u672C\u7B49\u6548\u679C\uFF0C\u5B58\u4E8E<code>localStorage</code>\u4E2D\u3002\u5982\u679C\u66F4\u6539\u4E86\u9879\u76EE\u914D\u7F6E\uFF0C\u9700\u8981\u624B\u52A8<strong>\u6E05\u7A7A</strong> <code>localStorage</code> \u7F13\u5B58\uFF0C\u5237\u65B0\u91CD\u65B0\u767B\u5F55\u540E\u65B9\u53EF\u751F\u6548\u3002</p></div><h3 id="\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84</h3><p><a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/projectSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/projectSetting.ts</a></p><h3 id="\u8BF4\u660E-1"><a class="header-anchor" href="#\u8BF4\u660E-1" aria-hidden="true">#</a> \u8BF4\u660E</h3><div class="language-js"><pre><code><span class="token comment">// ! \u6539\u52A8\u540E\u9700\u8981\u6E05\u7A7A\u6D4F\u89C8\u5668\u7F13\u5B58</span>
<span class="token keyword">const</span> <span class="token literal-property property">setting</span><span class="token operator">:</span> ProjectConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u662F\u5426\u663E\u793ASettingButton</span>
  <span class="token literal-property property">showSettingButton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// \u662F\u5426\u663E\u793A\u4E3B\u9898\u5207\u6362\u6309\u94AE</span>
  <span class="token literal-property property">showDarkModeToggle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// \u8BBE\u7F6E\u6309\u94AE\u4F4D\u7F6E \u53EF\u9009\u9879</span>
  <span class="token comment">// SettingButtonPositionEnum.AUTO: \u81EA\u52A8\u9009\u62E9</span>
  <span class="token comment">// SettingButtonPositionEnum.HEADER: \u4F4D\u4E8E\u5934\u90E8</span>
  <span class="token comment">// SettingButtonPositionEnum.FIXED: \u56FA\u5B9A\u5728\u53F3\u4FA7</span>
  <span class="token literal-property property">settingButtonPosition</span><span class="token operator">:</span> SettingButtonPositionEnum<span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">,</span>

  <span class="token comment">// \u6743\u9650\u6A21\u5F0F,\u9ED8\u8BA4\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F</span>
  <span class="token comment">// ROUTE_MAPPING: \u524D\u7AEF\u6A21\u5F0F\uFF08\u83DC\u5355\u7531\u8DEF\u7531\u751F\u6210\uFF0C\u9ED8\u8BA4\uFF09</span>
  <span class="token comment">// ROLE\uFF1A\u524D\u7AEF\u6A21\u5F0F\uFF08\u83DC\u5355\u8DEF\u7531\u5206\u5F00\uFF09</span>
  <span class="token literal-property property">permissionMode</span><span class="token operator">:</span> PermissionModeEnum<span class="token punctuation">.</span><span class="token constant">ROUTE_MAPPING</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6743\u9650\u7F13\u5B58\u5B58\u653E\u4F4D\u7F6E\u3002\u9ED8\u8BA4\u5B58\u653E\u4E8ElocalStorage</span>
  <span class="token literal-property property">permissionCacheType</span><span class="token operator">:</span> CacheTypeEnum<span class="token punctuation">.</span><span class="token constant">LOCAL</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4F1A\u8BDD\u8D85\u65F6\u5904\u7406\u65B9\u6848</span>
  <span class="token comment">// SessionTimeoutProcessingEnum.ROUTE_JUMP: \u8DEF\u7531\u8DF3\u8F6C\u5230\u767B\u5F55\u9875</span>
  <span class="token comment">// SessionTimeoutProcessingEnum.PAGE_COVERAGE: \u751F\u6210\u767B\u5F55\u5F39\u7A97\uFF0C\u8986\u76D6\u5F53\u524D\u9875\u9762</span>
  <span class="token literal-property property">sessionTimeoutProcessing</span><span class="token operator">:</span> SessionTimeoutProcessingEnum<span class="token punctuation">.</span><span class="token constant">ROUTE_JUMP</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9879\u76EE\u4E3B\u9898\u8272</span>
  <span class="token literal-property property">themeColor</span><span class="token operator">:</span> primaryColor<span class="token punctuation">,</span>
  <span class="token comment">// \u7F51\u7AD9\u7070\u8272\u6A21\u5F0F\uFF0C\u7528\u4E8E\u53EF\u80FD\u60BC\u5FF5\u7684\u65E5\u671F\u5F00\u542F</span>
  <span class="token literal-property property">grayMode</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8272\u5F31\u6A21\u5F0F</span>
  <span class="token literal-property property">colorWeak</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u53D6\u6D88\u83DC\u5355,\u9876\u90E8,\u591A\u6807\u7B7E\u9875\u663E\u793A, \u7528\u4E8E\u53EF\u80FD\u5185\u5D4C\u5728\u522B\u7684\u7CFB\u7EDF\u5185</span>
  <span class="token literal-property property">fullContent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E3B\u9898\u5185\u5BB9\u5BBD\u5EA6</span>
  <span class="token literal-property property">contentMode</span><span class="token operator">:</span> ContentEnum<span class="token punctuation">.</span><span class="token constant">FULL</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u663E\u793Alogo</span>
  <span class="token literal-property property">showLogo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u663E\u793A\u5E95\u90E8\u4FE1\u606F copyright</span>
  <span class="token literal-property property">showFooter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5934\u90E8\u914D\u7F6E</span>
  <span class="token literal-property property">headerSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u80CC\u666F\u8272</span>
    <span class="token literal-property property">bgColor</span><span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u56FA\u5B9A\u5934\u90E8</span>
    <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u662F\u5426\u663E\u793A\u9876\u90E8</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E3B\u9898</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> MenuThemeEnum<span class="token punctuation">.</span><span class="token constant">LIGHT</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F00\u542F\u9501\u5C4F\u529F\u80FD</span>
    <span class="token literal-property property">useLockPage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u5168\u5C4F\u6309\u94AE</span>
    <span class="token literal-property property">showFullScreen</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u6587\u6863\u6309\u94AE</span>
    <span class="token literal-property property">showDoc</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u6D88\u606F\u4E2D\u5FC3\u6309\u94AE</span>
    <span class="token literal-property property">showNotice</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u663E\u793A\u83DC\u5355\u641C\u7D22\u6309\u94AE</span>
    <span class="token literal-property property">showSearch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u83DC\u5355\u914D\u7F6E</span>
  <span class="token literal-property property">menuSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u80CC\u666F\u8272</span>
    <span class="token literal-property property">bgColor</span><span class="token operator">:</span> <span class="token string">&#39;#273352&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u662F\u5426\u56FA\u5B9A\u4F4F\u83DC\u5355</span>
    <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u6298\u53E0</span>
    <span class="token literal-property property">collapsed</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6298\u53E0\u83DC\u5355\u65F6\u5019\u662F\u5426\u663E\u793A\u83DC\u5355\u540D</span>
    <span class="token literal-property property">collapsedShowTitle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u662F\u5426\u53EF\u62D6\u62FD</span>
    <span class="token literal-property property">canDrag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u662F\u5426\u663E\u793A</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u5BBD\u5EA6</span>
    <span class="token literal-property property">menuWidth</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u6A21\u5F0F</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> MenuModeEnum<span class="token punctuation">.</span><span class="token constant">INLINE</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u7C7B\u578B</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> MenuTypeEnum<span class="token punctuation">.</span><span class="token constant">SIDEBAR</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u4E3B\u9898</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> MenuThemeEnum<span class="token punctuation">.</span><span class="token constant">DARK</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5206\u5272\u83DC\u5355</span>
    <span class="token literal-property property">split</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9876\u90E8\u83DC\u5355\u5E03\u5C40</span>
    <span class="token literal-property property">topMenuAlign</span><span class="token operator">:</span> <span class="token string">&#39;start&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6298\u53E0\u89E6\u53D1\u5668\u7684\u4F4D\u7F6E</span>
    <span class="token literal-property property">trigger</span><span class="token operator">:</span> TriggerEnum<span class="token punctuation">.</span><span class="token constant">HEADER</span><span class="token punctuation">,</span>
    <span class="token comment">// \u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u53EA\u5C55\u793A\u4E00\u4E2A\u83DC\u5355</span>
    <span class="token literal-property property">accordion</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u8DEF\u7531\u5207\u6362\u7684\u65F6\u5019\u5173\u95ED\u5DE6\u4FA7\u6DF7\u5408\u83DC\u5355\u5C55\u5F00\u83DC\u5355</span>
    <span class="token literal-property property">closeMixSidebarOnChange</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5DE6\u4FA7\u6DF7\u5408\u83DC\u5355\u6A21\u5757\u5207\u6362\u89E6\u53D1\u65B9\u5F0F</span>
    <span class="token literal-property property">mixSideTrigger</span><span class="token operator">:</span> MixSidebarTriggerEnum<span class="token punctuation">.</span><span class="token constant">CLICK</span><span class="token punctuation">,</span>
    <span class="token comment">// \u662F\u5426\u56FA\u5B9A\u5DE6\u4FA7\u6DF7\u5408\u83DC\u5355</span>
    <span class="token literal-property property">mixSideFixed</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u591A\u6807\u7B7E</span>
  <span class="token literal-property property">multiTabsSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5237\u65B0\u540E\u662F\u5426\u4FDD\u7559\u5DF2\u7ECF\u6253\u5F00\u7684\u6807\u7B7E\u9875</span>
    <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F00\u542F</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F00\u542F\u5FEB\u901F\u64CD\u4F5C</span>
    <span class="token literal-property property">showQuick</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u662F\u5426\u53EF\u4EE5\u62D6\u62FD</span>
    <span class="token literal-property property">canDrag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u662F\u5426\u663E\u793A\u5237\u65B0\u90A3\u599E</span>
    <span class="token literal-property property">showRedo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u662F\u5426\u663E\u793A\u6298\u53E0\u6309\u94AE</span>
    <span class="token literal-property property">showFold</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u52A8\u753B\u914D\u7F6E</span>
  <span class="token literal-property property">transitionSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//  \u662F\u5426\u5F00\u542F\u5207\u6362\u52A8\u753B</span>
    <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u52A8\u753B\u540D</span>
    <span class="token literal-property property">basicTransition</span><span class="token operator">:</span> RouterTransitionEnum<span class="token punctuation">.</span><span class="token constant">FADE_SIDE</span><span class="token punctuation">,</span>
    <span class="token comment">// \u662F\u5426\u6253\u5F00\u9875\u9762\u5207\u6362loading</span>
    <span class="token literal-property property">openPageLoading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//\u662F\u5426\u6253\u5F00\u9875\u9762\u5207\u6362\u9876\u90E8\u8FDB\u5EA6\u6761</span>
    <span class="token literal-property property">openNProgress</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u662F\u5426\u5F00\u542FKeepAlive\u7F13\u5B58  \u5F00\u53D1\u65F6\u5019\u6700\u597D\u5173\u95ED,\u4E0D\u7136\u6BCF\u6B21\u90FD\u9700\u8981\u6E05\u9664\u7F13\u5B58</span>
  <span class="token literal-property property">openKeepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u81EA\u52A8\u9501\u5C4F\u65F6\u95F4\uFF0C\u4E3A0\u4E0D\u9501\u5C4F\u3002 \u5355\u4F4D\u5206\u949F \u9ED8\u8BA41\u4E2A\u5C0F\u65F6</span>
  <span class="token literal-property property">lockTime</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">// \u663E\u793A\u9762\u5305\u5C51</span>
  <span class="token literal-property property">showBreadCrumb</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u663E\u793A\u9762\u5305\u5C51\u56FE\u6807</span>
  <span class="token literal-property property">showBreadCrumbIcon</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u4F7F\u7528\u5168\u5C40\u9519\u8BEF\u6355\u83B7</span>
  <span class="token literal-property property">useErrorHandle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u5F00\u542F\u56DE\u5230\u9876\u90E8</span>
  <span class="token literal-property property">useOpenBackTop</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">//  \u662F\u5426\u53EF\u4EE5\u5D4C\u5165iframe\u9875\u9762</span>
  <span class="token literal-property property">canEmbedIFramePage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5207\u6362\u754C\u9762\u7684\u65F6\u5019\u662F\u5426\u5220\u9664\u672A\u5173\u95ED\u7684message\u53CAnotify</span>
  <span class="token literal-property property">closeMessageOnSwitch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5207\u6362\u754C\u9762\u7684\u65F6\u5019\u662F\u5426\u53D6\u6D88\u5DF2\u7ECF\u53D1\u9001\u4F46\u662F\u672A\u54CD\u5E94\u7684http\u8BF7\u6C42\u3002</span>
  <span class="token comment">// \u5982\u679C\u5F00\u542F,\u60F3\u5BF9\u5355\u72EC\u63A5\u53E3\u8986\u76D6\u3002\u53EF\u4EE5\u5728\u5355\u72EC\u63A5\u53E3\u8BBE\u7F6E</span>
  <span class="token literal-property property">removeAllHttpPending</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u7F13\u5B58\u914D\u7F6E"><a class="header-anchor" href="#\u7F13\u5B58\u914D\u7F6E" aria-hidden="true">#</a> \u7F13\u5B58\u914D\u7F6E</h2><p>\u7528\u4E8E\u914D\u7F6E\u7F13\u5B58\u5185\u5BB9\u52A0\u5BC6\u4FE1\u606F\uFF0C\u5BF9\u7F13\u5B58\u5230\u6D4F\u89C8\u5668\u7684\u4FE1\u606F\u8FDB\u884C AES \u52A0\u5BC6</p><p>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/blob/main/src/settings/encryptionSetting.ts" target="_blank" rel="noopener noreferrer">/@/settings/encryptionSetting.ts</a> \u5185\u53EF\u4EE5\u914D\u7F6E <code>localStorage</code> \u53CA <code>sessionStorage</code> \u7F13\u5B58\u4FE1\u606F</p><p><strong>\u524D\u63D0:</strong> \u4F7F\u7528\u9879\u76EE\u81EA\u5E26\u7684\u7F13\u5B58\u5DE5\u5177\u7C7B <a href="https://github.com/vbenjs/vue-vben-admin/blob/main/src/utils/cache/index.ts" target="_blank" rel="noopener noreferrer">/@/utils/cache</a> \u6765\u8FDB\u884C\u7F13\u5B58\u64CD\u4F5C</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isDevMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/utils/env&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u7F13\u5B58\u9ED8\u8BA4\u8FC7\u671F\u65F6\u95F4</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">DEFAULT_CACHE_TIME</span> <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">7</span><span class="token punctuation">;</span>

<span class="token comment">// \u5F00\u542F\u7F13\u5B58\u52A0\u5BC6\u540E\uFF0C\u52A0\u5BC6\u5BC6\u94A5\u3002\u91C7\u7528aes\u52A0\u5BC6</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> cacheCipher <span class="token operator">=</span> <span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token string">&#39;_11111000001111@&#39;</span><span class="token punctuation">,</span>
  iv<span class="token operator">:</span> <span class="token string">&#39;@11111000001111_&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u662F\u5426\u52A0\u5BC6\u7F13\u5B58\uFF0C\u9ED8\u8BA4\u751F\u4EA7\u73AF\u5883\u52A0\u5BC6</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> enableStorageEncryption <span class="token operator">=</span> <span class="token operator">!</span><span class="token function">isDevMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u591A\u8BED\u8A00\u914D\u7F6E"><a class="header-anchor" href="#\u591A\u8BED\u8A00\u914D\u7F6E" aria-hidden="true">#</a> \u591A\u8BED\u8A00\u914D\u7F6E</h2><p>\u7528\u4E8E\u914D\u7F6E\u591A\u8BED\u8A00\u4FE1\u606F</p><p>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/localeSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/localeSetting.ts</a> \u5185\u914D\u7F6E</p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LOCALE</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> LocaleType <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">ZH_CN</span><span class="token operator">:</span> <span class="token string">&#39;zh_CN&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">EN_US</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> localeSetting<span class="token operator">:</span> LocaleSetting <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u662F\u5426\u663E\u793A\u8BED\u8A00\u9009\u62E9\u5668</span>
  showPicker<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5F53\u524D\u8BED\u8A00</span>
  locale<span class="token operator">:</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9ED8\u8BA4\u8BED\u8A00</span>
  fallback<span class="token operator">:</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5141\u8BB8\u7684\u8BED\u8A00</span>
  availableLocales<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">EN_US</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BED\u8A00\u5217\u8868</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> localeList<span class="token operator">:</span> DropMenu<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;\u7B80\u4F53\u4E2D\u6587&#39;</span><span class="token punctuation">,</span>
    event<span class="token operator">:</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span>
    event<span class="token operator">:</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">EN_US</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4E3B\u9898\u8272\u914D\u7F6E"><a class="header-anchor" href="#\u4E3B\u9898\u8272\u914D\u7F6E" aria-hidden="true">#</a> \u4E3B\u9898\u8272\u914D\u7F6E</h2><p>\u9ED8\u8BA4\u5168\u5C40\u4E3B\u9898\u8272\u914D\u7F6E\u4F4D\u4E8E <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/build/config/themeConfig.ts" target="_blank" rel="noopener noreferrer">build/config/glob/themeConfig.ts</a> \u5185</p><p>\u53EA\u9700\u8981\u4FEE\u6539 primaryColor \u4E3A\u60A8\u9700\u8981\u7684\u914D\u8272\uFF0C\u7136\u540E\u91CD\u65B0\u6267\u884C <code>yarn serve</code> \u5373\u53EF</p><div class="language-js"><pre><code><span class="token comment">/**
 * less global variable
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> primaryColor <span class="token operator">=</span> <span class="token string">&#39;#0960bd&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6837\u5F0F\u914D\u7F6E"><a class="header-anchor" href="#\u6837\u5F0F\u914D\u7F6E" aria-hidden="true">#</a> \u6837\u5F0F\u914D\u7F6E</h2><h3 id="css-\u524D\u7F00\u8BBE\u7F6E"><a class="header-anchor" href="#css-\u524D\u7F00\u8BBE\u7F6E" aria-hidden="true">#</a> css \u524D\u7F00\u8BBE\u7F6E</h3><p>\u7528\u4E8E\u4FEE\u6539\u9879\u76EE\u5185\u7EC4\u4EF6 class \u7684\u7EDF\u4E00\u524D\u7F00</p><ul><li>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/blob/main/src/settings/designSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/designSetting.ts</a> \u5185\u914D\u7F6E</li></ul><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> prefixCls <span class="token operator">=</span> <span class="token string">&#39;vben&#39;</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/blob/main/src/design/var/index.less" target="_blank" rel="noopener noreferrer">src/design/var/index.less</a> \u914D\u7F6E css \u524D\u7F00</li></ul><div class="language-less"><pre><code><span class="token variable">@namespace<span class="token punctuation">:</span></span> vben<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u524D\u7F00\u4F7F\u7528"><a class="header-anchor" href="#\u524D\u7F00\u4F7F\u7528" aria-hidden="true">#</a> \u524D\u7F00\u4F7F\u7528</h3><p><strong>\u5728 css \u5185</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/* namespace\u5DF2\u7ECF\u5168\u5C40\u6CE8\u5165\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u5728\u5F15\u5165 */</span>
  <span class="token atrule"><span class="token rule">@prefix-cls</span><span class="token punctuation">:</span> ~&#39;@</span><span class="token punctuation">{</span>namespace<span class="token punctuation">}</span>-app-logo&#39;<span class="token punctuation">;</span>

  <span class="token selector">.@</span><span class="token punctuation">{</span>prefix-cls<span class="token punctuation">}</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>\u5728 vue/ts \u5185</strong></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useDesign <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useDesign&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> prefixCls <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDesign</span><span class="token punctuation">(</span><span class="token string">&#39;app-logo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// prefixCls =&gt; vben-app-logo</span>
</code></pre></div><h2 id="\u989C\u8272\u914D\u7F6E"><a class="header-anchor" href="#\u989C\u8272\u914D\u7F6E" aria-hidden="true">#</a> \u989C\u8272\u914D\u7F6E</h2><p>\u7528\u4E8E\u9884\u8BBE\u4E00\u4E9B\u989C\u8272\u6570\u7EC4</p><p>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/designSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/designSetting.ts</a> \u5185\u914D\u7F6E</p><div class="language-ts"><pre><code><span class="token comment">//  app\u4E3B\u9898\u8272\u9884\u8BBE</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">APP_PRESET_COLOR_LIST</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;#0960bd&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#0084f4&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#009688&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#536dfe&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#ff5c93&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#ee4f12&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#0096c7&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#9c27b0&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#ff9800&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u9876\u90E8\u80CC\u666F\u8272\u9884\u8BBE</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">HEADER_PRESET_BG_COLOR_LIST</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#009688&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#5172DC&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#1E9FFF&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#018ffb&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#409eff&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#4e73df&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#e74c3c&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#24292e&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#394664&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#001529&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#383f45&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u5DE6\u4FA7\u83DC\u5355\u80CC\u666F\u8272\u9884\u8BBE</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SIDE_BAR_BG_COLOR_LIST</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;#001529&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#273352&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#191b24&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#191a23&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#304156&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#001628&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#28333E&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#344058&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;#383f45&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u7EC4\u4EF6\u9ED8\u8BA4\u53C2\u6570\u914D\u7F6E"><a class="header-anchor" href="#\u7EC4\u4EF6\u9ED8\u8BA4\u53C2\u6570\u914D\u7F6E" aria-hidden="true">#</a> \u7EC4\u4EF6\u9ED8\u8BA4\u53C2\u6570\u914D\u7F6E</h2><p>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/componentSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/componentSetting.ts</a> \u5185\u914D\u7F6E</p><div class="language-ts"><pre><code><span class="token comment">// \u7528\u4E8E\u914D\u7F6E\u67D0\u4E9B\u7EC4\u4EF6\u7684\u5E38\u89C4\u914D\u7F6E\uFF0C\u800C\u65E0\u9700\u4FEE\u6539\u7EC4\u4EF6</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> SorterResult <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../components/Table&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8868\u683C\u914D\u7F6E</span>
  table<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8868\u683C\u63A5\u53E3\u8BF7\u6C42\u901A\u7528\u914D\u7F6E\uFF0C\u53EF\u5728\u7EC4\u4EF6prop\u8986\u76D6</span>
    <span class="token comment">// \u652F\u6301 xxx.xxx.xxx\u683C\u5F0F</span>
    fetchSetting<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4F20\u7ED9\u540E\u53F0\u7684\u5F53\u524D\u9875\u5B57\u6BB5</span>
      pageField<span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u4F20\u7ED9\u540E\u53F0\u7684\u6BCF\u9875\u663E\u793A\u591A\u5C11\u6761\u7684\u5B57\u6BB5</span>
      sizeField<span class="token operator">:</span> <span class="token string">&#39;pageSize&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u63A5\u53E3\u8FD4\u56DE\u8868\u683C\u6570\u636E\u7684\u5B57\u6BB5</span>
      listField<span class="token operator">:</span> <span class="token string">&#39;items&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u63A5\u53E3\u8FD4\u56DE\u8868\u683C\u603B\u6570\u7684\u5B57\u6BB5</span>
      totalField<span class="token operator">:</span> <span class="token string">&#39;total&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u53EF\u9009\u7684\u5206\u9875\u9009\u9879</span>
    pageSizeOptions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;80&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;100&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//\u9ED8\u8BA4\u6BCF\u9875\u663E\u793A\u591A\u5C11\u6761</span>
    defaultPageSize<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9ED8\u8BA4\u6392\u5E8F\u65B9\u6CD5</span>
    <span class="token function-variable function">defaultSortFn</span><span class="token operator">:</span> <span class="token punctuation">(</span>sortInfo<span class="token operator">:</span> SorterResult<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> field<span class="token punctuation">,</span> order <span class="token punctuation">}</span> <span class="token operator">=</span> sortInfo<span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6392\u5E8F\u5B57\u6BB5</span>
        field<span class="token punctuation">,</span>
        <span class="token comment">// \u6392\u5E8F\u65B9\u5F0F asc/desc</span>
        order<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u81EA\u5B9A\u4E49\u8FC7\u6EE4\u65B9\u6CD5</span>
    <span class="token function-variable function">defaultFilterFn</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Recordable<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6EDA\u52A8\u7EC4\u4EF6\u914D\u7F6E</span>
  scrollbar<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u662F\u5426\u4F7F\u7528\u539F\u751F\u6EDA\u52A8\u6837\u5F0F</span>
    <span class="token comment">// \u5F00\u542F\u540E\uFF0C\u83DC\u5355\uFF0C\u5F39\u7A97\uFF0C\u62BD\u5C49\u4F1A\u4F7F\u7528\u539F\u751F\u6EDA\u52A8\u6761\u7EC4\u4EF6</span>
    native<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,68),e=[o];function c(l,r,k,i,u,m){return a(),s("div",null,e)}var h=n(t,[["render",c]]);export{g as __pageData,h as default};
