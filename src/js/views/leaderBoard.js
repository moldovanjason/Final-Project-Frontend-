import React from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Header } from "../component/header";

//create your first component
export function LeaderBoard(props) {
	return (
		<div>
			<Header />
			<div className="vluserProfile" />
			<Navbar />
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Rank</th>
						<th scope="col">Username</th>
						<th scope="col">+/- Profit</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td scope="row" className="number">
							1
						</td>
						<td>Mark221</td>
						<td>+ $204.60</td>
					</tr>
					<tr>
						<td scope="row" className="number">
							2
						</td>
						<td>JacobT</td>
						<td>- $20.62</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

LeaderBoard.propTypes = {
	history: PropsTypes.object
};
