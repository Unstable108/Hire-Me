const raja ={
    name: "unstanble",
    sayName: function(){
        console.log(this.name);
    },
};


function sayMyName(){
    console.log(this.name);
}; //here it does not know where this points to 

sayMyName(); //since this not point to anywhere
sayMyName.call(raja); //this will point to unstable context