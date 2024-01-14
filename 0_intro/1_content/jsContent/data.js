export const georgianSelfStudyContent = [
  {
    title: "Chapter 1. The Georgian Alphabet",
    subItems: ["Letters and pronunciation", "Words examples for each letter"],
  },
  {
    title: "Chapter 2. Georgian Cultural Heritage",
    subItems: [
      "Historical landmarks by alphabet letters",
      "Cultural objects, traditions, dishes, and more",
    ],
  },
  {
    title: "Chapter 3. Conversational Georgian",
    subItems: [
      "Food and drinks vocabulary",
      "Geographical names",
      "Common names",
      "Historical terms",
    ],
  },
  {
    title: "Chapter 4. Basic Phrases",
    subItems: [
      "Greetings and introductions",
      "Asking for directions",
      "Shopping and dining",
      "Family and relationships",
    ],
  },
  {
    title: "Chapter 5. Grammar Basics",
    subItems: ["Noun cases", "Verb conjugations", "Sentence constructions"],
  },
  {
    title: "Chapter 6. Writing Exercises",
    subItems: ["Georgian cursive and calligraphy", "Writing sample texts"],
  },
  {
    title: "Chapter 7. Audio Exercises",
    subItems: ["Listening samples", "Dictations", "Pronunciation practice"],
  },
  {
    title: "Chapter 8. Verbal Skills",
    subItems: [
      "Video dialogues",
      "Conversational phrases",
      "Role play scenarios",
    ],
  },
  {
    title: "Chapter 9. Tests",
    subItems: [
      "Vocabulary quizzes",
      "Grammar tests",
      "Text comprehension checks",
      "Certification exam",
    ],
  },
];

export function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  const subItemsList = section.querySelector("ul");
  if (subItemsList.style.maxHeight) {
    subItemsList.style.maxHeight = null;
  } else {
    subItemsList.style.maxHeight = subItemsList.scrollHeight + "px";
  }
  subItemsList.classList.toggle("collapsed");
}
