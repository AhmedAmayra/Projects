function chatb(obj){
    if (obj.style.textDecoration == 'none'){
        obj.style.textDecoration = 'line-through';
    }
    else{
        obj.style.textDecoration = 'none';
    }
    
}


function Add() {
    let task = prompt("The Task:");
    if (task && task.trim() !== "") { // التحقق من أن الإدخال ليس فارغًا
        const node = document.createElement("li");
        node.className = "todo";
        node.textContent = task;
        node.onclick = function() { chatb(this); }; // تعيين الحدث مباشرة

        document.getElementById("list").appendChild(node); // الإضافة إلى القائمة ذات id="list"
    }
}

function clear() {
    
}