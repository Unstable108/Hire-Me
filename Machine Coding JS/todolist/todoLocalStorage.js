/*
to save them to localStorage. 
localStorage only save plain text,
you must convert your list 
into an array of strings 
using JSON.stringify() to save it, 
and JSON.parse() to read it back out.
*/

const todoInput = document.getElementById("todo-input");
const todoSubmit = document.getElementById("todo-submit");
const todoList = document.querySelector(".todo-list");

let editMode = false;
let editTarget = null; 

function saveToLocalStorage()
{
    const tasks =[];
    
    document.querySelectorAll(".todo-list li span")
            .forEach(function(span){
                tasks.push(span.textContent);
            });
    
    localStorage.setItem("myTodos",JSON.stringify(tasks));        
}

function loadFromLocalStorage()
{
    const savedTask = localStorage.getItem("myTodos");

    if(savedTask)
    {
        //text string to js array
        const tasks = JSON.parse(savedTask);

        tasks.forEach(function(taskText){
            addTodoItem(taskText);
        })
    }
}

//event listener
todoSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Please Enter valid task");
        return;
    }

    if (editMode) {
        editTarget.textContent = todoText;
        todoSubmit.innerText = "Enter";
        editMode = false;
        editTarget = null;
    } else {
        addTodoItem(todoText);
    }

    todoInput.value = "";
    saveToLocalStorage(); // Save changes after adding or editing
});

todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        todoSubmit.click(); 
    }
});

function addTodoItem(todoText) {
    const todoItem = document.createElement("li");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    todoItem.innerHTML = `<span>${todoText}</span>`;
    editButton.innerText = "🖋️";
    deleteButton.innerText = "❌";

    deleteButton.addEventListener("click", function () {
        if (editMode && editTarget === todoItem.querySelector("span")) {
            todoInput.value = "";
            todoSubmit.innerText = "Enter";
            editMode = false;
            editTarget = null;
        }
        todoItem.remove();
        saveToLocalStorage(); // Save changes after deleting an item
    });

    editButton.addEventListener("click", function () {
        const spanText = todoItem.querySelector("span");
        const currentText = spanText.textContent;

        todoInput.value = currentText;
        todoSubmit.innerText = "Edit Todo";
        todoInput.focus();

        editMode = true;
        editTarget = spanText;
    });

    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
}

loadFromLocalStorage();