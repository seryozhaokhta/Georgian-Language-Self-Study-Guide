import { georgianSelfStudyContent, toggleSection } from "./data.js";
import { GeorgianSelfStudyContent } from "./GeorgianSelfStudyContent.js";

window.toggleSection = toggleSection;

document.addEventListener("DOMContentLoaded", function () {
  const selfStudyContent = new GeorgianSelfStudyContent(
    georgianSelfStudyContent
  );
  selfStudyContent.generateContent();
});
