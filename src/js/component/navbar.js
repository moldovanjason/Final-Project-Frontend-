import React from "react";
import { Link } from "react-router-dom";
import { StockPage } from "../views/tradeStocks";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";

export const Navbar = props => {
	// console.log(props);
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<button
				className="navbarbutton navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="navbar-collapse" id="navbarNavAltMarkup">
				<Link className="newnavtradestocks" to="/tradestocks">
					Trade Stocks
				</Link>
				<Link className="newnavtranctionhistory" to="/transactionhistory">
					Transaction History
				</Link>
				<Link className="newnavleaderboards" to="/leaderboard">
					Leader Board
				</Link>
				<Link className="newnavmystocks" to="/mystocks">
					My Stocks
				</Link>
				<Link className="newnavuserprofile" to="/userprofile" tabIndex="-1" aria-disabled="true">
					User Profile
				</Link>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	history: PropTypes.object
};

export default withRouter(Navbar);
