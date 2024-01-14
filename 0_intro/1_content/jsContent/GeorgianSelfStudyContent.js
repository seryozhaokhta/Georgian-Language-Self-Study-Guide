import { GeorgianSelfStudySection } from "./GeorgianSelfStudySection.js";

export class GeorgianSelfStudyContent {
  constructor(content) {
    this.content = content;
  }

  generateContent() {
    const contentDiv = document.getElementById("content");
    this.content.forEach((section, index) => {
      const studySection = new GeorgianSelfStudySection(section, index);
      contentDiv.appendChild(studySection.createSectionElement());
    });
  }
}
