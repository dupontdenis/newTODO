const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector("#tasks");
const submitButton = form.querySelector("button[type='submit']");

submitButton.disabled = true;
taskInput.addEventListener("input", () => {
  const isInputEmpty = taskInput.value.trim() === "";

  submitButton.disabled = isInputEmpty;

  submitButton.classList.toggle("btn-secondary", isInputEmpty);

  submitButton.classList.toggle("btn-primary", !isInputEmpty);
});
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    return;
  }

  const li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center",
  );

  const span = document.createElement("span");
  span.textContent = taskValue;

  const removeButton = document.createElement("button");
  removeButton.classList.add("btn", "btn-danger", "btn-sm", "remove-btn");
  removeButton.textContent = "Supprimer";

  li.append(span, removeButton);

  taskList.append(li);

  // Vider le champ de saisie
  taskInput.value = "";

  // Réinitialiser le bouton
  submitButton.disabled = true;
  submitButton.classList.remove("btn-primary");
  submitButton.classList.add("btn-secondary");
});

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-btn")) {
    event.target.parentElement.remove();
  }
});
