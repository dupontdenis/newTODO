import { loadTasks } from "./storage.mjs";
import { escapeHTML } from "./utils.mjs";

const detail = document.querySelector("#detail");

// Lire l'identifiant dans l'URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Charger les tâches et rechercher la bonne
const tasks = loadTasks();
const task = tasks.find((item) => item.id === id);

// Afficher le détail
if (task) {
  detail.innerHTML = `
        <div class="card-body">
            <h2 class="card-title">${escapeHTML(task.title)}</h2>

            <p class="card-text">${escapeHTML(task.content)}</p>

            <p class="card-text">
                <small class="text-muted">
                    Créée le :
                    ${new Date(task.date).toLocaleString("fr-FR")}
                </small>
            </p>
        </div>
    `;
} else {
  detail.innerHTML = `
        <div class="card-body">
            <p class="text-danger">
                Tâche introuvable.
            </p>
        </div>
    `;
}

