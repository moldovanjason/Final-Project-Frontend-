import React from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";

//create your first component
export function TransactionHistory(props) {
	return (
		<div className="transaction-table">
			<div className="header navbar-expand-lg ">
				<a className="papertrade navbar-brand" href="" onClick={() => this.props.history.push("/profile")}>
					PAPER TRADE
				</a>
				<a className="logout nav-link" href="" onClick={() => props.history.push("/home")}>
					Log Out
				</a>
			</div>
			<Navbar />
			<h1>Transaction History </h1>
			<div>
				<thead>
					<tr>
						<th>Date and Time</th>
						<th>Stock</th>
						<th>Transaction</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>08/14/2020</td>
						<td>AAL</td>
						<td> market buy</td>
						<td> -$450.00</td>
					</tr>
					<tr>
						<td>08/19/2020</td>
						<td>AAL</td>
						<td> market sell</td>
						<td> $650.00</td>
					</tr>
					<tr>
						<td>08/25/2020</td>
						<td>AAL</td>
						<td> market buy</td>
						<td> -$350.00</td>
					</tr>
				</tbody>
			</div>
		</div>
	);
}

TransactionHistory.propTypes = {
	history: PropsTypes.object
};
