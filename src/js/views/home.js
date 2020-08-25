import React from "react";
import { Link } from "react-router-dom";
import { SignUp } from "./signUp";

//create your first component
export function Home() {
	return (
		<div>
			<div className="navbar navbar-expand-lg ">
				<a className="papertrade navbar-brand" href="">
					PAPER TRADE
				</a>
				<a className="signup nav-link" href="#">
					Sign Up
				</a>
			</div>
			<div className="middle">
				<div className="login">
					<form>
						<div className="email form-group">
							<label /*htmlfor="exampleInputEmail1"*/>
								Email address or Username
							</label>
							<input
								className="inputemail"
								type="email"
								clclassNameass="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								// placeholder="Email or Username"
							/>
						</div>
						<div className="password form-group">
							<label /*htmlfor="exampleInputPassword1"*/>
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								// placeholder="Password"
							/>
						</div>
						<button type="submit" className="loginbutton btn">
							Log In
						</button>
						{/* <SignUp /> */}
					</form>
				</div>
				<div className="about">
					About PAPER TRADE. THIS IS WHERE WE WILL TELL YOU WHAT THIS
					WEBSITE IS ABOUT, WHAT YOU CAN DO AND WHAT YOU WILL BE
					LEARNING!
				</div>
			</div>
		</div>
	);
}
