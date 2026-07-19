const songs = [
  {
    id: "unwell",
    structure: [
      {
        title: "Intro",
        start: "00:28.60",
        end: "00:43.00",
        lines: [
          { text: "I check my body every hour.", hungarian: "Minden órában ellenőrzöm a testemet.", start: "00:28.60", end: "00:32.40" },
          { text: "I feel I lose my physical power.", hungarian: "Érzem, hogy elveszítem a fizikai erőmet.", start: "00:32.40", end: "00:36.00" },
          { text: "I find a new problem every day,", hungarian: "Minden nap találok egy új problémát,", start: "00:36.00", end: "00:39.30" },
          { text: "The happy thoughts all go away.", hungarian: "A boldog gondolatok mind elszállnak.", start: "00:39.30", end: "00:43.00" }
        ]
      },
      {
        title: "Refrain",
        start: "00:43.00",
        end: "00:53.80",
        lines: [
          { text: "I am terribly **unwell** tonight,", hungarian: "Szörnyen rosszul vagyok ma éjjel,", start: "00:43.00", end: "00:46.00", cardIndex: 0 },
          { text: "My face is completely white.", hungarian: "Az arcom teljesen fehér.", start: "00:46.00", end: "00:49.90" },
          { text: "I **suffer from** a secret thing,", hungarian: "Egy titkos dologban szenvedek,", start: "00:49.90", end: "00:53.80", cardIndex: 1 },
          { text: "The church bells start to ring.", hungarian: "A templomharangok elkezdenek zúgni.", start: "00:53.80", end: "01:03.20" }
        ]
      },
      {
        title: "Verse 1",
        start: "01:03.20",
        end: "01:17.40",
        lines: [
          { text: "I think I have a **heart attack**.", hungarian: "Azt hiszem, szívrohamom van.", start: "01:03.20", end: "01:06.60", cardIndex: 2 },
          { text: "I need to lie down on my back.", hungarian: "Le kell feküdnöm a hátamra.", start: "01:06.60", end: "01:09.90" },
          { text: "My lifestyle is very **unhealthy**.", hungarian: "Az életmódom nagyon egészségtelen.", start: "01:09.90", end: "01:13.40", cardIndex: 3 },
          { text: "Only the doctors are getting wealthy.", hungarian: "Csak az orvosok gazdagodnak.", start: "01:13.40", end: "01:17.40" }
        ]
      },
      {
        title: "Verse 2",
        start: "01:17.40",
        end: "01:30.90",
        lines: [
          { text: "This scary **cancer** is inside.", hungarian: "Ez a félelmetes rák van odabent.", start: "01:17.40", end: "01:20.00", cardIndex: 4 },
          { text: "The doctor's office is very wide.", hungarian: "Az orvosi rendelő nagyon tágas.", start: "01:20.00", end: "01:24.00" },
          { text: "I always catch a dangerous **flu**.", hungarian: "Mindig elkapok egy veszélyes influenzát.", start: "01:24.00", end: "01:27.30", cardIndex: 5 },
          { text: "I do not know what to do.", hungarian: "Nem tudom, mit tévő legyek.", start: "01:27.30", end: "01:30.90" }
        ]
      },
      {
        title: "Refrain",
        start: "01:30.90",
        end: "01:41.80",
        lines: [
          { text: "I am terribly **unwell** tonight,", hungarian: "Szörnyen rosszul vagyok ma éjjel,", start: "01:30.90", end: "01:34.70", cardIndex: 0 },
          { text: "My face is completely white.", hungarian: "Az arcom teljesen fehér.", start: "01:34.70", end: "01:37.90" },
          { text: "I **suffer from** a secret thing,", hungarian: "Egy titkos dologban szenvedek,", start: "01:37.90", end: "01:41.80", cardIndex: 1 },
          { text: "The church bells start to ring.", hungarian: "A templomharangok elkezdenek zúgni.", start: "01:41.80", end: "02:01.00" }
        ]
      },
      {
        title: "Verse 3",
        start: "02:01.00",
        end: "02:16.00",
        lines: [
          { text: "My right leg is **disabled** now.", hungarian: "A jobb lábam rokkant / mozgássérült most.", start: "02:01.00", end: "02:05.20", cardIndex: 6 },
          { text: "I am groaning like a cow.", hungarian: "Nyögök, mint egy tehén.", start: "02:05.20", end: "02:08.30" },
          { text: "Every movement is very **painful**.", hungarian: "Minden mozdulat nagyon fájdalmas.", start: "02:08.30", end: "02:11.90", cardIndex: 7 },
          { text: "My little dog is very faithful.", hungarian: "A kiskutyám nagyon hűséges.", start: "02:11.90", end: "02:16.00" }
        ]
      },
      {
        title: "Verse 4",
        start: "02:16.00",
        end: "02:29.60",
        lines: [
          { text: "I will be **sick** very soon.", hungarian: "Hányni fogok / rosszul leszek nagyon hamar.", start: "02:16.00", end: "02:19.00", cardIndex: 8 },
          { text: "I see two shadows under the moon.", hungarian: "Két árnyékot látok a hold alatt.", start: "02:19.00", end: "02:23.00" },
          { text: "My **throat** is very **sore** today.", hungarian: "A torkom nagyon fájós / érzékeny ma.", start: "02:23.00", end: "02:26.10", cardIndex: 9 },
          { text: "The warm summer went away.", hungarian: "A meleg nyár elment.", start: "02:26.10", end: "02:29.60" }
        ]
      },
      {
        title: "Refrain",
        start: "02:29.60",
        end: "02:39.80",
        lines: [
          { text: "I am terribly unwell tonight,", hungarian: "Szörnyen rosszul vagyok ma éjjel,", start: "02:29.60", end: "02:33.30" },
          { text: "My face is completely white.", hungarian: "Az arcom teljesen fehér.", start: "02:33.30", end: "02:36.80" },
          { text: "I suffer from a secret thing,", hungarian: "Egy titkos dologban szenvedek,", start: "02:36.80", end: "02:39.80" },
          { text: "The church bells start to ring.", hungarian: "A templomharangok elkezdenek zúgni.", start: "02:39.80", end: "03:14.70" }
        ]
      },
      {
        title: "Verse 5",
        start: "03:14.70",
        end: "03:24.50",
        lines: [
          { text: "I am getting completely **deaf**.", hungarian: "Teljesen süketté válok.", start: "03:14.70", end: "03:17.00", cardIndex: 10 },
          { text: "I cannot hear the famous chef.", hungarian: "Nem hallom a híres szakácsot.", start: "03:17.00", end: "03:20.00" },
          { text: "My eyes are turning **blind**.", hungarian: "A szemeim vakká válnak.", start: "03:20.00", end: "03:24.50", cardIndex: 11 },
          { text: "No good doctor can I find.", hungarian: "Semmi jó orvost nem találok.", start: "03:24.50", end: "03:30.00" }
        ]
      }
    ],
    cardsData: [
      { index: 0, word: "unwell", translation: "rosszul", start: "00:43.00", end: "00:46.00" },
      { index: 1, word: "suffer from", translation: "szenved valamitől", start: "00:49.90", end: "00:53.80" },
      { index: 2, word: "heart attack", translation: "szívroham", start: "01:03.20", end: "01:06.60" },
      { index: 3, word: "unhealthy", translation: "egészségtelen", start: "01:09.90", end: "01:13.40" },
      { index: 4, word: "cancer", translation: "rák", start: "01:17.40", end: "01:20.00" },
      { index: 5, word: "flu", translation: "influenza", start: "01:24.00", end: "01:27.30" },
      { index: 6, word: "disabled", translation: "fogyatékkal élő / mozgássérült", start: "02:01.00", end: "02:05.20" },
      { index: 7, word: "painful", translation: "fájdalmas", start: "02:08.30", end: "02:11.90" },
      { index: 8, word: "sick", translation: "beteg / rosszul", start: "02:16.00", end: "02:19.00" },
      { index: 9, word: "sore", translation: "fájós / érzékeny", start: "02:23.00", end: "02:26.10" },
      { index: 10, word: "deaf", translation: "süket", start: "03:14.70", end: "03:17.00" },
      { index: 11, word: "blind", translation: "vak", start: "03:20.00", end: "03:24.50" }
    ]
  }
];
