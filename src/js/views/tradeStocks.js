import React, { useEffect, useState } from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Header } from "../component/header";
import { Context } from "../store/appContext";

//create your first component
export function TradeStocks(props) {
	const [shares, setShares] = useState(0);

	useEffect(() => {}, []);

	return (
		<div>
			<Header />
			<Navbar />
			<h1 className="tradestocksheader text-center">Trade Stocks</h1>
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<table className="table table-striped">
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
								{store.currentStocks.map((stock, index) => {
									return (
										<tr className="" key={index}>
											<td>
												{/* create onclick for each button too function properly  
                                             create input field on the side of buttons to select amount of stocks a user can buy 
                                            logic on backend for number of shares. logic would have to be created on the front end for total cost */}

												{/* add onclick to call action in flux.js - for example "buyStock" ; action to call fetch to the endpoint '/portfolio/<user_id> [POST]'*/}
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
