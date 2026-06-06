const raja ={
    name: "unstanble",
    sayName: function(){
        console.log(this.name);
    },
};

const jhon= {
    name: "Jhon Doe",
    sayName: function(){
        console.log(this.name);
    },
};

jhon.sayName();
jhon.sayName.call(raja); //this, context goes to raja



/* 
call(): Executes immediately. Takes arguments individually.
apply(): Executes immediately. Takes arguments as an array.
bind(): Does not execute immediately.
        It returns a brand new function with the locked context to be called later. 
*/