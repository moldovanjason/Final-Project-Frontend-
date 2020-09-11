import React, { useContext, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { Header } from "../component/header";
// import { Context } from "../store/flux";

//create your first component
export function MyStocks(props) {
	const { store, actions } = useContext(Context);
	const [shares, setShares] = useState(0);
	const [portfolio, setPortfolio] = useState([]);
	var currentValue = 0.0;

	useEffect(() => {
		fetch("https://3000-b4b07a62-f7fa-4095-b283-fbaeea7cb56d.ws-us02.gitpod.io/portfolio/1")
			.then(response => response.json())
			.then(data => setPortfolio(data))
			.catch(err => err.message);
		// create another fetch to compare with data from user
	});

	const currentPrice = symbol => {
		if (store.currentStocks) {
			let stock = store.currentStocks.filter(stock => symbol == stock.symbol);
			if (stock.length > 0) {
				return stock[0].price;
			} else {
				return 0.0;
			}
		}
	};

	const listOfStocks = () => {
		let potfolioEntries = portfolio.map((stock, index) => {
			return (
				<tr className="tablerow" key={index}>
					<td className="mystocksborder">
						<button
							className="buystockbutton"
							href="/mystocks"
							onClick={() => {
								actions.sellStock(1, stock.symbol, stock.price, shares);
							}}>
							Sell
						</button>
						<input
							onChange={event => {
								setShares(event.target.value);
							}}
							className="input"
							type="text"
							aria-describedby="emailHelp"
							placeholder="0"
						/>
					</td>
					<td className="aisle">{stock.symbol}</td>
					<td className="aisle">{stock.companyName}</td>
					<td className="aisle">{stock.shares}</td>
					<td className="aisle">{stock.price}</td>
					<td className="aisle">{currentPrice(stock.symbol).toFixed(2)}</td>
					<td className="aisle">{(stock.shares * currentPrice(stock.symbol)).toFixed(2)}</td>
					<td className="aislelast">{(currentPrice(stock.symbol) - stock.price).toFixed(3)}</td>
				</tr>
			);
		});
		return potfolioEntries;
	};

	console.log("ListOfStocks", listOfStocks());

	const getCurrentValue = () => {
		currentValue = 0.0;
		portfolio.map(stock => (currentValue += stock.shares * currentPrice(stock.symbol)));
		return currentValue;
	};

	return (
		<div>
			<div>
				<Header />
				<div className="mystockstitle">My Stocks</div>
				<Navbar {...props} />
			</div>
			<div className="tableheadertop">
				<table className="table">
					<thead>
						<tr className="rowheaders">
							<th scope="col" className="sell">
								Sell
							</th>
							<th scope="col" className="headerpadding">
								Symbol
							</th>
							<th scope="col" className="nameheaderpadding">
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
					<tbody className="rows">
						{listOfStocks()}
						<tr>
							<td className="aisle" />
							<td className="aisle" />
							<td className="aisle" />
							<td className="aisle" />
							<td className="aisle" />
							<td className="aisle totalvalue">Stocks value</td>
							<td className="aisle totalvalue">{getCurrentValue().toFixed(2)}</td>
							<td className="aisle" />
						</tr>
						<tr>
							<td className="aisle" />
							<td className="aisle" />
							<td className="aisle" />
							<td className="aisle" />
							<td className="aisle" />
							<td className="aisle portfoliovalue">Portfolio today</td>
							<td className="aisle portfoliovalue">
								{store.allUsers[0]
									? (store.allUsers[0].buying_power + getCurrentValue()).toFixed(2)
									: " ... "}
							</td>
							<td className="aisle" />
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
