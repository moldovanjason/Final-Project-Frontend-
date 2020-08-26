import React from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";

//create your first component
export function StockPage(props) {
	return (
		<div>
			<div className="header navbar-expand-lg ">
				<a className="papertrade navbar-brand" href="" onClick={() => this.props.history.push("/profile")}>
					PAPER TRADE
				</a>
				<a className="logout nav-link" href="" onClick={() => this.props.history.push("/home")}>
					Log Out
				</a>
			</div>
			<Navbar />
		    <div className="text-center mt-5">
			    <table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Symbol</th>
						<th scope="col">Name</th>
						<th scope="col">Price</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">APPL</th>
						<td>Apple</td>
						<td>$500.10</td>
					</tr>
					<tr>
						<th scope="row">F</th>
						<td>Ford</td>
						<td>$7.20</td>
					</tr>
					<tr>
						<th scope="row">XSPA</th>
						<td>X-Spa</td>
						<td>$3.00</td>
					</tr>
				</tbody>
			</table>
		    </div>
        </div>
	);
}

StockPage.propTypes = {
	history: PropsTypes.object
};
