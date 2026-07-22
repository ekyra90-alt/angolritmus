// ============================================================
// 🎵 DAL-KÖNYVTÁR — TÉMAKÖRÖK SZERINT
// ============================================================
// Ez a fájl TÖBB témakört tartalmaz, mindegyikben TÖBB dallal.
// A zene_lejatszo.html-en előbb a témakört választod ki, utána
// a dalt azon belül.
//
// ÚJ TÉMAKÖR hozzáadásához: másold le a TOPICS tömb egy elemét
// (a { -tól a záró } -ig), és töltsd ki. Egy témakörben tetszőleges
// számú dal lehet (javasolt: 4-6).
//
// ÚJ DAL hozzáadásához egy MEGLÉVŐ témakörön belül: másold le
// a "songs" tömbön belül egy dal blokkját, és töltsd ki.
//
// A HTML fájlokat (index.html, zene_lejatszo.html) SOHA nem kell
// módosítani — mindig csak ezt a fájlt bővíted.
//
// Mezők (témakör):
//   id     → egyedi rövid azonosító (ékezet és szóköz nélkül)
//   title  → a témakör neve, ez jelenik meg a témakör-választóban
//   songs  → a témakörhöz tartozó dalok tömbje
//
// Mezők (dal, ugyanaz mint eddig):
//   id                → egyedi rövid azonosító (ékezet és szóköz nélkül)
//   title             → a dal címe, ez jelenik meg a dalválasztóban
//   localAudio        → az mp3 fájl neve/elérési útja (a repóban)
//   fallbackAudio     → tartalék link, ha a helyi mp3 nem töltődik be (üresen is hagyható: "")
//   cardsData         → tanuló kártyák (kulcsszavak)
//   songStructureData → a dalszöveg versszakokra/sorokra bontva, időzítéssel
// ============================================================

