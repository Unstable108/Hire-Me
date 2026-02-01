//declared in { } is call block

{
    var a=10;
    let b=20;
    const c=30;

    console.log(a);
    console.log(b);
    console.log(c);
}
    console.log(a); //var stays on global scope
    console.log(b); //let and const stays in blocked scope
    console.log(c); //so gets deleted
