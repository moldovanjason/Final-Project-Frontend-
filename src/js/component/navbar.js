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
					Leader Boards
				</Link>
				<Link className="newnavmystocks" to="/mystocks">
					My Stocks
				</Link>
				<Link className="newnavuserprofile" to="/userprofile" tabIndex="-1" aria-disabled="true">
					User Profile
				</Link>
			</div>
		</nav>

		// <nav className="navbar navbar-expand-lg">
		// 	<div className="collapse navbar-collapse" id="navbarNav">
		// 		<ul className="navbartext navbar-nav">
		// 			<li className="nav-item">
		// 				<Link className="tradestocks nav-link" to="/tradestocks">
		// 					Trade Stocks
		// 				</Link>
		// 			</li>
		// 			<li className="nav-item">
		// 				<Link className="transactionhistory nav-link" to="/transactionhistory">
		// 					Transaction History
		// 				</Link>
		// 			</li>
		// 			<li className="nav-item">
		// 				<Link className="leaderboard nav-link" to="/leaderboard">
		// 					Leader Board
		// 				</Link>
		// 			</li>
		// 			<li className="nav-item">
		// 				<Link className="mystocks nav-link" to="/mystocks">
		// 					My Stocks
		// 				</Link>
		// 			</li>
		// 			<li className="nav-item">
		// 				<Link className="userprofile nav-link" to="/userprofile">
		// 					User Profile
		// 				</Link>
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
  <Link class="navbar-brand" to="#">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-link active" to="#">Home <span class="sr-only">(current)</span></Link>
      <Link class="nav-link" to="#">Features</Link>
      <Link class="nav-link" to="#">Pricing</Link>
      <Link class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
    </div>
  </div>
</nav> */
}
