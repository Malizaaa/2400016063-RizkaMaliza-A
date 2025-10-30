// Add Task
function addTask() {
    let taskInput = document.getElementById("newTask");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    // Mark as completed
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    // Delete button
    let span = document.createElement("span");
    span.textContent = "✖";
    span.className = "close";
    span.onclick = function (event) {
        event.stopPropagation();
        li.style.opacity = "0";
        setTimeout(() => li.remove(), 300); // efek fade out
    };

    // Edit feature (double click)
    li.ondblclick = function () {
        let editText = prompt("Edit task:", li.firstChild.textContent);
        if (editText !== null && editText.trim() !== "") {
            li.firstChild.textContent = editText.trim();
        }
    };

    li.appendChild(span);
    li.style.opacity = "0";
    document.getElementById("taskList").appendChild(li);
    setTimeout(() => (li.style.opacity = "1"), 100); // efek muncul pelan

    taskInput.value = "";
}

// Background color control
document.getElementById("bgColorSelector").onchange = function () {
    document.body.style.backgroundColor = this.value;
};

// Font size control
document.getElementById("fontSizeControl").oninput = function () {
    document.body.style.fontSize = this.value + "px";
};

// Toggle dark mode
document.getElementById("darkModeToggle").onclick = function () {
    document.body.classList.toggle("dark-mode");
};

// Font style selector (fix id)
document.getElementById("fontStyleSelector").onchange = function () {
    document.body.style.fontFamily = this.value;
};

// Set default background color to pink saat load
window.onload = function () {
    document.body.style.backgroundColor = "lightpink";
};
