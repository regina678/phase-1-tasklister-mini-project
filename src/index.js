document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      const taskDescription = document.getElementById("new-task-description").value;
  
  
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;
      taskItem.style.color = "black"; 
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", () => {
        taskItem.remove();
      });
  
  
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
  
      form.reset();
    });
  
});
