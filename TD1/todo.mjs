import { createTask } from "./tasks.mjs";
import { loadTasks, saveTasks } from "./storage.mjs";

const taskListElt = document.querySelector("#tasks");
const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const detail = document.querySelector("#detail");

let tasks = loadTasks();

// Afficher la liste
function renderTasks() {
  taskListElt.innerHTML = tasks.map((task) => createTask(task)).join("");
}

// Ajouter une tâche
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (title === "" || content === "") {
    return;
  }

  const task = {
    id: crypto.randomUUID(),
    title: title,
    content: content,
    date: Date.now(),
  };

  tasks.push(task);

  saveTasks(tasks);
  renderTasks();

  form.reset();
  titleInput.focus();
});

// Afficher le contenu d'une tâche
taskListElt.addEventListener("click", (event) => {
  const button = event.target.closest('[data-action="detail"]');

  if (!button) {
    return;
  }

  const task = tasks.find((item) => item.id === button.dataset.id);

  if (!task) {
    return;
  }

  detail.innerHTML = `
      <div class="card-body">
          <h3 class="card-title">${escapeHTML(task.title)}</h3>
          <p class="card-text">${escapeHTML(task.content)}</p>


          <p class="card-text">
              <small class="text-muted">
                  Créée le : ${new Date(task.date).toLocaleString("fr-FR")}
              </small>
          </p>
      </div>
  `;
});

// Échapper les données avant leur insertion dans le HTML
function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

// Affichage initial
renderTasks();
