import React from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Header } from "../component/header";

//create your first component
export function LeaderBoard(props) {
	return (
		<div>
			<Header />

			<div className="mystockstitle">Leader Boards</div>

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link active" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-link" href="#">
							Features
						</a>
						<a className="nav-link" href="#">
							Pricing
						</a>
						<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
							Disabled
						</a>
					</div>
				</div>
			</nav>

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
