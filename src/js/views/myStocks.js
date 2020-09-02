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
			<div className="portfoliovaluemystocks">Portfolio Value: {store.portfolioValue}</div>
			<div className="buyingpowermystocks">
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
								Total Return
							</th>
						</tr>
					</thead>
					<tbody className="rows">
						<tr className="tablerow">
							<td className="aisle">AAPL</td>
							<td className="aisle">Apple Inc</td>
							<td className="aisle">1</td>
							<td className="aisle">$500.04</td>
							<td className="aisle">$4.90</td>
						</tr>
						<tr className="tablerow">
							<td className="aisle">GOOGL</td>
							<td className="aisle">Alphabet Inc</td>
							<td className="aisle">1</td>
							<td className="aisle">$1628.52</td>
							<td className="aisle">-$0.36</td>
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
