import React, { useEffect, useState } from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Header } from "../component/header";

//create your first component
export function TradeStocks(props) {
	const [stocks, setStocks] = useState([]);

	useEffect(() => {
		fetch("https://financialmodelingprep.com/api/v3/stock/list?apikey=8d45cc9cb998a6d3f13da7b13700f503")
			.then(res => res.json())
			.then(results => setStocks(results));
	}, []);

	const stockList = stocks.map((stock, index) => {
		return (
			<tr key={index}>
				<td>
					<button>Buy</button>
					<button>Sell</button>
				</td>
				<td scope="row">{stock.symbol}</td>
				<td>{stock.name}</td>
				<td>{stock.price}</td>
			</tr>
		);
	});

	return (
		<div>
			<Header />
			<Navbar />
			<h1 className="tradestocksheader text-center">Trade Stocks</h1>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">buy or sell</th>
						<th scope="col">Symbol</th>
						<th scope="col">Name</th>
						<th scope="col">Price</th>
					</tr>
				</thead>
				<tbody>{stockList}</tbody>
			</table>
		</div>
	);
}

TradeStocks.propTypes = {
	history: PropsTypes.object
};
