import React from "react";
import { Link } from "react-router-dom";
// import { withRouter } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Trade Stocks {/*<span className="sr-only">(current)</span>*/}
						</a>
					</li>
					<li claclassNamess="nav-item">
						<a className="nav-link" href="#">
							Transaction History
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Leader Boards
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Edit Profile
						</a>
					</li>
				</ul>
			</div>
		</nav>

		// <nav className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button className="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>
	);
};

export default Navbar;
