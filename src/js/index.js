//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle

import "../styles/navbar.scss";
import "../styles/index.scss";
import "../styles/../js/views/home";
import "../styles/../js/views/leaderBoard";
import "../styles/../js/views/myStocks";
import "../styles/../js/views/tradeStocks";
import "../styles/../js/views/transactionHistory";
import "../styles/../js/views/userProfile";
//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
