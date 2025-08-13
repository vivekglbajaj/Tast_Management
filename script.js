document.getElementById("taskForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const complete = document.getElementById("complete").checked;

  const taskList = document.getElementById("taskList");

  const taskItem = document.createElement("div");
  taskItem.className = "task-item";
  if (complete) taskItem.classList.add("completed");

  taskItem.innerHTML = `
    <strong>${title}</strong> - Due: ${dueDate}
    <p>${description}</p>
    <small>Status: ${complete ? "Completed" : "Pending"}</small>
  `;

  taskList.appendChild(taskItem);

  // Reset form
  document.getElementById("taskForm").reset();
});
