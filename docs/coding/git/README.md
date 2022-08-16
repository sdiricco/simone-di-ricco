# Git

## Git init


Il comando `git init` inizializza una repository e la prepara al versionamento con git

```sh
$ git init

Initialized empty Git repository in <path>/.git/
```

In pratica verrà creata una cartella nascosta `.git` con il seguente contenuto:

```sh
.
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
```

## Git status

Il comando git status, ritorna lo stato della repository.
```sh
$ git status

On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        test.txt

nothing added to commit but untracked files present (use "git add" to track)
```

## Git add

Aggiungi un file alla tua `repository`, ad esempio `test.txt` e usa `git status`

```sh
$ git status

On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        test.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Adesso puoi aggiungere il file a git

```sh
$ git add test.txt
```

Puoi usare diverse opzioni per il comando `git add`:

|comando| descrizione|
|---|---|
|`git add .` | Aggiunge tutti i file e cartelle non tracciati da git al versionamento|
|`git add <file>` | Aggiunge solo il `<file>` al versionamento|
|`git add *.txt` | Aggiunge tutti i file con estensione `.txt` al versionamento|

### Staging area

I file aggiunti a git attraverso il comando `git add` fanno parte della **staging area**

## Git commit

Per poter salvare un'itantanea della repository, si utilizza il comando `git commit`. Il commit verrà eseguito solo dei file presenti nella **staging area**, cioè i file precedentemente aggiunti tramite il comando `git add`. Se non hai file nella **staging area** non verrà eseguito il commit di alcun file.

Se hai dei file nella **staging area**, la situazione sarà la seguente:

```sh
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   test.txt
```

A questo punto puoi lanciare il comando `git commit`

```sh
$ git commit
hint: Waiting for your editor to close the file...
```

Verrà aperto l'editor di testo default impostato in fase di installazione di git

## Comandi utili

Vediamo adesso una lista di comandi utili

|comando| descrizione|
|---|---|
|`git checkout --track origin/<branch-name>` |Crea un branch locale con lo stesso nome del branch remoto e imposta il tracking tra i due|





