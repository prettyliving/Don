document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const weights = document.querySelectorAll(".weight");
  const carZone = document.getElementById("car-zone");
  const carBody = document.getElementById("car-body");
  const stackZone = document.getElementById("stack-zone");
  const text = document.getElementById("garage-text");

  /* Hide loader after animation */
  setTimeout(() => loader.classList.add("hidden"), 2600);

  let load = 0;
  const total = weights.length;

  weights.forEach(weight => {
    weight.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", weight.dataset.weight);
    });
  });

  carZone.addEventListener("dragover", e => e.preventDefault());

  carZone.addEventListener("drop", e => {
    e.preventDefault();

    const label = e.dataTransfer.getData("text/plain");
    const weightEl = [...weights].find(w => w.dataset.weight === label);

    if (!weightEl || weightEl.classList.contains("used")) return;

    weightEl.classList.add("used");
    load++;

    /* Stack visually */
    const stack = document.createElement("div");
    stack.className = "stack-weight";
    stack.textContent = label;
    stackZone.appendChild(stack);

    /* Sag */
    carBody.classList.remove("sag-1","sag-2","sag-3","sag-4");
    carBody.classList.add(`sag-${load}`);

    text.textContent = `Carrying ${label}.`;

    if (load === total) {
      setTimeout(() => {
        text.textContent = "It carried everything. And kept going.";
        carZone.classList.add("drive");
      }, 900);
    }
  });
});
