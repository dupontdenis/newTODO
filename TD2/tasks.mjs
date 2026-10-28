import { escapeHTML } from "./utils.mjs";

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

