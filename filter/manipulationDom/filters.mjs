let currentFilter = "all";

export function applyFilter(taskListElement) {
  taskListElement.querySelectorAll("li").forEach((li) => {
    const completed = li.dataset.completed === "true";

    const visible =
      currentFilter === "all" ||
      (currentFilter === "complete" && completed) ||
      (currentFilter === "incomplete" && !completed);

    console.log({
      filter: currentFilter,
      task: li.querySelector("span")?.textContent,
      datasetCompleted: li.dataset.completed,
      completed,
      visible,
    });

    li.style.setProperty("display", visible ? "flex" : "none", "important");
  });
}

export function setupFilters(taskListElement) {
  const filterButtons = document.querySelectorAll(".filter-btn");

  console.log("setupFilters called with taskListElement:", taskListElement);
  console.log("filterButtons:", filterButtons.length);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Mémoriser le filtre choisi
      currentFilter = button.dataset.filter;
      console.log(
        "Filter button clicked, currentFilter set to:",
        currentFilter,
      );

      // Mettre en évidence le bouton actif
      filterButtons.forEach((btn) => {
        const active = btn === button;

        btn.classList.toggle("btn-primary", active);
        btn.classList.toggle("btn-outline-primary", !active);
      });

      // Appliquer le filtre
      applyFilter(taskListElement);
    });
  });
}
