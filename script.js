const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const emptyMessage = document.querySelector("#empty-message");

let tasks = [];

function renderTasks() {
    taskList.textContent = "";

    tasks.forEach(function(task) {
        const li = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = task.name;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click", function() {
            tasks = tasks.filter(function(item) {
                return item.id !== task.id;
            });

            renderTasks();
        });

        li.appendChild(taskText);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });

    emptyMessage.style.display = tasks.length === 0 ? "block" : "none";
}

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskName = taskInput.value.trim();

    if (taskName === "") return;

    const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = "";

    renderTasks();
});
