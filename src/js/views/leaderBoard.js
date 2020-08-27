import React from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Header } from "../component/header";

//create your first component
export function LeaderBoard(props) {
	return (
		<div>
			<Header />
			<Navbar />
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Username</th>
						<th scope="col">+/- Profit</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark221</td>
						<td>+ $204.60</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>JacobT</td>
						<td>- $20.62</td>
						<td>@fat</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

LeaderBoard.propTypes = {
	history: PropsTypes.object
};
