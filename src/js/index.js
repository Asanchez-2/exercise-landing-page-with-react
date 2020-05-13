//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { MyCard } from "./component/myCard";

//render your react application
const cardContainer = (
	<div className="container">
		{MyCard()}
		{MyCard()}
		{MyCard()}
		{MyCard()}
	</div>
);

ReactDOM.render(cardContainer, document.querySelector("#app"));
