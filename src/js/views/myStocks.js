import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { Header } from "../component/header";
// import { Context } from "../store/flux";

//create your first component
export function MyStocks(props) {
	const { store, actions } = useContext(Context);
	const [portfolio, setPortfolio] = useState([]);
	useEffect(() => {
		fetch("https://3000-ee414221-0bf8-4693-a1c5-671ebb7df98e.ws-us02.gitpod.io/portfolio/2")
			.then(response => response.json())
			.then(data => setPortfolio(data));
		// create another fetch to compare with data from user
	}, []);

	// for current value column, we need to loop through store.currentStocks,
	// compair symbols from stock symbol in portfolio, and when symbol matched
	// we use store.currentStocks.price to calculate current value (stock.shares * store.currentStocks.price)

	const currentPrice = symbol => {
		let stock = store.currentStocks.filter(stock => symbol == stock.symbol);
		console.log(stock);
		return stock[0].price;
	};

	store.currentStocks;

	const listOfStocks = portfolio.map((stock, index) => {
		return (
			<tr className="tablerow" key={index}>
				<td>
					<button
						onClick={() => {
							actions.sellStock(1, stock.symbol, stock.name, stock.price, shares, 5.67);
						}}>
						Buy
					</button>
					<input
						onChange={event => {
							setShares(event.target.value);
						}}
						// value={shares}
						className="input"
						type="email"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						// placeholder="Email or Username"
					/>
				</td>
				<td className="aisle">{stock.id}</td>
				<td className="aisle">{stock.symbol}</td>
				<td className="aisle">{stock.companyName}</td>
				<td className="aisle">{stock.shares}</td>
				<td className="aisle">{stock.price}</td>
				<td className="aisle">{currentPrice("SPY")}</td>
				<td className="aisle">{stock.shares * stock.price}</td>
				<td className="aisle">5</td>
			</tr>
		);
	});

	return (
		<div>
			<Header />
			<Navbar {...props} />
			<div className="username">
				My Stocks
				{store.username}
			</div>
			<div className="wholetable">
				<table className="table">
					<thead>
						<tr className="rowheaders">
							<th scope="col" className="headerpadding">
								Sell
							</th>
							<th scope="col" className="headerpadding">
								#
							</th>
							<th scope="col" className="headerpadding">
								Symbol
							</th>
							<th scope="col" className="headerpadding">
								Name
							</th>
							<th scope="col" className="headerpadding">
								Shares
							</th>
							<th scope="col" className="headerpadding">
								Purchase Price
							</th>
							<th scope="col" className="headerpadding">
								Current Price
							</th>
							<th scope="col" className="headerpadding">
								Current Value
							</th>
							<th scope="col" className="headerpadding">
								Profit/Loss
							</th>
						</tr>
					</thead>
					<tbody className="rows">{listOfStocks}</tbody>
				</table>
			</div>
		</div>
	);
}

MyStocks.propTypes = {
	history: PropTypes.object
};
