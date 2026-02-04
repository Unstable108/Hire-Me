const debounce=(func,delay)=>{
    // timer variable need to defined  outside of the anonymous function, 
    // that is closure
    let timer;

    return function(...args){
        //here ...args mean we are getting arguments as array list

        clearTimeout(timer);

        setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}