const unstable = {
    name: "raja das",
    sayName: function(){
        console.log(this.name);
    },
};

setTimeout(unstable.sayName, 3*1000); // undefined, loss of context

/* The bind() method creates a new function 
and forces its this variable to be the object you pass in 
*/
setTimeout(unstable.sayName.bind(unstable),3000);

const newFun = unstable.sayName.bind(unstable); //bind gives new function
setTimeout(newFun,4000);