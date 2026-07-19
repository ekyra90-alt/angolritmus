const songs = [
  {
    id: "hipochondria",
    title: "Hipochondria",
    structure: []
  },
  {
    id: "unwell",
    structure: [
      {
        title: "Intro",
        start: 28.60,
        end: 43.00,
        lines: [
          { text: "I check my body every hour.", hungarian: "Minden órában ellenőrzöm a testemet.", start: 28.60, end: 32.40 },
          { text: "I feel I lose my physical power.", hungarian: "Érzem, hogy elveszítem a fizikai erőmet.", start: 32.40, end: 36.00 },
          { text: "I find a new problem every day,", hungarian: "Minden nap találok egy új problémát,", start: 36.00, end: 39.30 },
          { text: "The happy thoughts all go away.", hungarian: "A boldog gondolatok mind elszállnak.", start: 39.30, end: 43.00 }
        ]
      },
      {
        title: "Refrain",
        start: 43.00,
        end: 53.80,
        lines: [
          { text: "I am terribly **unwell** tonight,", hungarian: "Szörnyen rosszul vagyok ma éjjel,", start: 43.00, end: 46.00, cardIndex: 0 },
          { text: "My face is completely white.", hungarian: "Az arcom teljesen fehér.", start: 46.00, end: 49.90 },
          { text: "I **suffer from** a secret thing,", hungarian: "Egy titkos dologban szenvedek,", start: 49.90, end: 53.80, cardIndex: 1 },
          { text: "The church bells start to ring.", hungarian: "A templomharangok elkezdenek zúgni.", start: 53.80, end: 63.20 }
        ]
      },
      {
        title: "Verse 1",
        start: 63.20,
        end: 77.40,
        lines: [
          { text: "I think I have a **heart attack**.", hungarian: "Azt hiszem, szívrohamom van.", start: 63.20, end: 66.60, cardIndex: 2 },
          { text: "I need to lie down on my back.", hungarian: "Le kell feküdnöm a hátamra.", start: 66.60, end: 69.90 },
          { text: "My lifestyle is very **unhealthy**.", hungarian: "Az életmódom nagyon egészségtelen.", start: 69.90, end: 73.40, cardIndex: 3 },
          { text: "Only the doctors are getting wealthy.", hungarian: "Csak az orvosok gazdagodnak.", start: 73.40, end: 77.40 }
        ]
      },
      {
        title: "Verse 2",
        start: 77.40,
        end: 90.90,
        lines: [
          { text: "This scary **cancer** is inside.", hungarian: "Ez a félelmetes rák van odabent.", start: 77.40, end: 80.00, cardIndex: 4 },
          { text: "The doctor's office is very wide.", hungarian: "Az orvosi rendelő nagyon tágas.", start: 80.00, end: 84.00 },
          { text: "I always catch a dangerous **flu**.", hungarian: "Mindig elkapok egy veszélyes influenzát.", start: 84.00, end: 87.30, cardIndex: 5 },
          { text: "I do not know what to do.", hungarian: "Nem tudom, mit tévő legyek.", start: 87.30, end: 90.90 }
        ]
      },
      {
        title: "Refrain",
        start: 90.90,
        end: 101.80,
        lines: [
          { text: "I am terribly **unwell** tonight,", hungarian: "Szörnyen rosszul vagyok ma éjjel,", start: 90.90, end: 94.70, cardIndex: 0 },
          { text: "My face is completely white.", hungarian: "Az arcom teljesen fehér.", start: 94.70, end: 97.90 },
          { text: "I **suffer from** a secret thing,", hungarian: "Egy titkos dologban szenvedek,", start: 97.90, end: 101.80, cardIndex: 1 },
          { text: "The church bells start to ring.", hungarian: "A templomharangok elkezdenek zúgni.", start: 101.80, end: 121.00 }
        ]
      },
      {
        title: "Verse 3",
        start: 121.00,
        end: 136.00,
        lines: [
          { text: "My right leg is **disabled** now.", hungarian: "A jobb lábam rokkant / mozgássérült most.", start: 121.00, end: 125.20, cardIndex: 6 },
          { text: "I am groaning like a cow.", hungarian: "Nyögök, mint egy tehén.", start: 125.20, end: 128.30 },
          { text: "Every movement is very **painful**.", hungarian: "Minden mozdulat nagyon fájdalmas.", start: 128.30, end: 131.90, cardIndex: 7 },
          { text: "My little dog is very faithful.", hungarian: "A kiskutyám nagyon hűséges.", start: 131.90, end: 136.00 }
        ]
      },
      {
        title: "Verse 4",
        start: 136.00,
        end: 149.60,
        lines: [
          { text: "I will be **sick** very soon.", hungarian: "Hányni fogok / rosszul leszek nagyon hamar.", start: 136.00, end: 139.00, cardIndex: 8 },
          { text: "I see two shadows under the moon.", hungarian: "Két árnyékot látok a hold alatt.", start: 139.00, end: 143.00 },
          { text: "My **throat** is very **sore** today.", hungarian: "A torkom nagyon fájós / érzékeny ma.", start: 143.00, end: 146.10, cardIndex: 9 },
          { text: "The warm summer went away.", hungarian: "A meleg nyár elment.", start: 146.10, end: 149.60 }
        ]
      },
      {
        title: "Refrain",
        start: 149.60,
        end: 159.80,
        lines: [
          { text: "I am terribly unwell tonight,", hungarian: "Szörnyen rosszul vagyok ma éjjel.", start: 149.60, end: 153.30 },
          { text: "My face is completely white.", hungarian: "Az arcom teljesen fehér.", start: 153.30, end: 156.80 },
          { text: "I suffer from a secret thing,", hungarian: "Egy titkos dologban szenvedek.", start: 156.80, end: 159.80 },
          { text: "The church bells start to ring.", hungarian: "A templomharangok elkezdenek zúgni.", start: 159.80, end: 194.70 }
        ]
      },
      {
        title: "Verse 5",
        start: 194.70,
        end: 204.50,
        lines: [
          { text: "I am getting completely **deaf**.", hungarian: "Teljesen süketté válok.", start: 194.70, end: 197.00, cardIndex: 10 },
          { text: "I cannot hear the famous chef.", hungarian: "Nem hallom a híres szakácsot.", start: 197.00, end: 200.00 },
          { text: "My eyes are turning **blind**.", hungarian: "A szemeim vakká válnak.", start: 200.00, end: 204.50, cardIndex: 11 },
          { text: "No good doctor can I find.", hungarian: "Semmi jó orvost nem találok.", start: 204.50, end: 210.00 }
        ]
      }
    ],
    cardsData: [
      { index: 0, word: "unwell", translation: "rosszul", start: 43.00, end: 46.00 },
      { index: 1, word: "suffer from", translation: "szenved valamitől", start: 49.90, end: 53.80 },
      { index: 2, word: "heart attack", translation: "szívroham", start: 63.20, end: 66.60 },
      { index: 3, word: "unhealthy", translation: "egészségtelen", start: 69.90, end: 73.40 },
      { index: 4, word: "cancer", translation: "rák", start: 77.40, end: 80.00 },
      { index: 5, word: "flu", translation: "influenza", start: 84.00, end: 87.30 },
      { index: 6, word: "disabled", translation: "fogyatékkal élő / mozgássérült", start: 121.00, end: 125.20 },
      { index: 7, word: "painful", translation: "fájdalmas", start: 128.30, end: 131.90 },
      { index: 8, word: "sick", translation: "beteg / rosszul", start: 136.00, end: 139.00 },
      { index: 9, word: "sore", translation: "fájós / érzékeny", start: 143.00, end: 146.10 },
      { index: 10, word: "deaf", translation: "süket", start: 194.70, end: 197.00 },
      { index: 11, word: "blind", translation: "vak", start: 200.00, end: 204.50 }
    ]
  }
];
