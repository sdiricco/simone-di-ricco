# Introduzione

![Nodejs](./images/nodejs.png)

## Cos'è node

[Nodejs](https://nodejs.org/it/) è un Javascript runtime environment, permette l'esecuzione di javascript al di fuori del browser. 

Node è un'applicazione `c++` che interpreta il codice Javascript attraverso il V8 engine, un software estratto da chrome, e lo converte in linguaggio macchina.

## Caratteristiche

- Single thread
- E' basato su un meccanismo a eventi, event-loop
- Permette l'esecuzione di codice asincrono e non bloccante, non-blocking code

## Dove eseguo Node?

E' un'applicazione e può essere lanciata da terminale. 
Crea un file javascript, `esempio.js` e scrivi un po' di codice.

```javascript
const names = ["Luca", "Mario", "Giovanni", "Laura"]

const longNames = names.filter((name) => name.length >= 5);

console.log(longNames);
```

Apri un terminale all'interno della cartella di progetto e lancialo con node

```bash
node esempio.js
```

# Globals

In node non esiste nè l'oggetto `window` nè l'oggetto `document`. Queste globali sono interpretate solo dalle web api del browser.

In node alcuni oggetti locali sono:

- `__dirname`: percorso alla directory corrente
- `__filename`: percorso al file corrente
- `module`: informazioni sul modulo corrente
- `process`: informazioni sull'ambiente di esecuzione

Tutti gli oggetti globali li trovi su [Globals](https://nodejs.org/api/globals.html)

# Moduli

I moduli sono pacchetti di codice javascript che permettono di organizzare ed estendere le funzionalità del software.
Node presenta svariati moduli `built-in` che possono essere richiamati ed utilizzati. E' pratica comune inoltre scrivere moduli per oganizzare il codice a seconda delle funzionalità. In questo caso i moduli saranno semplicemente dei file Javascript organizzati a nostro piacimento. Infine è possibile estendere le funzionalità standard offerte da node attraverso l'utilizzo di pacchetti esterni scaricabili attraverso [npm](https://www.npmjs.com/), Node Package Manager.

- moduli `built-in`: inclusi in node
- moduli interni: privati, creati e utilizzati all'interno del codice
- moduli esterni: pubblici, scaricabili tramite npm.

# Moduli interni

Vediamo come si crea un modulo, come si esporta per renderlo visibile e come si importa in uno specifico modulo.

Crea un file Javascript, `constants.js`

```javascript
//constants.js

const names = ["Luca", "Mario", "Giovanni", "Laura"]

module.exports = {names};
```

`module.exports` è un oggetto e permette di **esportare** verso l'ambiente node altri oggetti o funzioni, variabili, classi..

All'interno del file principale di esecuzione node, ad esempio `index.js` importa il modulo.

```javascript
//index.js
const constants = require("./constants");

const longNames = constants.names.filter((name) => name.length >= 5);

console.log(longNames);
```

Sintassi alternativa:

```javascript
//index.js
const {names} = require("./constants");

const longNames = names.filter((name) => name.length >= 5);

console.log(longNames);
```

`require()` permette quindi l'import dei moduli.

**Attenzione** che durante l'import potrebbe essere eseguito del codice dal modulo

Vediamo un esempio:


```javascript
//constants.js

const names = ["Luca", "Mario", "Giovanni", "Laura"]

console.log(names);

module.exports = {names};
```

```javascript
//index.js
const {names} = require("./constants");

const longNames = names.filter((name) => name.length >= 5);

console.log(longNames);

//output
//["Luca", "Mario", "Giovanni", "Laura"]
//[ 'Mario', 'Giovanni', 'Laura' ]
```

`require` comporta l'esecuzione di `console.log(names);` all'interno di `constants.js` e tutto il codice eseguibile.

# Moduli Built-in

Su [Nodejs/Api](https://nodejs.org/dist/latest-v16.x/docs/api/) trovi tutte le API esposte da node con la relativa documentazione.

Vediamo a a titolo d'esempio qualche modulo built-in

## Os, path, fs

- [os](https://nodejs.org/api/os.html) fornisce utility e informazioni relative al sistema operativo come l'architettura, l'endianess, la memoria libera, la release, le versioni in utilizzo e molto altro.

```javascript
const os = require("os");

console.log(os.arch()); //x64
console.log(os.platform()); //linux
console.log(os.totalmem()); //8029188096
```

- [path](https://nodejs.org/api/path.html) forisce utility per l'eleaborazione dei path come la creazione di path relativi o assoluti, interpretazione e decodifica di path, separatori in base al sistema operativo corrente

```javascript
const path = require("path");
const filePath = "testo.txt";

console.log(path.resolve(filePath)); ///home/s/repository/wiki-programming-notes/docs/corsi/nodejs/code/testo.txt
console.log(path.basename(filePath)); //testo.txt
console.log(path.parse(filePath)); //{ root: '', dir: '', base: 'testo.txt', ext: '.txt', name: 'testo' }
```

- [fs](https://nodejs.org/api/fs.html) consente di accedere al file system quindi creare/eliminare file/directory, leggere/scrivere file. Consiglio di usare fin da subito le funzioni di `fs/promises` che utilizza promise, piuttosto che il modulo `fs` evitando di lavorare con funzioni sincrone o asincrone ma con il meccanismo delle callback

```javascript
const fs = require("fs/promises");

const filePath = "testo.txt";

async function writeLines(file, data, lines) {
  for (let i = 0; i < lines; i++) {
    const line = `line ${i}: ${data}\n`;
    await fs.writeFile(file, line, { flag: "a" });
  }
}

async function main() {


  await writeLines(filePath, "Lorem ipsum", 10);

  const result = await fs.readFile(filePath, { encoding: "utf-8" });
  console.log(result);

  const arr = result.split("\n");
  console.log(arr);

  await fs.rm(filePath);
}

main();

/*
output
line 0: Lorem ipsum
line 1: Lorem ipsum
line 2: Lorem ipsum
line 3: Lorem ipsum
line 4: Lorem ipsum
line 5: Lorem ipsum
line 6: Lorem ipsum
line 7: Lorem ipsum
line 8: Lorem ipsum
line 9: Lorem ipsum

[
  'line 0: Lorem ipsum',
  'line 1: Lorem ipsum',
  'line 2: Lorem ipsum',
  'line 3: Lorem ipsum',
  'line 4: Lorem ipsum',
  'line 5: Lorem ipsum',
  'line 6: Lorem ipsum',
  'line 7: Lorem ipsum',
  'line 8: Lorem ipsum',
  'line 9: Lorem ipsum',
  ''
]
*/
```

# Modulo http

Da [Wikipedia](https://it.wikipedia.org/wiki/Server_web), un server web è un'applicazione software che, in esecuzione su un server, è in grado di gestire le richieste di trasferimento di pagine web di un client, tipicamente un web browser. La comunicazione tra server e client avviene tramite il protocollo HTTP, che utilizza la porta TCP 80 (o 8080), o eventualmente la versione sicura HTTPS, che utilizza invece la 443. Su un server web risiedono dunque i siti web tramite hosting. L'insieme di tutti i server web interconnessi a livello mondiale dà vita al World Wide Web.

Esegui il seguente script node

```javascript
//index.js
const http = require('http');
const server = http.createServer((req, res) =>{
    if (req.url === '/') {
        res.end(`<h1>Benvenuto nel sito</h1>`)
    }
    else if (req.url === '/contatti') {
        res.end(`<h1>Benvenuto nella sezione contatti</h1>`)
    }
    else{
        res.end(`<h1>Errore</h1><p>Torna alla <a href="/">home</a></p>`)
    }
})

server.listen(8080);
```

Apri da browser `http://localhost:8080/`, ti ritroverai nella pagina principale cioè nella root o home.
Puoi provare a passare alla pagina contatti, `http://localhost:8080/contatti` o a una pagina inesistente, `http://localhost:8080/ilmioprofilo`

# Moduli esterni - NPM

[NPM](https://www.npmjs.com/), node package manager, è una repository contenente pacchetti di codice javascript scaricabili e installabili gratuitamente.

All'installazione di node è associata l'installazione di npm. Assicurati che sia installato digitando:

```bash
npm -v
```

Proviamo ad installare un pacchetto molto comune, [lodash](https://www.npmjs.com/package/lodash), un pacchetto che permette di lavorare in modo semplificato con array/oggetti.

Collegandosi sulla pagina relativa a [lodash](https://www.npmjs.com/package/lodash), in alto a sinistra troverai il comando da utilizzare per installarlo.

```bash
npm i lodash
```

Lanciando il comando all'interno della tua directory di progetto vedrai che verranno aggiunti i file `package.json`, `package-lock.json` e la directory `node_modules`.

Puoi aprire i file `package.json`, `package-lock.json`. Troverai qualcosa come:

```json
//package.json
{
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

```json
//package.json
{
  "name": "code",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "dependencies": {
        "lodash": "^4.17.21"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
    }
  },
  "dependencies": {
    "lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
    }
  }
}
```

In `node_modules` invece troverai una directory dedicata a `lodash` contenente il codice sorgente e tutte le eventuali **dipendenze** utili a `lodash` per funzionare.

# Package.json

L'installazione di un pacchetto node comporta la creazione del file `package.json`, `package-lock.json` e la directory `node_modules`. Il `package.json` è un file importante per un progetto node, contiene tutte le informazioni necessaria allo sviluppo del progetto e alle dipendenze esterne.

Per creare correttamente un progetto node si utilizza lo script `npm init` o `npm init -y`

- `npm init`: chiede all'utente una serie di informazioni di progetto e crea il `package.json`
- `npm init -y`: crea un `package.json` con valori di default.

Lancia lo script `npm init` o `npm init -y` e apri il `package.json`,

```json
//package.json
{
  "name": "code",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

A questo punto il progetto node è inizializzato correttamente e puoi passare alla creazione di file o scaricare pacchetti da npm.  

## Package-lock.json

Nel `package-lock.json` sono memorizzate le versioni esatte dei pacchetti utilizzate dal progetto, vediamo quando può essere utile. 
Supponi di installare lodash. Nel `package.json` troverai il pacchetto installato tra le `dependecies`

```json
{
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

La nomenclatura `^xx.xx.xx` indica che la versione del pacchetto può essere `xx.xx.xx` o superiore.

All'interno del `package-lock.json` trovi la versione esatta:

```json
"node_modules/lodash": {
  "version": "4.17.21",
  "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
  "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
}
```

Immagina adesso che il tuo progetto abbia diversi pacchetti e che sia in sviluppo da molto tempo. Finchè mantieni il `package-lock.json` le versioni rimangono quelle relative all'ultima volta che il pacchetto è stato installato. I pacchetti su npm tuttavia sono in constante aggiornamento quindi è probabile che installando nuovamente determinati pacchetti le versioni si aggiornino. Ora, se tu dovessi cancellare il `package-lock.json` e reinstallare tutti i pacchetti, verrebbero installate le ultime versioni. Nella maggior parte dei casi aggiornare un pacchetto o più pacchetti non rappresenta un problema ma in alcuni casi specifici potrebbe diventarlo dal momento che possono essere utilizzate delle vecchie sintassi considerate `deprecated` e, a volte, potrebbe compromettere il funzionamento del software. Il `package-lock.json` garantisce che l'installazione dei pacchetti sia relativa alla specifica versione riportata all'interno dello stesso. Quindi, al fine di ricostruire esattamente l'ambiente di sviluppo di un particolare progetto è necessario avere soltanto il `package.json` e il `package-lock.json`. La directory `node_modules` non è importante dal momento che con `npm i`, per mezzo del `package.json` e `package-lock.json` verrebbe esattamente ricostruita. Se il tuo progetto è sottoposto a versionamento (git, svn) la cartella `node_modules` va esclusa dai file da committare.
 
## Qualche dettaglio in più sulle versioni

Ogni pacchetto è rappresentato da un numero di versione che comprende tre cifre: `x.y.z`

- `x`: **major update**, aggiornamenti importanti. Potrebbero compromettere l'intera struttura del pacchetto ed essere non retrocompatibili
- `y`: **minor update**, aggiornamenti minori. Potrebbero aggiungere funzionalità aggiuntive anche non completamente testate o risolvere alcuni bugfix ma garantiscono retrocompatibilità a parità di minor update
- `z`: **patch**, bug fix, aggiornamenti minimi. Non compromettono la stabilità del pacchetto

```bash
x.y.z
| | |
| | patch
| minor update
major update
```

# Qualche comando npm

Vediamo una lista di comandi `npm` utili.

```bash
npm -v
npm init
npm init -y
npm i package
npm i -g package
npm unistall package
npm i package --save-dev
```

In particolare:

- `npm -v`: check sulla versione installata
- `npm init`: inizializzazione progetto node
- `npm init -y`: inizializzazione progetto node con parametri di default
- `npm i lodash`: installazione locale del pacchetto `lodash`. Inserisce il pacchetto tra le `dependencies` del `package.json`
- `npm i -g node-gyp`: installazione globale (a livello di sistema e non di progetto) del pacchetto `npde-gyp`. In particolare questo pacchetto è utili per la compilazione dei moduli nativi `node`
- `npm unistall lodash`: disinstallazione del pacchetto `lodash`
- `npm i nodemon --save-dev`: installazione del pacchetto `nodemon` tra le `dev-dependencies` ovvero tra le dipendenze di sviluppo del progetto ma non necessarie al funzionamento del software. 

## Nodemon

`nodemon` sta in ascolto sui cambiamenti dello script `node` in esecuzione e ricompila al salvataggio. Evita di dover ogni volta rilanciare lo script da terminale.

Per usare `nodemon`, installa il pacchetto e aggiungilo alle `dev-dependencies`. Non è una dipendenza del codice ma solo per lo sviluppo del progetto: 

```bash
npm i nodemon --save-dev
```

Aggiungi uno script nella sezione `script` del `package.json`:

```json
{
  "name": "express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```

A questo punto lanciando:

```bash
npm start
```

verrà eseguito lo script `nodemon index.js` che lancerà lo script `index.js` con node restando in ascolto sui cambiamenti.

# Event loop

Se vuoi sapere qualche dettaglio in più su come funziona node, ti invito a visitare code [Event Loops in NodeJS – Beginner's Guide to Synchronous and Asynchronous Code](https://www.freecodecamp.org/news/nodejs-eventloop-tutorial/) e [Concurrency model and the event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop?retiredLocale=it). Spesso troverai queste parole chiave:

- single thread
- async
- non blocking code
- event queue
- call stack

La programmazione in Javascript è fortemente orientata agli eventi ed è di natura asincrona.

- Quando arriva un evento, node lo registra nella coda degli eventi.
- Quando una funzione asincrona viene invocata, l'esecuzione passa in background e il processo node va avanti.
- Se una funzione asincrona viene invocata con la keyword `await`, node non prosegue con l'esecuzione del codice ma continua ad eseguire gli eventi. Quando la funzione asincrona termina il processo node continua con lo statemeant successivo.
- Tutto il codice sincrono in Javascript ha massima priorità ed è eseguito all'avvio del processo node o al `require` del modulo.
- La gerarchia delle priorità continua con gli eventi e con le chiamate a funzione delle relative callback registrate da una funzione asincrona

# Modulo Events

Il modulo `events` ti consente di generare eventi o di estendere moduli software che già utilizzano eventi.

```javascript
const events = require("events");
const eventEmitter = new events.EventEmitter();
eventEmitter.on("my-event", (data) => {
  console.log("data received successfully.", data);
});
eventEmitter.emit("my-event", {
  success: true,
  code: 12,
  message: "right-mode",
});

/*
output
data received successfully. { success: true, code: 12, message: 'right-mode' }
*/
```

## Stream

Attraverso lo stream, sarai in grado di leggere un flusso di dati continuo in modo efficiente. Per capire il concetto di stream immagina di voler vedere un film da internet. Hai due opzioni:

- Ti colleghi a un sito di streaming come [Netflix]() o [Amazon prime video](), scegli un film e lo esegui
- Scarichi un film in locale e lo esegui.

Attraverso lo streaming sei in grado di mandare in in esecuzione un film istantaneamente. Non appena sarò pronto il primo pacchetto di dati verrà caricato il secondo durante l'esecuzione del video. Questo tipo di modalità permette all'utente una fruizione istantanea del contenuto.
Scegliendo invece di voler scaricare l'intero film in locale, avrai bisogno di aspettare del tempo prima di poterlo eseguire.

Vediamo un esempio molto simile con la lettura di un file di testo.

No stream, lettura completa
```javascript
var fs = require("fs/promises");

const main = async () => {
  try {
    const result = await fs.readFile("./file.txt", { encoding: "utf8" });
    console.log(result)
  } catch (e) {
    console.log(e);
  }
};

main();
```

Utilizzo lo stream
```javascript
var fs = require("fs");

const stream = fs.createReadStream('file.txt');
stream.on('data', (result) => {
    console.log(result) //stampa buffer da 64Kbyte
})
```

## Express

### express - 01

```javascript
const express = require("express");
const app = express();

//homepage
app.get('/', (req, res) => {
    res.send(`<h1>Home</h1>`)
})

//about
app.get('/about', (req, res) => {
    res.send(`<h1>About</h1>`)
})

//contatti
app.get('/contatti', (req, res) => {
    res.send(`<h1>Contatti</h1>`)
})

app.all('*', (req, res)=>{
    res.send(`<h1>Risorsa non trovata</h1>`)
})

app.listen(3000);
```

### express - 02

```javascript
const express = require("express");
const app = express();

app.use(express.static('public'));

//homepage
app.get('/', (req, res) => {
    res.sendFile("homepage.html", {root: __dirname + "/public"})
})

//about
app.get('/about', (req, res) => {
    res.sendFile("about.html", {root: __dirname + "/public"})
})

//contatti
app.get('/contatti', (req, res) => {
    res.sendFile("contatti.html", {root: __dirname + "/public"})
})

app.all('*', (req, res)=>{
    res.sendFile("404.html", {root: __dirname + "/public"})
})

app.listen(3000);
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error</title>
</head>
<body>
    <h1>Error 404</h1>
    <p>pagina non trovata. Torna alla <a href="/">Homepage</a></p>
</body>
</html>
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>
</head>
<body>
    <h1>About</h1>
    <p>benvenuto in about</p>
</body>
</html>
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contatti</title>
</head>
<body>
    <h1>Contatti</h1>
    <p>benvenuto nella sezione contatti</p>
</body>
</html>
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
</head>
<body>
    <h1>Homepage</h1>
    <p>benvenuto nella hompage</p>
</body>
</html>
```

### express - 03

```javascript
const express = require("express");
const app = express();
const {persone} = require('./persone')

app.get("/", (req, res) => {
  res.json(persone);
});

app.listen(3000);

```

```javascript
const persone = [
  {
    id: "0",
    nome: "Luca",
    cognome: "Rossi",
    eta: "25",
    indirizzo: { citta: "Milano", via: "Via Torino", cap: "56789" },
    interessi: ["Calcio", "Tennis"],
  },
  {
    id: "1",
    nome: "Marta",
    cognome: "Neri",
    eta: "25",
    indirizzo: { citta: "Lucca", via: "Via Roma", cap: "56111" },
    interessi: ["Calcio", "Basket"],
  },
  {
    id: "2",
    nome: "Marco",
    cognome: "Verdi",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
];

module.exports = {persone}
```
### express - 04

```javascript
const express = require("express");
const app = express();
const { persone } = require("./persone");

app.get("/", (req, res) => {
  res.send('<h1>Homepage</h1><a href="/persone">vai su persone</a>')
});

app.get('/persone', (req, res) => {
  const __persone = persone.map((persona) => {
    const {nome, cognome, eta} = persona;
    return {nome, cognome, eta}
  })
  res.json(__persone);
});

//Posso inserire parametri a piacere attraverso l'operatore ":"
//Attenzione ai tipi!! Meglio usare stringhe visto che poi è il modo con cui possiamo interrogare i db
app.get('/persone/:id', (req, res) => {
  console.log(req.params)
  const {id} = req.params;
  const persona = persone.find((persona) => persona.id === id)
  
  //Gestione dell'errore
  if (!persona) {
    return res.status(404).send({messaggio: "non trovato", code: 404})
  }

  res.json(persona);
})

app.listen(3000);

```
```javascript
const persone = [
  {
    id: "0",
    nome: "Luca",
    cognome: "Rossi",
    eta: "25",
    indirizzo: { citta: "Milano", via: "Via Torino", cap: "56789" },
    interessi: ["Calcio", "Tennis"],
  },
  {
    id: "1",
    nome: "Marta",
    cognome: "Neri",
    eta: "25",
    indirizzo: { citta: "Lucca", via: "Via Roma", cap: "56111" },
    interessi: ["Calcio", "Basket"],
  },
  {
    id: "2",
    nome: "Marco",
    cognome: "Verdi",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
];

module.exports = {persone}
```
### express - 05

```javascript
const express = require("express");
const app = express();
const { persone } = require("./persone");

app.get("/", (req, res) => {
  res.send('<h1>Homepage</h1><a href="/persone">vai su persone</a>')
});

app.get('/persone', (req, res) => {
  const __persone = persone.map((persona) => {
    const {nome, cognome, eta} = persona;
    return {nome, cognome, eta}
  })
  res.json(__persone);
});

//Posso inserire parametri a piacere attraverso l'operatore ":"
//Attenzione ai tipi!! Meglio usare stringhe visto che poi è il modo con cui possiamo interrogare i db
app.get('/persone/:id', (req, res) => {
  console.log(req.params)
  const {id} = req.params;
  const persona = persone.find((persona) => persona.id === id)
  
  //Gestione dell'errore
  if (!persona) {
    return res.status(404).send({messaggio: "non trovato", code: 404})
  }

  res.json(persona);
})

//La seguente è una query
//http://localhost:3000/p1/search/?nome=Marta&cognome=Neri
app.get('/p1/search', (req, res) => { 
  console.log(req.query) //{ nome: 'Marta', cognome: 'Neri' }
  res.send('<h1>query</h1>')
})

//Faccio una ricerca per nome
//prova con:
//http://localhost:3000/p2/search/
//http://localhost:3000/p2/search/?query=Marta
//il primo caso ritorna tutti, il secondo ritorna solo quello con nome Marta.
//
//prova con
//http://localhost:3000/p2/search/?query=M
app.get('/p2/search', (req, res) => { 
  const {query, limit} = req.query
  let personeFiltered = [...persone];

  if(query){
    personeFiltered = personeFiltered.filter((persona) => {
      return persona.nome.startsWith(query)
    })
  }

  res.status(200).json(personeFiltered)
})

//Faccio una ricerca per nome e limite
//Il limite ti permette di ricevere n elementi tra quelli validi
//prova con:
//http://localhost:3000/p3/search/
//http://localhost:3000/p3/search/?limit=2
//http://localhost:3000/p3/search/?query=M&limit=2
// 
//Il primo caso manda a schermo tutti 
//Il secondo manda a schermo i primi 2
//Il terzo manda a schermo i primi due validi il cui nome inizia con M
app.get('/p3/search', (req, res) => { 
  const {query, limit} = req.query
  let personeFiltered = [...persone];

  if(query){
    personeFiltered = personeFiltered.filter((persona) => {
      return persona.nome.startsWith(query)
    })
  }

  if(limit){
    personeFiltered = personeFiltered.slice(0, Number(limit))
  }

  res.status(200).json(personeFiltered)
})


app.get('/p4/search', (req, res) => { 
  const {query, limit} = req.query
  let personeFiltered = [...persone];

  if(query){
    personeFiltered = personeFiltered.filter((persona) => {
      return persona.nome.startsWith(query)
    })
  }

  if(limit){
    personeFiltered = personeFiltered.slice(0, Number(limit))
  }

  if (!personeFiltered.length) {
    //In questo caso è necessario il return perchè altrimenti manda due risposte
    //c'è anche il res.status() sotto questo if
    return res.status(200).json({code: 200, data:[]})
  }

  res.status(200).json(personeFiltered)
})

app.listen(3000);

```
```javascript
const persone = [
  {
    id: "0",
    nome: "Luca",
    cognome: "Rossi",
    eta: "25",
    indirizzo: { citta: "Milano", via: "Via Torino", cap: "56789" },
    interessi: ["Calcio", "Tennis"],
  },
  {
    id: "1",
    nome: "Marta",
    cognome: "Neri",
    eta: "25",
    indirizzo: { citta: "Lucca", via: "Via Roma", cap: "56111" },
    interessi: ["Calcio", "Basket"],
  },
  {
    id: "2",
    nome: "Marco",
    cognome: "Verdi",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
  {
    id: "3",
    nome: "Maria",
    cognome: "Livetti",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
  {
    id: "4",
    nome: "Giovanni",
    cognome: "Antonini",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
  {
    id: "5",
    nome: "Metteo",
    cognome: "Luisi",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
];

module.exports = {persone}
```
### express - 06

```javascript
const express = require("express");
const app = express();
const { persone } = require("./persone");

//Middleware
//Sono funzioni che vengono eseguitedurante la richiesta, tra la richiesta e la risposta.
//In genere i middleware sono moduli

const middlewareTest = (req, res, next)=>{
  const {method, url} = req;
  const time = new Date().getMinutes()
  console.log("method", method)
  console.log("url", url)
  console.log("time",time)

  //next() è importante. Serve per passare allo "step" successivo
  //senza next() non passa oltre e rimane bloccato
  //potrei anche utilizzare res.send() ma a questo punto salto gli "step" successivi
  //ad ogni modo next() o res.send() servono
  next()
}

app.get('/', middlewareTest, (req, res) => {
  res.send("Homepage")
})


app.get('/about', middlewareTest, (req, res) => {
  res.send("About")
})

app.listen(3000);

```

```javascript
const persone = [
  {
    id: "0",
    nome: "Luca",
    cognome: "Rossi",
    eta: "25",
    indirizzo: { citta: "Milano", via: "Via Torino", cap: "56789" },
    interessi: ["Calcio", "Tennis"],
  },
  {
    id: "1",
    nome: "Marta",
    cognome: "Neri",
    eta: "25",
    indirizzo: { citta: "Lucca", via: "Via Roma", cap: "56111" },
    interessi: ["Calcio", "Basket"],
  },
  {
    id: "2",
    nome: "Marco",
    cognome: "Verdi",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
  {
    id: "3",
    nome: "Maria",
    cognome: "Livetti",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
  {
    id: "4",
    nome: "Giovanni",
    cognome: "Antonini",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
  {
    id: "5",
    nome: "Metteo",
    cognome: "Luisi",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
];

module.exports = {persone}
```

### express - 07

```javascript
const express = require("express");
const app = express();
const { persone } = require("./persone");
const {middlewareTest, auth} = require("./middlewareTest")

//con app.use posso usare il middleware su tutti
// app.use(middlewareTest)

//in questo modo applico il middleware solo ai percorsi che derivano da '/persone'
// app.use('/persone',middlewareTest)

//applico multipli middleware in cascata
// app.use([middlewareTest, auth])

//posso applicare i middleware a uno specifico rout passanodo un array ..

app.use(middlewareTest)

app.get('/', (req, res) => {
  res.send("Homepage")
})

app.get('/about', (req, res) => {
  res.send("About")
})

app.get('/area', [middlewareTest, auth], (req, res) => {
  res.send("Area privata")
})

app.get('/persone', (req, res) => {
  res.send("Persone")
})

app.get('/persone/ricche', (req, res) => {
  res.send("Persone ricche")
})

app.get('/persone/povere', (req, res) => {
  res.send("Persone povere")
})

app.listen(3000);

```
```javascript
//Middleware
//Sono funzioni che vengono eseguitedurante la richiesta, tra la richiesta e la risposta.
//In genere i middleware sono moduli

const middlewareTest = (req, res, next) => {
  const { method, url } = req;
  const time = new Date().getMinutes();
  console.log("method", method);

  //l'url è "relativo"
  console.log("url", url);
  console.log("time", time);

  //next() è importante. Serve per passare allo "step" successivo
  //senza next() non passa oltre e rimane bloccato
  //potrei anche utilizzare res.send() ma a questo punto salto gli "step" successivi
  //ad ogni modo next() o res.send() servono
  next();
};

const auth = (req, res, next) => {
  const {user} = req.query;
  //http://localhost:3000/area?user=Luca
  if(user === 'Luca'){
    next()
  }else{
    res.status(401).send("Non autorizzato")
  }
  console.log('accesso effettuato')
  next();
};


module.exports = {middlewareTest, auth};

```
```javascript
const persone = [
  {
    id: "0",
    nome: "Luca",
    cognome: "Rossi",
    eta: "25",
    indirizzo: { citta: "Milano", via: "Via Torino", cap: "56789" },
    interessi: ["Calcio", "Tennis"],
  },
  {
    id: "1",
    nome: "Marta",
    cognome: "Neri",
    eta: "25",
    indirizzo: { citta: "Lucca", via: "Via Roma", cap: "56111" },
    interessi: ["Calcio", "Basket"],
  },
  {
    id: "2",
    nome: "Marco",
    cognome: "Verdi",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
  {
    id: "3",
    nome: "Maria",
    cognome: "Livetti",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
  {
    id: "4",
    nome: "Giovanni",
    cognome: "Antonini",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
  {
    id: "5",
    nome: "Metteo",
    cognome: "Luisi",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Ping pong", "Hockey"],
  },
];

module.exports = {persone}

```
### express - 08

```javascript
const express = require("express");
const app = express();

//postman -> permette di testare richieste http. 
//Se apri postman e fai una get con localhost:3000/ vedrai che ti restituirà il risultato che hai del browser

//questo è un middleware che ci permette di leggere un json in entrata
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Homepage")
})

app.get('/utente', (req, res) => {
  res.json({nome: "Luca", cognome: "Rossi"})
})

app.post('/', (req, res)=>{
  console.log(req.body);
  res.send('ok post')
})

app.put('/', (req, res)=>{
  console.log(req.body);
  res.send('ok put')
})

app.delete('/', (req, res)=>{
  res.send('ok delete')
})



app.listen(3000);

```
### express - 09

```javascript
const { application } = require("express");
const express = require("express");
const app = express();
const {persone} = require('./persone');

app.get('/api/persone', (req, res)=>{
  res.status(200).json({success: true, data: persone})
})

//Prova da postman con:
//localhost:3000/api/persone/2
app.get('/api/persone/:id', (req, res)=>{
  const {id} = req.params
  const persona = persone.find(persona => persona.id === id)
  res.json({success: true, data: persona});
})

app.listen(3000);

```

```javascript
const persone = [
  {
    id: "0",
    nome: "Luca",
    cognome: "Rossi",
    eta: "25",
    indirizzo: { citta: "Milano", via: "Via Torino", cap: "56789" },
    interessi: ["Calcio", "Tennis"],
  },
  {
    id: "1",
    nome: "Marta",
    cognome: "Neri",
    eta: "25",
    indirizzo: { citta: "Lucca", via: "Via Roma", cap: "56111" },
    interessi: ["Corsa", "Nuoto"],
  },
  {
    id: "2",
    nome: "Marco",
    cognome: "Verdi",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Tennis", "Hockey"],
  },
  {
    id: "3",
    nome: "Maria",
    cognome: "Livetti",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "viale delle erbe", cap: "56113" },
    interessi: ["Lettura", "Basket"],
  },
  {
    id: "4",
    nome: "Giovanni",
    cognome: "Antonini",
    eta: "22",
    indirizzo: { citta: "Navacchio", via: "Via degli Ulivi", cap: "67892" },
    interessi: ["Ping pong", "Serf"],
  },
  {
    id: "5",
    nome: "Matteo",
    cognome: "Luisi",
    eta: "34",
    indirizzo: { citta: "Ro", via: "Via Pergola", cap: "45666" },
    interessi: ["Cucina", "Pugilato"],
  },
];

module.exports = {persone}

```
### express - 10

```javascript
const { application } = require("express");
const express = require("express");
const app = express();
const {persone} = require('./persone');

app.use(express.json())

app.get('/api/persone', (req, res)=>{
  res.status(200).json({success: true, data: persone})
})

//Prova da postman con:
//localhost:3000/api/persone/2
app.get('/api/persone/:id', (req, res)=>{
  const {id} = req.params
  const persona = persone.find(persona => persona.id === id)
  res.json({success: true, data: persona});
})

//E' stata aggiunta una persona..
//Tuttavia non viene salvato nel file
//prova a fare un esercizion con un form
app.post('/api/persone', (req, res)=>{
  console.log(req.body);
  const persona = req.body;
  persone.push(persona);
  res.status(200).json({success:true, data:persone})

})
app.listen(3000);

```

```javascript
const persone = [
  {
    id: "0",
    nome: "Luca",
    cognome: "Rossi",
    eta: "25",
    indirizzo: { citta: "Milano", via: "Via Torino", cap: "56789" },
    interessi: ["Calcio", "Tennis"],
  },
  {
    id: "1",
    nome: "Marta",
    cognome: "Neri",
    eta: "25",
    indirizzo: { citta: "Lucca", via: "Via Roma", cap: "56111" },
    interessi: ["Corsa", "Nuoto"],
  },
  {
    id: "2",
    nome: "Marco",
    cognome: "Verdi",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Tennis", "Hockey"],
  },
  {
    id: "3",
    nome: "Maria",
    cognome: "Livetti",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "viale delle erbe", cap: "56113" },
    interessi: ["Lettura", "Basket"],
  },
  {
    id: "4",
    nome: "Giovanni",
    cognome: "Antonini",
    eta: "22",
    indirizzo: { citta: "Navacchio", via: "Via degli Ulivi", cap: "67892" },
    interessi: ["Ping pong", "Serf"],
  },
  {
    id: "5",
    nome: "Matteo",
    cognome: "Luisi",
    eta: "34",
    indirizzo: { citta: "Ro", via: "Via Pergola", cap: "45666" },
    interessi: ["Cucina", "Pugilato"],
  },
];

module.exports = {persone}

```
### express - 11

```javascript
const { application } = require("express");
const express = require("express");
const app = express();
const {persone} = require('./persone');

app.use(express.json())

app.get('/api/persone', (req, res)=>{
  res.status(200).json({success: true, data: persone})
})

//Prova da postman con:
//localhost:3000/api/persone/2
app.get('/api/persone/:id', (req, res)=>{
  const {id} = req.params
  const persona = persone.find(persona => persona.id === id)
  res.json({success: true, data: persona});
})

//E' stata aggiunta una persona..
//Tuttavia non viene salvato nel file
//prova a fare un esercizion con un form
app.post('/api/persone', (req, res)=>{
  console.log(req.body);
  const persona = req.body;
  persone.push(persona);
  res.status(200).json({success:true, data:persone})

})

//serve per modificare
app.put('/api/persone/:id', (req, res) => {
  const {id} = req.params;
  const persona = req.body;
  persone[Number(id) - 1] = persona;
  res.status(200).json({success: true, data: persone})
})


app.listen(3000);

```
```javascript
const persone = [
  {
    id: "0",
    nome: "Luca",
    cognome: "Rossi",
    eta: "25",
    indirizzo: { citta: "Milano", via: "Via Torino", cap: "56789" },
    interessi: ["Calcio", "Tennis"],
  },
  {
    id: "1",
    nome: "Marta",
    cognome: "Neri",
    eta: "25",
    indirizzo: { citta: "Lucca", via: "Via Roma", cap: "56111" },
    interessi: ["Corsa", "Nuoto"],
  },
  {
    id: "2",
    nome: "Marco",
    cognome: "Verdi",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Tennis", "Hockey"],
  },
  {
    id: "3",
    nome: "Maria",
    cognome: "Livetti",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "viale delle erbe", cap: "56113" },
    interessi: ["Lettura", "Basket"],
  },
  {
    id: "4",
    nome: "Giovanni",
    cognome: "Antonini",
    eta: "22",
    indirizzo: { citta: "Navacchio", via: "Via degli Ulivi", cap: "67892" },
    interessi: ["Ping pong", "Serf"],
  },
  {
    id: "5",
    nome: "Matteo",
    cognome: "Luisi",
    eta: "34",
    indirizzo: { citta: "Ro", via: "Via Pergola", cap: "45666" },
    interessi: ["Cucina", "Pugilato"],
  },
];

module.exports = {persone}

```
### express - 12

```javascript
const { application } = require("express");
const express = require("express");
const app = express();
const {persone} = require('./persone');

app.use(express.json())

app.get('/api/persone', (req, res)=>{
  res.status(200).json({success: true, data: persone})
})

//Prova da postman con:
//localhost:3000/api/persone/2
app.get('/api/persone/:id', (req, res)=>{
  const {id} = req.params
  const persona = persone.find(persona => persona.id === id)
  res.json({success: true, data: persona});
})

//E' stata aggiunta una persona..
//Tuttavia non viene salvato nel file
//prova a fare un esercizion con un form
app.post('/api/persone', (req, res)=>{
  console.log(req.body);
  const persona = req.body;
  persone.push(persona);
  res.status(200).json({success:true, data:persone})

})

//serve per modificare
app.put('/api/persone/:id', (req, res) => {
  const {id} = req.params;
  const persona = req.body;
  persone[Number(id) - 1] = persona;
  res.status(200).json({success: true, data: persone})
})

app.delete('/api/persone/:id', (req, res)=>{
  console.log(req.params)
  const {id} = req.params;
  const idx = persone.findIndex(persona => persona.id === id)
  persone.splice(idx, 1);
  res.status(200).json({success:true, data:persone});
})

app.listen(3000);

```

```javascript
const persone = [
  {
    id: "0",
    nome: "Luca",
    cognome: "Rossi",
    eta: "25",
    indirizzo: { citta: "Milano", via: "Via Torino", cap: "56789" },
    interessi: ["Calcio", "Tennis"],
  },
  {
    id: "1",
    nome: "Marta",
    cognome: "Neri",
    eta: "25",
    indirizzo: { citta: "Lucca", via: "Via Roma", cap: "56111" },
    interessi: ["Corsa", "Nuoto"],
  },
  {
    id: "2",
    nome: "Marco",
    cognome: "Verdi",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Tennis", "Hockey"],
  },
  {
    id: "3",
    nome: "Maria",
    cognome: "Livetti",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "viale delle erbe", cap: "56113" },
    interessi: ["Lettura", "Basket"],
  },
  {
    id: "4",
    nome: "Giovanni",
    cognome: "Antonini",
    eta: "22",
    indirizzo: { citta: "Navacchio", via: "Via degli Ulivi", cap: "67892" },
    interessi: ["Ping pong", "Serf"],
  },
  {
    id: "5",
    nome: "Matteo",
    cognome: "Luisi",
    eta: "34",
    indirizzo: { citta: "Ro", via: "Via Pergola", cap: "45666" },
    interessi: ["Cucina", "Pugilato"],
  },
];

module.exports = {persone}

```
### express - 13

```javascript
const express = require("express");
const personeRouter = require('./routs/persone')
const prodottiRouter = require('./routs/prodotti')

const app = express();

app.use(express.json())

app.use('/api/persone', personeRouter)
app.use('/api/prodotti', prodottiRouter)

app.listen(3000);

```

```javascript
const express = require("express");
const { persone } = require("../persone");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: persone });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const persona = persone.find((persona) => persona.id === id);
  res.json({ success: true, data: persona });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const persona = req.body;
  persone.push(persona);
  res.status(200).json({ success: true, data: persone });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const persona = req.body;
  persone[Number(id) - 1] = persona;
  res.status(200).json({ success: true, data: persone });
});

router.delete("/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const idx = persone.findIndex((persona) => persona.id === id);
  persone.splice(idx, 1);
  res.status(200).json({ success: true, data: persone });
});

module.exports = router;

```
```javascript
const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
  res.status(200).json({success: true, data: {nome: "sedia", costo: "35E"}})
})

module.exports = router;

```
```javascript
const persone = [
  {
    id: "0",
    nome: "Luca",
    cognome: "Rossi",
    eta: "25",
    indirizzo: { citta: "Milano", via: "Via Torino", cap: "56789" },
    interessi: ["Calcio", "Tennis"],
  },
  {
    id: "1",
    nome: "Marta",
    cognome: "Neri",
    eta: "25",
    indirizzo: { citta: "Lucca", via: "Via Roma", cap: "56111" },
    interessi: ["Corsa", "Nuoto"],
  },
  {
    id: "2",
    nome: "Marco",
    cognome: "Verdi",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "Via Milano", cap: "56113" },
    interessi: ["Tennis", "Hockey"],
  },
  {
    id: "3",
    nome: "Maria",
    cognome: "Livetti",
    eta: "23",
    indirizzo: { citta: "Pistoia", via: "viale delle erbe", cap: "56113" },
    interessi: ["Lettura", "Basket"],
  },
  {
    id: "4",
    nome: "Giovanni",
    cognome: "Antonini",
    eta: "22",
    indirizzo: { citta: "Navacchio", via: "Via degli Ulivi", cap: "67892" },
    interessi: ["Ping pong", "Serf"],
  },
  {
    id: "5",
    nome: "Matteo",
    cognome: "Luisi",
    eta: "34",
    indirizzo: { citta: "Ro", via: "Via Pergola", cap: "45666" },
    interessi: ["Cucina", "Pugilato"],
  },
];

module.exports = {persone}

```

## Mongodb

Per l'installazione di [mongodb]() su linux segui la [guida ufficiale](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/).
Installa anche [compass](https://docs.mongodb.com/compass/current/install/), ti servirà per una gestione da GUI di mongo db

Per far partire mongo db:

```bash
sudo systemctl start mongod
```

Per stoppare il processo

```bash
sudo systemctl stop mongod
```

Per verificare lo stato di mongodb

```bash
sudo systemctl status mongod
```

Per far partire una sessione

```bash
mongosh
```

### Comandi

Mostra i database locali
```bash
test> show dbs
```

Crea un database
```bash
test> use mydb
```

Crea una collection
```bash
mydb> db.utenti
```

Aggiundi un documento, un oggetto

```bash
db.utenti.insertOne({"nome": "Luca", "cognome": "Rossi", "citta": "Lucca", "eta": 41})


{
  acknowledged: true,
  insertedId: ObjectId("61c9e5bede4c093ee7fa6b67")
}
```

Inserisci più oggetti, documenti

```bash
db.utenti.insertMany([{"nome": "Luca", "cognome": "Rossi", "citta": "Lucca", "eta": 41}, {"nome": "Matteo", "cognome": "Andrei", "citta": "Padova"}])

{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("61c9e64dde4c093ee7fa6b68"),
    '1': ObjectId("61c9e64dde4c093ee7fa6b69")
  }
}
```

Posso vedere questo database su `compass`.

Come puoi notare posso inserire qualsiasi tipo oggetto json-like senza nessun controllo dello schema.



