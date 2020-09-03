import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { Header } from "../component/header";
// import { Context } from "../store/flux";

//create your first component
export function TransactionHistory(props) {
	const { store, actions } = useContext(Context);
	const [transactions, setTransactions] = useState([]);
	useEffect(() => {
		fetch("https://3000-ee414221-0bf8-4693-a1c5-671ebb7df98e.ws-us02.gitpod.io/transaction")
			.then(response => response.json())
			.then(data => setTransactions(data.Transactions));
		// create another fetch to compare with data from user
	}, []);
	console.log(transactions, 99);
	const listOfStocks = transactions.map((transaction, index) => {
		return (
			<tr className="tablerow" key={index}>
				<td className="aisle">{transaction.id}</td>
				<td className="aisle">{transaction.symbol}</td>
				<td className="aisle">{transaction.transactionName}</td>
				<td className="aisle">{transaction.price}</td>
				<td className="aisle">{transaction.shares}</td>
				<td className="aisle">{transaction.value}</td>
				<td className="aisle">{transaction.date}</td>
			</tr>
		);
	});

	return (
		<div>
			<Header />
			<Navbar {...props} />
			<div className="wholetable">
				<table className="table">
					<thead>
						<tr className="rowheaders">
							<th scope="col" className="headerpadding">
								#
							</th>
							<th scope="col" className="headerpadding">
								Symbol
							</th>
							<th scope="col" className="headerpadding">
								Transaction Name
							</th>
							<th scope="col" className="headerpadding">
								Price
							</th>
							<th scope="col" className="headerpadding">
								Shares
							</th>
							<th scope="col" className="headerpadding">
								Value
							</th>
							<th scope="col" className="headerpadding">
								Date
							</th>
						</tr>
					</thead>
					<tbody className="rows">{listOfStocks}</tbody>
				</table>
			</div>
		</div>
	);
}

TransactionHistory.propTypes = {
	history: PropTypes.object
};

// import React from "react";
// import PropsTypes from "prop-types";
// import { Navbar } from "../component/navbar";
// import { Header } from "../component/header";

// //create your first component
// export function TransactionHistory(props) {
// 	return (
// 		<div className="transaction-table">
// 			<Header />
// 			<Navbar />
// 			<table className="table table-striped">
// 				<thead>
// 					<tr>
// 						<th scope="col">#</th>
// 						<th scope="col">Date and Time</th>
// 						<th scope="col">Stock</th>
// 						<th scope="col">Transaction</th>
// 						<th scope="col">Value</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					<tr>
// 						<th scope="row">1</th>
// 						<td>08/14/2020</td>
// 						<td>AAL</td>
// 						<td>@market buy</td>
// 						<td>-$450.00</td>
// 					</tr>
// 					<tr>
// 						<th scope="row">2</th>
// 						<td>08/19/2020</td>
// 						<td>AAL</td>
// 						<td> market sell</td>
// 						<td> $650.00</td>
// 					</tr>
// 					<tr>
// 						<th scope="row">3</th>
// 						<td>08/25/2020</td>
// 						<td>AAL</td>
// 						<td> market buy</td>
// 						<td> -$350.00</td>
// 					</tr>
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// }

// TransactionHistory.propTypes = {
// 	history: PropsTypes.object
// };
