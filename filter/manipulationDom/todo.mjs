import { createTask } from "./tasks.mjs";
import { applyFilter, setupFilters } from "./filters.mjs";
import { saveTasks, loadTasks } from "./storage.mjs";

const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const taskListElement = document.querySelector("#tasks");
const submitButton = form.querySelector("button[type='submit']");

// Gérer l'état du bouton Ajouter
function updateSubmitButton() {
  const isEmpty = taskInput.value.trim() === "";

  submitButton.disabled = isEmpty;
  submitButton.classList.toggle("btn-secondary", isEmpty);
  submitButton.classList.toggle("btn-primary", !isEmpty);
}

taskInput.addEventListener("input", updateSubmitButton);

// Ajouter une tâche
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();

  if (text === "") {
    return;
  }

  createTask(taskListElement, text);
  saveTasks(taskListElement);
  applyFilter(taskListElement);

  taskInput.value = "";
  updateSubmitButton();
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

  // Supprimer
  if (button.classList.contains("remove-btn")) {
    li.remove();
    saveTasks(taskListElement);
    return;
  }

  // Commencer la modification
  if (button.classList.contains("edit-btn")) {
    const span = li.querySelector("span");
    const input = document.createElement("input");

    input.type = "text";
    input.classList.add("form-control", "edit-input");
    input.value = span.textContent;

    span.replaceWith(input);

    button.classList.replace("btn-warning", "btn-success");
    button.classList.replace("edit-btn", "validate-btn");
    button.textContent = "Valider";

    input.focus();
    return;
  }

  // Valider la modification
  if (button.classList.contains("validate-btn")) {
    const input = li.querySelector(".edit-input");
    const text = input.value.trim();

    if (text === "") {
      input.focus();
      return;
    }

    const span = document.createElement("span");
    span.textContent = text;

    span.classList.toggle(
      "text-decoration-line-through",
      li.dataset.completed === "true",
    );

    li.dataset.originalText = text;
    input.replaceWith(span);

    button.classList.replace("btn-success", "btn-warning");
    button.classList.replace("validate-btn", "edit-btn");
    button.textContent = "Modifier";

    saveTasks(taskListElement);
    applyFilter(taskListElement);
  }
});

// Changer l'état complet/incomplet
taskListElement.addEventListener("change", (event) => {
  if (!event.target.matches("input[type='checkbox']")) {
    return;
  }

  const li = event.target.closest("li");
  const completed = event.target.checked;
  const span = li.querySelector("span");

  li.dataset.completed = completed;

  if (span) {
    span.classList.toggle("text-decoration-line-through", completed);
  }

  saveTasks(taskListElement);
  applyFilter(taskListElement);
});

// Initialisation
setupFilters(taskListElement);

loadTasks().forEach((task) => {
  createTask(taskListElement, task.text, task.completed);
});

applyFilter(taskListElement);
updateSubmitButton();
