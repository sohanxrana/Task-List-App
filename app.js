// selector
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
//create a task
function createTask() {
  const task = taskInput.value;
  //   console.log(task);
  if (task) {
    console.log(task);

    // create a task div
    const taskDiv = document.createElement("div");
    // taskDiv.innerText = "new task div added";
    taskDiv.classList.add("task-list");

    // create a task input field
    const taskName = document.createElement("input");
    taskName.value = task;
    taskName.classList.add("task-input");
    taskName.setAttribute("readonly", "readonly");
    taskDiv.appendChild(taskName);

    //create a button now
    const taskButtonGroup = document.createElement("div");
    taskButtonGroup.classList.add("button-group");
    taskDiv.appendChild(taskButtonGroup);

    //create a Edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerText = "Edit";
    taskButtonGroup.appendChild(editBtn);

    //create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Delete";
    taskButtonGroup.appendChild(deleteBtn);

    taskContainer.appendChild(taskDiv);

    taskInput.value = "";

    //delete Btn
    deleteBtn.addEventListener("click", function (e) {
      console.log(e.target.parentElement.parentElement.remove());
    });

    //edit btn
    editBtn.addEventListener("click", function (e) {
      console.log("edit button clicked");
      console.log(e, e.target);
      if (e.target.innerText == "Edit") {
        taskName.removeAttribute("readonly");
        taskName.focus();
        editBtn.innerText = "Update";
      } else {
        editBtn.innerText = "Edit";
        taskName.setAttribute("readonly", "readonly");
      }
    });
  } else {
    alert("Please enter a task");
  }
}
