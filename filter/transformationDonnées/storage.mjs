const STORAGE_KEY = "tasksTransformationDonnées";

export function loadTasks() {
    const storedTasks = localStorage.getItem(STORAGE_KEY);

    if (storedTasks === null) {
        return [];
    }

    try {
        const tasks = JSON.parse(storedTasks);

        if (!Array.isArray(tasks)) {
            return [];
        }

        return tasks.filter(task =>
            task !== null &&
            typeof task === "object" &&
            typeof task.id === "string" &&
            typeof task.text === "string" &&
            typeof task.completed === "boolean"
        );
    } catch {
        return [];
    }
}

export function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}