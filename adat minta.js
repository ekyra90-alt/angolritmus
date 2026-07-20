// ============================================================
// 🎵 DAL KONFIGURÁCIÓS SABLON
// ============================================================
// Ez a fájl minden dalnál egyedi. A zene_lejatszo.html és a többi
// oldal MINDIG ebből olvassa ki az adatokat — magukat a HTML/JS
// fájlokat SOHA nem kell módosítanod egy új dal feltöltésekor.
//
// Használat egy új dalnál:
// 1) Töltsd ki alul az ÁLTALÁNOS BEÁLLÍTÁSOK részt.
// 2) Töltsd ki (vagy generáltasd le AI-val) a cardsData és
//    songStructureData tömböket a saját dalod szövegéből.
// 3) Mentsd el ezt a fájlt adat.js néven a dal saját mappájába,
//    az mp3 fájllal együtt.
// ============================================================


// ---------- ÁLTALÁNOS BEÁLLÍTÁSOK ----------

// A dal / lecke címe (megjelenik a lejátszó tetején)
const SONG_TITLE = "Új dal";

// Az mp3 fájl neve/elérési útja (helyi fájl, ugyanabban a mappában, ahol a HTML-ek vannak)
const LOCAL_MP3_URL = "dal.mp3";

// Tartalék link, ha a helyi mp3 valamiért nem töltődik be
// (pl. GitHub repóból jsDelivr CDN-en keresztül: https://cdn.jsdelivr.net/gh/FELHASZNALO/REPO@main/dal.mp3)
// Ha nincs szükséged rá, hagyd üresen: ""
const FALLBACK_MP3_URL = "";

// Ide navigáljon vissza a "❮ Vissza" gomb a lejátszóból
const BACK_LINK = "index.html";


// ---------- KÁRTYA ADATOK (tanuló kártyákhoz) ----------
// Egy elem = egy kulcsszó/kifejezés, amit a dalból tanítani szeretnél.
// A "**szó**" jelöléssel emeled ki a kulcsszót az angol mondatban.
//
// Példa:
// { keyword: "unwell", english: "I am terribly **unwell** tonight.", hungarian: "Szörnyen rosszul vagyok ma éjjel.", startTime: 43.0, endTime: 46.0, verseIndex: 1 },

const cardsData = [

];


// ---------- DALSZERKEZET (versszakok és sorok, időzítéssel) ----------
// Minden versszaknak van címe, kezdő/vég ideje (mp3-ban, másodpercben),
// és egy "lines" tömbje a soronkénti szöveggel + időzítéssel.
// A "cardIndex" opcionális: a fenti cardsData tömb indexére mutat,
// ha az adott sorhoz tartozik tanuló kártya.
//
// Példa:
// {
//   title: "1. Versszak", start: 28.6, end: 57.0,
//   lines: [
//     { text: "I check my body every hour.", hungarian: "Minden órában ellenőrzöm a testem.", start: 28.6, end: 32.4 },
//     { text: "I am terribly **unwell** tonight,", hungarian: "Szörnyen rosszul vagyok ma éjjel,", start: 43.0, end: 46.0, cardIndex: 0 },
//   ]
// },

const songStructureData = [

];
