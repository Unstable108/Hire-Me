//components in react
//class-based and function based

//this is variable element
const title = <h2>Okay god</h2>;

//functional component in react is a function
//which returns a jsx

const Heading = () => {
  return (
    <div>
      {title}  //since title here is element 
       <h1>Hello There</h1>
    </div>
  );
};

const HeadingNew = () => <h1>Hello There1</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
