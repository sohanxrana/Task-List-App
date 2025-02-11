// selector
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");

//create a task
function createTask() {
  const task = taskInput.value;
  //   console.log(task);
  if (task) {
    console.log(task);
  } else {
    alert("Please enter a task");
  }
}

// createTask();
