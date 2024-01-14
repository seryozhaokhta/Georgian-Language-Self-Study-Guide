import { Alphabet } from "./Alphabet.js";

document.addEventListener("DOMContentLoaded", () => {
  const alphabet = [
    {
      letter: "ა",
      pronunciation: "[a]",
      words: [
        {
          word: "ამბავი",
          translationRu: "Сказка",
          translationEn: "Fairy tale",
          transcription: "ambavi",
          englishPronunciation: "am-ba-vi",
        },
        {
          word: "არგო",
          translationRu: "Традиционная лодка",
          translationEn: "Traditional boat",
          transcription: "argo",
          englishPronunciation: "ar-go",
        },
      ],
    },
    {
      letter: "ბ",
      pronunciation: "[b]",
      words: [
        {
          word: "ბადაგი",
          translationRu: "Сладкий сок",
          translationEn: "Sweet juice",
          transcription: "badagi",
          englishPronunciation: "ba-da-gi",
        },
        {
          word: "ბარბარე",
          translationRu: "Праздник святой Варвары",
          translationEn: "Feast of Saint Barbara",
          transcription: "barbare",
          englishPronunciation: "bar-ba-re",
        },
      ],
    },
    {
      letter: "გ",
      pronunciation: "[ɡ]",
      words: [
        {
          word: "გვინო",
          translationRu: "Вино",
          translationEn: "Wine",
          transcription: "gvino",
          englishPronunciation: "gvi-no",
        },
        {
          word: "გუდაური",
          translationRu: "Горнолыжный курорт",
          translationEn: "Ski resort",
          transcription: "gudauri",
          englishPronunciation: "gu-dau-ri",
        },
      ],
    },
    {
      letter: "დ",
      pronunciation: "[d]",
      words: [
        {
          word: "დარბაზი",
          translationRu: "Внутренний дворик",
          translationEn: "Inner yard",
          transcription: "darbazi",
          englishPronunciation: "dar-ba-zi",
        },
        {
          word: "დედა",
          translationRu: "Мать",
          translationEn: "Mother",
          transcription: "deda",
          englishPronunciation: "de-da",
        },
      ],
    },
    {
      letter: "ე",
      pronunciation: "[ɛ]",
      words: [
        {
          word: "ენა",
          translationRu: "Язык",
          translationEn: "Language",
          transcription: "ena",
          englishPronunciation: "e-na",
        },
        {
          word: "ერთობა",
          translationRu: "Единство",
          translationEn: "Unity",
          transcription: "ertoba",
          englishPronunciation: "er-to-ba",
        },
      ],
    },
    // Буква ვ (вини)
    {
      letter: "ვ",
      pronunciation: "[v]",
      words: [
        {
          word: "ვარდი",
          translationRu: "Роза",
          translationEn: "Rose",
          transcription: "vardi",
          englishPronunciation: "var-di",
        },
        {
          word: "ველური",
          translationRu: "Дикий",
          translationEn: "Wild",
          transcription: "veluri",
          englishPronunciation: "ve-lu-ri",
        },
      ],
    },

    // Буква ზ (зени)
    {
      letter: "ზ",
      pronunciation: "[z]",
      words: [
        {
          word: "ზღვა",
          translationRu: "Море",
          translationEn: "Sea",
          transcription: "zghva",
          englishPronunciation: "zgh-va",
        },
        {
          word: "ზარი",
          translationRu: "Звонок",
          translationEn: "Ring",
          transcription: "zari",
          englishPronunciation: "za-ri",
        },
      ],
    },

    // Буква თ (тани)
    {
      letter: "თ",
      pronunciation: "[t]",
      words: [
        {
          word: "თბილისი",
          translationRu: "Тбилиси",
          translationEn: "Tbilisi",
          transcription: "tbilisi",
          englishPronunciation: "tbi-li-si",
        },
        {
          word: "თევზი",
          translationRu: "Рыба",
          translationEn: "Fish",
          transcription: "tevzi",
          englishPronunciation: "tev-zi",
        },
      ],
    },

    // Буква ი (ини)
    {
      letter: "ი",
      pronunciation: "[i]",
      words: [
        {
          word: "ისტორია",
          translationRu: "История",
          translationEn: "History",
          transcription: "istoria",
          englishPronunciation: "is-to-ri-a",
        },
        {
          word: "იმედი",
          translationRu: "Надежда",
          translationEn: "Hope",
          transcription: "imedi",
          englishPronunciation: "i-me-di",
        },
      ],
    },

    // Буква კ (кани)
    {
      letter: "კ",
      pronunciation: "[k']",
      words: [
        {
          word: "კახეთი",
          translationRu: "Кахетия",
          translationEn: "Kakheti",
          transcription: "k'akheti",
          englishPronunciation: "k'a-khe-ti",
        },
        {
          word: "კენჭი",
          translationRu: "Зерно",
          translationEn: "Grain",
          transcription: "k'ench'i",
          englishPronunciation: "k'en-ch'i",
        },
      ],
    },
    // Буква ლ (ласи)
    {
      letter: "ლ",
      pronunciation: "[l]",
      words: [
        {
          word: "ლამაზი",
          translationRu: "Красивый",
          translationEn: "Beautiful",
          transcription: "lamazi",
          englishPronunciation: "la-ma-zi",
        },
        {
          word: "ლომი",
          translationRu: "Лев",
          translationEn: "Lion",
          transcription: "lomi",
          englishPronunciation: "lo-mi",
        },
      ],
    },

    // Буква მ (мани)
    {
      letter: "მ",
      pronunciation: "[m]",
      words: [
        {
          word: "მთის",
          translationRu: "Гора",
          translationEn: "Mountain",
          transcription: "mtis",
          englishPronunciation: "m-tis",
        },
        {
          word: "მარილი",
          translationRu: "Соль",
          translationEn: "Salt",
          transcription: "marili",
          englishPronunciation: "ma-ri-li",
        },
      ],
    },

    // Буква ნ (нари)
    {
      letter: "ნ",
      pronunciation: "[n]",
      words: [
        {
          word: "ნაყინი",
          translationRu: "Мороженое",
          translationEn: "Ice cream",
          transcription: "nayini",
          englishPronunciation: "na-yi-ni",
        },
        {
          word: "ნადირობა",
          translationRu: "Охота",
          translationEn: "Hunting",
          transcription: "nadziroba",
          englishPronunciation: "na-dzi-ro-ba",
        },
      ],
    },

    // Буква ო (они)
    {
      letter: "ო",
      pronunciation: "[o]",
      words: [
        {
          word: "ოხრახული",
          translationRu: "Традиционный танец",
          translationEn: "Traditional dance",
          transcription: "okhrakhuli",
          englishPronunciation: "o-khra-khu-li",
        },
        {
          word: "ორაგული",
          translationRu: "Печь",
          translationEn: "Stove",
          transcription: "oraguli",
          englishPronunciation: "o-ra-gu-li",
        },
      ],
    },

    // Буква პ (пари)
    {
      letter: "პ",
      pronunciation: "[p']",
      words: [
        {
          word: "პური",
          translationRu: "Хлеб",
          translationEn: "Bread",
          transcription: "p'uri",
          englishPronunciation: "p'u-ri",
        },
        {
          word: "პირველი",
          translationRu: "Первый",
          translationEn: "First",
          transcription: "pirveli",
          englishPronunciation: "pir-ve-li",
        },
      ],
    },
    // Буква ჟ (жани)
    {
      letter: "ჟ",
      pronunciation: "[zh]",
      words: [
        {
          word: "ჟურნალი",
          translationRu: "Журнал",
          translationEn: "Magazine",
          transcription: "zhurnali",
          englishPronunciation: "zhur-na-li",
        },
        {
          word: "ჟღერა",
          translationRu: "Звучание",
          translationEn: "Sound",
          transcription: "zhghera",
          englishPronunciation: "zhghe-ra",
        },
      ],
    },

    // Буква რ (рае)
    {
      letter: "რ",
      pronunciation: "[r]",
      words: [
        {
          word: "რაჭა",
          translationRu: "Рача",
          translationEn: "Racha",
          transcription: "racha",
          englishPronunciation: "ra-cha",
        },
        {
          word: "რუსთავი",
          translationRu: "Рустави",
          translationEn: "Rustavi",
          transcription: "rustavi",
          englishPronunciation: "rus-ta-vi",
        },
      ],
    },

    // Буква ს (сани)
    {
      letter: "ს",
      pronunciation: "[s]",
      words: [
        {
          word: "სახლი",
          translationRu: "Дом",
          translationEn: "House",
          transcription: "sakhli",
          englishPronunciation: "sakh-li",
        },
        {
          word: "სამშობლო",
          translationRu: "Родина",
          translationEn: "Homeland",
          transcription: "samshoblo",
          englishPronunciation: "sam-shob-lo",
        },
      ],
    },

    // Буква ტ (тари)
    {
      letter: "ტ",
      pronunciation: "[t']",
      words: [
        {
          word: "ტყე",
          translationRu: "Лес",
          translationEn: "Forest",
          transcription: "t'q'e",
          englishPronunciation: "t'q'e",
        },
        {
          word: "ტურისტი",
          translationRu: "Турист",
          translationEn: "Tourist",
          transcription: "turisti",
          englishPronunciation: "tu-ris-ti",
        },
      ],
    },

    // Буква უ (уни)
    {
      letter: "უ",
      pronunciation: "[u]",
      words: [
        {
          word: "ურთი",
          translationRu: "Пазл",
          translationEn: "Puzzle",
          transcription: "urti",
          englishPronunciation: "ur-ti",
        },
        {
          word: "უფლისწული",
          translationRu: "Рождество",
          translationEn: "Christmas",
          transcription: "uplisculi",
          englishPronunciation: "up-lis-cu-li",
        },
      ],
    },
    // Буква ფ (пани)
    {
      letter: "ფ",
      pronunciation: "[p]",
      words: [
        {
          word: "ფერი",
          translationRu: "Цвет",
          translationEn: "Color",
          transcription: "peri",
          englishPronunciation: "pe-ri",
        },
        {
          word: "ფუტკრები",
          translationRu: "Черешня",
          translationEn: "Cherries",
          transcription: "putkrebi",
          englishPronunciation: "put-kre-bi",
        },
      ],
    },

    // Буква ქ (кани)
    {
      letter: "ქ",
      pronunciation: "[k]",
      words: [
        {
          word: "ქველი",
          translationRu: "Камень",
          translationEn: "Stone",
          transcription: "kveli",
          englishPronunciation: "kve-li",
        },
        {
          word: "ქალაქი",
          translationRu: "Город",
          translationEn: "City",
          transcription: "kalaki",
          englishPronunciation: "ka-la-ki",
        },
      ],
    },

    // Буква ღ (ғани)
    {
      letter: "ღ",
      pronunciation: "[ɣ]",
      words: [
        {
          word: "ღვინო",
          translationRu: "Вино",
          translationEn: "Wine",
          transcription: "ghvino",
          englishPronunciation: "ghvi-no",
        },
        {
          word: "ღამე",
          translationRu: "Ночь",
          translationEn: "Night",
          transcription: "ghame",
          englishPronunciation: "gha-me",
        },
      ],
    },

    // Буква ყ (қари)
    {
      letter: "ყ",
      pronunciation: "[q']",
      words: [
        {
          word: "ყვავილი",
          translationRu: "Цветок",
          translationEn: "Flower",
          transcription: "qvavili",
          englishPronunciation: "qvav-i-li",
        },
        {
          word: "ყარაული",
          translationRu: "Караул",
          translationEn: "Guard",
          transcription: "qarauli",
          englishPronunciation: "qa-rau-li",
        },
      ],
    },

    // Буква შ (шини)
    {
      letter: "შ",
      pronunciation: "[sh]",
      words: [
        {
          word: "შენი",
          translationRu: "Твой",
          translationEn: "Yours",
          transcription: "sheni",
          englishPronunciation: "she-ni",
        },
        {
          word: "შავი",
          translationRu: "Черный",
          translationEn: "Black",
          transcription: "shavi",
          englishPronunciation: "sha-vi",
        },
      ],
    },
    // Буква ჩ (чини)
    {
      letter: "ჩ",
      pronunciation: "[ch]",
      words: [
        {
          word: "ჩაი",
          translationRu: "Чай",
          translationEn: "Tea",
          transcription: "chai",
          englishPronunciation: "cha-i",
        },
        {
          word: "ჩურჩხელა",
          translationRu: "Свиристель",
          translationEn: "Finch",
          transcription: "churchkhela",
          englishPronunciation: "chur-chkhe-la",
        },
      ],
    },

    // Буква ც (цани)
    {
      letter: "ც",
      pronunciation: "[ts]",
      words: [
        {
          word: "ცივი",
          translationRu: "Холодный",
          translationEn: "Cold",
          transcription: "tsivi",
          englishPronunciation: "tsi-vi",
        },
        {
          word: "ცხენი",
          translationRu: "Лошадь",
          translationEn: "Horse",
          transcription: "tsxeni",
          englishPronunciation: "tskhe-ni",
        },
      ],
    },

    // Буква ძ (дзили)
    {
      letter: "ძ",
      pronunciation: "[dz]",
      words: [
        {
          word: "ძალი",
          translationRu: "Сила",
          translationEn: "Strength",
          transcription: "dzali",
          englishPronunciation: "dza-li",
        },
        {
          word: "ძაღლი",
          translationRu: "Собака",
          translationEn: "Dog",
          transcription: "dzaghli",
          englishPronunciation: "dzagh-li",
        },
      ],
    },

    // Буква წ (цәили)
    {
      letter: "წ",
      pronunciation: "[ts']",
      words: [
        {
          word: "წყალი",
          translationRu: "Вода",
          translationEn: "Water",
          transcription: "ts'q'ali",
          englishPronunciation: "ts'q'a-li",
        },
        {
          word: "წითელი",
          translationRu: "Красный",
          translationEn: "Red",
          transcription: "ts'iteli",
          englishPronunciation: "ts'i-te-li",
        },
      ],
    },

    // Буква ჭ (чәили)
    {
      letter: "ჭ",
      pronunciation: "[ch']",
      words: [
        {
          word: "ჭანჭიკი",
          translationRu: "Вертолет",
          translationEn: "Helicopter",
          transcription: "ch'anch'iki",
          englishPronunciation: "ch'an-ch'i-ki",
        },
        {
          word: "ჭიქა",
          translationRu: "Чашка",
          translationEn: "Cup",
          transcription: "ch'ika",
          englishPronunciation: "ch'i-ka",
        },
      ],
    },
    // Буква ხ (хани)
    {
      letter: "ხ",
      pronunciation: "[kh]",
      words: [
        {
          word: "ხელი",
          translationRu: "Рука",
          translationEn: "Hand",
          transcription: "kheli",
          englishPronunciation: "khe-li",
        },
        {
          word: "ხინკალი",
          translationRu: "Хинкали",
          translationEn: "Khinkali",
          transcription: "khinkali",
          englishPronunciation: "khin-ka-li",
        },
      ],
    },

    // Буква ჯ (ҷани)
    {
      letter: "ჯ",
      pronunciation: "[j]",
      words: [
        {
          word: "ჯვარი",
          translationRu: "Крест",
          translationEn: "Cross",
          transcription: "jvari",
          englishPronunciation: "jva-ri",
        },
        {
          word: "ჯამი",
          translationRu: "Всего",
          translationEn: "Total",
          transcription: "jami",
          englishPronunciation: "ja-mi",
        },
      ],
    },

    // Буква ჰ (хае)
    {
      letter: "ჰ",
      pronunciation: "[h]",
      words: [
        {
          word: "ჰორიზონტი",
          translationRu: "Горизонт",
          translationEn: "Horizon",
          transcription: "horizonti",
          englishPronunciation: "ho-ri-zon-ti",
        },
        {
          word: "ჰაერი",
          translationRu: "Воздух",
          translationEn: "Air",
          transcription: "haeri",
          englishPronunciation: "ha-e-ri",
        },
      ],
    },
  ];
  new Alphabet("alphabet-container", alphabet);
});
