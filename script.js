const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeClassList(panel);
    panel.classList.toggle("active");
  });
  panel.addEventListener("mouseover", () => {
    panel.classList.add("hovered");
  });
  panel.addEventListener("mouseout", () => {
    panel.classList.remove("hovered");
  });
});

function removeClassList(excludedPanel) {
  panels.forEach((panel) => {
    if (panel !== excludedPanel) {
      panel.classList.remove("active");
    }
  });
}
