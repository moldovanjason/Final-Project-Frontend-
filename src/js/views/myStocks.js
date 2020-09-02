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
		fetch("https://3000-db7faf47-57eb-437f-9041-fb8b878c370d.ws-us02.gitpod.io/portfolio/2")
			.then(response => response.json())
			.then(data => setPortfolio(data));
		// create another fetch to compare with data from user
	}, []);

	const listOfStocks = portfolio.map((stock, index) => {
		return (
			<tr className="tablerow" key={index}>
				<td className="aisle">{stock.symbol}</td>
				<td className="aisle">{stock.companyName}</td>
				<td className="aisle">{stock.shares}</td>
				<td className="aisle">{stock.price}</td>
				<td className="aisle">5</td>
			</tr>
		);
	});

	return (
		<div>
			<Header />
			<Navbar {...props} />
			<div className="username">
				Username:
				{store.username}
			</div>
			<div>Portfolio Value: {store.portfolioValue}</div>
			<div>
				Buying Power:
				{store.buyingPower}
			</div>
			<div className="wholetable">
				<table className="table">
					<thead>
						<tr className="rowheaders">
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
								Price
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
