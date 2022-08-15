# Typescript

Da [wikipedia](https://it.wikipedia.org/wiki/TypeScript) TypeScript è un linguaggio di programmazione open source sviluppato da Microsoft. Si tratta di un Super-set di JavaScript che basa le sue caratteristiche su ECMAScript 6.

Il linguaggio estende la sintassi di JavaScript in modo che qualunque programma scritto in JavaScript sia anche in grado di funzionare con TypeScript senza nessuna modifica. È stato progettato per lo sviluppo di grandi applicazioni ed è destinato a essere compilato in JavaScript per poter essere interpretato da qualunque web browser o app.

## Caratteristiche:

- E' Javascript
- Ha una fase di transpilazione
- Supporto alle caratteristiche future di ES
- Pensato per Applicazioni Enterprise
- Rispetta gli standard ECMA
- Utilizzabile con NodeJS
- Options Static Typed
- Adozione graduale
- Language Service integrato negli IDE
- Pieno supporto alle Classi

## Qualche guida di riferimento

- [mrv-typescript](https://www.mrw.it/javascript/guida-typescript/)

## Installazione di Typescript

Puoi installare [Typescript](https://www.typescriptlang.org/) come un pacchetto globale [npm](https://www.npmjs.com/). Assicurati quindi di aver installato [NodeJs](https://nodejs.org/it/)

```bash
npm install typescript --save-dev //Locally as dev dependency.
npm install typescript -g         //Install as a global module.
npm install typescript@latest -g  //Update Typecript
```

## Primo esempio

Per inizializzare un progetto con Typescript, da terminale digita:

```bash
tsc -init
```

Verrà creato un file `tsconfig.json` che per il momento puoi ignorare.

A questo punto puoi creare un file Typescript, ad esempio `index.ts` e, come riferimento, puoi copiare il seguente pezzo di codice:

```javascript
//index.ts
function mapWord(words: (string|null)[], filter: (word : string | null) => boolean) : number{
    var count = 0;
    for(const word of words){
        if(filter(word)){
            count = count + 1;
        }
    }
    return count;
}

function filterEqual(key: string | null) : (word: string | null) => boolean{
    return function(word: string | null): boolean{
        return word === key
    }
}

const nullRes = mapWord(["uno", "due", "tre", null, "quattro", null, "uno"], filterEqual(null));
console.log(nullRes); //2
const unoRes = mapWord(["uno", "due", "tre", null, "quattro", null, "uno"], filterEqual("uno"));
console.log(unoRes); //2
```

Infine, dovrai transcompilare il codice con il comando

```bash
tsc
```

Verrà creato il relativo file Javascript, ad esempio `index.js` il quale potrai eseguire con NodeJs

```bash
node index
```

## Qualche strumento utile

Su [typecriptlang.org](https://www.typescriptlang.org/), trovi [Playground](https://www.typescriptlang.org/play?#code/DYUwLgBAFizA9gdXgJ2AEwgXggIgBKwITJrq4DcAUAPQ0QQB6A-EA), uno strumento che ti permette di transcompilare codice Typescript e vedere come viene quindi convertito in Javascript con tutta una serie di utility.

## tsc config

Creeremo un `tsconfig.json` semplice, configurando:
- un unico file typescript: `index.js`
- standard Javascript: `ES6`
- cartella di destinazione file transpilati Javascript: `dist`

Puoi quindi creare `tsconfig.json` vuoto e compilarlo in questo modo: 
```json
//tsconfig.json
{
  "compilerOptions": {
    "target": "ES6",
    "outDir": "dist"
  },
  "files": ["index.ts"]
}
```

A questo punto puoi creare un file `index.ts`

```javascript
//index.ts
const helloworld = () => 'Hello wolrd!!!';
console.log(helloworld());
```

Lanciare il comando di transcompilazione

```bash
tsc
```

Verrà creata la folder `dist` con i file transcompilati Javascript.

Per lanciare il file

```bash
node /dist/index.js 
```

O più semplicemente

```bash
node /dist
```

Dal momento che implicitamente cercherà il file `index.js` come entry point

## tsc config include - exclude

Con l'opzione `files` vengono aggiunti alla transpilazione i file specificati puntualmente un `tsconfig.json`. Con le opzioni `include` ed `exclude` è possibile aggiungere ed escludere dalla transpilazione delle directories

```json
{
  "compilerOptions": {
    "target": "ES6",
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

Tutti i file all'interno di `src` verranno transpilati in javascript e aggiunti alla directory `dist`


## type annotation - variabili

Vediamo un esempio con i vari tipi nativi assegnabili con typescript

```javascript
//type annotation
let foo1: number = 100;
let foo2: string = 'cento';
let foo3: boolean = true;
let foo4: any = 'any';
```

Più genericamente per l'assegnazione delle variabili:

```bash
let|const|var varName: varType = varValue;
```

## type annotation - array

```javascript
let arr: string[] = []; //da preferire
arr = ["string1", "string2", "string3", null]
let arr2: Array<string>;

let arr3: any[];
arr3 = [12, "string1", undefined, true, "ok"]
```

## type annotation - object inline

Questo non è il modo migliore. E' un modo prolisso.

```javascript
let persona: {
    nome: string,
    cognome: string,
    indirizzo:{
        via: string,
        citta: string,
        civico: number,
    },
    isAdmin: boolean
} = {
  nome: "Lorenzo",
  cognome: "Biondi",
  indirizzo: {
    via: "Roma",
    citta: "Treviso",
    civico: 32,
  },
  isAdmin: true,
};
```

Il modo migliore passa attraverso le interfacce o le clasi.






