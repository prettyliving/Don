document.addEventListener("DOMContentLoaded", () => {
  const parts = document.querySelectorAll(".part");
  const text = document.getElementById("car-text");

  if (!parts.length || !text) return;

  parts.forEach(part => {
    part.addEventListener("click", () => {
      part.classList.add("active");
      text.textContent = part.dataset.text;

      const complete = [...parts].every(p => p.classList.contains("active"));
      if (complete) {
        setTimeout(() => {
          text.textContent = "Turns out the car runs because you stayed.";
        }, 600);
      }
    });
  });
});
