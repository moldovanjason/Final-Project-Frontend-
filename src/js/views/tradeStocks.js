import React, { useEffect, useState } from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Header } from "../component/header";
import { Context } from "../store/appContext";

//create your first component
export function TradeStocks(props) {
	const [stocks, setStocks] = useState([]);

	useEffect(() => {}, []);

	return (
		<div>
			<Header />
			<Navbar />
			<h1 className="tradestocksheader text-center">Trade Stocks</h1>
			<Context.Consumer>
				{({ store }) => {
					return (
						<table className="table table-striped">
							<thead>
								<tr>
									<th scope="col">buy or sell</th>
									<th scope="col">Symbol</th>
									<th scope="col">Name</th>
									<th scope="col">Price</th>
								</tr>
							</thead>
							<tbody>
								{store.currentStocks.map((stock, index) => {
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
								})}
							</tbody>
						</table>
					);
				}}
			</Context.Consumer>
		</div>
	);
}

TradeStocks.propTypes = {
	history: PropsTypes.object
};
