function addTask() {

  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");


  if (taskInput.value.trim() === "") {
    alert("Por favor, ingresa una tarea.");
    return;
  }

  
  taskItem.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Eliminar</button>`;
  taskItem.classList.add("task-item");

 
  taskList.appendChild(taskItem);


  taskInput.value = "";
}


function removeTask(button) {
  button.parentElement.remove();
}



