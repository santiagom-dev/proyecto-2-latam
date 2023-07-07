// botón de toggle
const toggleButton = document.getElementById("toggle-dark-mode");

toggleButton.addEventListener("click", function() {
  const body = document.body;
  body.classList.toggle("dark-mode");
});

