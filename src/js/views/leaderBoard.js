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
			<Navbar />

			<table className="table tableheadertop">
				<thead>
					<tr className="rowheaders">
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
						<td>$204.60</td>
					</tr>
					<tr>
						<td scope="row" className="number">
							2
						</td>
						<td>JacobT</td>
						<td>$200.62</td>
					</tr>
					<tr>
						<td scope="row" className="number">
							3
						</td>
						<td>Aaplonly</td>
						<td>$200.62</td>
					</tr>
					<tr>
						<td scope="row" className="number">
							4
						</td>
						<td>Moneyman</td>
						<td>$190.40</td>
					</tr>
					<tr>
						<td scope="row" className="number">
							5
						</td>
						<td>AshleySmith</td>
						<td>$141.02</td>
					</tr>
					<tr>
						<td scope="row" className="number">
							6
						</td>
						<td>Johniman123</td>
						<td>$102.33</td>
					</tr>
					<tr>
						<td scope="row" className="number">
							7
						</td>
						<td>Stockmaster</td>
						<td>$20.12</td>
					</tr>
					<tr>
						<td scope="row" className="number">
							8
						</td>
						<td>FredJohns</td>
						<td>$2.11</td>
					</tr>
					<tr>
						<td scope="row" className="number">
							9
						</td>
						<td>BillGates121</td>
						<td>-$20.90</td>
					</tr>
					<tr>
						<td scope="row" className="number">
							10
						</td>
						<td>JeffBstocks</td>
						<td>-$80.62</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

LeaderBoard.propTypes = {
	history: PropsTypes.object
};
