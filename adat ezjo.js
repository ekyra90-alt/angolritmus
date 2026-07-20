// ============================================================
// 🎵 DAL-KÖNYVTÁR
// ============================================================
// Ez a fájl TÖBB dalt tartalmazhat egyszerre. A zene_lejatszo.html
// tetején egy legördülő listából lehet választani közülük.
//
// Új dal hozzáadásához: másold le az alábbi egy blokkot (a { -tól
// a záró } -ig, vesszővel elválasztva a többitől), és töltsd ki
// a saját adataiddal. A HTML fájlokat NEM kell módosítani.
//
// Mezők:
//   id                → egyedi rövid azonosító (ékezet és szóköz nélkül)
//   title             → a dal címe, ez jelenik meg a választóban
//   localAudio        → az mp3 fájl neve/elérési útja (a repóban)
//   fallbackAudio     → tartalék link, ha a helyi mp3 nem töltődik be (üresen is hagyható: "")
//   cardsData         → tanuló kártyák (kulcsszavak)
//   songStructureData → a dalszöveg versszakokra/sorokra bontva, időzítéssel
// ============================================================

const SONGS = [
  {
    id: "hipochondria",
    title: "Hipochondria",
    localAudio: "Hipochondria.mp3",
    fallbackAudio: "https://cdn.jsdelivr.net/gh/pintergabor/Hipochondria@main/Hipochondria.mp3",

    cardsData: [
      { keyword: "unwell", english: "I am terribly **unwell** tonight.", hungarian: "Szörnyen rosszul vagyok ma éjjel.", startTime: 43.0, endTime: 46.0, verseIndex: 2 },
      { keyword: "suffer from", english: "I **suffer from** a secret thing.", hungarian: "Egy titkos dologban szenvedek.", startTime: 49.9, endTime: 53.8, verseIndex: 2 },
      { keyword: "heart attack", english: "I think I have a **heart attack**.", hungarian: "Azt hiszem, szívrohamom van.", startTime: 63.2, endTime: 66.6, verseIndex: 3 },
      { keyword: "unhealthy", english: "My lifestyle is very **unhealthy**.", hungarian: "Az életmódom nagyon egészségtelen.", startTime: 69.9, endTime: 73.4, verseIndex: 3 },
      { keyword: "cancer", english: "This scary **cancer** is inside.", hungarian: "Ez a félelmetes rák van odabent.", startTime: 77.4, endTime: 80.0, verseIndex: 4 },
      { keyword: "flu", english: "I always catch a dangerous **flu**.", hungarian: "Mindig elkapok egy veszélyes influenzát.", startTime: 84.0, endTime: 87.3, verseIndex: 4 },
      { keyword: "disabled", english: "My right leg is **disabled** now.", hungarian: "A jobb lábam mozgássérült most.", startTime: 121.0, endTime: 125.2, verseIndex: 6 },
      { keyword: "painful", english: "Every movement is very **painful**.", hungarian: "Minden mozdulat nagyon fájdalmas.", startTime: 128.3, endTime: 131.9, verseIndex: 6 },
      { keyword: "sick", english: "I will be **sick** very soon.", hungarian: "Hamarosan nagyon rosszul leszek.", startTime: 136.0, endTime: 139.0, verseIndex: 7 },
      { keyword: "sore", english: "My throat is very **sore** today.", hungarian: "A torkom nagyon fájós ma.", startTime: 143.0, endTime: 146.1, verseIndex: 7 },
      { keyword: "deaf", english: "I am getting completely **deaf**.", hungarian: "Teljesen süketté válok.", startTime: 194.7, endTime: 197.0, verseIndex: 9 },
      { keyword: "blind", english: "My eyes are turning **blind**.", hungarian: "A szemeim vakká válnak.", startTime: 200.0, endTime: 204.5, verseIndex: 9 }
    ],

    songStructureData: [
      {
        title: "Bevezető", start: 28.6, end: 43.0,
        lines: [
          { text: "I check my body every hour.", hungarian: "Minden órában ellenőrzöm a testem.", start: 28.6, end: 32.4 },
          { text: "I feel I lose my physical power.", hungarian: "Érzem, hogy elveszítem a fizikai erőmet.", start: 32.4, end: 36.0 },
          { text: "I find a new problem every day,", hungarian: "Minden nap találok egy új problémát,", start: 36.0, end: 39.3 },
          { text: "The happy thoughts all go away.", hungarian: "A boldog gondolatok mind elszállnak.", start: 39.3, end: 43.0 }
        ]
      },
      {
        title: "Refrén", start: 43.0, end: 63.2,
        lines: [
          { text: "I am terribly **unwell** tonight,", hungarian: "Szörnyen rosszul vagyok ma éjjel,", start: 43.0, end: 46.0, cardIndex: 0 },
          { text: "My face is completely white.", hungarian: "Az arcom teljesen fehér.", start: 46.0, end: 49.9 },
          { text: "I **suffer from** a secret thing,", hungarian: "Egy titkos dologban szenvedek,", start: 49.9, end: 53.8, cardIndex: 1 },
          { text: "The church bells start to ring.", hungarian: "A templomharangok elkezdenek zúgni.", start: 53.8, end: 63.2 }
        ]
      },
      {
        title: "1. Versszak", start: 63.2, end: 77.4,
        lines: [
          { text: "I think I have a **heart attack**.", hungarian: "Azt hiszem, szívrohamom van.", start: 63.2, end: 66.6, cardIndex: 2 },
          { text: "I need to lie down on my back.", hungarian: "Le kell feküdnöm a hátamra.", start: 66.6, end: 69.9 },
          { text: "My lifestyle is very **unhealthy**.", hungarian: "Az életmódom nagyon egészségtelen.", start: 69.9, end: 73.4, cardIndex: 3 },
          { text: "Only the doctors are getting wealthy.", hungarian: "Csak az orvosok gazdagodnak meg.", start: 73.4, end: 77.4 }
        ]
      },
      {
        title: "2. Versszak", start: 77.4, end: 90.9,
        lines: [
          { text: "This scary **cancer** is inside.", hungarian: "Ez a félelmetes rák van odabent.", start: 77.4, end: 80.0, cardIndex: 4 },
          { text: "The doctor's office is very wide.", hungarian: "Az orvosi rendelő nagyon tágas.", start: 80.0, end: 84.0 },
          { text: "I always catch a dangerous **flu**.", hungarian: "Mindig elkapok egy veszélyes influenzát.", start: 84.0, end: 87.3, cardIndex: 5 },
          { text: "I do not know what to do.", hungarian: "Nem tudom, mit tegyek.", start: 87.3, end: 90.9 }
        ]
      },
      {
        title: "Refrén (2.)", start: 90.9, end: 121.0,
        lines: [
          { text: "I am terribly unwell tonight,", hungarian: "Szörnyen rosszul vagyok ma éjjel,", start: 90.9, end: 94.7 },
          { text: "My face is completely white.", hungarian: "Az arcom teljesen fehér.", start: 94.7, end: 97.9 },
          { text: "I suffer from a secret thing,", hungarian: "Egy titkos dologban szenvedek,", start: 97.9, end: 101.8 },
          { text: "The church bells start to ring.", hungarian: "A templomharangok elkezdenek zúgni.", start: 101.8, end: 121.0 }
        ]
      },
      {
        title: "3. Versszak", start: 121.0, end: 136.0,
        lines: [
          { text: "My right leg is **disabled** now.", hungarian: "A jobb lábam mozgássérült most.", start: 121.0, end: 125.2, cardIndex: 6 },
          { text: "I am groaning like a cow.", hungarian: "Úgy nyögök, mint egy tehén.", start: 125.2, end: 128.3 },
          { text: "Every movement is very **painful**.", hungarian: "Minden mozdulat nagyon fájdalmas.", start: 128.3, end: 131.9, cardIndex: 7 },
          { text: "My little dog is very faithful.", hungarian: "A kiskutyám nagyon hűséges.", start: 131.9, end: 136.0 }
        ]
      },
      {
        title: "4. Versszak", start: 136.0, end: 149.6,
        lines: [
          { text: "I will be **sick** very soon.", hungarian: "Hamarosan nagyon rosszul leszek.", start: 136.0, end: 139.0, cardIndex: 8 },
          { text: "I see two shadows under the moon.", hungarian: "Két árnyékot látok a hold alatt.", start: 139.0, end: 143.0 },
          { text: "My throat is very **sore** today.", hungarian: "A torkom nagyon fájós ma.", start: 143.0, end: 146.1, cardIndex: 9 },
          { text: "The warm summer went away.", hungarian: "A meleg nyár elszállt.", start: 146.1, end: 149.6 }
        ]
      },
      {
        title: "Refrén (3.)", start: 149.6, end: 194.7,
        lines: [
          { text: "I am terribly unwell tonight,", hungarian: "Szörnyen rosszul vagyok ma éjjel,", start: 149.6, end: 153.3 },
          { text: "My face is completely white.", hungarian: "Az arcom teljesen fehér.", start: 153.3, end: 156.8 },
          { text: "I suffer from a secret thing,", hungarian: "Egy titkos dologban szenvedek,", start: 156.8, end: 159.8 },
          { text: "The church bells start to ring.", hungarian: "A templomharangok elkezdenek zúgni.", start: 159.8, end: 194.7 }
        ]
      },
      {
        title: "5. Versszak", start: 194.7, end: 208.0,
        lines: [
          { text: "I am getting completely **deaf**.", hungarian: "Teljesen süketté válok.", start: 194.7, end: 197.0, cardIndex: 10 },
          { text: "I cannot hear the famous chef.", hungarian: "Nem hallom a híres séfet.", start: 197.0, end: 200.0 },
          { text: "My eyes are turning **blind**.", hungarian: "A szemeim vakká válnak.", start: 200.0, end: 204.5, cardIndex: 11 },
          { text: "No good doctor can I find.", hungarian: "Nem találok jó orvost.", start: 204.5, end: 208.0 }
        ]
      }
    ]
  },
  {
    id: "man_flu",
    title: "Man Flu",
    localAudio: "ManFlu.mp3",
    fallbackAudio: "",

    cardsData: [
      { keyword: "get flu", english: "He **get flu** on Monday.", hungarian: "Hétfőn kapta meg az influenzát.", startTime: 47.8, endTime: 50.6, verseIndex: 2 },
      { keyword: "disease", english: "He has a terrible **disease**.", hungarian: "Szörnyű betegsége van.", startTime: 52.9, endTime: 57.2, verseIndex: 2 },
      { keyword: "fever", english: "His **fever** is thirty-seven point five.", hungarian: "A láza harminchét egész öt tized.", startTime: 61.8, endTime: 66.5, verseIndex: 3 },
      { keyword: "illness", english: "He says this **illness** is too strong.", hungarian: "Azt mondja, ez a betegség túl erős.", startTime: 71.3, endTime: 75.9, verseIndex: 3 },
      { keyword: "cough", english: "He has a very bad **cough**.", hungarian: "Nagyon csúnya köhögése van.", startTime: 100.4, endTime: 102.8, verseIndex: 5 },
      { keyword: "complain of", english: "He **complain of** a backache now.", hungarian: "Hátfájásra panaszkodik most.", startTime: 109.9, endTime: 112.3, verseIndex: 6 },
      { keyword: "backache", english: "He complain of a **backache** now.", hungarian: "Hátfájásra panaszkodik most.", startTime: 109.9, endTime: 112.3, verseIndex: 6 },
      { keyword: "earache", english: "He feels a sharp **earache** too.", hungarian: "Éles fülfájást érez szintén.", startTime: 114.8, endTime: 117.2, verseIndex: 6 },
      { keyword: "get cancer", english: "He thinks he **get cancer** today.", hungarian: "Azt hiszi, rákot kapott ma.", startTime: 141.3, endTime: 146.1, verseIndex: 8 },
      { keyword: "ache", english: "This **ache** is extremely deep.", hungarian: "Ez a fájdalom rendkívül mély.", startTime: 150.6, endTime: 155.3, verseIndex: 8 },
      { keyword: "death", english: "He talks about his tragic **death**.", hungarian: "A tragikus haláláról beszél.", startTime: 169.7, endTime: 174.2, verseIndex: 9 },
      { keyword: "bury", english: "Please **bury** me under the tree!", hungarian: "Kérlek, temessetek el a fa alá!", startTime: 179.6, endTime: 184.3, verseIndex: 10 },
      { keyword: "mad", english: "He acts like a **mad** man.", hungarian: "Úgy viselkedik, mint egy őrült ember.", startTime: 188.9, endTime: 193.9, verseIndex: 10 }
    ],

    songStructureData: [
      {
        title: "Bevezető", start: 9.7, end: 28.0,
        lines: [
          { text: "The big drama starts tonight.", hungarian: "A nagy dráma ma éjjel kezdődik.", start: 9.7, end: 14.4 },
          { text: "My husband is white with fright.", hungarian: "A férjem fehér a félelemtől.", start: 14.4, end: 19.6 },
          { text: "He has a tiny little sneeze,", hungarian: "Van egy pici kicsi tüsszentése,", start: 19.6, end: 24.1 },
          { text: "And he asks for mercy, please.", hungarian: "És kegyelemért könyörög, kérlek.", start: 24.1, end: 28.0 }
        ]
      },
      {
        title: "Refrén", start: 28.0, end: 47.8,
        lines: [
          { text: "He has the terrible man flu,", hungarian: "Szörnyű férfi influenzája van,", start: 28.0, end: 32.8 },
          { text: "He does not know what to do.", hungarian: "Nem tudja, mit tévő legyen.", start: 32.8, end: 37.3 },
          { text: "He thinks the end is very near,", hungarian: "Azt hiszi, a vég nagyon közel van,", start: 37.3, end: 42.7 },
          { text: "His eyes are full of fear.", hungarian: "A szeme tele van félelemmel.", start: 42.7, end: 47.8 }
        ]
      },
      {
        title: "1. Versszak", start: 47.8, end: 61.8,
        lines: [
          { text: "He **get flu** on Monday.", hungarian: "Hétfőn kapta meg az influenzát.", start: 47.8, end: 50.6, cardIndex: 0 },
          { text: "He wants to cry all day.", hungarian: "Egész nap sírni akar.", start: 50.6, end: 52.9 },
          { text: "He has a terrible **disease**.", hungarian: "Szörnyű betegsége van.", start: 52.9, end: 57.2, cardIndex: 1 },
          { text: "Call the doctor for him, please!", hungarian: "Hívjátok a doktort hozzá, kérlek!", start: 57.2, end: 61.8 }
        ]
      },
      {
        title: "2. Versszak", start: 61.8, end: 81.1,
        lines: [
          { text: "His **fever** is thirty-seven point five.", hungarian: "A láza harminchét egész öt tized.", start: 61.8, end: 66.5, cardIndex: 2 },
          { text: "He is barely staying alive.", hungarian: "Alig marad életben.", start: 66.5, end: 71.3 },
          { text: "He says this **illness** is too strong.", hungarian: "Azt mondja, ez a betegség túl erős.", start: 71.3, end: 75.9, cardIndex: 3 },
          { text: "Everything is going completely wrong.", hungarian: "Minden teljesen rosszul alakul.", start: 75.9, end: 81.1 }
        ]
      },
      {
        title: "Refrén (2.)", start: 81.1, end: 100.4,
        lines: [
          { text: "He has the terrible man flu,", hungarian: "Szörnyű férfi influenzája van,", start: 81.1, end: 86.2 },
          { text: "He does not know what to do.", hungarian: "Nem tudja, mit tévő legyen.", start: 86.2, end: 90.0 },
          { text: "He thinks the end is very near,", hungarian: "Azt hiszi, a vég nagyon közel van,", start: 90.0, end: 95.4 },
          { text: "His eyes are full of fear.", hungarian: "A szeme tele van félelemmel.", start: 95.4, end: 100.4 }
        ]
      },
      {
        title: "3. Versszak", start: 100.4, end: 109.9,
        lines: [
          { text: "He has a very bad **cough**.", hungarian: "Nagyon csúnya köhögése van.", start: 100.4, end: 102.8, cardIndex: 4 },
          { text: "He can never turn it off.", hungarian: "Soha nem tudja kikapcsolni.", start: 102.8, end: 105.2 },
          { text: "He **cough** loudly in the bed.", hungarian: "Hangosan köhög az ágyban.", start: 105.2, end: 107.3, cardIndex: 4 },
          { text: "He puts a blanket on his head.", hungarian: "Egy takarót tesz a fejére.", start: 107.3, end: 109.9 }
        ]
      },
      {
        title: "4. Versszak", start: 109.9, end: 121.8,
        lines: [
          { text: "He **complain of** a **backache** now.", hungarian: "Hátfájásra panaszkodik most.", start: 109.9, end: 112.3, cardIndex: 5 },
          { text: "He is groaning like a cow.", hungarian: "Nyög, mint egy tehén.", start: 112.3, end: 114.8 },
          { text: "He feels a sharp **earache** too.", hungarian: "Éles fülfájást érez szintén.", start: 114.8, end: 117.2, cardIndex: 7 },
          { text: "He cannot wear his blue shoe.", hungarian: "Nem tudja viselni a kék cipőjét.", start: 117.2, end: 121.8 }
        ]
      },
      {
        title: "Refrén (3.)", start: 121.8, end: 141.3,
        lines: [
          { text: "He has the terrible man flu,", hungarian: "Szörnyű férfi influenzája van,", start: 121.8, end: 126.4 },
          { text: "He does not know what to do.", hungarian: "Nem tudja, mit tévő legyen.", start: 126.4, end: 130.7 },
          { text: "He thinks the end is very near,", hungarian: "Azt hiszi, a vég nagyon közel van,", start: 130.7, end: 136.3 },
          { text: "His eyes are full of fear.", hungarian: "A szeme tele van félelemmel.", start: 136.3, end: 141.3 }
        ]
      },
      {
        title: "5. Versszak", start: 141.3, end: 160.5,
        lines: [
          { text: "He thinks he **get cancer** today.", hungarian: "Azt hiszi, rákot kapott ma.", start: 141.3, end: 146.1, cardIndex: 8 },
          { text: "He wants to throw his life away.", hungarian: "El akarja dobni az életét.", start: 146.1, end: 150.6 },
          { text: "This **ache** is extremely deep.", hungarian: "Ez a fájdalom rendkívül mély.", start: 150.6, end: 155.3, cardIndex: 9 },
          { text: "He cannot even fall asleep.", hungarian: "Még elaludni sem tud.", start: 155.3, end: 160.5 }
        ]
      },
      {
        title: "6. Versszak", start: 160.5, end: 179.6,
        lines: [
          { text: "He writes his last will fast.", hungarian: "Gyorsan megírja az utolsó akaratát.", start: 160.5, end: 165.3 },
          { text: "This short life did not last.", hungarian: "Ez a rövid élet nem tartott sokáig.", start: 165.3, end: 169.7 },
          { text: "He talks about his tragic **death**.", hungarian: "A tragikus haláláról beszél.", start: 169.7, end: 174.2, cardIndex: 10 },
          { text: "With his very final breath.", hungarian: "A legutolsó leheletével.", start: 174.2, end: 179.6 }
        ]
      },
      {
        title: "7. Versszak", start: 179.6, end: 193.9,
        lines: [
          { text: "Please **bury** me under the tree!", hungarian: "Kérlek, temessetek el a fa alá!", start: 179.6, end: 184.3, cardIndex: 11 },
          { text: "Where the beautiful birds are free.", hungarian: "Ahol a gyönyörű madarak szabadok.", start: 184.3, end: 188.9 },
          { text: "He acts like a **mad** man.", hungarian: "Úgy viselkedik, mint egy őrült ember.", start: 188.9, end: 193.9, cardIndex: 12 },
          { text: "I help him as much as I can.", hungarian: "Segítek neki, amennyire csak tudok.", start: 193.9, end: 197.4 }
        ]
      }
    ]
  }

  // ---- ÚJ DAL FELVÉTELE: ----
  // ,{
  //   id: "masodik-dal",
  //   title: "Második Dal",
  //   localAudio: "masodik_dal.mp3",
  //   fallbackAudio: "",
  //   cardsData: [ ... ],
  //   songStructureData: [ ... ]
  // }
];

// Ide navigáljon vissza a "❮ Vissza" gomb a lejátszóból
const BACK_LINK = "index.html";

