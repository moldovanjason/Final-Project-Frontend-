import React from "react";
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
							<a className="papertrade navbar-brand" href="/">
								PAPER TRADE
							</a>
							<a
								className="signup nav-link"
								href="#"
								onClick={() => {
									this.showModal();
								}}>
								Sign Up
							</a>
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
											className="input"
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
											className="input"
											id="exampleInputPassword1"
											// placeholder="Password"
										/>
									</div>
									<button
										type="submit"
										onClick={() => {
											this.props.history.push("/myStocks");
											// actions.loginUser("big@gmail")
										}}
										className="loginbutton btn">
										Log In
									</button>
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
