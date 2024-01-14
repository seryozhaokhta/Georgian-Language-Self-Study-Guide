let isContentVisible = false;

function toggleContentVisibility() {
  isContentVisible = !isContentVisible;
  const contentContainer = document.getElementById(
    "interactive-content-container"
  );
  const mainContainer = document.querySelector(".main-container");

  contentContainer.style.transition = "left 0.5s ease-in-out";
  mainContainer.style.transition = "transform 0.5s ease-in-out";

  contentContainer.style.left = isContentVisible ? "0" : "-400px";
  mainContainer.style.transform = isContentVisible
    ? "translateX(22%)"
    : "translateX(0)";
}

function loadInteractiveContent() {
}

document
  .getElementById("content-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (!isContentVisible) {
      loadInteractiveContent();
    }
    toggleContentVisibility();
  });
