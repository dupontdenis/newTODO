export function createTask(taskListElement, text, completed = false) {
  const li = document.createElement("li");

  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center",
  );

  li.dataset.completed = completed;
  li.dataset.originalText = text;

  // Case à cocher et texte
  const content = document.createElement("div");
  content.classList.add(
    "d-flex",
    "align-items-center",
    "gap-2",
    "flex-grow-1",
    "me-3",
  );

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("form-check-input");
  checkbox.checked = completed;

  const span = document.createElement("span");
  span.textContent = text;

  span.classList.toggle("text-decoration-line-through", completed);

  content.append(checkbox, span);

  // Boutons
  const buttons = document.createElement("div");
  buttons.classList.add("d-flex", "gap-2");

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.classList.add("btn", "btn-warning", "btn-sm", "edit-btn");
  editButton.textContent = "Modifier";

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.classList.add("btn", "btn-danger", "btn-sm", "remove-btn");
  removeButton.textContent = "Supprimer";

  buttons.append(editButton, removeButton);
  li.append(content, buttons);

  taskListElement.append(li);

  return li;
}
