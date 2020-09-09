import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StockPage } from "../views/tradeStocks";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import { SignUpModal } from "../component/signUpModal";
import { Context } from "../store/appContext";

export const Header = props => {
	// const CalcPortfolio=()=>{

	// }
	const { store, actions } = useContext(Context);
	// const [shares, setShares] = useState(0);
	// console.log(props);
	return (
		<div className="row header navbar-expand-lg d-flex">
			<div className="col-8">
				<Link className="papertrade navbar-brand" to="/mystocks">
					PAPER TRADE
				</Link>
			</div>
			<div className="col-2">
				<Link className="logout nav-link" to="/home" onClick={() => actions.logoutUser()}>
					Log Out
				</Link>
			</div>
			<div className="col-2 info">
				<div className="usernameheader">
					{/* *username* */}
					{store.user.username}
				</div>
				<div className="portfoliovalueheader">
					{/* Portfolio Value: $50,000 */}
					Portfolio Value: ${store.user.portfolioValue}
					{/* (50,000-buying-Power)+stock.share*current price(stock.symbol) */}
				</div>
				<div className="buyingpowerheader">
					{/* Buying Power: $50,000 */}
					Buying Power: ${store.user.buying_power}
				</div>
			</div>
		</div>
	);
};
Header.propTypes = {
	history: PropTypes.object
};

export default withRouter(Header);
