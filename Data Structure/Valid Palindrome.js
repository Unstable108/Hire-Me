//converting to string then reverse
var isPal1 = function (x){

    const s= String(x);
    console.log(s);
    console.log(`s.split("") `,s.split(""));
    console.log(`s.split("").reverse() `,s.split("").reverse());
    console.log(`s.split("").reverse().join("") `,s.split("").reverse().join(""));

    let y= s.split("").reverse().join("");
    return s===y;
}

console.log(isPal1(12341));

const pal2= function(x){
    if(x<0)
        return false;
    const s= String(x);
    let start=0, end=s.length -1;
    while(start<=end)
    {
        if(s[start] !== s[end]) return false;
        start++, end--;
    }
    return true;
}
console.log("using two pointer ",pal2(12345321));

//using math 
const pal3=(x)=>{
    let temp=x;
    if(x<0) return false;

    let revers=0; 
    while(temp>0)
    {
        let  lastDigit= temp%10;
        temp = Math.floor(temp/10);
        revers = revers*10 + lastDigit; //main logic
    }
    return x===revers;
}
console.log(pal3(-121));
console.log(pal3(34343));


