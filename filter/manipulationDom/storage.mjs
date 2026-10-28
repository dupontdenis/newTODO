const STORAGE_KEY = "tasksWithFilters";

export function saveTasks(taskListElement) {
  const tasks = [];

  taskListElement.querySelectorAll("li").forEach((li) => {
    const input = li.querySelector(".edit-input");
    const span = li.querySelector("span");

    const text = input
      ? input.value.trim() || li.dataset.originalText
      : span.textContent;

    tasks.push({
      text: text,
      completed: li.dataset.completed === "true",
    });
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function loadTasks() {
  try {
    const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    if (!Array.isArray(tasks)) {
      return [];
    }

    return tasks.filter(
      (task) =>
        task !== null &&
        typeof task.text === "string" &&
        typeof task.completed === "boolean",
    );
  } catch {
    return [];
  }
}
