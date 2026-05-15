# 🪵 Gard la țară

Site personal de planificare proiect: 315 metri de gard, 3 laturi, weekenduri și seri între joburi.

---

## 🚀 Cum pui site-ul online (pas cu pas)

### 1. Cont GitHub
Dacă nu ai unul, fă-l la https://github.com/signup (gratuit, 2 minute, nu cere card).

### 2. Repo nou
- Click pe butonul verde **"New"** (sau https://github.com/new)
- Nume repo: `gard-tara` (sau ce vrei)
- Setează **Public**
- Bifează **"Add a README file"** ca să se creeze cu un commit inițial
- Click **"Create repository"**

### 3. Upload fișierele
- În repo-ul nou, click **"Add file" → "Upload files"**
- Drag & drop **toate fișierele** din folderul `gard-tara/` (inclusiv folderul `images/`, chiar dacă e gol)
- Scroll jos, click **"Commit changes"**

### 4. Activează GitHub Pages
- Mergi la **Settings** (în repo, sus dreapta)
- În meniul din stânga, click **Pages**
- La **"Source"**, alege **"Deploy from a branch"**
- La **"Branch"**, alege **`main`** și folder **`/ (root)`**
- Click **Save**
- Așteaptă 1-2 minute

### 5. Gata!
Site-ul va fi live la:
```
https://NUMELE-TĂU.github.io/gard-tara/
```

GitHub îți va arăta link-ul exact în pagina Settings → Pages după ce se publică.

---

## 📝 Cum editezi site-ul

### De pe laptop (browser, fără să instalezi nimic)
1. Deschide repo-ul pe GitHub
2. Click pe fișierul pe care vrei să-l editezi (de obicei `data.json`)
3. Click pe iconița **creion** (sus dreapta în vizualizarea fișierului)
4. Faci modificările
5. Scroll jos → **"Commit changes"**
6. În 30-60 secunde site-ul se actualizează automat

### De pe telefon
- Aplicația **GitHub** (Android/iOS) — gratis, oficială, editezi direct fișierele
- Sau din browserul telefonului pe github.com — aceeași flow ca pe laptop

### Adăugare poze
1. Mergi în folderul `images/` în repo
2. Click **"Add file" → "Upload files"**
3. Drag & drop pozele (sau alege de pe telefon)
4. Commit
5. În `data.json`, adaugă calea la intrarea de jurnal:
```json
"poze": ["images/poza1.jpg", "images/poza2.jpg"]
```

---

## 📦 Structura fișierelor

```
gard-tara/
├── index.html      # Dashboard cu stats și etape
├── taskuri.html    # Listă task-uri bifabile per etapă
├── deviz.html      # Costuri pe categorii și total
├── jurnal.html     # Log de progres cu date și poze
├── poze.html       # Galerie cu toate pozele
├── furnizori.html  # Lista de unde cumperi
├── style.css       # Toate stilurile (paletă rustic-modern)
├── script.js       # Funcții comune (load data, format, nav)
├── data.json       # ⭐ TOATE DATELE PROIECTULUI (editezi aici)
├── images/         # Poze de pe șantier
└── README.md       # Acest fișier
```

**Singurul fișier pe care îl editezi des este `data.json`.** Restul sunt structură.

---

## 🔧 Cum modifici `data.json`

### Bifează un task ca făcut
Schimbă `"facut": false` în `"facut": true`:
```json
{"id": "1.1", "text": "Verifici limita exactă cu vecinii", "facut": true}
```

### Adaugă o intrare nouă de jurnal
În array-ul `jurnal`, adaugă obiect nou la sfârșit:
```json
{
  "data": "2026-05-20",
  "titlu": "Am sapat primele 4 gropi",
  "text": "Burghiul manual a fost o investiție bună. Spatele mă doare dar gropile sunt frumoase.",
  "poze": ["images/2026-05-20-groapa1.jpg"]
}
```

### Marchează o categorie ca achiziționată
```json
"achizitionat": true
```

### Adaugă/modifică prețuri
Schimbă `pret_unitar` și `total` în obiectul item. **Important:** `total = cantitate × pret_unitar` (calculează manual).

### Schimbă status etapă
Valori valide: `"neinceput"`, `"in_curs"`, `"gata"`

---

## 💡 Sfaturi

- **Backup automat**: tot e în Git, nu pierzi niciodată nimic. Poți vedea istoricul oricărei modificări pe GitHub.
- **JSON-ul trebuie valid**: dacă pui virgulă unde nu trebuie sau uiți o paranteză, site-ul nu mai încarcă datele. Verifică pe https://jsonlint.com
- **Bifările din interfață** se salvează local pe device-ul curent (localStorage). Pentru sincronizare reală între telefon și laptop, fă modificările în `data.json` direct.
- **Domeniu propriu** (opțional): poți cumpăra un domeniu (`gardullatara.ro` ~50 lei/an) și-l conectezi la GitHub Pages din Settings → Pages → Custom domain.

---

## 🛠️ Construit cu
- HTML, CSS, JavaScript pur (zero framework-uri)
- Google Fonts: Fraunces (serif), Inter (sans), JetBrains Mono (cod)
- Găzduit gratis pe GitHub Pages

Niciun build step, nicio dependență, nimic de instalat. Open & go.
