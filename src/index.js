//import react and reactDOM
import React from "react";
import ReactDOM from "react-dom";

//create a react compnent
const App = () =>{
    return <div>Hello World!!</div>;
}

//take the react component  and show it on the screen
ReactDOM.render(<App/>,document.querySelector("#root"));