const TOPICS = [
  {
    id: "egeszseg",
    title: "Egészség és betegségek",
    songs: [
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
              { text: "I am terribly **unwell** tonight,", hungarian: "Szörnyen rosszul vagyok ma éjjel,", start: 43.0, end: 46.0, cardIndexes: [0] },
              { text: "My face is completely white.", hungarian: "Az arcom teljesen fehér.", start: 46.0, end: 49.9 },
              { text: "I **suffer from** a secret thing,", hungarian: "Egy titkos dologban szenvedek,", start: 49.9, end: 53.8, cardIndexes: [1] },
              { text: "The church bells start to ring.", hungarian: "A templomharangok elkezdenek zúgni.", start: 53.8, end: 63.2 }
            ]
          },
          {
            title: "1. Versszak", start: 63.2, end: 77.4,
            lines: [
              { text: "I think I have a **heart attack**.", hungarian: "Azt hiszem, szívrohamom van.", start: 63.2, end: 66.6, cardIndexes: [2] },
              { text: "I need to lie down on my back.", hungarian: "Le kell feküdnöm a hátamra.", start: 66.6, end: 69.9 },
              { text: "My lifestyle is very **unhealthy**.", hungarian: "Az életmódom nagyon egészségtelen.", start: 69.9, end: 73.4, cardIndexes: [3] },
              { text: "Only the doctors are getting wealthy.", hungarian: "Csak az orvosok gazdagodnak meg.", start: 73.4, end: 77.4 }
            ]
          },
          {
            title: "2. Versszak", start: 77.4, end: 90.9,
            lines: [
              { text: "This scary **cancer** is inside.", hungarian: "Ez a félelmetes rák van odabent.", start: 77.4, end: 80.0, cardIndexes: [4] },
              { text: "The doctor's office is very wide.", hungarian: "Az orvosi rendelő nagyon tágas.", start: 80.0, end: 84.0 },
              { text: "I always catch a dangerous **flu**.", hungarian: "Mindig elkapok egy veszélyes influenzát.", start: 84.0, end: 87.3, cardIndexes: [5] },
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
              { text: "My right leg is **disabled** now.", hungarian: "A jobb lábam mozgássérült most.", start: 121.0, end: 125.2, cardIndexes: [6] },
              { text: "I am groaning like a cow.", hungarian: "Úgy nyögök, mint egy tehén.", start: 125.2, end: 128.3 },
              { text: "Every movement is very **painful**.", hungarian: "Minden mozdulat nagyon fájdalmas.", start: 128.3, end: 131.9, cardIndexes: [7] },
              { text: "My little dog is very faithful.", hungarian: "A kiskutyám nagyon hűséges.", start: 131.9, end: 136.0 }
            ]
          },
          {
            title: "4. Versszak", start: 136.0, end: 149.6,
            lines: [
              { text: "I will be **sick** very soon.", hungarian: "Hamarosan nagyon rosszul leszek.", start: 136.0, end: 139.0, cardIndexes: [8] },
              { text: "I see two shadows under the moon.", hungarian: "Két árnyékot látok a hold alatt.", start: 139.0, end: 143.0 },
              { text: "My throat is very **sore** today.", hungarian: "A torkom nagyon fájós ma.", start: 143.0, end: 146.1, cardIndexes: [9] },
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
              { text: "I am getting completely **deaf**.", hungarian: "Teljesen süketté válok.", start: 194.7, end: 197.0, cardIndexes: [10] },
              { text: "I cannot hear the famous chef.", hungarian: "Nem hallom a híres séfet.", start: 197.0, end: 200.0 },
              { text: "My eyes are turning **blind**.", hungarian: "A szemeim vakká válnak.", start: 200.0, end: 204.5, cardIndexes: [11] },
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
              { text: "He **get flu** on Monday.", hungarian: "Hétfőn kapta meg az influenzát.", start: 47.8, end: 50.6, cardIndexes: [0] },
              { text: "He wants to cry all day.", hungarian: "Egész nap sírni akar.", start: 50.6, end: 52.9 },
              { text: "He has a terrible **disease**.", hungarian: "Szörnyű betegsége van.", start: 52.9, end: 57.2, cardIndexes: [1] },
              { text: "Call the doctor for him, please!", hungarian: "Hívjátok a doktort hozzá, kérlek!", start: 57.2, end: 61.8 }
            ]
          },
          {
            title: "2. Versszak", start: 61.8, end: 81.1,
            lines: [
              { text: "His **fever** is thirty-seven point five.", hungarian: "A láza harminchét egész öt tized.", start: 61.8, end: 66.5, cardIndexes: [2] },
              { text: "He is barely staying alive.", hungarian: "Alig marad életben.", start: 66.5, end: 71.3 },
              { text: "He says this **illness** is too strong.", hungarian: "Azt mondja, ez a betegség túl erős.", start: 71.3, end: 75.9, cardIndexes: [3] },
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
              { text: "He has a very bad **cough**.", hungarian: "Nagyon csúnya köhögése van.", start: 100.4, end: 102.8, cardIndexes: [4] },
              { text: "He can never turn it off.", hungarian: "Soha nem tudja kikapcsolni.", start: 102.8, end: 105.2 },
              { text: "He **cough** loudly in the bed.", hungarian: "Hangosan köhög az ágyban.", start: 105.2, end: 107.3, cardIndexes: [4] },
              { text: "He puts a blanket on his head.", hungarian: "Egy takarót tesz a fejére.", start: 107.3, end: 109.9 }
            ]
          },
          {
            title: "4. Versszak", start: 109.9, end: 121.8,
            lines: [
              { text: "He **complain of** a **backache** now.", hungarian: "Hátfájásra panaszkodik most.", start: 109.9, end: 112.3, cardIndexes: [5, 6] },
              { text: "He is groaning like a cow.", hungarian: "Nyög, mint egy tehén.", start: 112.3, end: 114.8 },
              { text: "He feels a sharp **earache** too.", hungarian: "Éles fülfájást érez szintén.", start: 114.8, end: 117.2, cardIndexes: [7] },
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
              { text: "He thinks he **get cancer** today.", hungarian: "Azt hiszi, rákot kapott ma.", start: 141.3, end: 146.1, cardIndexes: [8] },
              { text: "He wants to throw his life away.", hungarian: "El akarja dobni az életét.", start: 146.1, end: 150.6 },
              { text: "This **ache** is extremely deep.", hungarian: "Ez a fájdalom rendkívül mély.", start: 150.6, end: 155.3, cardIndexes: [9] },
              { text: "He cannot even fall asleep.", hungarian: "Még elaludni sem tud.", start: 155.3, end: 160.5 }
            ]
          },
          {
            title: "6. Versszak", start: 160.5, end: 179.6,
            lines: [
              { text: "He writes his last will fast.", hungarian: "Gyorsan megírja az utolsó akaratát.", start: 160.5, end: 165.3 },
              { text: "This short life did not last.", hungarian: "Ez a rövid élet nem tartott sokáig.", start: 165.3, end: 169.7 },
              { text: "He talks about his tragic **death**.", hungarian: "A tragikus haláláról beszél.", start: 169.7, end: 174.2, cardIndexes: [10] },
              { text: "With his very final breath.", hungarian: "A legutolsó leheletével.", start: 174.2, end: 179.6 }
            ]
          },
          {
            title: "7. Versszak", start: 179.6, end: 193.9,
            lines: [
              { text: "Please **bury** me under the tree!", hungarian: "Kérlek, temessetek el a fa alá!", start: 179.6, end: 184.3, cardIndexes: [11] },
              { text: "Where the beautiful birds are free.", hungarian: "Ahol a gyönyörű madarak szabadok.", start: 184.3, end: 188.9 },
              { text: "He acts like a **mad** man.", hungarian: "Úgy viselkedik, mint egy őrült ember.", start: 188.9, end: 193.9, cardIndexes: [12] },
              { text: "I help him as much as I can.", hungarian: "Segítek neki, amennyire csak tudok.", start: 193.9, end: 197.4 }
            ]
          }
        ]
      },
      {
        id: "waitingroom",
        title: "Waiting Room",
        localAudio: "WaitingRoom.mp3",
        fallbackAudio: "",

        cardsData: [
          // ide jönnek a tanuló kártyák kézzel, ha kellenek
        ],

        songStructureData: [
          {
            title: "Refrain", start: 28.6, end: 55.7,
            lines: [
              { text: "Sitting in the waiting room, feeling so alone,", hungarian: "Ülök a váróteremben, olyan egyedül érzem magam,", start: 28.6, end: 35.2 },
              { text: "Waiting for the doctor, staring at my phone.", hungarian: "Várakozom az orvosra, a telefonomat bámulom.", start: 35.2, end: 41.7 },
              { text: "Everyone is sick and making quiet sounds,", hungarian: "Mindenki beteg és halk hangokat ad ki,", start: 41.7, end: 48.3 },
              { text: "While the heavy **fatigue** and silence bounds.", hungarian: "Míg a nehéz **fáradtság** és csend körbezár.", start: 48.3, end: 55.7 }
            ]
          },
          {
            title: "Verse 1", start: 55.7, end: 69.4,
            lines: [
              { text: "A little boy is crying, holding his left hand,", hungarian: "Egy kisfiú sír, a bal kezét fogja,", start: 55.7, end: 59.3 },
              { text: "He broke a **phalange**, playing in the sand.", hungarian: "Eltörött egy **ujjperc**e, miközben a homokban játszott.", start: 59.3, end: 62.6 },
              { text: "An older man is coughing, breathing with a wheeze,", hungarian: "Egy idősebb férfi köhög, zihálva lélegzik,", start: 62.6, end: 66.0 },
              { text: "He feels a sharp **vertigo**, weak upon his knees.", hungarian: "Erős **szédülés**t érez, gyenge a térde.", start: 66, end: 69.4 }
            ]
          },
          {
            title: "Verse 2", start: 69.4, end: 84.5,
            lines: [
              { text: "A woman sitting near me has a massive **bruise**,", hungarian: "Egy mellettem ülő nőnek hatalmas **véraláfutás**a van,", start: 69.4, end: 72.5 },
              { text: "She bumped into the table, nothing left to lose.", hungarian: "Nekiütközött az asztalnak, nincs vesztenivalója.", start: 72.5, end: 75.6 },
              { text: "She has a red **rash** spreading on her arm,", hungarian: "Egy vörös **kiütés** terjed a karján,", start: 75.6, end: 78.9 },
              { text: "Hoping that the doctor keeps her safe from harm.", hungarian: "Remélve, hogy az orvos megóvja a bajtól.", start: 78.9, end: 84.5 }
            ]
          },
          {
            title: "Refrain", start: 84.5, end: 124.0,
            lines: [
              { text: "Sitting in the waiting room, feeling so alone,", hungarian: "Ülök a váróteremben, olyan egyedül érzem magam,", start: 84.5, end: 90.4 },
              { text: "Waiting for the doctor, staring at my phone.", hungarian: "Várakozom az orvosra, a telefonomat bámulom.", start: 90.4, end: 97.7 },
              { text: "Everyone is sick and making quiet sounds,", hungarian: "Mindenki beteg és halk hangokat ad ki,", start: 97.7, end: 104.2 },
              { text: "While the heavy fatigue and silence bounds.", hungarian: "Míg a nehéz fáradtság és csend körbezár.", start: 104.2, end: 124.0 }
            ]
          },
          {
            title: "Verse 3", start: 124, end: 138.2,
            lines: [
              { text: "A runner by the window feels a sharp **meniscus** pain,", hungarian: "Az ablaknál álló futó éles **meniszkusz**-fájdalmat érez,", start: 124, end: 128.4 },
              { text: "He twisted up his knee out running in the rain.", hungarian: "Megcsavarta a térdét, miközben az esőben futott.", start: 128.4, end: 131.6 },
              { text: "His **patella** is swollen, making loud complaints,", hungarian: "A **térdkalács**a megduzzadt, hangos panaszokat hallat,", start: 131.6, end: 134.9 },
              { text: "Looking at the ceiling like a pair of saints.", hungarian: "Úgy nézi a mennyezetet, mint egy pár szent.", start: 134.9, end: 138.2 }
            ]
          },
          {
            title: "Verse 4", start: 138.2, end: 151.7,
            lines: [
              { text: "Another patient tells the nurse about his **sternum** ache,", hungarian: "Egy másik beteg a **szegycsont**fájdalmáról beszél a nővérnek,", start: 138.2, end: 141.6 },
              { text: "He says his chest is hurting every breath he'll take.", hungarian: "Azt mondja, fáj a mellkasa minden egyes vett lélegzetnél.", start: 141.6, end: 144.5 },
              { text: "He feels a dull pressure right behind the bone,", hungarian: "Tompa nyomást érez közvetlenül a csont mögött,", start: 144.5, end: 147.6 },
              { text: "Sitting on the chair and waiting all alone.", hungarian: "A széken ül és teljesen egyedül vár.", start: 147.6, end: 151.7 }
            ]
          },
          {
            title: "Verse 5", start: 151.7, end: 166.5,
            lines: [
              { text: "A basketball player holds his broken **clavicle** tight,", hungarian: "Egy kosárlabdázó szorosan fogja a törött **kulcscsont**át,", start: 151.7, end: 154.7 },
              { text: "He crashed into a teammate in the game last night.", hungarian: "Összeütközött egy csapattársával a tegnap esti meccsen.", start: 154.7, end: 157.7 },
              { text: "His **scapula** is aching from the heavy fall,", hungarian: "A **lapocká**ja fáj a nehéz eséstől,", start: 157.7, end: 160.9 },
              { text: "Now he is the saddest person in the hall.", hungarian: "Most ő a legszomorúbb ember a teremben.", start: 160.9, end: 166.5 }
            ]
          },
          {
            title: "Refrain", start: 166.5, end: 207.5,
            lines: [
              { text: "Sitting in the waiting room, feeling so alone,", hungarian: "Ülök a váróteremben, olyan egyedül érzem magam,", start: 166.5, end: 172.9 },
              { text: "Waiting for the doctor, staring at my phone.", hungarian: "Várakozom az orvosra, a telefonomat bámulom.", start: 172.9, end: 180.1 },
              { text: "Everyone is sick and making quiet sounds,", hungarian: "Mindenki beteg és halk hangokat ad ki,", start: 180.1, end: 186.4 },
              { text: "While the heavy fatigue and silence bounds.", hungarian: "Míg a nehéz fáradtság és csend körbezár.", start: 186.4, end: 207.5 }
            ]
          },
          {
            title: "Verse 6", start: 207.5, end: 222.3,
            lines: [
              { text: "A dancer pulled a **tendon** while she tried to bend,", hungarian: "Egy táncos meghúzott egy **ín**at, miközben hajolni próbált,", start: 207.5, end: 210.6 },
              { text: "She hopes this painful visit comes to a quick end.", hungarian: "Reméli, hogy ennek a fájdalmas látogatásnak hamar vége szakad.", start: 210.6, end: 213.7 },
              { text: "A **ligament** is strained, she cannot walk away,", hungarian: "Egy **szalag** megnyúlt, nem tud elmenni,", start: 213.7, end: 217.0 },
              { text: "Waiting for an answer on a rainy day.", hungarian: "Egy esős napon várja a választ.", start: 217, end: 222.3 }
            ]
          },
          {
            title: "Verse 7", start: 222.3, end: 236.5,
            lines: [
              { text: "The damaged **cartilage** is hurting in his knee,", hungarian: "A károsodott **porc** fáj a térdében,", start: 222.3, end: 225.2 },
              { text: "He walks around the office very slowly.", hungarian: "Nagyon lassan járkál a rendelőben.", start: 225.2, end: 228.4 },
              { text: "He feels a deep **nausea** coming to his head,", hungarian: "Mély **hányinger** önti el a fejét,", start: 228.4, end: 231.9 },
              { text: "Wishing he was resting safely in his bed.", hungarian: "Azt kívánja, bárcsak biztonságban pihenne az ágyában.", start: 231.9, end: 236.5 }
            ]
          },
          {
            title: "Verse 8", start: 236.5, end: 252.1,
            lines: [
              { text: "A worker hurt his **metatarsus** dropping heavy wood,", hungarian: "Egy munkás megsértette a **lábközépcsont**át, amikor nehéz fát ejtett le,", start: 236.5, end: 240.0 },
              { text: "He cannot stand as firmly as he always could.", hungarian: "Nem tud olyan stabilan állni, mint szokott.", start: 240, end: 242.9 },
              { text: "The waiting room is quiet, everybody waits,", hungarian: "A váróterem csendes, mindenki várakozik,", start: 242.9, end: 246.6 },
              { text: "Watching as the nurse is opening the gates.", hungarian: "Figyelik, amint a nővér kinyitja az ajtókat.", start: 246.6, end: 252.1 }
            ]
          },
          {
            title: "Refrain", start: 252.1, end: 277.3,
            lines: [
              { text: "Sitting in the waiting room, feeling so alone,", hungarian: "Ülök a váróteremben, olyan egyedül érzem magam,", start: 252.1, end: 258.1 },
              { text: "Waiting for the doctor, staring at my phone.", hungarian: "Várakozom az orvosra, a telefonomat bámulom.", start: 258.1, end: 265.3 },
              { text: "Everyone is sick and making quiet sounds,", hungarian: "Mindenki beteg és halk hangokat ad ki,", start: 265.3, end: 272.1 },
              { text: "While the heavy fatigue and silence bounds.", hungarian: "Míg a nehéz fáradtság és csend körbezár.", start: 272.1, end: 277.3 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "buli_jellem",
    title: "Buli és jellem",
    songs: [
      {
        id: "my_party",
        title: "My Party",
        localAudio: "MyParty.mp3",
        fallbackAudio: "",

        cardsData: [
          { keyword: "character", english: "We all have a different **character**.", hungarian: "Mindannyiunknak más a karaktere/egyénisége.", startTime: 28.8, endTime: 32.3, verseIndex: 1 },
          { keyword: "active", english: "Look at Jim, he is **active**.", hungarian: "Nézz Jimre, ő aktív/élénk.", startTime: 35.8, endTime: 39.1, verseIndex: 1 },
          { keyword: "calm", english: "His lovely girlfriend is so **calm**.", hungarian: "A kedves barátnője olyan nyugodt.", startTime: 43.1, endTime: 46.6, verseIndex: 2 },
          { keyword: "fool", english: "Don't be a **fool**, my friend.", hungarian: "Ne légy bolond, barátom.", startTime: 50.0, endTime: 53.6, verseIndex: 2 },
          { keyword: "ability", english: "Everyone has a special **ability**.", hungarian: "Mindenkinek van egy különleges képessége.", startTime: 111.0, endTime: 114.7, verseIndex: 4 },
          { keyword: "talent", english: "My friend Max has many **talent**.", hungarian: "Max barátomnak sok tehetsége van.", startTime: 118.2, endTime: 121.7, verseIndex: 4 },
          { keyword: "creative", english: "Mary is very **creative** and smart.", hungarian: "Mary nagyon kreatív és eszes/intelligens.", startTime: 125.4, endTime: 129.4, verseIndex: 5 },
          { keyword: "smart", english: "Mary is very creative and **smart**.", hungarian: "Mary nagyon kreatív és eszes/intelligens.", startTime: 125.4, endTime: 129.4, verseIndex: 5 },
          { keyword: "quiet", english: "Tom is **quiet** and intelligent.", hungarian: "Tom csendes és intelligens.", startTime: 132.7, endTime: 135.9, verseIndex: 5 },
          { keyword: "intelligent", english: "Tom is quiet and **intelligent**.", hungarian: "Tom csendes és intelligens.", startTime: 132.7, endTime: 135.9, verseIndex: 5 },
          { keyword: "talented", english: "You are a very **talented** person.", hungarian: "Te egy nagyon tehetséges személy vagy.", startTime: 139.7, endTime: 143.4, verseIndex: 6 },
          { keyword: "powerful", english: "The rich politician is very **powerful**.", hungarian: "A gazdag politikus nagyon nagy hatalommal rendelkezik.", startTime: 146.8, endTime: 150.3, verseIndex: 6 },
          { keyword: "strict", english: "Anna's mom is so **strict**.", hungarian: "Anna anyukája olyan szigorú.", startTime: 212.0, endTime: 215.0, verseIndex: 8 },
          { keyword: "difficult", english: "The escape is **difficult**.", hungarian: "A szökés nehéz.", startTime: 218.7, endTime: 222.2, verseIndex: 8 },
          { keyword: "weak", english: "Jack is not really **weak**.", hungarian: "Jack nem igazán gyenge.", startTime: 225.5, endTime: 229.5, verseIndex: 9 },
          { keyword: "stupid", english: "He isn't **stupid** or silly.", hungarian: "Nem ostoba vagy buta.", startTime: 233.3, endTime: 236.9, verseIndex: 9 },
          { keyword: "silly", english: "He isn't stupid or **silly**.", hungarian: "Nem ostoba vagy buta.", startTime: 233.3, endTime: 236.9, verseIndex: 9 },
          { keyword: "easygoing", english: "My brother is **easygoing**.", hungarian: "A testvérem lezser / semmiből gondot nem csináló.", startTime: 240.3, endTime: 243.8, verseIndex: 10 },
          { keyword: "serious", english: "My father is very quiet and **serious**.", hungarian: "Az apukám nagyon csendes és komoly.", startTime: 247.0, endTime: 251.1, verseIndex: 10 }
        ],

        songStructureData: [
          {
            title: "Refrén", start: 14.0, end: 28.8,
            lines: [
              { text: "This is my party, everyone is here.", hungarian: "Ez az én bulim, mindenki itt van.", start: 14.0, end: 17.7 },
              { text: "This is my house, everything is clear.", hungarian: "Ez az én házam, minden tiszta/világos.", start: 17.7, end: 21.1 },
              { text: "My all best friends are drunk.", hungarian: "Az összes legjobb barátom részeg.", start: 21.1, end: 23.6 },
              { text: "A hangover is guaranteed to come!", hungarian: "A másnaposság garantáltan megérkezik!", start: 23.6, end: 28.8 }
            ]
          },
          {
            title: "1. Versszak", start: 28.8, end: 43.1,
            lines: [
              { text: "We all have a different **character**.", hungarian: "Mindannyiunknak más a karaktere/egyénisége.", start: 28.8, end: 32.3, cardIndexes: [0] },
              { text: "Let's drink some wine together!", hungarian: "Igyunk egy kis bort együtt!", start: 32.3, end: 35.8 },
              { text: "Look at Jim, he is **active**.", hungarian: "Nézz Jimre, ő aktív/élénk.", start: 35.8, end: 39.1, cardIndexes: [1] },
              { text: "He always wants to live.", hungarian: "Mindig élni akar.", start: 39.1, end: 43.1 }
            ]
          },
          {
            title: "2. Versszak", start: 43.1, end: 56.8,
            lines: [
              { text: "His lovely girlfriend is so **calm**.", hungarian: "A kedves barátnője olyan nyugodt.", start: 43.1, end: 46.6, cardIndexes: [2] },
              { text: "She is sitting under a palm.", hungarian: "Egy pálmafa alatt ül.", start: 46.6, end: 50.0 },
              { text: "Don't be a **fool**, my friend.", hungarian: "Ne légy bolond, barátom.", start: 50.0, end: 53.6, cardIndexes: [3] },
              { text: "Dance with us until the end!", hungarian: "Táncolj velünk a végéig!", start: 53.6, end: 56.8 }
            ]
          },
          {
            title: "Refrén (2.)", start: 56.8, end: 111.0,
            lines: [
              { text: "This is my party, everyone is here.", hungarian: "Ez az én bulim, mindenki itt van.", start: 56.8, end: 60.0 },
              { text: "This is my house, everything is clear.", hungarian: "Ez az én házam, minden tiszta/világos.", start: 60.0, end: 63.5 },
              { text: "My all best friends are drunk.", hungarian: "Az összes legjobb barátom részeg.", start: 63.5, end: 66.0 },
              { text: "A hangover is guaranteed to come!", hungarian: "A másnaposság garantáltan megérkezik!", start: 66.0, end: 111.0 }
            ]
          },
          {
            title: "3. Versszak", start: 111.0, end: 125.4,
            lines: [
              { text: "Everyone has a special **ability**.", hungarian: "Mindenkinek van egy különleges képessége.", start: 111.0, end: 114.7, cardIndexes: [4] },
              { text: "We can change our reality.", hungarian: "Meg tudjuk változtatni a valóságunkat.", start: 114.7, end: 118.2 },
              { text: "My friend Max has many **talent**.", hungarian: "Max barátomnak sok tehetsége van.", start: 118.2, end: 121.7, cardIndexes: [5] },
              { text: "He can eat six eggplants.", hungarian: "Hat padlizsánt tud megenni.", start: 121.7, end: 125.4 }
            ]
          },
          {
            title: "4. Versszak", start: 125.4, end: 139.7,
            lines: [
              { text: "Mary is very **creative** and **smart**.", hungarian: "Mary nagyon kreatív és eszes/intelligens.", start: 125.4, end: 129.4, cardIndexes: [6, 7] },
              { text: "She loves music and art.", hungarian: "Szereti a zenét és a művészetet.", start: 129.4, end: 132.7 },
              { text: "Tom is **quiet** and **intelligent**.", hungarian: "Tom csendes és intelligens.", start: 132.7, end: 135.9, cardIndexes: [8, 9] },
              { text: "His cocktails are excellent.", hungarian: "A koktéljai kiválóak.", start: 135.9, end: 139.7 }
            ]
          },
          {
            title: "5. Versszak", start: 139.7, end: 175.5,
            lines: [
              { text: "You are a very **talented** person.", hungarian: "Te egy nagyon tehetséges személy vagy.", start: 139.7, end: 143.4, cardIndexes: [10] },
              { text: "You can learn every lesson.", hungarian: "Minden leckét meg tudsz tanulni.", start: 143.4, end: 146.8 },
              { text: "The rich politician is very **powerful**.", hungarian: "A gazdag politikus nagyon nagy hatalommal rendelkezik.", start: 146.8, end: 150.3, cardIndexes: [11] },
              { text: "His house is built with public funds. Uuuuuuuuu", hungarian: "A háza közpénzből épült. Uuuuuuuuu", start: 150.3, end: 175.5 }
            ]
          },
          {
            title: "Refrén (3.)", start: 175.5, end: 212.0,
            lines: [
              { text: "This is my party, everyone is here.", hungarian: "Ez az én bulim, mindenki itt van.", start: 175.5, end: 177.5 },
              { text: "This is my house, everything is clear.", hungarian: "Ez az én házam, minden tiszta/világos.", start: 177.5, end: 200.7 },
              { text: "My all best friends are drunk.", hungarian: "Az összes legjobb barátom részeg.", start: 200.7, end: 203.5 },
              { text: "A hangover is guaranteed to come!", hungarian: "A másnaposság garantáltan megérkezik!", start: 203.5, end: 212.0 }
            ]
          },
          {
            title: "6. Versszak", start: 212.0, end: 225.5,
            lines: [
              { text: "Anna's mom is so **strict**.", hungarian: "Anna anyukája olyan szigorú.", start: 212.0, end: 215.0, cardIndexes: [12] },
              { text: "But she has a good trick.", hungarian: "De van egy jó trükkje.", start: 215.0, end: 218.7 },
              { text: "The escape is **difficult**.", hungarian: "A szökés nehéz.", start: 218.7, end: 222.2, cardIndexes: [13] },
              { text: "But freedom is the result.", hungarian: "De a szabadság az eredmény.", start: 222.2, end: 225.5 }
            ]
          },
          {
            title: "7. Versszak", start: 225.5, end: 240.3,
            lines: [
              { text: "Jack is not really **weak**.", hungarian: "Jack nem igazán gyenge.", start: 225.5, end: 229.5, cardIndexes: [14] },
              { text: "He beats Hulk every week.", hungarian: "Minden héten elveri Hulk-ot.", start: 229.5, end: 233.3 },
              { text: "He isn't **stupid** or **silly**.", hungarian: "Nem ostoba vagy buta.", start: 233.3, end: 236.9, cardIndexes: [15, 16] },
              { text: "Batman is his family", hungarian: "Batman a családja", start: 236.9, end: 240.3 }
            ]
          },
          {
            title: "8. Versszak", start: 240.3, end: 260.0,
            lines: [
              { text: "My brother is **easygoing**.", hungarian: "A testvérem lezser / semmiből gondot nem csináló.", start: 240.3, end: 243.8, cardIndexes: [17] },
              { text: "The good energy is flowing.", hungarian: "Árad a jó energia.", start: 243.8, end: 247.0 },
              { text: "My father is very quiet and **serious**.", hungarian: "Az apukám nagyon csendes és komoly.", start: 247.0, end: 251.1, cardIndexes: [18] },
              { text: "The world is big and curious.", hungarian: "A világ nagy és kíváncsi.", start: 251.1, end: 260.0 }
            ]
          }
        ]
      }
    ]
  }
];

// Ide navigáljon vissza a "❮ Vissza" gomb a lejátszóból
const BACK_LINK = "index.html";