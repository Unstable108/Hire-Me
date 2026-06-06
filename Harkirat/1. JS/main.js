/*
1. Create a counter in Js (counts down from 30 to 0)
2. Calculate the time taken between a setTimout call 
   and the inner function actually running
3. Create a terminal Clock (HH:MM:SS)
*/

// Q1
let count =30;
const timer= setInterval(()=>{
    console.log(count);

    if(count===0)
    {
        clearInterval(timer);
        console.log("Time Up!");
    }
    

    count--;
},1000);


//Q2
function startTerminalClock() {
  setInterval(() => {
    const now = new Date();

    // console.log(now.toLocaleTimeString());   10:09:02 am
    
    // const formattedTime = `${hours}:${minutes}:${seconds}`;
    const formattedTime = now.toLocaleTimeString();


    // 2. Use '\r' (Carriage Return) to clear the current line 
    // 'process.stdout.write' prints text without adding a newline char '\n'
    process.stdout.write(`\r🕒 Terminal Time: [ ${formattedTime} ]`);
  }, 1000);
}

// Start the clock
startTerminalClock();
