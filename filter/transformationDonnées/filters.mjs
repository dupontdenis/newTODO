import { createTask } from "./tasks.mjs";

let currentFilter = "all";

export function applyFilter(tasks, taskList) {
    const visibleTasks = tasks.filter(task => {
        return (
            currentFilter === "all" ||
            (currentFilter === "complete" && task.completed) ||
            (currentFilter === "incomplete" && !task.completed)
        );
    });

    taskList.innerHTML = visibleTasks
        .map(task => createTask(task))
        .join("");
}

export function setupFilters(taskList, getTasks) {
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            currentFilter = button.dataset.filter;

            buttons.forEach(item => {
                item.classList.remove("btn-primary");
                item.classList.add("btn-outline-primary");
            });

            button.classList.remove("btn-outline-primary");
            button.classList.add("btn-primary");

            applyFilter(getTasks(), taskList);
        });
    });
}