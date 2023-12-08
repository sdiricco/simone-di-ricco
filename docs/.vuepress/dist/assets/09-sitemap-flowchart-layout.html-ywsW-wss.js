import{_ as i,o as e,c as a,a as o}from"./app-gS7-BVVh.js";const n="/assets/09-flow-chart-1TfQG2WT.jpg",t={},r=o('<h1 id="_9-sitemap-flowchart-e-layout" tabindex="-1"><a class="header-anchor" href="#_9-sitemap-flowchart-e-layout" aria-hidden="true">#</a> 9 Sitemap, flowchart e layout</h1><blockquote><p><em>Imparare ad usare sitemap e flowchart, due strumenti fondamentali per la progettazione di un sito web, a cui è poi necessario assegnare un layout opportuno.</em></p></blockquote><p>Ora che abbiamo individuato i contenuti principali, pensiamo alla macro struttura del sito e alla sua navigazione. Creeremo un’organizzazione logica di massima e decideremo il layout principale.</p><p>Innanzitutto, decidiamo come organizzare i nostri contenuti all’interno di pagine o sezioni del sito e come renderli raggiungibili dall’utente.</p><h2 id="pagine-e-sezioni" tabindex="-1"><a class="header-anchor" href="#pagine-e-sezioni" aria-hidden="true">#</a> Pagine e sezioni</h2><p>Data la natura del nostro portfolio, abbiamo scelto di fare un sito one-page, cioè interamente contenuto in una singola pagina. Il fatto che il sito sia “one-page” non significa che non abbia una sua struttura, una mappa.</p><p>Normalmente, la pagina di un sito web è di tipo tematico, ossia raccoglie le informazioni pertinenti una certa area. Nel nostro caso esiste sempre questa divisione tematica legata ai diversi tipi di contenuti, ma le pagine corrisponderanno alle diverse sezioni del nostro sito one-page.</p><p>e sezioni, come le pagine, non corrispondono ai componenti, ma si occupano solo di organizzare tematicamente i contenuti costituendo quindi il primo livello di accesso.</p><p>Per individuare le sezioni, basta organizzare in macro aree i contenuti che abbiamo definito nelle lezioni precedenti:</p><ul><li>“Intro/Splash” in cui ci presentiamo, col nostro nome, logo e headline (breve descrizione). In un sito normale con più pagine, potrebbe corrispondere a parte della Home Page</li><li>“About” (“Su di me”) in cui mostriamo informazioni su di noi: <ul><li>Breve biografia</li><li>Link a CV</li><li>Elenco capacità</li></ul></li><li>“Portfolio”, showcase dei nostri lavori come web designer</li><li>“Contact” (“Contatti”), in cui forniamo informazioni e modalità per consentire agli utenti di mettersi in contatto con noi</li></ul><h2 id="navigazione" tabindex="-1"><a class="header-anchor" href="#navigazione" aria-hidden="true">#</a> Navigazione</h2><p>Normalmente in un sito one-page si utilizza come sistema di navigazione lo “Scroll To” verso le diverse sezioni. Una barra di navigazione contiene i link principali di tipo “ancora”, che puntano alle relative sezioni. Poiché la Splash ha uno scopo introduttivo, più legato all’impatto visivo che al contenuto, normalmente non viene resa raggiungibile dai link principali, ma solo dal link sul logo o sull’eventuale “back to top”. Quinidi, considerando solo le sezioni principali, il menu principale avrà i seguenti link:</p><ul><li>“About”</li><li>“Portfolio”</li><li>“Contact”</li></ul><p>Oltre alla navigazione principale, potranno esistere altri livelli di navigazione sia di tipo interno (link su logo e back to top, link ipertestuali a contenuti ed altre ancore) che “esterno” (link ai social, indirizzo email, link ad altri siti).</p><p>In siti complessi esistono menù di navigazione di diversi livelli (primario, secondario, ecc…) e componenti di navigazione (breadcrumb, tabs, ecc…).</p><h2 id="sitemap-e-flow-chart" tabindex="-1"><a class="header-anchor" href="#sitemap-e-flow-chart" aria-hidden="true">#</a> Sitemap e Flow chart</h2><p>Due strumenti utili per individuare e visualizzare il sistema di navigazione di un sito sono le sitemap e i flowchart.</p><p><strong>La sitemap elenca gerarchicamente tutte le pagine di un sito</strong> e ne rappresenta la struttura e la navigazione.</p><p>La sitemap può essere una pagina web, ma anche una sitemap visuale che riproduce l’alberatura del sito.</p><p>Il <strong>flow chart</strong> (diagramma di flusso), indica più genericamente un diagramma a blocchi che <strong>rappresenta visivamente il flusso di esecuzione di procedure o istruzioni</strong>. Il flow chart di un sito può rappresentare in modo schematico non solo le schermate ma anche i flussi di navigazione condizionale che legano diverse pagine e componenti.</p><p>I flow chart sono particolarmente indicati per rappresentare flussi di navigazione necessari per eseguire specifiche operazioni.</p><p><img src="'+n+'" alt=""></p><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h2><p>In questo paragrafo definiremo un layout di massima del nostro portfolio.</p><p>Non ha senso ora definire i dettagli perchè non è in questo momento che disegneremo la UI, ci concentreremo piuttosto su come organizzare i contenuti in blocchi all’interno della pagina, definendo il layout. La sistemazione degli elementi avviene utilizzando un sistema a griglia e le sue colonne.</p><h2 id="layout-di-pagina" tabindex="-1"><a class="header-anchor" href="#layout-di-pagina" aria-hidden="true">#</a> Layout di pagina</h2><p>Esistono diversi tipi di layout di pagina per i siti web, ecco i principali:</p><table><thead><tr><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><strong>Layout a larghezza fissa</strong></td><td>il contenitore del sito e le colonne della sua griglia hanno una larghezza fissa espressa in pixel</td></tr><tr><td><strong>Layout fluidi (o liquidi)</strong></td><td>il contenitore e le colonne hanno larghezze in <strong>percentuale</strong></td></tr><tr><td><strong>Layout elastici</strong></td><td>contenitore e griglia utilizzano gli em come unità di misura, rendendo tutto il layout scalabile in base al font</td></tr><tr><td><strong>Layout ibridi</strong></td><td>utilizzano contemporaneamente diverse unità di misura sfruttando i vantaggi dei tipi di layout precedenti</td></tr></tbody></table><p>I layout fissi sono più semplici da implementare e danno maggiore controllo ai designer, ma in ottica responsive gli altri tipi sono più adatti perchè sono in grado di adattarsi allo schermo in base allo spazio disponibile. Quest’ultimo ovviamente dipende dalla risoluzione e varia molto tra i diversi tipi di dispositivo (mobile, tablet e desktop).</p><p>Poiché il nostro sito dovrà essere responsive, creeremo un <strong>layout ibrido in percentuale</strong> (fluido) impostando però una <strong>larghezza massima per desktop</strong> (max-width fissa per il contenitore).</p><h2 id="layout-a-griglia" tabindex="-1"><a class="header-anchor" href="#layout-a-griglia" aria-hidden="true">#</a> Layout a griglia</h2><p>Per ottenere un <strong>layout fluido responsive</strong> sfruttiamo una griglia con colonne di diverse larghezze definite in percentuale.</p><p>Un <strong>sistema a griglia (o grid system)</strong> si basa su un numero (modulo) e definisce non solo il numero massimo e minimo di colonne ma anche le spaziature, ossia i margini (gutter) tra le colonne stesse all’interno del contenitore. Un esempio classico è il sistema griglia di Bootstrap con base 12 colonne.</p><p>Un grid system definisce anche il <strong>comportamento che devono avere le diverse colonne in base alla viewport</strong>.</p><p>Il concetto di griglia responsive è l&#39;“evoluzione web” dalla griglia di layout usata per l’impaginazione cartacea per posizionare gli elementi all’interno della pagina.</p><p>Il nostro sito avrà una struttura principale molto semplice a una colonna.</p><h2 id="layout-modulare" tabindex="-1"><a class="header-anchor" href="#layout-modulare" aria-hidden="true">#</a> Layout modulare</h2><p>Una caratteristica chiave dei grid system è la <strong>modularità</strong>: non solo si possono definire colonne che sfruttano un dato numero di moduli ma questi moduli si possono usare anche all’interno di una colonna per definire un altro blocco di layout con colonne e così via.</p><p>La modularità del layout e il <strong>nesting</strong> (annidamento) permettono grande flessibilità, scalabilità e coerenza nell’organizzazione degli spazi.</p><p>La <strong>scalabilità</strong> della griglia permette di ri-arrangiare i contenuti così organizzati in maniera ottimale ed omogenea rispetto alle diverse risoluzioni.</p><p>Anche se il layout principale della nostra pagina è monocolonna, occorre definire dei layout interni ad hoc per le sezioni e i vari componenti. Vedremo come utilizzare le colonne della griglia per sistemare i contenuti, sfruttare al meglio gli spazi e capire come “scalare” il layout per i diversi dispositivi.</p>',41),l=[r];function s(d,c){return e(),a("div",null,l)}const u=i(t,[["render",s],["__file","09-sitemap-flowchart-layout.html.vue"]]);export{u as default};