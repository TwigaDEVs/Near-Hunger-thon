
import React from "react";
import 'w3-css/w3.css';
import ReactDOM from "react-dom";
import App from "./App";
import { initContract } from "./utils/utils";

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(<App />, document.getElementById("root"));
  })
  .catch(console.error);
