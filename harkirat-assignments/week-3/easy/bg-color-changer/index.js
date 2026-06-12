const colorInput = document.getElementById("input-color");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let chosenColor = colorInput.value.trim();

  if(chosenColor)
  {
    const newLi =document.createElement("li");

    newLi.textContent = chosenColor;
    newLi.id = chosenColor;
    newLi.style.backgroundColor = chosenColor;
    newLi.style.color = "white";
    newLi.style.padding = "10px 20px";

    
  }
});

colorInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitButton.click();
  }
});

document.querySelectorAll(".color-list li").forEach((li) => {
  li.addEventListener("click", () => {
    document.body.style.backgroundColor = li.id;
  });
});
