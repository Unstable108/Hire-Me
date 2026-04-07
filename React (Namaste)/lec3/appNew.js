//components in react
//class-based and function based

//functional component in react is a function
//which returns a jsx

const Heading =()=>{
    return <h1>Hello There</h1>;
}

const HeadingNew =()=> <h1>Hello There1</h1>;

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)