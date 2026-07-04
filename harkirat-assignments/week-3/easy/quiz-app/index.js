import { quizData } from "./data.js";
const questionBox = document.getElementById("questions");
const result = document.getElementById("result");
const submitButton= document.getElementById("submit");

let total=0;

submitButton.addEventListener("click",()=>{
    if(submitButton.innerText === "Reset")
    {
        total=0;
        result.innerHTML = ""; // Clear the displayed result
        submitButton.innerText = "Submit";
        return;
    }
    const resultMark = document.createElement("h2");
    resultMark.innerText= `Result is ${total}`;
    result.appendChild(resultMark);
    submitButton.innerText="Reset"
})



for(let i=0;i<quizData.length;i++)
{
    console.log(quizData[i].question)

    const questionContainer = document.createElement("div");

    const question = document.createElement("h2");
    question.innerText= quizData[i].question

    const options = document.createElement("ul");

    const option1 = document.createElement("li");
    option1.textContent = quizData[i].a;
    option1.id = quizData[i].a;
    options.appendChild(option1);

    const option2 = document.createElement("li");
    option2.textContent = quizData[i].b;
    option2.id = quizData[i].b;
    options.appendChild(option2);


    const option3 = document.createElement("li");
    option3.textContent = quizData[i].c;
    option3.id = quizData[i].c;
    options.appendChild(option3);


    const option4 = document.createElement("li");
    option4.textContent = quizData[i].d;
    option4.id = quizData[i].d;
    options.appendChild(option4);

    let optionsArray = [option1, option2, option3, option4];

    optionsArray.forEach((li)=>{
        li.addEventListener("click",()=>{
            let userAnswer = li.id
            let correctAnswer = quizData[i][quizData[i].correct]
            if(userAnswer === correctAnswer) total++;
        })
    })



    questionContainer.appendChild(question);
    questionContainer.appendChild(options);

    questionBox.appendChild(questionContainer);

}

