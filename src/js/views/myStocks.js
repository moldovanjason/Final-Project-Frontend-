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
			<div className="name">Jason Moldovn</div>
			<div className="portfoliovalue">{store.portfolioValue}</div>
			<div className="buyingpower">{store.buyingPower}</div>
			<h1>MY STOCKS </h1>
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Symbol</th>
							<th scope="col">Name</th>
							<th scope="col">Price</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td scope="row">1</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td scope="row">2</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td scope="row">3</td>
							<td>Larry</td>
							<td>the Bird</td>
							<td>@twitter</td>
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
