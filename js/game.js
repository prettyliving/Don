document.addEventListener("DOMContentLoaded", () => {
    const parts = document.querySelectorAll(".part");
    const text = document.getElementById("car-text");
  
    parts.forEach(part => {
      part.addEventListener("click", () => {
        part.classList.add("active");
        text.textContent = part.dataset.text;
  
        if ([...parts].every(p => p.classList.contains("active"))) {
          setTimeout(() => {
            text.textContent = "Turns out the car runs because you stayed.";
          }, 600);
        }
      });
    });
  });
  