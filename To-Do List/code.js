document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    if (!inputBox || !listContainer) {
        console.error("Elements not found! Check your HTML.");
        return;
    }

    function AddTask() {
        if (inputBox.value.trim() === '') {
            alert("The Input box is empty");
        } else {
            let task = document.createElement("li");
            task.textContent = inputBox.value;
            task.classList.add("task-item"); // Default class
            listContainer.appendChild(task);

            // Create delete button (×)
            let span = document.createElement("span");
            span.innerHTML = "\u00d7"; // Unicode for ×
            span.classList.add("delete-btn");
            task.appendChild(span); // Append to task

            // Clear input box
            inputBox.value = "";

            // Toggle class on click (for marking as completed)
            task.addEventListener("click", function () {
                task.classList.toggle("checked");
            });

            // Remove task when the delete button (×) is clicked
            span.addEventListener("click", function (event) {
                event.stopPropagation(); // Prevent the task toggle when clicking ×
                task.remove();
            });
        }
    }

    // Make the function globally accessible
    window.AddTask = AddTask;
}); 