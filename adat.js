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
    id: "jellemvonasok",
    title: "Jellemvonások",
    songs: [
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
