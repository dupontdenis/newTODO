const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const taskListElement = document.querySelector("#tasks");
const submitButton = form.querySelector("button[type='submit']");

submitButton.disabled = true;

taskInput.addEventListener("input", () => {
  const isInputEmpty = taskInput.value.trim() === "";

  submitButton.disabled = isInputEmpty;
  submitButton.classList.toggle("btn-secondary", isInputEmpty);
  submitButton.classList.toggle("btn-primary", !isInputEmpty);
});

// Créer une tâche
function createTask(taskValue) {
  const li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center",
  );

  const span = document.createElement("span");
  span.textContent = taskValue;

  const buttons = document.createElement("div");
  buttons.classList.add("d-flex", "gap-2");

  const editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-warning", "btn-sm", "edit-btn");
  editButton.textContent = "Modifier";

  const removeButton = document.createElement("button");
  removeButton.classList.add("btn", "btn-danger", "btn-sm", "remove-btn");
  removeButton.textContent = "Supprimer";

  buttons.append(editButton, removeButton);
  li.append(span, buttons);
  taskListElement.append(li);
}

// Ajouter une tâche
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    return;
  }

  createTask(taskValue);
  saveTasks();

  taskInput.value = "";
  submitButton.disabled = true;
  submitButton.classList.remove("btn-primary");
  submitButton.classList.add("btn-secondary");
});

// Modifier ou supprimer une tâche
taskListElement.addEventListener("click", (event) => {
  const li = event.target.closest("li");

  if (!li) {
    return;
  }

  const span = li.querySelector("span");

  // Supprimer une tâche
  if (event.target.classList.contains("remove-btn")) {
    li.remove();
    saveTasks();
  }

  // Afficher un champ de modification
  if (event.target.classList.contains("edit-btn")) {
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("form-control");
    input.value = span.textContent;

    const validateButton = document.createElement("button");
    validateButton.classList.add(
      "btn",
      "btn-success",
      "btn-sm",
      "validate-btn",
    );
    validateButton.textContent = "Valider";

    span.replaceWith(input);
    event.target.replaceWith(validateButton);

    input.focus();
  }

  // Valider la modification
  if (event.target.classList.contains("validate-btn")) {
    const input = li.querySelector("input");
    const newValue = input.value.trim();

    if (newValue === "") {
      input.focus();
      return;
    }

    const newSpan = document.createElement("span");
    newSpan.textContent = newValue;
    input.replaceWith(newSpan);

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-warning", "btn-sm", "edit-btn");
    editButton.textContent = "Modifier";

    event.target.replaceWith(editButton);

    saveTasks();
  }
});

// Enregistrer les tâches
function saveTasks() {
  const tasks = [];

  taskListElement.querySelectorAll("li span").forEach((span) => {
    tasks.push(span.textContent);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Restaurer les tâches au chargement
const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

savedTasks.forEach((task) => {
  createTask(task);
});
