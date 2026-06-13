const outer = document.getElementById("main");
const inner_home = document.getElementById("home")
const inner_about = document.getElementById("about")

outer.addEventListener("click",(e)=>{
    console.log(e) // event is object
    alert("outer div clicked");
    e.stopPropagation();
},true);

inner_about.addEventListener("click",(e)=>{
    alert("about is clicked");
},true);

/* 
if we give nothing, it means false (default) -> event bubbling

*/
