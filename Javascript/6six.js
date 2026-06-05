var fullname= "Raja";

var obj={
    fullname: "Hacked Full Name",

    prop:{
        fullname: "inside prop",
        getFullname: function(){
            return this.fullname;
        },
    },

    getFullname: function(){
        return this.fullname;
    },

    getFullnameV2: ()=> this.fullname,

    getFullnameV3: (function(){
        return this.fullname;
    })(),
};

console.log(obj.prop.getFullname());
console.log(obj.getFullname());;
console.log(obj.getFullnameV2());
console.log(obj.getFullnameV3);

//in arrow function, this points to global context / windows(in browser)