export function createTask(task) {
  return `
        <li class="list-group-item">
            <button
                type="button"
                class="btn btn-link"
                data-action="detail"
                data-id="${task.id}"
            >
                ${escapeHTML(task.title)}
            </button>
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
