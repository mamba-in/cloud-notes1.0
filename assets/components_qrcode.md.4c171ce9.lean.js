import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";const h='{"title":"QrCode","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Methods","slug":"methods"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"}],"relativePath":"components/qrcode.md","lastUpdated":1652416784986}',p={},o=t(`__VP_STATIC_START__<h1 id="qrcode"><a class="header-anchor" href="#qrcode" aria-hidden="true">#</a> QrCode</h1><p>\u7528\u4E8E\u751F\u6210\u4E8C\u7EF4\u7801\u7684\u7EC4\u4EF6</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QrCode</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>qrCodeUrl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> QrCode<span class="token punctuation">,</span> QrCodeActionType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Qrcode/index&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> LogoImg <span class="token keyword">from</span> <span class="token string">&#39;/@/assets/images/logo.png&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> qrCodeUrl <span class="token operator">=</span> <span class="token string">&#39;https://www.vvbin.cn&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> QrCode <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> qrRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Nullable<span class="token operator">&lt;</span>QrCodeActionType<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">function</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> qrEl <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>qrRef<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>qrEl<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        qrEl<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string">&#39;\u6587\u4EF6\u540D&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        qrCodeUrl<span class="token punctuation">,</span>
        LogoImg<span class="token punctuation">,</span>
        download<span class="token punctuation">,</span>
        qrRef<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.qrcode-demo-item</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 1%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td><code>string</code></td><td>-</td><td>-</td><td>\u4E8C\u7EF4\u7801\u5730\u5740</td></tr><tr><td>options</td><td><code>QRCodeRenderersOptions</code></td><td>-</td><td>-</td><td>\u4E8C\u7EF4\u7801\u914D\u7F6E ,\u89C1 QRCodeRenderersOptions</td></tr><tr><td>width</td><td><code>number</code></td><td>2</td><td>-</td><td>\u5BBD\u5EA6</td></tr><tr><td>logo</td><td><code>string\uFF5CLogoType</code></td><td>-</td><td>-</td><td>\u4E2D\u95F4 logo \u914D\u7F6E\uFF0C\u89C1 LogoType</td></tr><tr><td>tag</td><td><code>\u6E32\u67D3\u6807\u7B7E</code></td><td>canvas</td><td><code>canvas | img</code></td><td>img \u4E0D\u652F\u6301\u5185\u5D4C logo</td></tr></tbody></table><p><strong>QRCodeRenderersOptions</strong></p><div class="language-ts"><pre><code><span class="token comment">/**
 * \u5B9A\u4E49margin\u7684\u5BBD\u5EA6\u3002.
 * Default: 4
 */</span>
margin<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * \u6BD4\u4F8B\u56E0\u5B50\u3002\u503C1\u8868\u793A\u6BCF\u4E2A\u6A21\u57571\u50CF\u7D20\uFF08\u9ED1\u70B9\uFF09\u3002
 * Default: 4
 */</span>
scale<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * \u4E3A\u8F93\u51FA\u56FE\u50CF\u5F3A\u5236\u6307\u5B9A\u5BBD\u5EA6\u3002
 * \u5982\u679C\u5BBD\u5EA6\u592A\u5C0F\u800C\u4E0D\u80FD\u5305\u542Bqr\u7B26\u53F7\uFF0C\u5219\u6B64\u9009\u9879\u5C06\u88AB\u5FFD\u7565\u3002
 * \u4F18\u5148\u4E8E\u89C4\u6A21\u3002
 */</span>
width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
color<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u6697\u6A21\u5757\u7684\u989C\u8272\u3002\u503C\u5FC5\u987B\u4E3A\u5341\u516D\u8FDB\u5236\u683C\u5F0F\uFF08RGBA\uFF09.
   * \u6CE8\u610F\uFF1A\u6DF1\u8272\u5E94\u59CB\u7EC8\u6BD4color.light\u6697\u3002.
   * Default: #000000ff
   */</span>
  dark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">/**
   * \u7167\u660E\u6A21\u5757\u7684\u989C\u8272\u3002\u503C\u5FC5\u987B\u4E3A\u5341\u516D\u8FDB\u5236\u683C\u5F0F\uFF08RGBA\uFF09.
   * Default: #ffffffff
   */</span>
  light<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>LogoType</strong></p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token comment">// logo\u56FE\u7247</span>
  <span class="token literal-property property">src</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token comment">// logo\u5927\u5C0F</span>
  <span class="token literal-property property">logoSize</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token comment">// \u80CC\u666F\u989C\u8272</span>
  <span class="token literal-property property">bgColor</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token comment">// logo\u5706\u89D2</span>
  <span class="token literal-property property">logoRadius</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>download</td><td><code>Function(fileName:string)</code></td><td>\u4E0B\u8F7D</td></tr></tbody></table><h2 id="\u4E8B\u4EF6"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>done</td><td><code>(data: QrcodeDoneEventParams)=&gt;void</code></td><td>\u7ED8\u5236\u5B8C\u6210</td></tr><tr><td>error</td><td><code>(error)=&gt;void</code></td><td>\u751F\u6210\u4E8C\u7EF4\u7801\u65F6\u53D1\u751F\u9519\u8BEF</td></tr></tbody></table><p>QrcodeDoneEventParams</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">;</span>  <span class="token comment">// \u4E8C\u7EF4\u7801DataURL\u6570\u636E</span>
  ctx<span class="token operator">?</span><span class="token operator">:</span> CanvasRenderingContext2D<span class="token punctuation">;</span>  <span class="token comment">// \u8BE5\u5BF9\u8C61\u4E3A\u753B\u5E03\u76842D\u6E32\u67D3\u4E0A\u4E0B\u6587\uFF0C\u4EC5\u5728tag\u4E3Acanvas\u65F6\u6709\u6548\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u7ED8\u5236</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>done</code> \u4E8B\u4EF6\u56DE\u8C03\u4E2D\u53EF\u4EE5\u5BF9\u4E8C\u7EF4\u7801\u8FDB\u884C\u81EA\u5B9A\u4E49\u7684\u7ED8\u5236\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QrCode</span>
  <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>qrCodeUrl<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@done</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onQrcodeDone<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">onQrcodeDone</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> ctx <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx <span class="token keyword">instanceof</span> <span class="token class-name">CanvasRenderingContext2D</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u989D\u5916\u7ED8\u5236</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">&#39;16px &quot;\u5FAE\u8F6F\u96C5\u9ED1&quot;&#39;</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">&#39;\u4F60\u5E05\u4F60\u5148\u626B&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">195</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6709\u5173 <code>CanvasRenderingContext2D</code> \u7684\u66F4\u591A\u8D44\u6599\u4EE5\u53CA\u7ED8\u5236\u65B9\u6CD5\uFF0C\u8BF7\u53C2\u8003<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D" target="_blank" rel="noopener noreferrer">MDN</a></p>__VP_STATIC_END__`,20),e=[o];function c(l,u,r,k,i,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{h as __pageData,m as default};
