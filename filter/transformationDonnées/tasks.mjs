export function createTask(task) {
  return `
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
            data-id="${task.id}"
        >
            <div class="d-flex align-items-center gap-2 flex-grow-1 me-3">
                <input
                    type="checkbox"
                    class="form-check-input"
                    data-action="toggle"
                    ${task.completed ? "checked" : ""}
                >

                <span class="task-text ${task.completed ? "text-decoration-line-through" : ""}">${escapeHTML(task.text)}</span>
            </div>

            <div class="d-flex gap-2">
                <button
                    type="button"
                    class="btn btn-warning btn-sm"
                    data-action="edit"
                >
                    Modifier
                </button>

                <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    data-action="delete"
                >
                    Supprimer
                </button>
            </div>
        </li>
    `;
}

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
