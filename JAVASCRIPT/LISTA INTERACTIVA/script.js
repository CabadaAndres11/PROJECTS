const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <div class="task-content">
        <span>${taskText}</span>
      </div>
      <div class="task-options">
        <button class="completeBtn">Completada</button>
        <button class="deleteBtn">Eliminar</button>
      </div>
    `;
    taskItem.classList.add("task-item");
    taskList.appendChild(taskItem);
    taskInput.value = "";
    taskInput.focus();

    const completeBtn = taskItem.querySelector(".completeBtn");
    const taskContent = taskItem.querySelector(".task-content");
    completeBtn.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
      if (taskItem.classList.contains("completed")) {
        completeBtn.textContent = "No Completada";
        completeBtn.classList.remove("completeBtn");
        completeBtn.classList.add("noCompleteBtn");
      } else {
        completeBtn.textContent = "Completada";
        completeBtn.classList.remove("noCompleteBtn");
        completeBtn.classList.add("completeBtn");
      }
    });

    const deleteBtn = taskItem.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });
  }
}
