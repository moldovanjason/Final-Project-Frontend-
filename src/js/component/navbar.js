import React from "react";
import { Link } from "react-router-dom";
import { StockPage } from "../views/stockPage";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";

export const Navbar = props => {
	console.log(props);
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbartext navbar-nav">
					<li className="nav-item">
						<a
							className="tradestocks nav-link"
							href="/stockpage"
							onClick={() => props.history.push("/stockpage")}>
							Trade Stocks
						</a>
					</li>
					<li className="nav-item">
						<a className="transactionhistory nav-link" href="/transactionhistory">
							Transaction History
						</a>
					</li>
					<li className="nav-item">
						<a className="leaderboard nav-link" href="/leaderboard">
							Leader Board
						</a>
					</li>
					<li className="nav-item">
						<a className="editprofilee nav-link" href="/editprofile">
							Edit Profile
						</a>
					</li>
				</ul>
			</div>
		</nav>

		// <na className="nav-link" href="#"v className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button className="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>
	);
};
Navbar.propTypes = {
	history: PropTypes.object
};

export default withRouter(Navbar);
