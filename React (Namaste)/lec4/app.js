import React from "react"
import ReactDOM, {createRoot } from "react-dom/client"

const HomePage=()=>{
    return(
        <div>
            <h2>
                hello
            </h2>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<HomePage/>)