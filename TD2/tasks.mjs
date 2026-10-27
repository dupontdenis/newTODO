export function createTask(task) {
  const params = new URLSearchParams({
    id: task.id,
  });

  return `
        <li class="list-group-item">
            <a href="./detail.html?${params.toString()}">
                ${escapeHTML(task.title)}
            </a>
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
