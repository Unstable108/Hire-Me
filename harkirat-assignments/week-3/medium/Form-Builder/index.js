const fieldName= document.getElementById("fieldName");
const fieldType= document.getElementById("fieldType");

const previewSpace = document.getElementById("preview")

const submitButton= document.getElementById("submit");

submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if(!fieldName.value.trim()) return;

    const wrapper = document.createElement("div");
    wrapper.classList.add("preview-group"); 

    const newField = document.createElement("input");
    newField.type= fieldType.value;
    newField.id = fieldName.value.toLowerCase().replace(/\s+/g, "-");

    const newLabel = document.createElement("label");
    newLabel.textContent= fieldName.value.trim();
    newLabel.setAttribute("for", newField.id);

    wrapper.appendChild(newLabel);
    wrapper.appendChild(newField);

    previewSpace.appendChild(wrapper);

    fieldName.value="";
    fieldType.value="text";
})
