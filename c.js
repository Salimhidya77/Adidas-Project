const count = document.getElementById("count");
const mode = document.getElementById("mode");

mode.addEventListener("click", (eo) => {
  count.classList.toggle("dark");
});
