# CuratStralucitor - Website Firmă Curățenie

Un website modern și futurist pentru o firmă profesională de curățenie, creat cu Node.js și Express.js.

## Caracteristici

- **Design Modern și Futurist**: Culori gradient frumoase, animații netede și UI contemporan
- **Design Responsiv**: Funcționează perfect pe desktop, tabletă și dispozitive mobile
- **Pagini Multiple**:
  - Acasă: Secțiune hero atrăgătoare cu prezentarea caracteristicilor
  - Servicii & Prețuri: Servicii detaliate cu tabele de prețuri
  - Despre: Cunoaștete echipa cu profiluri angajați
  - Galerie: Galerie cu lucrări finalizate
  - Contact: Formular de contact și informații de afaceri
  - 404: Pagină de eroare personalizată

- **Efecte Cool**:
  - Animații plutitoare
  - Text și butoane cu gradient
  - Efecte hover pe carduri
  - Animații la scroll
  - Efecte blur de fundal
  - Umbre strălucitoare

## Tech Stack

- **Backend**: Node.js cu Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: CSS personalizat cu efecte moderne
- **Frontend**: JavaScript vanilla

## Structura Proiectului

```
Gospodinele/
├── app.js                          # Aplicația Express principală
├── package.json                    # Dependențe proiect
├── README.md                       # Acest fișier
├── views/
│   ├── index.ejs                   # Pagina de acasă
│   ├── services.ejs                # Pagina servicii & prețuri
│   ├── about.ejs                   # Pagina despre echipă
│   ├── gallery.ejs                 # Pagina galerie
│   ├── contact.ejs                 # Pagina contact
│   ├── 404.ejs                     # Pagina de eroare
│   └── includes/
│       ├── navbar.ejs              # Componenta bară de navigare
│       └── footer.ejs              # Componenta footer
└── public/
    ├── css/
    │   └── style.css               # Toate stilurile
    └── js/
        └── main.js                 # JavaScript pe client
```

## Instalare

1. **Navigați în directorul proiectului**:
   ```bash
   cd Gospodinele
   ```

2. **Instalați dependențele**:
   ```bash
   npm install
   ```

## Pornirea Website-ului

### Mod Dezvoltare (cu reîncărcare automată)
```bash
npm run dev
```

### Mod Producție
```bash
npm start
```

Website-ul va fi disponibil la `http://localhost:3000`

## Configurare

Puteți personaliza:

1. **Informații Contact** (în `app.js` și `views/contact.ejs`):
   - Numar de telefon
   - Adresă email
   - Ore de serviciu
   - Locație

2. **Servicii & Prețuri** (în `app.js`):
   - Numele serviciilor
   - Detalii prețuri
   - Descrieri servicii

3. **Informații Echipă** (în `app.js` și `views/about.ejs`):
   - Nume angajați
   - Bio și experiență
   - Imagini (înlocuiți placeholder-urile cu fotografii reale)

4. **Imagini Galerie** (în `views/gallery.ejs`):
   - Înlocuiți imagini placeholder cu fotografii reale înainte/după

5. **Culori & Teme** (în `public/css/style.css`):
   - Modificați variabilele CSS la începutul fișierului:
     ```css
     :root {
         --primary: #00d4ff;      /* Cyan */
         --secondary: #ff006e;    /* Roz */
         --accent: #8338ec;       /* Mov */
         ...
     }
     ```

## Adăugare Imagini

1. Creați un folder `images` în directorul `public`:
   ```bash
   mkdir public/images
   ```

2. Adăugați imaginile voastre (fotografii angajați, imagini galerie, etc.)

3. Actualizați căile imaginilor în view-uri:
   - Imagini angajați: Actualizați proprietatea `image` în app.js
   - Imagini galerie: Actualizați itemele galerie în app.js

## Setup Formular Contact

Formularul de contact în prezent înregistrează trimiteri în consolă. Pentru a activa funcționalitatea de email:

1. Instalați un pachet de serviciu de email:
   ```bash
   npm install nodemailer
   ```

2. Actualizați ruta POST `/contact` în `app.js` cu configurația de email

## Suport Browser

- Chrome (versiunea recentă)
- Firefox (versiunea recentă)
- Safari (versiunea recentă)
- Edge (versiunea recentă)
- Browsere mobile

## Caracteristici de Performanță

- Animații CSS optimizate
- Gata pentru lazy loading
- Design responsive mobile-first
- Comportament scroll lin
- Gestionare eficientă imagini

## Îmbunătățiri Viitoare

- Sistem de notificare email pentru trimiteri formular contact
- Secțiune cu mărturii clienți
- Secțiune blog/noutăți
- Sistem de rezervare
- Integrare plăți
- Optimizare SEO
- Integrare Google Analytics
- Suport multi-limbă

## Licență

Acest proiect este open source și disponibil pentru utilizare.

## Suport

Pentru întrebări despre website, verificați comentariile din cod sau secțiunea de configurare de mai sus.

---

Construit cu ❤️ pentru spații curate și clienți fericiți!
