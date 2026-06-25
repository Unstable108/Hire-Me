let draggedItem = null;

document.addEventListener("dragstart",(e)=>{
    if(e.target.classList.contains("task-card"))
    {
        draggedItem= e.target;
    }
})
document.addEventListener("dragend", () => {
    draggedItem = null;
});


