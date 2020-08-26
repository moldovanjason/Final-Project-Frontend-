import React from "react";
import PropTypes from "prop-types";
import "../../styles/signUpModal.scss";

export const SignUpModal = props => {
	var { show } = props;
	console.log(show);
	return (
		<div className={show ? "h-view" : "modal"} tabIndex="-1" role="dialog">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
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
					<div className="modal-body">
						<div className="form-row">
							<div className="form-group ">
								<label htmlFor="inputFirstName"> USER NAME</label>
								<input
									type="text"
									className="form-control"
									id="inputFirstName"
									placeholder="username"
								/>
							</div>
							<div className="form-group ">
								<label htmlFor="inputEmail">EMAIL</label>
								<input
									type="text"
									className="form-control"
									id="inputEmail"
									placeholder="something@email.com"
								/>
							</div>
							<div className="form-group ">
								<label htmlFor="inputPassword4">PASSWORD</label>
								<input
									type="password"
									className="form-control"
									id="inputPassword4"
									placeholder="**********"
								/>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary">
							Save
						</button>
						<button
							type="button"
							href="/home"
							className="btn btn-secondary"
							onClick={() => props.hideModal()}
							data-dismiss="modal">
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
SignUpModal.propTypes = {
	show: PropTypes.bool,
	hideModal: PropTypes.func
};
