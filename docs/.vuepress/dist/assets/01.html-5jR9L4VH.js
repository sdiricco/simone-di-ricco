import{_ as r,r as i,o as s,c as o,b as e,d as a,e as n,a as c}from"./app-gS7-BVVh.js";const l={},d=e("h1",{id:"lavorare-con-requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lavorare-con-requirements","aria-hidden":"true"},"#"),a(" Lavorare con requirements")],-1),u=e("p",null,"Puoi seguire queste guide:",-1),h={href:"https://docs.microsoft.com/it-it/visualstudio/python/managing-required-packages-with-requirements-txt?view=vs-2022",target:"_blank",rel:"noopener noreferrer"},p={href:"https://blog.8bitzen.com/posts/04-03-2020-working-out-an-existing-python-project--s-requirements--txt-file",target:"_blank",rel:"noopener noreferrer"},m=c(`<h2 id="installare-automaticamente-i-pacchetti-da-un-progetto" tabindex="-1"><a class="header-anchor" href="#installare-automaticamente-i-pacchetti-da-un-progetto" aria-hidden="true">#</a> Installare automaticamente i pacchetti da un progetto</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> pipreqs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Il seguente comando genererà il file <code>requirements.txt</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipreqs /path/to/prject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="installare-i-pacchetti-da-un-file-requirements-txt" tabindex="-1"><a class="header-anchor" href="#installare-i-pacchetti-da-un-file-requirements-txt" aria-hidden="true">#</a> Installare i pacchetti da un file requirements.txt</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token parameter variable">-r</span> /path/to/requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function v(g,_){const t=i("ExternalLinkIcon");return s(),o("div",null,[d,u,e("ul",null,[e("li",null,[e("a",h,[a("Gestire i pacchetti Python necessari con requirements.txt"),n(t)])]),e("li",null,[e("a",p,[a("Python Project's requirements.txt file"),n(t)])])]),m])}const f=r(l,[["render",v],["__file","01.html.vue"]]);export{f as default};
