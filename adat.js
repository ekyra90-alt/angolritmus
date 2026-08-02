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
    id: "alapozo_temak",
    title: "Alapozó témák",
    songs: [
      {
        id: "colors",
        title: "Colors",
        localAudio: "Colors.mp3",
        fallbackAudio: "",

        cardsData: [
          { keyword: "Red", keywordHungarian: "piros", english: "The bus is **red**", hungarian: "A busz **piros**", startTime: 40.6, endTime: 49.3, verseIndex: 1 },
          { keyword: "Blue", keywordHungarian: "kék", english: "The video is **blue**", hungarian: "A videó **kék**", startTime: 40.6, endTime: 49.3, verseIndex: 1 },
          { keyword: "Green", keywordHungarian: "zöld", english: "The salad is **green**", hungarian: "A saláta **zöld**", startTime: 50, endTime: 59.0, verseIndex: 2 },
          { keyword: "Black", keywordHungarian: "fekete", english: "The robot is **black**", hungarian: "A robot **fekete**", startTime: 40.6, endTime: 49.3, verseIndex: 1 },
          { keyword: "White", keywordHungarian: "fehér", english: "The hotel is **white**", hungarian: "A hotel **fehér**", startTime: 50, endTime: 59.0, verseIndex: 2 },
          { keyword: "Yellow", keywordHungarian: "sárga", english: "The taxi is **yellow**", hungarian: "A taxi **sárga**", startTime: 77.8, endTime: 87.3, verseIndex: 4 },
          { keyword: "Brown", keywordHungarian: "barna", english: "The clinic is **brown**", hungarian: "A klinika **barna**", startTime: 50, endTime: 59.0, verseIndex: 2 },
          { keyword: "Pink", keywordHungarian: "rózsaszín", english: "The radio is **pink**", hungarian: "A rádió **rózsaszín**", startTime: 77.8, endTime: 87.3, verseIndex: 4 },
          { keyword: "Orange", keywordHungarian: "narancssárga", english: "The orange is **orange**", hungarian: "A narancs **narancssárga**", startTime: 87.9, endTime: 97.2, verseIndex: 5 },
          { keyword: "Purple", keywordHungarian: "lila", english: "The radio is **purple**", hungarian: "A rádió **lila**", startTime: 87.9, endTime: 97.2, verseIndex: 5 }
        ],

        songStructureData: [
          {
            title: "Refrain", start: 19.1, end: 37.6,
            lines: [
              { text: "Red, blue, green, black, white and yellow", hungarian: "Piros, kék, zöld, fekete, fehér és sárga", start: 19.1, end: 37.6 },
              { text: "Brown, pink, orange, purple. Hello!", hungarian: "Barna, rózsaszín, narancssárga, lila. Helló!", start: 19.1, end: 37.6 },
              { text: "Red, blue, green, black, white and yellow", hungarian: "Piros, kék, zöld, fekete, fehér és sárga", start: 19.1, end: 37.6 },
              { text: "Brown, pink, orange, purple. Hello!", hungarian: "Barna, rózsaszín, narancssárga, lila. Helló!", start: 19.1, end: 37.6 }
            ]
          },
          {
            title: "Verse 1", start: 40.6, end: 49.3,
            noLineTiming: true,
            lines: [
              { text: "The bus is **red**", hungarian: "A busz piros", start: 40.6, end: 49.3 },
              { text: "The video is **blue**", hungarian: "A videó kék", start: 40.6, end: 49.3 },
              { text: "The robot is **black**", hungarian: "A robot fekete", start: 40.6, end: 49.3 },
              { text: "Easy colors for you", hungarian: "Könnyű színek neked", start: 40.6, end: 49.3 }
            ]
          },
          {
            title: "Verse 2", start: 50.0, end: 59.0,
            noLineTiming: true,
            lines: [
              { text: "The salad is **green**", hungarian: "A saláta zöld", start: 50.0, end: 59.0 },
              { text: "The hotel is **white**", hungarian: "A hotel fehér", start: 50.0, end: 59.0 },
              { text: "The clinic is **brown**", hungarian: "A klinika barna", start: 50.0, end: 59.0 },
              { text: "Colors simple and bright", hungarian: "Egyszerű és élénk színek", start: 50.0, end: 59.0 }
            ]
          },
          {
            title: "Refrain", start: 59.1, end: 77.6,
            lines: [
              { text: "Red, blue, green, black, white and yellow", hungarian: "Piros, kék, zöld, fekete, fehér és sárga", start: 59.1, end: 77.6 },
              { text: "Brown, pink, orange, purple. Hello!", hungarian: "Barna, rózsaszín, narancssárga, lila. Helló!", start: 59.1, end: 77.6 },
              { text: "Red, blue, green, black, white and yellow", hungarian: "Piros, kék, zöld, fekete, fehér és sárga", start: 59.1, end: 77.6 },
              { text: "Brown, pink, orange, purple. Hello!", hungarian: "Barna, rózsaszín, narancssárga, lila. Helló!", start: 59.1, end: 77.6 }
            ]
          },
          {
            title: "Verse 3", start: 77.8, end: 87.3,
            noLineTiming: true,
            lines: [
              { text: "The taxi is **yellow**", hungarian: "A taxi sárga", start: 77.8, end: 87.3 },
              { text: "The radio is **pink**", hungarian: "A rádió rózsaszín", start: 77.8, end: 87.3 },
              { text: "The chocolate is **brown**", hungarian: "A csokoládé barna", start: 77.8, end: 87.3 },
              { text: "Easy colors, what you think", hungarian: "Könnyű színek, mit gondolsz", start: 77.8, end: 87.3 }
            ]
          },
          {
            title: "Verse 4", start: 87.9, end: 97.2,
            noLineTiming: true,
            lines: [
              { text: "The orange is **orange**", hungarian: "A narancs narancssárga", start: 87.9, end: 97.2 },
              { text: "The radio is **purple**", hungarian: "A rádió lila", start: 87.9, end: 97.2 },
              { text: "The garage is **black**", hungarian: "A garázs fekete", start: 87.9, end: 97.2 },
              { text: "Funny colors in a circle", hungarian: "Vicces színek egy körben", start: 87.9, end: 97.2 }
            ]
          },
          {
            title: "Refrain", start: 97.5, end: 115.5,
            lines: [
              { text: "Red, blue, green, black, white and yellow", hungarian: "Piros, kék, zöld, fekete, fehér és sárga", start: 97.5, end: 115.5 },
              { text: "Brown, pink, orange, purple. Hello!", hungarian: "Barna, rózsaszín, narancssárga, lila. Helló!", start: 97.5, end: 115.5 },
              { text: "Red, blue, green, black, white and yellow", hungarian: "Piros, kék, zöld, fekete, fehér és sárga", start: 97.5, end: 115.5 },
              { text: "Brown, pink, orange, purple. Hello!", hungarian: "Barna, rózsaszín, narancssárga, lila. Helló!", start: 97.5, end: 115.5 }
            ]
          },
          {
            title: "Verse 5", start: 135.2, end: 143.9,
            noLineTiming: true,
            lines: [
              { text: "The tomato is **red**", hungarian: "A paradicsom piros", start: 135.2, end: 143.9 },
              { text: "The jeans are **blue**", hungarian: "A farmer kék", start: 135.2, end: 143.9 },
              { text: "The kiwi is **green**", hungarian: "A kivi zöld", start: 135.2, end: 143.9 },
              { text: "Easy colors for you", hungarian: "Könnyű színek neked", start: 135.2, end: 143.9 }
            ]
          },
          {
            title: "Verse 6", start: 144.5, end: 152.8,
            noLineTiming: true,
            lines: [
              { text: "The phone is **black**", hungarian: "A telefon fekete", start: 144.5, end: 152.8 },
              { text: "The paper is **white**", hungarian: "A papír fehér", start: 144.5, end: 152.8 },
              { text: "The lemon is **yellow**", hungarian: "A citrom sárga", start: 144.5, end: 152.8 },
              { text: "Colors simple and bright", hungarian: "Egyszerű és élénk színek", start: 144.5, end: 152.8 }
            ]
          },
          {
            title: "Refrain", start: 154.0, end: 175.8,
            lines: [
              { text: "Red, blue, green, black, white and yellow", hungarian: "Piros, kék, zöld, fekete, fehér és sárga", start: 154.0, end: 175.8 },
              { text: "Brown, pink, orange, purple. Hello!", hungarian: "Barna, rózsaszín, narancssárga, lila. Helló!", start: 154.0, end: 175.8 },
              { text: "Red, blue, green, black, white and yellow", hungarian: "Piros, kék, zöld, fekete, fehér és sárga", start: 154.0, end: 175.8 },
              { text: "Brown, pink, orange, purple. Hello!", hungarian: "Barna, rózsaszín, narancssárga, lila. Helló!", start: 154.0, end: 175.8 }
            ]
          },
          {
            title: "Verse 7", start: 193.8, end: 202.0,
            noLineTiming: true,
            lines: [
              { text: "The coffee is **brown**", hungarian: "A kávé barna", start: 193.8, end: 202.0 },
              { text: "The sofa is **pink**", hungarian: "A kanapé rózsaszín", start: 193.8, end: 202.0 },
              { text: "The pullover is **orange**", hungarian: "A pulóver narancssárga", start: 193.8, end: 202.0 },
              { text: "Easy colors, what you think", hungarian: "Könnyű színek, mit gondolsz", start: 193.8, end: 202.0 }
            ]
          },
          {
            title: "Verse 8", start: 203.1, end: 212.3,
            noLineTiming: true,
            lines: [
              { text: "The salami is **purple**", hungarian: "A szalámi lila", start: 203.1, end: 212.3 },
              { text: "The chocolate is **brown**", hungarian: "A csokoládé barna", start: 203.1, end: 212.3 },
              { text: "The panda is **black**", hungarian: "A panda fekete", start: 203.1, end: 212.3 },
              { text: "Funny colors all around", hungarian: "Vicces színek mindenütt", start: 203.1, end: 212.3 }
            ]
          },
          {
            title: "Refrain", start: 212.7, end: 231.0,
            lines: [
              { text: "Red, blue, green, black, white and yellow", hungarian: "Piros, kék, zöld, fekete, fehér és sárga", start: 212.7, end: 231.0 },
              { text: "Brown, pink, orange, purple. Hello!", hungarian: "Barna, rózsaszín, narancssárga, lila. Helló!", start: 212.7, end: 231.0 },
              { text: "Red, blue, green, black, white and yellow", hungarian: "Piros, kék, zöld, fekete, fehér és sárga", start: 212.7, end: 231.0 },
              { text: "Brown, pink, orange, purple. Hello!", hungarian: "Barna, rózsaszín, narancssárga, lila. Helló!", start: 212.7, end: 231.0 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "jellemvonasok",
    title: "Jellemvonások",
    songs: [
      {
        id: "behind_the_smile",
        title: "Behind the smile",
        localAudio: "Behind the smile.mp3",
        fallbackAudio: "",

        cardsData: [
          { keyword: "Call", keywordHungarian: "hív, nevez, elnevez", english: "I **call** my friend today.", hungarian: "Ma felhívom a barátomat.", startTime: 27, endTime: 30.1, verseIndex: 0 }, // ⚠️ ellenőrizd a magyar kiemelést, nem találtam szó szerint
          { keyword: "Name", keywordHungarian: "elnevez / név", english: "What is your **name**, please?", hungarian: "Mi a neved, kérlek?", startTime: 33.5, endTime: 36.5, verseIndex: 0 }, // ⚠️ ellenőrizd a magyar kiemelést, nem találtam szó szerint
          { keyword: "Childhood", keywordHungarian: "gyermekkor", english: "I remember my **childhood** here.", hungarian: "Emlékszem a **gyermekkor**omra itt.", startTime: 41.1, endTime: 44.0, verseIndex: 1 },
          { keyword: "Generation", keywordHungarian: "generáció", english: "Every **generation** walks this way.", hungarian: "Minden **generáció** erre jár.", startTime: 47.9, endTime: 51.0, verseIndex: 1 },
          { keyword: "Human", keywordHungarian: "emberi lény / ember", english: "Every **human** needs a rest.", hungarian: "Minden embernek szüksége van pihenésre.", startTime: 56.1, endTime: 69.2, verseIndex: 2 }, // ⚠️ ellenőrizd a magyar kiemelést, nem találtam szó szerint
          { keyword: "ID / ID card", keywordHungarian: "személyi igazolvány (ID)", english: "Show me your **ID** right now.", hungarian: "Mutasd meg a személyidet most.", startTime: 56.1, endTime: 69.2, verseIndex: 2 }, // ⚠️ ellenőrizd a magyar kiemelést, nem találtam szó szerint
          { keyword: "Initial", keywordHungarian: "kezdőbetű / monogram", english: "I write my **initials** on the wall.", hungarian: "Felírom a monogramomat a falra.", startTime: 89.5, endTime: 102.8, verseIndex: 4 }, // ⚠️ ellenőrizd a magyar kiemelést, nem találtam szó szerint
          { keyword: "Lady", keywordHungarian: "hölgy", english: "That **lady** has a yellow bag.", hungarian: "Annak a **hölgy**nek sárga táskája van.", startTime: 89.5, endTime: 102.8, verseIndex: 4 },
          { keyword: "Madam", keywordHungarian: "asszonyom", english: "Good morning, **madam**, how are you?", hungarian: "Jó reggelt, **asszonyom**! Hogy van?", startTime: 104.1, endTime: 117.2, verseIndex: 5 },
          { keyword: "Sir", keywordHungarian: "uram", english: "Thank you for the coffee, **sir**.", hungarian: "Köszönöm a kávét, **uram**.", startTime: 104.1, endTime: 117.2, verseIndex: 5 },
          { keyword: "Youth", keywordHungarian: "fiatalság / fiatalok", english: "Keep your **youth** alive and bold.", hungarian: "Őrizd meg a fiatalságodat és légy bátor.", startTime: 138.6, endTime: 148.3, verseIndex: 7 }, // ⚠️ ellenőrizd a magyar kiemelést, nem találtam szó szerint
          { keyword: "Divorced", keywordHungarian: "elvált", english: "That **divorced** man walks alone.", hungarian: "Az az **elvált** férfi egyedül sétál.", startTime: 138.6, endTime: 148.3, verseIndex: 7 },
          { keyword: "Elderly", keywordHungarian: "idős", english: "An **elderly** man sits on a chair.", hungarian: "Egy **idős** férfi ül egy széken.", startTime: 187.3, endTime: 217.4, verseIndex: 8 },
          { keyword: "Middle", keywordHungarian: "aged - középkorú", english: "A **middle-aged** woman reads a book.", hungarian: "Egy középkorú nő könyvet olvas.", startTime: 187.3, endTime: 217.4, verseIndex: 8 }, // ⚠️ ellenőrizd a magyar kiemelést, nem találtam szó szerint
          { keyword: "Personal", keywordHungarian: "személyes", english: "Keep it **personal** and sweet.", hungarian: "Maradjon **személyes** és kedves.", startTime: 278.9, endTime: 278.9, verseIndex: 10 },
          { keyword: "Teenage", keywordHungarian: "tizenéves / tinédzser", english: "My **teenage** memories return.", hungarian: "Visszatérnek a tinédzser emlékeim.", startTime: 278.9, endTime: 278.9, verseIndex: 10 }, // ⚠️ ellenőrizd a magyar kiemelést, nem találtam szó szerint
          { keyword: "Guys", keywordHungarian: "srácok", english: "Hello **guys**, look at the sun!", hungarian: "Sziasztok **srácok**, nézzétek a napot!", startTime: 278.9, endTime: 280.2, verseIndex: 11 },
          { keyword: "Grow up", keywordHungarian: "felnőni", english: "Where did you **grow up**?", hungarian: "Hol nőttél fel?", startTime: 278.9, endTime: 280.2, verseIndex: 11 }, // ⚠️ ellenőrizd a magyar kiemelést, nem találtam szó szerint
        ],

        songStructureData: [
          {
            title: "Verse 1", start: 27.0, end: 40.2,
            lines: [
              { text: "I **call** my friend today.", hungarian: "Ma felhívom a barátomat.", start: 27, end: 30.1 },
              { text: "No one has the time to stay.", hungarian: "Senkinek nincs ideje maradni.", start: 30.1, end: 33.5 },
              { text: "What is your **name**, please?", hungarian: "Mi a neved, kérlek?", start: 33.5, end: 36.5 },
              { text: "Everyone hides behind a screen.", hungarian: "Mindenki egy képernyő mögé bújik.", start: 36.5, end: 40.2 }
            ]
          },
          {
            title: "Verse 2", start: 41.1, end: 54.7,
            lines: [
              { text: "I remember my **childhood** here.", hungarian: "Emlékszem a gyermekkoromra itt.", start: 41.1, end: 44.0 },
              { text: "The old days slowly disappear.", hungarian: "A régi napok lassan eltűnnek.", start: 44, end: 47.9 },
              { text: "Every **generation** walks this way.", hungarian: "Minden generáció erre jár.", start: 46.8, end: 50 },
              { text: "But nobody has time to stay.", hungarian: "De senkinek nincs ideje maradni.", start: 51, end: 54.7 }
            ]
          },
          {
            title: "Verse 3", start: 56.1, end: 69.2,
            noLineTiming: true,
            lines: [
              { text: "Every **human** needs a rest.", hungarian: "Minden embernek szüksége van pihenésre.", start: 56.1, end: 69.2 },
              { text: "Still we always chase the best.", hungarian: "Mégis mindig a legjobbat hajszoljuk.", start: 56.1, end: 69.2 },
              { text: "Show me your **ID** right now.", hungarian: "Mutasd meg a személyidet most.", start: 56.1, end: 69.2 },
              { text: "We need a number anyhow.", hungarian: "Valahogy szükségünk van egy számra.", start: 56.1, end: 69.2 }
            ]
          },
          {
            title: "Refrain", start: 69.5, end: 84.9,
            lines: [
              { text: "Walking down the street, FaceApp all around.", hungarian: "Sétálok az utcán, mindenütt FaceApp-os arcok.", start: 69.5, end: 84.9 },
              { text: "Everyone hides the pain they carry around.", hungarian: "Mindenki rejtegeti a fájdalmat, amit magával hord.", start: 69.5, end: 84.9 },
              { text: "I'm hiding all my little scars.", hungarian: "Én is rejtegetem az apró sebeimet.", start: 69.5, end: 84.9 },
              { text: "Maybe it's the fault in our stars.", hungarian: "Talán a csillagainkban van a hiba.", start: 69.5, end: 84.9 }
            ]
          },
          {
            title: "Verse 4", start: 89.5, end: 102.8,
            noLineTiming: true,
            lines: [
              { text: "I write my **initials** on the wall.", hungarian: "Felírom a monogramomat a falra.", start: 89.5, end: 102.8 },
              { text: "Tomorrow no one cares at all.", hungarian: "Holnap már senkit sem érdekel.", start: 89.5, end: 102.8 },
              { text: "That **lady** has a yellow bag.", hungarian: "Annak a hölgynek sárga táskája van.", start: 89.5, end: 102.8 },
              { text: "People ignore her as they pass.", hungarian: "Az emberek figyelmen kívül hagyják, miközben elmennek mellette.", start: 89.5, end: 102.8 }
            ]
          },
          {
            title: "Verse 5", start: 104.1, end: 117.2,
            noLineTiming: true,
            lines: [
              { text: "Good morning, **madam**, how are you?", hungarian: "Jó reggelt, asszonyom! Hogy van?", start: 104.1, end: 117.2 },
              { text: "We smile because that's what we do.", hungarian: "Mosolygunk, mert ezt tesszük.", start: 104.1, end: 117.2 },
              { text: "Thank you for the coffee, **sir**.", hungarian: "Köszönöm a kávét, uram.", start: 104.1, end: 117.2 },
              { text: "It burned my throat, it really hurt.", hungarian: "Leégette a torkomat, nagyon fájt.", start: 104.1, end: 117.2 }
            ]
          },
          {
            title: "Refrain", start: 117.9, end: 132.7,
            lines: [
              { text: "Walking down the street, FaceApp all around.", hungarian: "Sétálok az utcán, mindenütt FaceApp-os arcok.", start: 117.9, end: 132.7 },
              { text: "Everyone hides the pain they carry around.", hungarian: "Mindenki rejtegeti a fájdalmat, amit magával hord.", start: 117.9, end: 132.7 },
              { text: "I'm hiding all my little scars.", hungarian: "Én is rejtegetem az apró sebeimet.", start: 117.9, end: 132.7 },
              { text: "Maybe it's the fault in our stars.", hungarian: "Talán a csillagainkban van a hiba.", start: 117.9, end: 132.7 }
            ]
          },
          {
            title: "Verse 6", start: 138.6, end: 148.3,
            noLineTiming: true,
            lines: [
              { text: "Keep your **youth** alive and bold.", hungarian: "Őrizd meg a fiatalságodat és légy bátor.", start: 138.6, end: 148.3 },
              { text: "Dreams are slowly being sold.", hungarian: "Az álmokat lassan eladják.", start: 138.6, end: 148.3 },
              { text: "That **divorced** man walks alone.", hungarian: "Az az elvált férfi egyedül sétál.", start: 138.6, end: 148.3 },
              { text: "Nobody calls his broken phone.", hungarian: "Senki sem hívja a törött telefonját.", start: 138.6, end: 148.3 }
            ]
          },
          {
            title: "Verse 7", start: 187.3, end: 217.4,
            noLineTiming: true,
            lines: [
              { text: "An **elderly** man sits on a chair.", hungarian: "Egy idős férfi ül egy széken.", start: 187.3, end: 217.4 },
              { text: "People pass like he's not there.", hungarian: "Az emberek úgy mennek el mellette, mintha ott sem lenne.", start: 187.3, end: 217.4 },
              { text: "A **middle-aged** woman reads a book.", hungarian: "Egy középkorú nő könyvet olvas.", start: 187.3, end: 217.4 },
              { text: "No one stops to take a look.", hungarian: "Senki sem áll meg, hogy ránézzen.", start: 187.3, end: 217.4 }
            ]
          },
          {
            title: "Refrain", start: 237.5, end: 260.3,
            lines: [
              { text: "Walking down the street, FaceApp all around.", hungarian: "Sétálok az utcán, mindenütt FaceApp-os arcok.", start: 237.5, end: 260.3 },
              { text: "Everyone hides the pain they carry around.", hungarian: "Mindenki rejtegeti a fájdalmat, amit magával hord.", start: 237.5, end: 260.3 },
              { text: "I'm hiding all my little scars.", hungarian: "Én is rejtegetem az apró sebeimet.", start: 237.5, end: 260.3 },
              { text: "Maybe it's the fault in our stars.", hungarian: "Talán a csillagainkban van a hiba.", start: 237.5, end: 260.3 }
            ]
          },
          {
            title: "Verse 8", start: 278.9, end: 278.9,
            noLineTiming: true,
            lines: [
              { text: "Keep it **personal** and sweet.", hungarian: "Maradjon személyes és kedves.", start: 278.9, end: 278.9 },
              { text: "Truth gets buried in the street.", hungarian: "Az igazság el van temetve az utcán.", start: 278.9, end: 278.9 },
              { text: "My **teenage** memories return.", hungarian: "Visszatérnek a tinédzser emlékeim.", start: 278.9, end: 278.9 },
              { text: "I still have so much to learn.", hungarian: "Még mindig olyan sokat kell tanulnom.", start: 278.9, end: 278.9 }
            ]
          },
          {
            title: "Verse 9", start: 278.9, end: 280.2,
            noLineTiming: true,
            lines: [
              { text: "Hello **guys**, look at the sun!", hungarian: "Sziasztok srácok, nézzétek a napot!", start: 278.9, end: 280.2 },
              { text: "We keep smiling, one by one.", hungarian: "Tovább mosolygunk, egyenként.", start: 278.9, end: 280.2 },
              { text: "Where did you **grow up**?", hungarian: "Hol nőttél fel?", start: 278.9, end: 280.2 },
              { text: "Have you had enough?", hungarian: "Eleged lett?", start: 278.9, end: 280.2 }
            ]
          },
          {
            title: "Refrain", start: 280.2, end: 280.2,
            lines: [
              { text: "Walking down the street, FaceApp all around.", hungarian: "Sétálok az utcán, mindenütt FaceApp-os arcok.", start: 280.2, end: 280.2 },
              { text: "Everyone hides the pain they carry around.", hungarian: "Mindenki rejtegeti a fájdalmat, amit magával hord.", start: 280.2, end: 280.2 },
              { text: "I'm hiding all my little scars.", hungarian: "Én is rejtegetem az apró sebeimet.", start: 280.2, end: 280.2 },
              { text: "Maybe it's the fault in our stars.", hungarian: "Talán a csillagainkban van a hiba.", start: 280.2, end: 280.2 }
            ]
          }
        ]
      },
      {
        id: "the_house_party",
        title: "The House Party",
        localAudio: "The House Party.mp3",
        fallbackAudio: "",

        cardsData: [
          { keyword: "character", english: "Everyone has a different **character**.", hungarian: "Mindenkinek más a karaktere.", startTime: 28.7, endTime: 31.8, verseIndex: 1 },
          { keyword: "active", english: "Look at Jim, he is **active**.", hungarian: "Nézd meg Jimet, ő aktív.", startTime: 35.5, endTime: 38.5, verseIndex: 1 },
          { keyword: "calm", english: "His girlfriend is so **calm**.", hungarian: "A barátnője olyan nyugodt.", startTime: 42.6, endTime: 45.6, verseIndex: 2 },
          { keyword: "fool", english: "Don't be a **fool**, my friend.", hungarian: "Ne légy bolond, barátom!", startTime: 50.0, endTime: 53.0, verseIndex: 2 },
          { keyword: "ability", english: "Everyone has a special **ability**.", hungarian: "Mindenkinek van egy különleges képessége.", startTime: 71.2, endTime: 74.0, verseIndex: 4 },
          { keyword: "talent", english: "My friend Max has many **talents**.", hungarian: "Max barátomnak sok tehetsége van.", startTime: 78.2, endTime: 81.3, verseIndex: 4 },
          { keyword: "creative", english: "Mary is very **creative** and **smart**.", hungarian: "Mária nagyon kreatív és értelmes.", startTime: 85.5, endTime: 89.1, verseIndex: 5 },
          { keyword: "smart", english: "Mary is very **creative** and **smart**.", hungarian: "Mária nagyon kreatív és értelmes.", startTime: 85.5, endTime: 89.1, verseIndex: 5 },
          { keyword: "quiet", english: "Tom is **quiet** and **intelligent**.", hungarian: "Tom csendes és okos.", startTime: 92.3, endTime: 95.3, verseIndex: 5 },
          { keyword: "intelligent", english: "Tom is **quiet** and **intelligent**.", hungarian: "Tom csendes és okos.", startTime: 92.3, endTime: 95.3, verseIndex: 5 },
          { keyword: "talented", english: "You are a very **talented** person.", hungarian: "Te egy nagyon tehetséges személy vagy.", startTime: 99.1, endTime: 102.8, verseIndex: 6 },
          { keyword: "powerful", english: "The rich politician is very **powerful**.", hungarian: "A gazdag politikus nagyon nagy hatalommal rendelkező.", startTime: 106.1, endTime: 109.6, verseIndex: 6 },
          { keyword: "strict", english: "Anna's mom is so **strict**.", hungarian: "Anna anyja olyan szigorú.", startTime: 131.7, endTime: 135.2, verseIndex: 8 },
          { keyword: "difficult", english: "The escape is **difficult**.", hungarian: "A menekülés nehéz.", startTime: 138.2, endTime: 141.4, verseIndex: 8 },
          { keyword: "weak", english: "Jack is not really **weak**.", hungarian: "Jack nem igazán gyenge.", startTime: 145.6, endTime: 149.0, verseIndex: 9 },
          { keyword: "stupid", english: "He isn't **stupid** or **silly**.", hungarian: "Ő nem ostoba vagy buta.", startTime: 152.8, endTime: 156.0, verseIndex: 9 },
          { keyword: "silly", english: "He isn't **stupid** or **silly**.", hungarian: "Ő nem ostoba vagy buta.", startTime: 152.8, endTime: 156.0, verseIndex: 9 },
          { keyword: "easygoing", english: "My brother is **easygoing**.", hungarian: "A testvérem lezser.", startTime: 160.6, endTime: 163.1, verseIndex: 10 },
          { keyword: "quiet", english: "My father is very **quiet** and **serious**.", hungarian: "Az apám nagyon csendes és komoly.", startTime: 166.9, endTime: 170.8, verseIndex: 10 },
          { keyword: "serious", english: "My father is very **quiet** and **serious**.", hungarian: "Az apám nagyon csendes és komoly.", startTime: 166.9, endTime: 170.8, verseIndex: 10 }
        ],

        songStructureData: [
          {
            title: "Refrén", start: 13.6, end: 26.5,
            lines: [
              { text: "This is my party, everyone is here.", hungarian: "Ez az én bulim, mindenki itt van.", start: 13.6, end: 26.5 },
              { text: "This is my house, everything is clear.", hungarian: "Ez az én házam, minden tiszta.", start: 13.6, end: 26.5 },
              { text: "My all best friends are drunk.", hungarian: "Az összes legjobb barátom részeg.", start: 13.6, end: 26.5 },
              { text: "A hangover is guaranteed to come!", hungarian: "A másnaposság garantáltan eljön!", start: 13.6, end: 26.5 }
            ]
          },
          {
            title: "1. Versszak", start: 28.7, end: 42.6,
            lines: [
              { text: "Everyone has a different **character**.", hungarian: "Mindenkinek más a karaktere.", start: 28.7, end: 31.8, cardIndexes: [0] },
              { text: "Let's drink some wine together!", hungarian: "Igyunk egy kis bort együtt!", start: 31.8, end: 35.5 },
              { text: "Look at Jim, he is **active**.", hungarian: "Nézd meg Jimet, ő aktív.", start: 35.5, end: 38.5, cardIndexes: [1] },
              { text: "He always wants to live.", hungarian: "Mindig élni akar.", start: 38.5, end: 42.6 }
            ]
          },
          {
            title: "2. Versszak", start: 42.6, end: 56.8,
            lines: [
              { text: "His girlfriend is so **calm**.", hungarian: "A barátnője olyan nyugodt.", start: 42.6, end: 45.6, cardIndexes: [2] },
              { text: "She is sitting under a palm.", hungarian: "Egy pálmafa alatt ül.", start: 45.6, end: 50.0 },
              { text: "Don't be a **fool**, my friend.", hungarian: "Ne légy bolond, barátom!", start: 50.0, end: 53.0, cardIndexes: [3] },
              { text: "Dance with us until the end!", hungarian: "Táncolj velünk a végéig!", start: 53.0, end: 56.8 }
            ]
          },
          {
            title: "Refrén (2.)", start: 56.3, end: 69.2,
            lines: [
              { text: "This is my party, everyone is here.", hungarian: "Ez az én bulim, mindenki itt van.", start: 56.3, end: 69.2 },
              { text: "This is my house, everything is clear.", hungarian: "Ez az én házam, minden tiszta.", start: 56.3, end: 69.2 },
              { text: "My all best friends are drunk.", hungarian: "Az összes legjobb barátom részeg.", start: 56.3, end: 69.2 },
              { text: "A hangover is guaranteed to come!", hungarian: "A másnaposság garantáltan eljön!", start: 56.3, end: 69.2 }
            ]
          },
          {
            title: "3. Versszak", start: 71.2, end: 84.6,
            lines: [
              { text: "Everyone has a special **ability**.", hungarian: "Mindenkinek van egy különleges képessége.", start: 71.2, end: 74.0, cardIndexes: [4] },
              { text: "We can change our reality.", hungarian: "Megváltoztathatjuk a valóságunkat.", start: 74.0, end: 78.2 },
              { text: "My friend Max has many **talents**.", hungarian: "Max barátomnak sok tehetsége van.", start: 78.2, end: 81.3, cardIndexes: [5] },
              { text: "He can eat six eggplants.", hungarian: "Képes megenni hat padlizsánt.", start: 81.3, end: 84.6 }
            ]
          },
          {
            title: "4. Versszak", start: 85.5, end: 99.0,
            lines: [
              { text: "Mary is very **creative** and **smart**.", hungarian: "Mária nagyon kreatív és értelmes.", start: 85.5, end: 89.1, cardIndexes: [6, 7] },
              { text: "She loves music and art.", hungarian: "Imádja a zenét és a művészetet.", start: 89.1, end: 92.3 },
              { text: "Tom is **quiet** and **intelligent**.", hungarian: "Tom csendes és okos.", start: 92.3, end: 95.3, cardIndexes: [8, 9] },
              { text: "His cocktails are excellent.", hungarian: "A koktéljai kiválóak.", start: 95.3, end: 99.0 }
            ]
          },
          {
            title: "5. Versszak", start: 99.1, end: 117.0,
            lines: [
              { text: "You are a very **talented** person.", hungarian: "Te egy nagyon tehetséges személy vagy.", start: 99.1, end: 102.8, cardIndexes: [10] },
              { text: "You can learn every lesson.", hungarian: "Minden leckét meg tudsz tanulni.", start: 102.8, end: 106.1 },
              { text: "The rich politician is very **powerful**.", hungarian: "A gazdag politikus nagyon nagy hatalommal rendelkező.", start: 106.1, end: 109.6, cardIndexes: [11] },
              { text: "His house is built with public funds. Uuuuuuuuu", hungarian: "A háza közpénzből épült. Uuuuuuuuu", start: 109.6, end: 117.0 }
            ]
          },
          {
            title: "Refrén (3.)", start: 116.9, end: 129.1,
            lines: [
              { text: "This is my party, everyone is here.", hungarian: "Ez az én bulim, mindenki itt van.", start: 116.9, end: 129.1 },
              { text: "This is my house, everything is clear.", hungarian: "Ez az én házam, minden tiszta.", start: 116.9, end: 129.1 },
              { text: "My all best friends are drunk.", hungarian: "Az összes legjobb barátom részeg.", start: 116.9, end: 129.1 },
              { text: "A hangover is guaranteed to come!", hungarian: "A másnaposság garantáltan eljön!", start: 116.9, end: 129.1 }
            ]
          },
          {
            title: "6. Versszak", start: 131.7, end: 145.6,
            lines: [
              { text: "Anna's mom is so **strict**.", hungarian: "Anna anyja olyan szigorú.", start: 131.7, end: 135.2, cardIndexes: [12] },
              { text: "But she has a good trick.", hungarian: "De van egy jó trükkje.", start: 135.2, end: 138.2 },
              { text: "The escape is **difficult**.", hungarian: "A menekülés nehéz.", start: 138.2, end: 141.4, cardIndexes: [13] },
              { text: "But freedom is the result.", hungarian: "De a szabadság az eredmény.", start: 141.4, end: 145.6 }
            ]
          },
          {
            title: "7. Versszak", start: 145.6, end: 159.7,
            lines: [
              { text: "Jack is not really **weak**.", hungarian: "Jack nem igazán gyenge.", start: 145.6, end: 149.0, cardIndexes: [14] },
              { text: "He beats Hulk every week.", hungarian: "Minden héten elveri Hulk-ot.", start: 149.0, end: 152.8 },
              { text: "He isn't **stupid** or **silly**.", hungarian: "Ő nem ostoba vagy buta.", start: 152.8, end: 156.0, cardIndexes: [15, 16] },
              { text: "Batman is his family.", hungarian: "Batman a családja.", start: 156.0, end: 159.7 }
            ]
          },
          {
            title: "8. Versszak", start: 160.6, end: 175.7,
            lines: [
              { text: "My brother is **easygoing**.", hungarian: "A testvérem lezser.", start: 160.6, end: 163.1, cardIndexes: [17] },
              { text: "The good energy is flowing.", hungarian: "Áramlik a jó energia.", start: 163.1, end: 166.9 },
              { text: "My father is very **quiet** and **serious**.", hungarian: "Az apám nagyon csendes és komoly.", start: 166.9, end: 170.8, cardIndexes: [18, 19] },
              { text: "The world is big and curious.", hungarian: "A világ nagy és kíváncsi.", start: 170.8, end: 175.7 }
            ]
          },
          {
            title: "Refrén (4.)", start: 175.9, end: 221.4,
            lines: [
              { text: "This is my party, everyone is here.", hungarian: "Ez az én bulim, mindenki itt van.", start: 175.9, end: 221.4 },
              { text: "This is my house, everything is clear.", hungarian: "Ez az én házam, minden tiszta.", start: 175.9, end: 221.4 },
              { text: "My all best friends are drunk.", hungarian: "Az összes legjobb barátom részeg.", start: 175.9, end: 221.4 },
              { text: "A hangover is guaranteed to come!", hungarian: "A másnaposság garantáltan eljön!", start: 175.9, end: 221.4 }
            ]
          }
        ]
      }
    ]
  }
];

// Ide navigáljon vissza a "❮ Vissza" gomb a lejátszóból
const BACK_LINK = "index.html";
