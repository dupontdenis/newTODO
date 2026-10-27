export function createTask(task) {
  return `
        <li class="list-group-item" data-id="${task.id}">
            ${task.title}
        </li>
    `;
}
