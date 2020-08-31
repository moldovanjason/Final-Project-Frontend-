import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
// import "../../styles/signUpModal.scss";
import { Context } from "../store/appContext";

export const SignUpModal = props => {
	const [disabledButton, setDisabledButton] = useState(true);
	const { actions, store } = useContext(Context);
	const [state, setState] = useState({
		username: "",
		email: "",
		password: ""
	});
	const { show } = props;
	const handleSubmit = e => {
		e.preventDefault();
		if (state.username !== "" && state.email !== "" && state.password !== "") {
			actions.createUser(state.username, state.email, state.password);
			setState({
				username: "",
				email: "",
				password: ""
			});
			props.hideModal();
		}
	};

	return (
		<div className={show ? "h-view" : "modal"} tabIndex="-1" role="dialog">
			<div className="modal-dialog" role="document">
				<div className="signupmodal modal-content">
					<div className="signupmodalheader modal-header">
						<h5 className="modal-title">Sign Up</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
							onClick={() => props.hideModal()}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form>
						<div className="modal-body">
							<div className="form-row">
								<div className="usernamesignup form-group ">
									<label htmlFor="inputFirstName">USER NAME</label>
									<input
										onChange={event => {
											setState({ ...state, username: event.target.value });
										}}
										value={state.username}
										type="text"
										className="input"
										id="inputFirstName"
										// placeholder="username"
										required
									/>
								</div>
								<div className="emailsignup form-group ">
									<label htmlFor="inputEmail">EMAIL</label>
									<input
										onChange={event => {
											setState({ ...state, email: event.target.value });
										}}
										value={state.email}
										type="text"
										className="input"
										id="inputEmail"
										// placeholder="something@email.com"
										required
									/>
								</div>
								<div className="passwordsignup form-group ">
									<label htmlFor="inputPassword4">PASSWORD</label>
									<input
										onChange={event => {
											setState({ ...state, password: event.target.value });
										}}
										value={state.password}
										type="password"
										className="input"
										id="inputPassword4"
										// placeholder="**********"
										required
									/>
								</div>
							</div>
						</div>
						<div className="signupmodalfooter modal-footer">
							<button
								type="submit"
								className="createaccountbutton btn btn-secondary"
								onClick={e => handleSubmit(e)}>
								Create Account
							</button>
							<button
								type="button"
								href="/home"
								className="cancelbutton btn btn-secondary"
								onClick={() => props.hideModal()}
								data-dismiss="modal">
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

SignUpModal.propTypes = {
	show: PropTypes.bool,
	hideModal: PropTypes.func
};
