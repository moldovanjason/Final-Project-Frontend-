import React from "react";
import PropsTypes from "prop-types";

//create your first component
export function Profile(props) {
	return (
		<div className="navbar navbar-expand-lg ">
			<a className="papertrade navbar-brand" href="" onClick={() => props.history.push("/profile")}>
				PAPER TRADE
			</a>
			<div className="vlprofile" />
			<a className="signup nav-link" href="" onClick={() => props.history.push("/home")}>
				Log Out
			</a>
		</div>
	);
}

Profile.propTypes = {
	history: PropsTypes.object
};
