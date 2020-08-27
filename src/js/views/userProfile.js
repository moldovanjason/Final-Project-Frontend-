import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { Header } from "../component/header";
// import { Context } from "../store/flux";

//create your first component
export function UserProfile(props) {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<Header />
			<Navbar {...props} />
			<div className="name">Jason Moldovn</div>
			<div className="portfoliovalue">{store.portfolioValue}</div>
			<div className="buyingpower">{store.buyingPower}</div>
		</div>
	);
}

UserProfile.propTypes = {
	history: PropTypes.object
};
