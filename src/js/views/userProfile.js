import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import { Header } from "../component/header";
import { Navbar } from "../component/navbar";
//create your first component
export class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: null,
			email: null,
			password: null
		};
	}

	editContact = (name, email, id) => {
		fetch(`address`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				agenda_slug: "expAgendaForCohortIII",
				full_name: name,
				email
			})
		})
			.then(data => data.json())
			.then(({ status, resMsg }) => {
				if (status === 400) alert(resMsg);
			})
			.then(() => {
				fetch("address")
					.then(res => res.json())
					.then(data => setStore({ allContacts: data }));
			})
			.catch(err => alert(err.message));
	};

	render() {
		return (
			<div>
				<Header />
				<div className="mystockstitle">User Profile</div>
				<Navbar />
				<form className="editform">
					<div>
						<div className="editprofileuserprofile">Edit Profile</div>
						<label className="label userprofilepadding">{store.user.username}</label>
						{/* <input
								onChange={event => {
									this.setState({ ...this.state, fullName: event.target.value });
								}}
								type="text"
								className="nameinput"
								placeholder="Enter New Username"
								value={this.state.full_name}
							/> */}
					</div>
					<div className="form-group userprofilepadding">
						<label />
						<input
							onChange={event => {
								this.setState({ ...this.state, email: event.target.value });
							}}
							type="email"
							className="newemail form-control"
							placeholder="Enter New Email"
							value={this.state.email}
						/>
					</div>
					<div className="form-group userprofilepadding">
						<label />
						<input
							onChange={event => {
								this.setState({ ...this.state, password: event.target.value });
							}}
							type="password"
							className="userprofilepassword form-control"
							placeholder="Enter New Password"
							value={this.state.password}
						/>
					</div>
					<button
						className="cancelbutton text-center"
						href="/mystocks"
						onClick={() => this.props.history.push("/myStocks")}>
						Cancel
					</button>
					<button
						// disabled={disabledButton}
						className="savebutton"
						onClick={() => {
							this.editContact(this.state.fullName, this.state.email, this.props.match.params.id);
							this.props.history.push("/userprofile");
						}}
						type="button"
						// className={`btn ${disabledButton ? "btn-secondary" : "btn-primary"} form-control`}
					>
						Save
					</button>
				</form>
			</div>
		);
	}
}

UserProfile.propTypes = {
	history: PropsTypes.object,
	match: PropsTypes.onject
};
