import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";const h='{"title":"\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u73AF\u5883\u51C6\u5907","slug":"\u73AF\u5883\u51C6\u5907"},{"level":2,"title":"\u5DE5\u5177\u914D\u7F6E","slug":"\u5DE5\u5177\u914D\u7F6E"},{"level":2,"title":"\u5B89\u88C5\u4F9D\u8D56","slug":"\u5B89\u88C5\u4F9D\u8D56"},{"level":2,"title":"npm script","slug":"npm-script"},{"level":3,"title":"\u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56","slug":"\u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56"},{"level":2,"title":"\u76EE\u5F55\u8BF4\u660E","slug":"\u76EE\u5F55\u8BF4\u660E"}],"relativePath":"guide/index.md","lastUpdated":1652416785005}',e={},o=t(`__VP_STATIC_START__<h1 id="\u5F00\u59CB"><a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a> \u5F00\u59CB</h1><p>\u5F00\u59CB\u524D\u8BF7\u5148\u505A\u597D\u73AF\u5883\u51C6\u5907\u5DE5\u4F5C</p><h2 id="\u73AF\u5883\u51C6\u5907"><a class="header-anchor" href="#\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a> \u73AF\u5883\u51C6\u5907</h2><p>\u672C\u5730\u73AF\u5883\u9700\u8981\u5B89\u88C5 <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">Pnpm6.x</a>\u3001<a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> \u548C <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a></p><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><ul><li>\u5FC5\u987B\u4F7F\u7528<a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">Pnpm6.x</a>\uFF0C\u6700\u65B0\u7248\u53EF\u80FD\u5BFC\u81F4\u4F9D\u8D56\u5B89\u88C5\u4E0D\u4E0A\u3002</li><li><a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> \u7248\u672C\u8981\u6C42<code>12.x</code>\u4EE5\u4E0A\uFF0C\u4E14\u4E0D\u80FD\u4E3A<code>13.x</code>\u7248\u672C\uFF0C\u8FD9\u91CC\u63A8\u8350 <code>14.x</code> \u53CA\u4EE5\u4E0A\u3002</li></ul></div><h2 id="\u5DE5\u5177\u914D\u7F6E"><a class="header-anchor" href="#\u5DE5\u5177\u914D\u7F6E" aria-hidden="true">#</a> \u5DE5\u5177\u914D\u7F6E</h2><p>IDE \u63A8\u8350\u4F7F\u7528<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">vscode</a>\uFF0C\u53EF\u4EE5\u5B89\u88C5\u4EE5\u4E0B\u5DE5\u5177\u6765\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u53CA\u4EE3\u7801\u683C\u5F0F\u5316</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=antfu.iconify" target="_blank" rel="noopener noreferrer">Iconify IntelliSense</a> - Iconify \u56FE\u6807\u63D2\u4EF6</li><li><a href="https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense" target="_blank" rel="noopener noreferrer">windicss IntelliSense</a> - windicss \u63D0\u793A\u63D2\u4EF6</li><li><a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noopener noreferrer">Volar</a> - vue3 \u5F00\u53D1\u5FC5\u5907(\u63A8\u8350)</li><li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">ESLint</a> - \u811A\u672C\u4EE3\u7801\u68C0\u67E5</li><li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier</a> - \u4EE3\u7801\u683C\u5F0F\u5316</li><li><a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank" rel="noopener noreferrer">Stylelint</a> - css \u683C\u5F0F\u5316</li><li><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv" target="_blank" rel="noopener noreferrer">DotENV</a> - .env \u6587\u4EF6 \u9AD8\u4EAE</li></ul><h2 id="\u5B89\u88C5\u4F9D\u8D56"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h2><h4 id="pnpm-\u5B89\u88C5"><a class="header-anchor" href="#pnpm-\u5B89\u88C5" aria-hidden="true">#</a> pnpm \u5B89\u88C5</h4><p>\u5FC5\u987B\u4F7F\u7528 <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a>\u8FDB\u884C\u4F9D\u8D56\u5B89\u88C5\u3002</p><p>\u5982\u679C\u672A\u5B89\u88C5<code>pnpm</code>\uFF0C\u53EF\u4EE5\u7528\u4E0B\u9762\u547D\u4EE4\u6765\u8FDB\u884C\u5168\u5C40\u5B89\u88C5</p><div class="language-bash"><pre><code><span class="token comment"># \u5168\u5C40\u5B89\u88C5pnpm</span>
<span class="token function">npm</span> <span class="token function">install</span> -g <span class="token function">pnpm</span>
<span class="token comment">#Or Mac</span>
brew <span class="token function">install</span> <span class="token function">pnpm</span>
<span class="token comment"># \u9A8C\u8BC1</span>
<span class="token function">pnpm</span> -v
</code></pre></div><h2 id="npm-script"><a class="header-anchor" href="#npm-script" aria-hidden="true">#</a> npm script</h2><div class="language-bash"><pre><code><span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
  <span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
  <span class="token string">&quot;bootstrap&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pnpm install&quot;</span>,
  <span class="token comment"># \u8FD0\u884C\u9879\u76EE</span>
  <span class="token string">&quot;serve&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pnpm run dev&quot;</span>,
  <span class="token comment"># \u8FD0\u884C\u9879\u76EE</span>
  <span class="token string">&quot;dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite&quot;</span>,
  <span class="token comment"># \u6784\u5EFA\u9879\u76EE</span>
  <span class="token string">&quot;build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite build &amp;&amp; esno ./build/script/postBuild.ts&quot;</span>,
  <span class="token comment"># \u6E05\u7A7A\u7F13\u5B58\u540E\u6784\u5EFA\u9879\u76EE</span>
  <span class="token string">&quot;build:no-cache&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;yarn clean:cache &amp;&amp; npm run build&quot;</span>,
  <span class="token comment"># \u751F\u6210\u6253\u5305\u5206\u6790\uFF0C\u5728 \`Mac OS\` \u4E0A\u6267\u884C\u5B8C\u6210\u540E\u4F1A\u81EA\u52A8\u6253\u5F00\u754C\u9762\uFF0C\u5728 \`Window\` \u4E0A\u6267\u884C\u5B8C\u6210\u540E\u9700\u8981\u6253\u5F00 \`./build/.cache/stats.html\` \u67E5\u770B</span>
  <span class="token string">&quot;report&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env REPORT=true npm run build&quot;</span>,
  <span class="token comment"># \u7C7B\u578B\u68C0\u67E5</span>
  <span class="token string">&quot;type:check&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vue-tsc --noEmit --skipLibCheck&quot;</span>,
  <span class="token comment"># \u9884\u89C8\u6253\u5305\u540E\u7684\u5185\u5BB9\uFF08\u5148\u6253\u5305\u5728\u8FDB\u884C\u9884\u89C8\uFF09</span>
  <span class="token string">&quot;preview&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run build &amp;&amp; vite preview&quot;</span>,
  <span class="token comment"># \u76F4\u63A5\u9884\u89C8\u672C\u5730 dist \u6587\u4EF6\u76EE\u5F55</span>
  <span class="token string">&quot;preview:dist&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite preview&quot;</span>,
  <span class="token comment"># \u5220\u9664\u7F13\u5B58</span>
  <span class="token string">&quot;clean:cache&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rimraf node_modules/.cache/ &amp;&amp; rimraf node_modules/.vite&quot;</span>,
  <span class="token comment"># \u5220\u9664 node_modules (\`window\` \u7CFB\u7EDF\u624B\u52A8\u5220\u9664\u8BE5\u76EE\u5F55\u8F83\u6162\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8BE5\u547D\u4EE4\u6765\u8FDB\u884C\u5220\u9664)</span>
  <span class="token string">&quot;clean:lib&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rimraf node_modules&quot;</span>,
  <span class="token comment"># \u6267\u884C eslint \u6821\u9A8C\uFF0C\u5E76\u4FEE\u590D\u90E8\u5206\u95EE\u9898</span>
  <span class="token string">&quot;lint:eslint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;eslint <span class="token entity" title="\\&quot;">\\&quot;</span>{src,mock}/**/*.{vue,ts,tsx}<span class="token entity" title="\\&quot;">\\&quot;</span> --fix&quot;</span>,
  <span class="token comment"># \u6267\u884C prettier \u683C\u5F0F\u5316\uFF08\u8BE5\u547D\u4EE4\u4F1A\u5BF9\u9879\u76EE\u6240\u6709\u4EE3\u7801\u8FDB\u884C prettier \u683C\u5F0F\u5316\uFF0C\u8BF7\u8C28\u614E\u6267\u884C\uFF09</span>
  <span class="token string">&quot;lint:prettier&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;prettier --write --loglevel warn <span class="token entity" title="\\&quot;">\\&quot;</span>src/**/*.{js,json,tsx,css,less,scss,vue,html,md}<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>,
  <span class="token comment"># \u6267\u884C stylelint \u683C\u5F0F\u5316</span>
  <span class="token string">&quot;lint:stylelint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;stylelint --fix <span class="token entity" title="\\&quot;">\\&quot;</span>**/*.{vue,less,postcss,css,scss}<span class="token entity" title="\\&quot;">\\&quot;</span> --cache --cache-location node_modules/.cache/stylelint/&quot;</span>,
  <span class="token string">&quot;lint:lint-staged&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;lint-staged -c ./.husky/lintstagedrc.js&quot;</span>,
  <span class="token string">&quot;lint:pretty&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pretty-quick --staged&quot;</span>,
  <span class="token comment"># \u5BF9\u6253\u5305\u7ED3\u679C\u8FDB\u884C gzip \u6D4B\u8BD5</span>
  <span class="token string">&quot;test:gzip&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http-server dist --cors --gzip -c-1&quot;</span>,
  <span class="token comment"># \u5BF9\u6253\u5305\u76EE\u5F55\u8FDB\u884C brotli \u6D4B\u8BD5</span>
  <span class="token string">&quot;test:br&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http-server dist --cors --brotli -c-1&quot;</span>,
  <span class="token comment"># \u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56\uFF0C\u89C1\u4E0B\u65B9\u8BF4\u660E</span>
  <span class="token string">&quot;reinstall&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rimraf pnpm.lock &amp;&amp; rimraf package.lock.json &amp;&amp; rimraf node_modules &amp;&amp; npm run bootstrap&quot;</span>,
  <span class="token string">&quot;install:husky&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;is-ci || husky install&quot;</span>,
  <span class="token string">&quot;postinstall&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run install:husky&quot;</span>
<span class="token punctuation">}</span>,
</code></pre></div><h3 id="\u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56"><a class="header-anchor" href="#\u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56</h3><p>\u8BE5\u547D\u4EE4\u4F1A\u5148\u5220\u9664 <code>node_modules</code>\u3001<code>pnpm.lock</code>\u3001<code>package.lock.json</code> \u540E\u518D\u8FDB\u884C\u4F9D\u8D56\u91CD\u65B0\u5B89\u88C5\uFF08\u5B89\u88C5\u901F\u5EA6\u4F1A\u660E\u663E\u53D8\u6162\uFF09\u3002</p><p>\u63A5\u4E0B\u6765\u53EF\u4EE5\u4FEE\u6539\u4EE3\u7801\u8FDB\u884C\u4E1A\u52A1\u5F00\u53D1\u4E86\u3002\u9879\u76EE\u5185\u5EFA\u4E86\u6A21\u62DF\u6570\u636E\u3001HMR \u5B9E\u65F6\u9884\u89C8\u3001\u72B6\u6001\u7BA1\u7406\u3001\u5168\u5C40\u8DEF\u7531\u7B49\u5404\u79CD\u5B9E\u7528\u7684\u529F\u80FD\u8F85\u52A9\u5F00\u53D1\u3002</p><h2 id="\u76EE\u5F55\u8BF4\u660E"><a class="header-anchor" href="#\u76EE\u5F55\u8BF4\u660E" aria-hidden="true">#</a> \u76EE\u5F55\u8BF4\u660E</h2><div class="language-bash"><pre><code>
<span class="token builtin class-name">.</span>
\u251C\u2500\u2500 build <span class="token comment"># \u6253\u5305\u811A\u672C\u76F8\u5173</span>
\u2502   \u251C\u2500\u2500 config <span class="token comment"># \u914D\u7F6E\u6587\u4EF6</span>
\u2502   \u251C\u2500\u2500 generate <span class="token comment"># \u751F\u6210\u5668</span>
\u2502   \u251C\u2500\u2500 script <span class="token comment"># \u811A\u672C</span>
\u2502   \u2514\u2500\u2500 vite <span class="token comment"># vite\u914D\u7F6E</span>
\u251C\u2500\u2500 mock <span class="token comment"># mock\u6587\u4EF6\u5939</span>
\u251C\u2500\u2500 public <span class="token comment"># \u516C\u5171\u9759\u6001\u8D44\u6E90\u76EE\u5F55</span>
\u251C\u2500\u2500 src <span class="token comment"># \u4E3B\u76EE\u5F55</span>
\u2502   \u251C\u2500\u2500 api <span class="token comment"># \u63A5\u53E3\u6587\u4EF6</span>
\u2502   \u251C\u2500\u2500 assets <span class="token comment"># \u8D44\u6E90\u6587\u4EF6</span>
\u2502   \u2502   \u251C\u2500\u2500 icons <span class="token comment"># icon sprite \u56FE\u6807\u6587\u4EF6\u5939</span>
\u2502   \u2502   \u251C\u2500\u2500 images <span class="token comment"># \u9879\u76EE\u5B58\u653E\u56FE\u7247\u7684\u6587\u4EF6\u5939</span>
\u2502   \u2502   \u2514\u2500\u2500 svg <span class="token comment"># \u9879\u76EE\u5B58\u653Esvg\u56FE\u7247\u7684\u6587\u4EF6\u5939</span>
\u2502   \u251C\u2500\u2500 components <span class="token comment"># \u516C\u5171\u7EC4\u4EF6</span>
\u2502   \u251C\u2500\u2500 design <span class="token comment"># \u6837\u5F0F\u6587\u4EF6</span>
\u2502   \u251C\u2500\u2500 directives <span class="token comment"># \u6307\u4EE4</span>
\u2502   \u251C\u2500\u2500 enums <span class="token comment"># \u679A\u4E3E/\u5E38\u91CF</span>
\u2502   \u251C\u2500\u2500 hooks <span class="token comment"># hook</span>
\u2502   \u2502   \u251C\u2500\u2500 component <span class="token comment"># \u7EC4\u4EF6\u76F8\u5173hook</span>
\u2502   \u2502   \u251C\u2500\u2500 core <span class="token comment"># \u57FA\u7840hook</span>
\u2502   \u2502   \u251C\u2500\u2500 event <span class="token comment"># \u4E8B\u4EF6\u76F8\u5173hook</span>
\u2502   \u2502   \u251C\u2500\u2500 setting <span class="token comment"># \u914D\u7F6E\u76F8\u5173hook</span>
\u2502   \u2502   \u2514\u2500\u2500 web <span class="token comment"># web\u76F8\u5173hook</span>
\u2502   \u251C\u2500\u2500 layouts <span class="token comment"># \u5E03\u5C40\u6587\u4EF6</span>
\u2502   \u2502   \u251C\u2500\u2500 default <span class="token comment"># \u9ED8\u8BA4\u5E03\u5C40</span>
\u2502   \u2502   \u2514\u2500\u2500 page <span class="token comment"># \u9875\u9762\u5E03\u5C40</span>
\u2502   \u251C\u2500\u2500 logics <span class="token comment"># \u903B\u8F91</span>
\u2502   \u251C\u2500\u2500 main.ts <span class="token comment"># \u4E3B\u5165\u53E3</span>
\u2502   \u251C\u2500\u2500 router <span class="token comment"># \u8DEF\u7531\u914D\u7F6E</span>
\u2502   \u251C\u2500\u2500 settings <span class="token comment"># \u9879\u76EE\u914D\u7F6E</span>
\u2502   \u2502   \u251C\u2500\u2500 componentSetting.ts <span class="token comment"># \u7EC4\u4EF6\u914D\u7F6E</span>
\u2502   \u2502   \u251C\u2500\u2500 designSetting.ts <span class="token comment"># \u6837\u5F0F\u914D\u7F6E</span>
\u2502   \u2502   \u251C\u2500\u2500 encryptionSetting.ts <span class="token comment"># \u52A0\u5BC6\u914D\u7F6E</span>
\u2502   \u2502   \u251C\u2500\u2500 localeSetting.ts <span class="token comment"># \u591A\u8BED\u8A00\u914D\u7F6E</span>
\u2502   \u2502   \u251C\u2500\u2500 projectSetting.ts <span class="token comment"># \u9879\u76EE\u914D\u7F6E</span>
\u2502   \u2502   \u2514\u2500\u2500 siteSetting.ts <span class="token comment"># \u7AD9\u70B9\u914D\u7F6E</span>
\u2502   \u251C\u2500\u2500 store <span class="token comment"># \u6570\u636E\u4ED3\u5E93</span>
\u2502   \u251C\u2500\u2500 utils <span class="token comment"># \u5DE5\u5177\u7C7B</span>
\u2502   \u2514\u2500\u2500 views <span class="token comment"># \u9875\u9762</span>
\u251C\u2500\u2500 types <span class="token comment"># \u7C7B\u578B\u6587\u4EF6</span>
\u251C\u2500\u2500 vite.config.ts <span class="token comment"># vite\u914D\u7F6E\u6587\u4EF6</span>
\u2514\u2500\u2500 windi.config.ts <span class="token comment"># windcss\u914D\u7F6E\u6587\u4EF6</span>

</code></pre></div>__VP_STATIC_END__`,20),p=[o];function l(c,i,r,m,u,k){return a(),s("div",null,p)}var g=n(e,[["render",l]]);export{h as __pageData,g as default};
