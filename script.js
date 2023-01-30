const body = document.querySelector(".body");
const icon = document.querySelector(".checked");
const background = document.querySelector(".check");
const button = document.querySelector(".button");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  localStorage.setItem("dark-mode", "enabled");
  body.classList.toggle("dark");
  button.style.left = "84px";
  background.style.background = "#4cd964";
};

const disableDarkMode = () => {
  localStorage.setItem("dark-mode", "disabled");
  body.classList.toggle("dark");
  button.style.left = "4px";
  background.style.background = "#cacaca";
};

if (darkMode === "enabled") {
  enableDarkMode();
}

icon.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
