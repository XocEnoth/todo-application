const registered_username = localStorage.getItem("username");
const registered_email = localStorage.getItem("email");
const registered_password = localStorage.getItem("password");
const confirmLogin = localStorage.getItem("login");

verifAcc();

function verifAcc() {
    if (
        registered_email &&
        registered_username &&
        registered_password &&
        confirmLogin === "true"
    ) {
    } else {
        window.location.href = "login/";
    }
}

// BUTTON
const btn_newtask = document.getElementById("btn-newtask");
const btn_addtask = document.getElementById("add-task");
const btn_edit = document.getElementById("btn-edit");
const btn_save_edit = document.getElementById("save-edit");
const btn_complete_task = document.getElementById("complete-task");
const btn_delete_task = document.getElementById("delete-task");
const btn_close_edit = document.getElementById("close-edit");

// PEMBERIAN DISPLAY/VISIBLE
const container_input = document.getElementById("container-input");
const info_notask = document.getElementById("no-task");
const container_alltask = document.getElementById("container-all");
const vis_edit = document.getElementById("vis-edit");
const vis_all_task = document.getElementById("vis-all-task");

// INPUT
const task = document.getElementById("task");
const deadline = document.getElementById("date");
const edit_task = document.getElementById("edit-task");
const edit_deadline = document.getElementById("edit-deadline");

// TABLE
const the_task = document.getElementById("the-task");
const the_deadline = document.getElementById("the-deadline");
const the_point = document.getElementById("the-point");
const the_complete_task = document.getElementById("the-complete-task");
const the_complete_deadline = document.getElementById("the-complete-deadline");
const table_complete = document.getElementById("table-complete");

btn_newtask.addEventListener("click", function () {
    container_input.style.display = "flex";
    task.focus();
});

btn_addtask.addEventListener("click", function () {
    const deadlineDate = new Date(deadline.value);
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if (task.value === "" && deadline.value === "") {
        alert("Please fill out the task column.\nYou havent set a deadline.");
    } else if (task.value === "") {
        alert("Please fill out the task column.");
    } else if (deadline.value === "") {
        alert("You havent set a deadline.");
    } else if (deadlineDate < now) {
        alert("The date you entered is earlier than today.");
    } else {
        btn_newtask.style.display = "none";

        the_task.innerHTML = "Task : " + task.value + "";
        the_deadline.innerHTML = "Deadline : " + deadline.value + "";

        vis_all_task.style.display = "flex";
        container_input.style.display = "none";
        info_notask.style.display = "none";
        container_alltask.style.display = "block";
    }
});

btn_edit.addEventListener("click", function () {
    vis_edit.style.display = "flex";
    edit_task.value = task.value;
    edit_deadline.value = deadline.value;
});

btn_close_edit.addEventListener("click", function () {
    vis_edit.style.display = "none";
});

btn_save_edit.addEventListener("click", function () {
    const deadlineDate = new Date(edit_deadline.value);
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if (edit_task.value === "" && edit_deadline.value === "") {
        alert("Please fill out the task column.\nYou havent set a deadline.");
    } else if (edit_task.value === "") {
        alert("Please fill out the task column.");
    } else if (edit_deadline.value === "") {
        alert("You havent set a deadline.");
    } else if (deadlineDate < now) {
        alert("The date you entered is earlier than today.");
    } else {
        task.value = edit_task.value;
        deadline.value = edit_deadline.value;
        the_task.innerHTML = "Task : " + task.value + "";
        the_deadline.innerHTML = "Deadline : " + deadline.value + "";
        vis_edit.style.display = "none";
    }
});

btn_complete_task.addEventListener("click", function () {
    the_complete_task.innerHTML = "Task : " + task.value + "";
    the_complete_deadline.innerHTML = "Deadline : " + deadline.value + "";

    btn_newtask.style.display = "block";
    vis_edit.style.display = "none";
    vis_all_task.style.display = "none";
    table_complete.style.display = "flex";
});
