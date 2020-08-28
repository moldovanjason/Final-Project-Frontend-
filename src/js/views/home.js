import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import { SignUpModal } from "../component/signUpModal";

//create your first component

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
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
			<>
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
								<label /*htmlfor="exampleInputEmail1"*/>Email Address or Username</label>
								<input
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
									type="password"
									className="input"
									id="exampleInputPassword1"
									// placeholder="Password"
								/>
							</div>
							<button
								type="submit"
								onClick={() => this.props.history.push("/myStocks")}
								className="loginbutton btn">
								Log In
							</button>
							{/* <SignUp /> */}
						</form>
					</div>
					<SignUpModal show={this.state.show} hideModal={() => this.closeModal()} />
					<div className="vlhome" />
					<div className="about">
						About PAPER TRADE. THIS IS WHERE WE WILL TELL YOU WHAT THIS WEBSITE IS ABOUT, WHAT YOU CAN DO
						AND WHAT YOU WILL BE LEARNING!
					</div>
				</div>
			</>
		);
	}
}

Home.propTypes = {
	history: PropsTypes.object
};
