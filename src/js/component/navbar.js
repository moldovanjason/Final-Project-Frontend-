import React from "react";
import { Link } from "react-router-dom";
// import { withRouter } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbartext navbar-nav">
					<li className="nav-item">
						<a className="tradestocks nav-link" href="/stockpage">
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
	);
};

export default Navbar;
