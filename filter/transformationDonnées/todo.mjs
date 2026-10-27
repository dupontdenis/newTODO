import { applyFilter, setupFilters } from "./filters.mjs";
import { loadTasks, saveTasks } from "./storage.mjs";

const taskList = document.querySelector("#tasks");
const form = document.querySelector("form");
const taskInput = document.querySelector("#task");

let tasks = loadTasks();

function renderTasks() {
    applyFilter(tasks, taskList);
}

setupFilters(taskList, () => tasks);

// Ajouter une tâche
form.addEventListener("submit", event => {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    const task = {
        id: crypto.randomUUID(),
        text: text,
        completed: false
    };

    tasks.push(task);

    saveTasks(tasks);
    renderTasks();

    taskInput.value = "";
    taskInput.focus();
});

// Gérer les cases à cocher et les boutons
taskList.addEventListener("click", event => {
    const li = event.target.closest("li");

    if (!li) {
        return;
    }

    const task = tasks.find(item => item.id === li.dataset.id);

    if (!task) {
        return;
    }

    // Modifier l'état d'une tâche
    if (event.target.matches('[data-action="toggle"]')) {
        task.completed = event.target.checked;
    }

    // Supprimer une tâche
    if (event.target.matches('[data-action="delete"]')) {
        tasks = tasks.filter(item => item.id !== task.id);
    }

    saveTasks(tasks);
    renderTasks();
});

renderTasks();