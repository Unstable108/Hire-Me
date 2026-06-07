
document.addEventListener("DOMContentLoaded",function(){
    const todoInput= document.querySelector(".todo-input")
    const todoSubmit= document.querySelector(".todo-submit")
    const todoList= document.querySelector(".todo-list")

    todoSubmit.addEventListener("click",function(event){
        event.preventDefault();

        const todoText = todoInput.value.trim();

        if(todoText !=="")
        {
            //add todo
            addTodoItem(todoText);
        }else{
            alert("Please Enter valid task")
        }
    });

    function addTodoItem(todoText)
    {
        const todoItem = document.createElement("li");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        todoItem.innerHTML=`<span>${todoText}</span>`
        editButton.innerText= "🖋️";
        deleteButton.innerText="❌";

        todoItem.appendChild(editButton);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);


    }
})