export class GeorgianSelfStudySection {
  constructor(sectionData, index) {
    this.title = sectionData.title;
    this.subItems = sectionData.subItems;
    this.index = index;
  }

  createSectionElement() {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "section";
    sectionDiv.id = `section${this.index}`;
    sectionDiv.innerHTML = `<h2 onclick="toggleSection('section${this.index}')">${this.title}</h2>`;

    const subItemsList = document.createElement("ul");
    this.subItems.forEach((subItem) => {
      const listItem = document.createElement("li");
      listItem.textContent = subItem;
      subItemsList.appendChild(listItem);
    });

    sectionDiv.appendChild(subItemsList);
    return sectionDiv;
  }
}