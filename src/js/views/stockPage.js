import React from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";

//create your first component
export function StockPage(props) {
	return (
		<div>
			<div className="header navbar-expand-lg ">
				<a className="papertrade navbar-brand" href="" onClick={() => this.props.history.push("/profile")}>
					PAPER TRADE
				</a>
				<a className="logout nav-link" href="" onClick={() => this.props.history.push("/home")}>
					Log Out
				</a>
			</div>
			<Navbar />
		</div>
	);
}

StockPage.propTypes = {
	history: PropsTypes.object
};
