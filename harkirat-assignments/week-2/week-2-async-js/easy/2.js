let counter=0;

const updateCounter=()=>{
    console.log(counter);
    counter++;

    setTimeout(updateCounter,1000);
}

updateCounter();