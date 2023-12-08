import{_ as i,o as e,c as a,a as t}from"./app-gS7-BVVh.js";const o="/assets/10-fig1-j4jvbpg8.jpg",n="/assets/10-fig2-ZTboR3-c.jpg",r="/assets/10-fig3-SN9Ooex2.jpg",l="/assets/10-mobile-fig1-QGElWfdh.jpg",s="/assets/10-mobile-fig2-GcY25zdN.jpg",d="/assets/10-mobile-fig3-qpfJXR46.jpg",p="/assets/10-mobile-fig4-1JyPUM-J.jpg",c={},m=t('<h1 id="creare-i-wireframes" tabindex="-1"><a class="header-anchor" href="#creare-i-wireframes" aria-hidden="true">#</a> Creare i wireframes</h1><blockquote><p><em>I wireframe, statici o interattivi, sono strumenti fondamentali nel design di interfacce web, permettendo di valutare l&#39;usabilità della nostra applicazione.</em></p></blockquote><p>In questo capitolo creeremo i wireframes del nostro sito a partire dall’organizzazione stabilita. Per farlo, individueremo i componenti da organizzare nell’interfaccia e i design pattern che possiamo sfruttare. Passeremo poi alla parte visuale creando la bozza del layout per le schermate del sito.</p><h2 id="componenti-di-pagina" tabindex="-1"><a class="header-anchor" href="#componenti-di-pagina" aria-hidden="true">#</a> Componenti di pagina</h2><p>Ora che sappiamo quale tipo di layout utilizzare, per creare i wireframes dobbiamo posizionare ed organizzare al suo interno i vari componenti, che altro non sono che blocchi di contenuto. Anche in questo caso un approccio modulare è utile per effettuare questa operazione. Individuiamo i moduli per la nostra pagina:</p><ul><li>Header</li><li>Menu di navigazione (hamburger menu per mobile)</li><li>Sezione intro</li><li>Sezione “chi sono” (bio + skillset)</li><li>Sezione portfolio (slider con lavori)</li><li>Sezione contatti</li><li>Footer (social + copyright)</li></ul><h2 id="ordinamento" tabindex="-1"><a class="header-anchor" href="#ordinamento" aria-hidden="true">#</a> Ordinamento</h2><p>Il <strong>posizionamento degli elementi sarà orientativo e non preciso</strong>, perché lo scopo dei wireframes è definire la struttura dando risalto a contenuti e usabilità piuttosto che all’aspetto visuale dell’interfaccia.</p><p>Se il focus è dunque la “lettura” veloce dell’interfaccia e la sua comprensione da parte dell’utente, <strong>gli ordinamenti sono importanti</strong>. Cosa va presentato all’utente prima di altro? Dove va posizionato un componente? Non importa a quanti pixel di distanza, ma importa il dove rispetto ad altri componenti della pagina.</p><p>Ordinamento e posizionamento di massima corretti servono all’utente per raggiungere velocemente e facilmente le informazioni che cerca. <strong>Per rendere fruibile un prodotto, l’organizzazione logica si deve riflettere nell’interfaccia</strong>.</p><p>Per questo, esistono degli ordinamenti ormai considerati standard, perché facilitano la lettura della pagina web e riflettono in qualche modo il processo mentale dell’utente. Tipicamente, si tratta di una lettura dall’alto in basso o da sinistra a destra (nel mondo occidentale). Ad esempio, si tende a mettere il menù principale in alto o in posizione evidente per permettere all’utente di navigare facilmente tra le pagine/sezioni. A livello di sezioni, è normale mostrare prima la presentazione piuttosto che i singoli lavori o le informazioni di contatto.</p><p>È vero che questa standardizzazione appiattisce molto l’aspetto dei siti, ma nel nostro caso stiamo imparando a creare interfacce web e quindi sfrutteremo ordinamenti standard “provati”. Solo con esperienza e padronanza di alcune pratiche del web design è possibile poi trovare soluzioni originali ma altrettanto efficaci, sempre in base allo specifico contesto.</p><h2 id="design-pattern" tabindex="-1"><a class="header-anchor" href="#design-pattern" aria-hidden="true">#</a> Design pattern</h2><p>Abbiamo accennato in una lezione precedente cosa sono i <strong>design pattern</strong>. In senso lato, anche un certo tipo di ordinamento standard può essere considerato un macro design pattern.</p><p>Per facilitarci la vita, capiamo subito alcuni design pattern che possiamo sfruttare nel nostro portfolio:</p><ul><li><strong>Long scroll</strong>: abbiamo scelto un sito one page con scroll verticale, quindi sfrutteremo un design pattern molto diffuso negli ultimi anni</li><li><strong>ScrollTo</strong>: questo pattern è complementare al “Long scroll”, poiché permette di raggiungere facilmente le varie sezioni “ancorate” ai link di navigazione</li><li><strong>Back to top</strong>: a completamento del trio del pacchetto “one page”, questo pattern permette di tornare in un attimo ad inizio pagina a prescindere dalla lunghezza dello scroll effettuato.</li><li><strong>Hamburger menu</strong>: su mobile, il menu di navigazione principale sarà un hamburger menu, con un tasto che “toggla” (attiva/disattiva) la visibilità dei link di navigazione. Ormai diventato di uso comune, questo pattern permette di sfruttare al meglio gli spazi ridotti degli schermi di dispositivi mobili.</li><li><strong>Responsive carousel</strong>: i carousel responsive permettono di mostrare immagini di prodotti/lavori in modo efficace ed accattivante. I vari framework e plugin hanno reso facilissima l’implementazione di questi slideshow anche per dispositivi touch.</li><li><strong>Animated graphs</strong>: molto in voga negli ultimi anni, i grafici animati sfruttano le capacità di animazione di CSS/Javascript per rendere accattivanti anche i dati di tipo numerico. Questo pattern è fondamentale per l’implementazione visuale del Data driven design.</li></ul><h2 id="wireframes" tabindex="-1"><a class="header-anchor" href="#wireframes" aria-hidden="true">#</a> Wireframes</h2><p>Dopo aver buttato giù le idee principali su carta (sketch), apriamo uno dei software per wireframing e creiamo digitalmente i wireframes del nostro sito.</p><p>Qui sotto possiamo vedere il wireframe one page realizzato con MockPlus.</p><p>Per comodità, è stato diviso in sezioni.</p><img src="'+o+'" style="max-width:400px;"><img src="'+n+'" style="max-width:400px;"><img src="'+r+'" style="max-width:400px;"><h2 id="wireframes-mobile" tabindex="-1"><a class="header-anchor" href="#wireframes-mobile" aria-hidden="true">#</a> Wireframes mobile</h2><p>Ora che abbiamo un’idea orientativa dello scheletro e del layout del nostro sito, possiamo declinare il wireframe per mobile. Questa pratica opzionale richiede un po’ di tempo in più, ma è molto utile poiché permette di evidenziare subito eventuali criticità, normalmente legato allo spazio disponibile.</p><p>In ottica responsive, adattare gli stessi contenuti per risoluzioni minori comporta l’adattamento del layout con diverse colonne della griglia e l’eventuale ri-arrangiamento di alcuni contenuti, così come uno scaling delle immagini (larghezza responsive in percentuale).</p><p>Vediamo sotto la versione mobile del wireframe, diviso sempre per comodità in sezioni.</p><img src="'+l+'" style="max-width:180px;"><img src="'+s+'" style="max-width:180px;"><img src="'+d+'" style="max-width:180px;"><img src="'+p+'" style="max-width:180px;"><h2 id="interaction-design-ed-usabilita" tabindex="-1"><a class="header-anchor" href="#interaction-design-ed-usabilita" aria-hidden="true">#</a> Interaction Design ed Usabilità</h2><p>Finora ci siamo concentrati sulla bozza del sito come rappresentazione visuale statica dell’interfaccia. Introduciamo ora brevemente alcuni concetti legati alla interattività tipica di un prodotto digitale.</p><h2 id="wireframes-interattivi" tabindex="-1"><a class="header-anchor" href="#wireframes-interattivi" aria-hidden="true">#</a> Wireframes interattivi</h2><p>Come abbiamo anticipato, dopo aver prodotto i wireframes statici andrebbero prodotti i <strong>prototipi</strong>. Lo scopo è quello di evidenziare e definire le interazioni tra l’utente e l’interfaccia e il loro impatto.</p><p>Nel nostro caso l’interazione esiste solo per componenti interattivi per antonomasia quali i bottoni e i link (navigazione, social, thumbnails del portfolio, email, eventuale back to top) ed il loro comportamento è standard. Non sono previste interazioni complesse né un vero e proprio flusso lato utente.</p><p>Per questo, piuttosto che creare i prototipi, ci limitiamo a creare un wireframe interattivo che mostra unicamente il funzionamento dell’hamburger menu su mobile per mostrare/nascondere il menu principale.</p><p>Il wireframe interattivo ha un grado di fedeltà minore dell’interfaccia rispetto al prototipo. Al contrario di quest’ultimo infatti, per essere realizzato non necessita di mockups.</p><p>Il costo dei prototipi è mediamente alto ed è quindi consigliato per progetti più grandi in cui sono necessari la creazione di flussi complessi guidati dalla user interaction e l’approvazione da parte di clienti/stakeholders.</p><p>Wireframes interattivi e prototipi sono strumenti utilizzati per l’Interaction Design.</p><h2 id="interaction-design" tabindex="-1"><a class="header-anchor" href="#interaction-design" aria-hidden="true">#</a> Interaction Design</h2><p>L’<strong>Interaction Design è la progettazione dell’interazione tra l’uomo e i sistemi informatici</strong>. Nel caso di un prodotto digitale si progetta l’interazione tra l’utente finale ed il prodotto fruibile tramite l’interfaccia</p><p>L’Interaction Design quindi è una disciplina che appartiene all&#39;ambito dell&#39;Interazione Uomo-Macchina (o Human-Computer Interaction, HCI) e si applica alla sfera UX. Creare sistemi interattivi godibili ed esteticamente piacevoli contribuisce a qualificare l’esperienza d’uso ossia come gli utenti vivono l’interazione col sistema.</p><p>Il focus è sul <strong>comportamento e le modalità di interazione ossia sugli aspetti dinamici dell’interfaccia che riflettono un cambio del sistema</strong>. Questo può avvenire come risultato di azioni dell’utente ma anche per cambiamenti interni al sistema stesso (posizioni, azioni, cambi di stato, errori, ecc…).</p><p>Il <strong>sistema deve comunicare all’utente cosa succede attraverso gli elementi dell’interfaccia</strong>. Uno degli obiettivi principali infatti è proprio quello di rendere i sistemi/prodotti usabili dagli utenti per cui sono stati realizzati.</p><h2 id="usabilita" tabindex="-1"><a class="header-anchor" href="#usabilita" aria-hidden="true">#</a> Usabilità</h2><p>L&#39;usabilità è definita dall&#39;ISO, come l&#39;efficacia, l&#39;efficienza e la soddisfazione con le quali determinati utenti raggiungono determinati obiettivi in determinati contesti. In pratica definisce il grado di facilità e soddisfazione con cui si compie l&#39;interazione tra l&#39;uomo e uno strumento</p><p>Sono fondamentali quindi nel processo di progettazione dell’interazione i principi di usabilità:</p><ul><li>Efficienza</li><li>Efficacia</li><li>Soddisfazione</li><li>Facilità di apprendimento</li><li>Facilità di memorizzazione</li><li>Sicurezza</li></ul><p>Per quanto questi principi siano misurabili, l’usabilità non riferisce ad una caratteristica precisa identificabile nel prodotto ma piuttosto al risultato della combinazione tra diversi fattori quali utenti, prodotto e scopi.</p><p>Il tipico dilemma nella definizione dell’usabilità di un prodotto sta nel <strong>gap tra il modello pensato e progettato dal designer e quello atteso dall’utente finale</strong>. Un prodotto è tanto più usabile quanto più si avvicina all’idea dell’utente finale.</p><p>Molto spesso capita di progettare interfacce pensando saranno utilizzate in un determinato modo, ma solo una volta messe a disposizione degli end user scopriamo che il loro utilizzo è completamente diverso dal nostro e da quello che ci aspettavamo.</p><p>Proprio per questo è importante <strong>sfruttare strumenti come i wireframes interattivi e/o i prototipi per condurre user tests</strong> in grado di fornirci informazioni sull’utilizzo e le aspettative di chi userà il nostro prodotto.</p>',53),u=[m];function g(f,h){return e(),a("div",null,u)}const v=i(c,[["render",g],["__file","10-creare-i-wireframes.html.vue"]]);export{v as default};
