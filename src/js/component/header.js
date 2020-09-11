import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StockPage } from "../views/tradeStocks";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import { SignUpModal } from "../component/signUpModal";
import { Context } from "../store/appContext";
import Logo from "../../img/Logo-nooutline.png";

export const Header = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row header navbar-expand-lg d-flex pt-3">
			<div className="col-8">
				<Link className="papertrade navbar-brand" to="/mystocks">
					<span>
						<i className="fas fa-chart-bar" />
						&nbsp;PaperTrade
					</span>
				</Link>
			</div>
			<div className="col-2">
				<Link className="logout nav-link" to="/home" onClick={() => actions.logoutUser()}>
					Log Out
				</Link>
			</div>
			<div className="col-2 info">
				<div className="usernameheader">Jason Moldovan</div>
				<div className="portfoliovalueheader">Starting balance: $ 50,000.00</div>
				<div className="buyingpowerheader">
					Buying Power: $ {store.allUsers[0] ? store.allUsers[0].buying_power : " ... "}
				</div>
			</div>
		</div>
	);
};
Header.propTypes = {
	history: PropTypes.object
};

export default withRouter(Header);
