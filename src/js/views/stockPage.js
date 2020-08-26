import React from "react";

//create your first component
export function StockPage(props) {
	return (
		<div className="text-center mt-5">
			<h1>Stock Page</h1>
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
	);
}
