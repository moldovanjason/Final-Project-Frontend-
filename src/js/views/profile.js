import React from "react";
import PropsTypes from "prop-types";

//create your first component
export function Profile(props) {
	return (
		<div>
			<div className="profilenavbar navbar-expand-lg ">
				<a className="papertrade navbar-brand" href="" onClick={() => props.history.push("/profile")}>
					PAPER TRADE
				</a>
				<div className="vlprofile" />
				<a className="editprofile nav-link" href="" onClick={() => props.history.push("/editprofile")}>
					Edit Profile
				</a>
				<a className="logout nav-link" href="" onClick={() => props.history.push("/home")}>
					Log Out
				</a>
			</div>
			<div>Jason Moldovn</div>
			<div>Net Paper Acount Value:10000</div>
			<div>Buying Power:10000</div>
			<div>
				<div>Buy Stocks</div>
				<div>Transaction History</div>
				<div>Leader Board</div>
			</div>
			<div>MY STOCKS</div>
			<div>
				<table className="table table-borderless">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">First</th>
							<th scope="col">Last</th>
							<th scope="col">Handle</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

Profile.propTypes = {
	history: PropsTypes.object
};
