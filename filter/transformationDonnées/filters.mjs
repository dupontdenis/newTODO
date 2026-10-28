import { createTask } from "./tasks.mjs";

let currentFilter = "all";

export function applyFilter(taskListElement, tasks) {
  const visibleTasks = tasks.filter((task) => {
    return (
      currentFilter === "all" ||
      (currentFilter === "complete" && task.completed) ||
      (currentFilter === "incomplete" && !task.completed)
    );
  });

  taskListElement.innerHTML = visibleTasks
    // .map(task => createTask(task))
    .map(createTask)
    .join("");
}

export function setupFilters(taskListElement, getTasks) {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;

      buttons.forEach((item) => {
        item.classList.remove("btn-primary");
        item.classList.add("btn-outline-primary");
      });

      button.classList.remove("btn-outline-primary");
      button.classList.add("btn-primary");

      applyFilter(taskListElement, getTasks());
    });
  });
}
