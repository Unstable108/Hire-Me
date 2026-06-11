
setInterval(()=>{
    let time = new Date();
    console.log(time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());
},1000)


const timeMachine=()=>{
        let time = new Date();
    console.log(time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());

    setTimeout(timeMachine,1000);
}
timeMachine();