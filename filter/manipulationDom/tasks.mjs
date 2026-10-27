export function createTask(taskList, text, completed = false) {
  const li = document.createElement("li");

  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  li.dataset.completed = completed;
  li.dataset.originalText = text;

  // Case à cocher et texte
  const content = document.createElement("div");
  content.className = "d-flex align-items-center gap-2 flex-grow-1 me-3";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input";
  checkbox.checked = completed;

  const span = document.createElement("span");
  span.textContent = text;

  span.classList.toggle("text-decoration-line-through", completed);

  content.append(checkbox, span);

  // Boutons
  const buttons = document.createElement("div");
  buttons.className = "d-flex gap-2";

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "btn btn-warning btn-sm edit-btn";
  editButton.textContent = "Modifier";

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "btn btn-danger btn-sm remove-btn";
  removeButton.textContent = "Supprimer";

  buttons.append(editButton, removeButton);
  li.append(content, buttons);

  taskList.append(li);

  return li;
}
