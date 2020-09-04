import React, { useEffect, useState, useContext } from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Header } from "../component/header";
import { Context } from "../store/appContext";

//create your first component
export function TradeStocks(props) {
	const [shares, setShares] = useState(0);
	const { store, actions } = useContext(Context);

	useEffect(() => {}, []);

	return (
		<div>
			<Header />
			<div className="mystockstitle">Trade Stocks</div>
			<Navbar />
			{store.currentStocks.length < 1 ? (
				<div> Stock data is loading... </div>
			) : (
				store.currentStocks.map((stock, index) => {
					return (
						<table className="table table-striped" key={index}>
							<thead>
								<tr>
									<th scope="col" className="">
										Buy
									</th>
									<th scope="col" className="">
										Symbol
									</th>
									<th scope="col" className="">
										Name
									</th>
									<th scope="col" className="">
										Price
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="">
									<td>
										<button
											onClick={() => {
												actions.buyStock(
													1,
													stock.symbol,
													stock.name,
													stock.price,
													shares,
													5.67
												);
											}}>
											Buy
										</button>
										<input
											onChange={event => {
												setShares(parseFloat(event.target.value));
											}}
											// value={shares}
											className="input"
											type="text"
											aria-describedby="emailHelp"
											// placeholder="Email or Username"
										/>
									</td>
									<td scope="row">{stock.symbol}</td>
									<td>{stock.name}</td>
									<td>{stock.price}</td>
								</tr>
							</tbody>
						</table>
					);
				})
			)}
		</div>
	);
}

TradeStocks.propTypes = {
	history: PropsTypes.object
};
