import{_ as n,o as s,c as a,a as p}from"./app.1b7d753a.js";const t={},o=p(`<h1 id="primo-esempio" tabindex="-1"><a class="header-anchor" href="#primo-esempio" aria-hidden="true">#</a> Primo esempio</h1><p>Per inizializzare un progetto con Typescript, da terminale digita:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc -init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Verr\xE0 creato un file <code>tsconfig.json</code> che per il momento puoi ignorare.</p><p>A questo punto puoi creare un file Typescript, ad esempio <code>index.ts</code> e, come riferimento, puoi copiare il seguente pezzo di codice:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//index.ts</span>
<span class="token keyword">function</span> <span class="token function">mapWord</span><span class="token punctuation">(</span>words<span class="token operator">:</span> <span class="token punctuation">(</span>string<span class="token operator">|</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">word</span> <span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">)</span> <span class="token operator">:</span> number<span class="token punctuation">{</span>
    <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">filter</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">filterEqual</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">word</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">word</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">{</span>
        <span class="token keyword">return</span> word <span class="token operator">===</span> key
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> nullRes <span class="token operator">=</span> <span class="token function">mapWord</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;uno&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;due&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tre&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;quattro&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;uno&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">filterEqual</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nullRes<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2</span>
<span class="token keyword">const</span> unoRes <span class="token operator">=</span> <span class="token function">mapWord</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;uno&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;due&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tre&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;quattro&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;uno&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">filterEqual</span><span class="token punctuation">(</span><span class="token string">&quot;uno&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>unoRes<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Infine, dovrai transcompilare il codice con il comando</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Verr\xE0 creato il relativo file Javascript, ad esempio <code>index.js</code> il quale potrai eseguire con NodeJs</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),e=[o];function c(l,i){return s(),a("div",null,e)}var r=n(t,[["render",c],["__file","03.html.vue"]]);export{r as default};
