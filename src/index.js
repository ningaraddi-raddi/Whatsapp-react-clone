import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import './index.css'
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";



ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,
    document.getElementById('root')
);

