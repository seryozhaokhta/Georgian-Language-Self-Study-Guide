export class Letter {
  constructor(letterData) {
    this.letterData = letterData;
    this.element = this.createLetterElement();
  }

  createLetterElement() {
    // Основной элемент для буквы
    const letterElement = document.createElement("div");
    letterElement.classList.add("letter");
    letterElement.textContent = this.letterData.letter;

    // Элемент для произношения и добавляем его в letterElement
    const pronunciationElement = document.createElement("span");
    pronunciationElement.classList.add("pronunciation");
    pronunciationElement.textContent = this.letterData.pronunciation;
    letterElement.appendChild(pronunciationElement);

    // Контейнер для слов
    const wordsContainer = document.createElement("div");
    wordsContainer.classList.add("words-container");

    // Слова в контейнере
    this.letterData.words.forEach((wordObj) => {
      const wordElement = document.createElement("div");
      wordElement.classList.add("word");

      const originalWord = document.createElement("span");
      originalWord.classList.add("original-word");
      originalWord.textContent = wordObj.word;
      wordElement.appendChild(originalWord);

      const transcription = document.createElement("span");
      transcription.classList.add("transcription");
      transcription.textContent = ` (${wordObj.transcription}) - `;
      wordElement.appendChild(transcription);

      const translation = document.createElement("span");
      translation.classList.add("translation");
      translation.textContent = wordObj.translationEn;
      wordElement.appendChild(translation);

      const pronunciation = document.createElement("span");
      pronunciation.classList.add("pronunciation");
      pronunciation.textContent = `, ${wordObj.englishPronunciation}`;
      wordElement.appendChild(pronunciation);

      wordsContainer.appendChild(wordElement);
    });

    // Контейнер со словами в элемент буквы
    letterElement.appendChild(wordsContainer);

    // Обработчики событий для отображения/сокрытия слов при наведении
    letterElement.addEventListener("mouseenter", () => {
      wordsContainer.style.display = "block";
    });

    letterElement.addEventListener("mouseleave", () => {
      wordsContainer.style.display = "none";
    });

    return letterElement;
  }
}
