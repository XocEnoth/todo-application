let add_task_button = document.getElementById("add-button");
let show_display_task = document.getElementById("show-display-task");
let upload_task = document.getElementById("upload-task");
let table = document.getElementById("table-taskk");
let task = document.getElementById("taskk");
let task_point = document.getElementById("task-point");

add_task_button.addEventListener("click", function () {
    show_display_task.style.display = "flex";
});

upload_task.addEventListener("click", function () {
    let todo = document.getElementById("addtask").value;
    table.style.display = "flex";
    task.innerHTML = todo;
    show_display_task.style.display = "none";
});
