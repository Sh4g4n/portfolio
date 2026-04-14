PORTFOLIO README

Shagandeep Singh — One Page Portfolio (Professional / Friends Mode)



📁 Struttura del progetto


Il progetto è composto da 3 file principali:

- index.html → struttura base della pagina
- style.css → stile grafico e colori
- script.js → contenuti e logica

Cartella opzionale:

- /assets → immagini (foto profilo, immagini preferiti, ecc.)



🧠 COME FUNZIONA IL SITO


Tutti i contenuti (testi, sezioni, progetti, stage, preferiti) sono dentro `script.js` nell’oggetto:

```
content[mode][lang]
```

Dove:

* mode = "professional" oppure "friends"
* lang = "it" oppure "en"

Il sito viene costruito dinamicamente da JavaScript.
NON modificare l’HTML per cambiare contenuti.



✏️ 1. CAMBIARE QUALCOSA GIÀ SCRITTO

Esempi:

- Bio
- Quote
- Titolo
- Testi delle sezioni

Procedura:

1. Apri `script.js`
2. Cerca la sezione dentro `content`
3. Modifica il testo direttamente nella stringa

Esempio:

```
bio: "Testo attuale..."
```

Sostituisci con:

```
bio: "Nuovo testo aggiornato..."
```

Salva → ricarica la pagina.



➕ 2. AGGIUNGERE QUALCOSA DI NUOVO

Aggiungere uno stage

Dentro `script.js` cerca:

```
internships: [
```

Copia un blocco esistente e incollalo sotto, modificando i dati.

Esempio struttura:

```
{
  title: "Nome stage",
  period: "Date",
  location: "Luogo",
  details: "Descrizione"
}
```

Non serve modificare HTML.



Aggiungere un progetto

Cerca:

```
projects: {
  professional: [],
  personal: []
}
```

Dentro l’array desiderato aggiungi:

```
{
  title: "Nome progetto",
  description: "Descrizione breve",
  tech: ["SolidWorks", "Arduino"],
  link: "https://..."
}
```


Aggiungere un preferito (Friends Mode)

Cerca la categoria (es. gaming, anime, ecc.) e aggiungi un nuovo oggetto.

Struttura tipica:

```
{
  name: "Nome",
  img: "assets/nome-immagine.jpg"
}
```

Assicurati che l’immagine sia dentro `/assets`.



🖼 3. CAMBIARE IMMAGINI

Foto profilo

In `script.js` cerca:

```
assets: {
  profile: {
    professional: "assets/profile-pro.jpg",
    friends: "assets/profile-friends.jpg"
  }
}
```

Metti le immagini dentro la cartella `/assets`
Assicurati che:

- il nome sia identico
- l’estensione sia corretta (.jpg / .png)
- maiuscole/minuscole combacino



🎨 4. CAMBIARE COLORI

Apri `style.css`.

I colori principali sono in alto nel file:

```
:root {
  --accent: ...
}
```

Per Friends Mode:

```
body[data-mode="friends"] {
  --neon: ...
}
```

Modificare le variabili cambia tutto il tema.




🌗 5. CAMBIARE O AGGIUNGERE UNA SEZIONE

Le sezioni vengono renderizzate via JS.

Se vuoi:

- rimuovere una sezione → elimina la funzione di render corrispondente
- aggiungerne una → crea nuova funzione tipo `renderXSection()`
- poi richiamala dentro `renderAll()`



🧩 6. SE QUALCOSA NON FUNZIONA

Checklist:

- Ricarica con Ctrl + Shift + R
- Controlla console (F12 → Console)
- Controlla che i percorsi immagini siano corretti
- Controlla che non manchi una virgola in script.js
- Controlla parentesi graffe chiuse

Errori comuni:

- virgola mancante in un array
- nome file sbagliato
- maiuscola/minuscola diversa



💾 7. METTERLO ONLINE

Opzioni semplici:

- GitHub Pages
- Netlify
- Vercel

Serve solo caricare:

- index.html
- style.css
- script.js
- assets/



🚀 8. MIGLIORAMENTI FUTURI

Quando vorrai evolverlo:

- Spostare contenuti in file JSON
- Collegarlo a GitHub API per mostrare repo reali
- Aggiungere filtro progetti
- Aggiungere animazioni più avanzate
- Migliorare SEO (meta tag)
- Aggiungere favicon



🔒 REGOLA D’ORO

Non modificare HTML per cambiare contenuti.
Non mettere testo hardcoded nel CSS.
Usa sempre `script.js` per i dati.



🧠 MENTALITÀ

Il sito è diviso in:

- Struttura (HTML)
- Stile (CSS)
- Contenuto + logica (JS)

Separare queste tre cose è progettazione pulita.
