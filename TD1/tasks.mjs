import { escapeHTML } from "./utils.mjs";
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
