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
			<div className=" navbar-collapse" id="navbarNavAltMarkup">
				<div className=" newnavbar">
					<a className="newnavtradestocks" href="/tradestocks">
						Trade Stocks
					</a>
					<a className="newnavtranctionhistory" href="/transactionhistory">
						Transaction History
					</a>
					<a className="newnavleaderboards" href="/leaderboard">
						Leader Boards
					</a>
					<a className="newnavmystocks" href="/mystocks">
						My Stocks
					</a>
					<a className="newnavuserprofile" href="/userprofile" tabIndex="-1" aria-disabled="true">
						User Profile
					</a>
				</div>
			</div>
		</nav>

		// <nav className="navbar navbar-expand-lg">
		// 	<div className="collapse navbar-collapse" id="navbarNav">
		// 		<ul className="navbartext navbar-nav">
		// 			<li className="nav-item">
		// 				<a className="tradestocks nav-link" href="/tradestocks">
		// 					Trade Stocks
		// 				</a>
		// 			</li>
		// 			<li className="nav-item">
		// 				<a className="transactionhistory nav-link" href="/transactionhistory">
		// 					Transaction History
		// 				</a>
		// 			</li>
		// 			<li className="nav-item">
		// 				<a className="leaderboard nav-link" href="/leaderboard">
		// 					Leader Board
		// 				</a>
		// 			</li>
		// 			<li className="nav-item">
		// 				<a className="mystocks nav-link" href="/mystocks">
		// 					My Stocks
		// 				</a>
		// 			</li>
		// 			<li className="nav-item">
		// 				<a className="userprofile nav-link" href="/userprofile">
		// 					User Profile
		// 				</a>
		// 			</li>
		// 		</ul>
		// 	</div>
		// </nav>
	);
};
Navbar.propTypes = {
	history: PropTypes.object
};

export default withRouter(Navbar);

{
	/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="#">Features</a>
      <a class="nav-link" href="#">Pricing</a>
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </div>
  </div>
</nav> */
}
