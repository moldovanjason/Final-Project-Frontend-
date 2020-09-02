import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { Header } from "../component/header";
// import { Context } from "../store/flux";

//create your first component
export function MyStocks(props) {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<Header />
			<Navbar {...props} />
			<div className="username">
				Username:
				{store.username}
			</div>
			<div className="portfoliovalue">
				Portfolio Value:
				{store.portfolioValue}
			</div>
			<div className="buyingpower">
				Buying Power:
				{store.buyingPower}
			</div>
			<div>
				<table className="table">
					<thead>
						<tr className="rowheaders">
							<th scope="col">Symbol</th>
							<th scope="col">Name</th>
							<th scope="col">Shares</th>
							<th scope="col">Price</th>
							<th scope="col">Total Return</th>
						</tr>
					</thead>
					<tbody className="rows">
						<tr>
							<td>AAPL</td>
							<td>Apple Inc</td>
							<td>1</td>
							<td>$500.04</td>
							<td>$4.90</td>
						</tr>
						<tr>
							<td>GOOGL</td>
							<td>Alphabet Inc</td>
							<td>1</td>
							<td>$1628.52</td>
							<td>-$0.36</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

MyStocks.propTypes = {
	history: PropTypes.object
};
