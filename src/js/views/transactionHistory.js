import React from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Header } from "../component/header";

//create your first component
export function TransactionHistory(props) {
	return (
		<div className="transaction-table">
			<Header />
			<Navbar />
			<h1 className="transactionhistorytitle">Transaction History </h1>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Date and Time</th>
						<th scope="col">Stock</th>
						<th scope="col">Transaction</th>
						<th scope="col">Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>08/14/2020</td>
						<td>AAL</td>
						<td>@market buy</td>
						<td>-$450.00</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>08/19/2020</td>
						<td>AAL</td>
						<td> market sell</td>
						<td> $650.00</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>08/25/2020</td>
						<td>AAL</td>
						<td> market buy</td>
						<td> -$350.00</td>
					</tr>
				</tbody>
			</table>

			{/* <table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Date and Time</th>
						<th scope="col">Stock</th>
						<th scope="col">Transaction</th>
						<th scope="col">Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>08/14/2020</td>
						<td>AAL</td>
						<td>@market buy</td>
						<td>-$450.00</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>08/19/2020</td>
						<td>AAL</td>
						<td> market sell</td>
						<td> $650.00</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>08/25/2020</td>
						<td>AAL</td>
						<td> market buy</td>
						<td> -$350.00</td>
					</tr>
				</tbody>
			</table> */}
		</div>
	);
}

TransactionHistory.propTypes = {
	history: PropsTypes.object
};
