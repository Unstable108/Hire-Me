const p1={
    fname: 'raja',
    lname: 'das',
    getName(){
        return `${this.fname} ${this.lname}`; 
    },
}

const p2= Object.create(p1);
console.log(p2);
console.log(p2.__proto__);

//here proto is refering to p1
const p3= {
    __proto__: p1
}

console.log(p1.getName());

p2.__proto__.fname="hack";

console.log(p1.getName());
