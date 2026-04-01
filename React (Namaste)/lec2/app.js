/*
*   Percel - bundle everything into dist folder
*   HMR - Hot Module Reloading
*  BUNDLING
*  Minifying
*  Clean our code
*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h2",{id: "heading1"},"Hello There");
const heading2 = React.createElement("h3",{id: "heading2"},"No Hello here");

const diva = React.createElement("div",{id:"gold", tiger:"animal"},[heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(diva);


