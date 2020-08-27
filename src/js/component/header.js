import React from "react";
import { Link } from "react-router-dom";
import { StockPage } from "../views/stockPage";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import { SignUpModal } from "../component/signUpModal";

export const Header = props => {
	// console.log(props);
	return (
		<div className="header navbar-expand-lg ">
			<a
				className="papertrade navbar-brand"
				href="/traderprofile"
				onClick={() => props.history.push("/traderprofile")}>
				PAPER TRADE
			</a>
			<a className="logout nav-link" href="/home" onClick={() => props.history.push("/home")}>
				Log Out
			</a>
		</div>
	);
};
Header.propTypes = {
	history: PropTypes.object
};

export default withRouter(Header);
