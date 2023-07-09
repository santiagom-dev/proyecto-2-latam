function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}

var darkModeButton = document.getElementById("dark-mode-button");
darkModeButton.addEventListener("click", toggleDarkMode);


