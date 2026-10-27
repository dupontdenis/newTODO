const STORAGE_KEY = "tasksTD";

export function loadTasks() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (data === null) {
    return [];
  }

  try {
    const tasks = JSON.parse(data);

    if (!Array.isArray(tasks)) {
      return [];
    }

return tasks.filter(
  (task) =>
    task !== null &&
    typeof task === "object" &&
    typeof task.id === "string" &&
    typeof task.title === "string" &&
    typeof task.content === "string" &&
    typeof task.date === "number",
);

  } catch {
    return [];
  }
}

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}