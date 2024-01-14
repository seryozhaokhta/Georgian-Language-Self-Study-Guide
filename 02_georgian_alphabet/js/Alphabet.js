import { Letter } from "./Letter.js";

export class Alphabet {
  constructor(containerId, alphabetData) {
    this.container = document.getElementById(containerId);
    this.alphabetData = alphabetData;
    this.init();
  }

  init() {
    this.alphabetData.forEach((letterData) => {
      const letter = new Letter(letterData);
      this.container.appendChild(letter.element);
    });
  }
}
