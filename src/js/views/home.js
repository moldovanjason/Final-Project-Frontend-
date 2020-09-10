import React, { useContext } from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import { SignUpModal } from "../component/signUpModal";
import { Context } from "../store/appContext";

//create your first component

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			username: "",
			password: ""
		};
	}
	showModal = () => {
		this.setState({
			show: true
		});
	};

	closeModal = () => {
		this.setState({
			show: false
		});
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => (
					<div>
						<div className="header navbar-expand-lg ">
							<Link className="papertradehome navbar-brand" to="/">
								PAPER TRADE
							</Link>
							<Link
								className="signup nav-link"
								to="#"
								onClick={() => {
									this.showModal();
								}}>
								Sign Up
							</Link>
						</div>
						<div className="middle">
							<div className="login">
								<form>
									<div className="email form-group">
										<label /*htmlfor="exampleInputEmail1"*/>Username</label>
										<input
											onChange={event => {
												this.setState({ ...this.state, username: event.target.value });
											}}
											value={this.state.username}
											className="homeinput"
											type="email"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											// placeholder="Email or Username"
										/>
									</div>
									<div className="password form-group">
										<label /*htmlfor="exampleInputPassword1"*/>Password</label>
										<input
											onChange={event => {
												this.setState({ ...this.state, password: event.target.value });
											}}
											value={this.state.password}
											type="password"
											className="homeinput"
											id="exampleInputPassword1"
											// placeholder="Password"
										/>
									</div>
									<Link to={store.token != null ? "/mystocks" : "/"}>
										<button
											type="button"
											onClick={() => actions.loginUser(this.state.username, this.state.password)}
											// onClick={() => {
											// 	if (this.state.username == store.user.username) {
											// 		this.props.history.push("/myStocks");
											// 	} else {
											// 		alert("wrong username");
											// 	}
											// }}
											className="loginbutton btn">
											Log In
										</button>
									</Link>
									{/* <SignUp /> */}
								</form>
							</div>
							<SignUpModal show={this.state.show} hideModal={() => this.closeModal()} />
							<div className="vlhome" />
							<div className="about">
								Paper Trade is a trading simulator using real time market data and virtual cash. Users
								can test their trading strategies without risking their money. The simulator performs
								like a real brokerage account. Get started for free!
							</div>
						</div>
					</div>
				)}
			</Context.Consumer>
		);
	}
}

Home.propTypes = {
	history: PropsTypes.object
};
