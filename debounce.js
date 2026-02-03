const debounce=(func,delay)=>{
    // timer variable need to defined  outside of the anonymous function, 
    // that is closure
    let timer;

    return function(){
        setTimeout(()=>{
            func()
        },delay)
    }
}