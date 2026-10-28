import { createTask } from "./tasks.mjs";
import { applyFilter, setupFilters } from "./filters.mjs";
import { loadTasks, saveTasks } from "./storage.mjs";

const taskListElement = document.querySelector("#tasks");
const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const submitButton = form.querySelector("button[type='submit']");

let tasks = loadTasks();

function renderTasks() {
  taskListElement.innerHTML = tasks.map((task) => createTask(task)).join("");
  applyFilter(taskListElement, tasks);
}

// Initialiser les filtres
setupFilters(taskListElement, () => tasks);

// Ajouter une tâche
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();

  if (text === "") {
    return;
  }

  const task = {
    id: crypto.randomUUID(),
    text: text,
    completed: false,
  };

  tasks.push(task);

  saveTasks(tasks);
  renderTasks();

  taskInput.value = "";
  taskInput.focus();
});

// Gérer les actions dans la liste
taskListElement.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  const li = button.closest("li");

  if (!li) {
    return;
  }

  const task = tasks.find((item) => item.id === li.dataset.id);

  if (!task) {
    return;
  }

  // Supprimer une tâche
  if (button.matches('[data-action="delete"]')) {
    tasks = tasks.filter((item) => item.id !== task.id);

    saveTasks(tasks);
    renderTasks();
    return;
  }

  // Commencer la modification
  if (button.matches('[data-action="edit"]')) {
    const span = li.querySelector("span");
    const input = document.createElement("input");

    input.type = "text";
    input.classList.add("form-control");
    input.value = task.text;

    span.replaceWith(input);

    button.dataset.action = "validate";
    button.textContent = "Valider";
    button.classList.replace("btn-warning", "btn-success");

    input.focus();
    return;
  }

  // Valider la modification
  if (button.matches('[data-action="validate"]')) {
    const input = li.querySelector("input.form-control");
    const text = input.value.trim();

    if (text === "") {
      input.focus();
      return;
    }

    task.text = text;

    saveTasks(tasks);
    renderTasks();
  }
});

// Changer l'état d'une tâche
taskListElement.addEventListener("change", (event) => {
  if (!event.target.matches('[data-action="toggle"]')) {
    return;
  }

  const li = event.target.closest("li");

  if (!li) {
    return;
  }

  const task = tasks.find((item) => item.id === li.dataset.id);

  if (!task) {
    return;
  }

  task.completed = event.target.checked;

  saveTasks(tasks);
  renderTasks();
});

// Initialisation
renderTasks();
