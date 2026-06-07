
document.addEventListener("DOMContentLoaded",function(){
    const todoInput= document.getElementById("todo-input")
    const todoSubmit= document.getElementById("todo-submit")
    const todoList= document.querySelector(".todo-list");

    let editMode = false;
    let editTarget = null; 
    //keep tracks which <span> we are editing


    todoSubmit.addEventListener("click",function(event){
        event.preventDefault();

        const todoText = todoInput.value.trim();

        if(todoText === "")
        {
            alert("Please Enter valid task");
            return;
        }

        if(editMode)
        {
            // Update the text of the item we saved in editTarget
            editTarget.textContent= todoText;

            //reset everything
            todoSubmit.innerText="Enter";
            editMode=false;
            editTarget=null;
        }
        else{
            //add todo
            addTodoItem(todoText);
        }

        todoInput.value="";
    });

    todoInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            todoSubmit.click(); 
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

        deleteButton.addEventListener("click",function(){
            if(editMode && editTarget=== todoItem.querySelector("span"))
            {
                todoInput.value="";
                todoSubmit.innerText="Enter";
                editMode=false;
                editTarget=null;
            }
            todoItem.remove()
        })

        editButton.addEventListener("click",function(){
            const spanText = todoItem.querySelector("span");
            const currentText = spanText.textContent;

            todoInput.value=currentText;
            todoSubmit.innerText="Edit Todo";
            todoInput.focus();

            editMode= true;
            editTarget=spanText;
        })

        todoItem.appendChild(editButton);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
    }
})