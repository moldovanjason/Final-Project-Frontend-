import React from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";

//create your first component
export function LeaderBoard(props) {
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

LeaderBoard.propTypes = {
	history: PropsTypes.object
};
