import { createTask } from "./tasks.mjs";
import { loadTasks, saveTasks } from "./storage.mjs";

const taskList = document.querySelector("#tasks");
const form = document.querySelector("form");
const taskInput = document.querySelector("#title");

// Charger les données
let tasks = loadTasks();

// Afficher les tâches
function renderTasks() {
  taskList.innerHTML = tasks.map((task) => createTask(task)).join("");
}

// Ajouter une tâche
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskInput.value.trim();

  if (title === "") {
    return;
  }

  const task = {
    id: crypto.randomUUID(),
    title: title,
  };

  tasks.push(task);

  saveTasks(tasks);
  renderTasks();

  taskInput.value = "";
  taskInput.focus();
});

// Affichage initial
renderTasks();