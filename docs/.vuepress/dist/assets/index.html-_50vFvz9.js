import{_ as e,o as n,c as i,a}from"./app-gS7-BVVh.js";const s={},t=a(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init" aria-hidden="true">#</a> Git init</h2><p>Il comando <code>git init</code> inizializza una repository e la prepara al versionamento con git</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> init

Initialized empty Git repository <span class="token keyword">in</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>/.git/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In pratica verrà creata una cartella nascosta <code>.git</code> con il seguente contenuto:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   └── update.sample
├── info
│   └── exclude
├── objects
│   ├── info
│   └── pack
├── refs
│   ├── heads
│   └── tags
├── config
├── description
└── HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-status" tabindex="-1"><a class="header-anchor" href="#git-status" aria-hidden="true">#</a> Git status</h2><p>Il comando git status, ritorna lo stato della repository.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status

On branch master

No commits yet

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        test.txt

nothing added to commit but untracked files present <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-add" tabindex="-1"><a class="header-anchor" href="#git-add" aria-hidden="true">#</a> Git add</h2><p>Aggiungi un file alla tua <code>repository</code>, ad esempio <code>test.txt</code> e usa <code>git status</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status

On branch master

No commits yet

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        test.txt

nothing added to commit but untracked files present <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Adesso puoi aggiungere il file a git</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Puoi usare diverse opzioni per il comando <code>git add</code>:</p><table><thead><tr><th>comando</th><th>descrizione</th></tr></thead><tbody><tr><td><code>git add .</code></td><td>Aggiunge tutti i file e cartelle non tracciati da git al versionamento</td></tr><tr><td><code>git add &lt;file&gt;</code></td><td>Aggiunge solo il <code>&lt;file&gt;</code> al versionamento</td></tr><tr><td><code>git add *.txt</code></td><td>Aggiunge tutti i file con estensione <code>.txt</code> al versionamento</td></tr></tbody></table><h3 id="staging-area" tabindex="-1"><a class="header-anchor" href="#staging-area" aria-hidden="true">#</a> Staging area</h3><p>I file aggiunti a git attraverso il comando <code>git add</code> fanno parte della <strong>staging area</strong></p><h2 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit" aria-hidden="true">#</a> Git commit</h2><p>Per poter salvare un&#39;itantanea della repository, si utilizza il comando <code>git commit</code>. Il commit verrà eseguito solo dei file presenti nella <strong>staging area</strong>, cioè i file precedentemente aggiunti tramite il comando <code>git add</code>. Se non hai file nella <strong>staging area</strong> non verrà eseguito il commit di alcun file.</p><p>Se hai dei file nella <strong>staging area</strong>, la situazione sarà la seguente:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master

No commits yet

Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git rm --cached &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
        new file:   test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A questo punto puoi lanciare il comando <code>git commit</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit
hint: Waiting <span class="token keyword">for</span> your editor to close the file<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Verrà aperto l&#39;editor di testo default impostato in fase di installazione di git</p><h2 id="comandi-utili" tabindex="-1"><a class="header-anchor" href="#comandi-utili" aria-hidden="true">#</a> Comandi utili</h2><p>Vediamo adesso una lista di comandi utili</p><table><thead><tr><th>comando</th><th>descrizione</th></tr></thead><tbody><tr><td><code>git checkout --track origin/&lt;branch-name&gt;</code></td><td>Crea un branch locale con lo stesso nome del branch remoto e imposta il tracking tra i due</td></tr></tbody></table>`,28),d=[t];function l(o,c){return n(),i("div",null,d)}const u=e(s,[["render",l],["__file","index.html.vue"]]);export{u as default};
