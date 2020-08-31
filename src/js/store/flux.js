const URI = "https://3000-bbbf7b0d-e9c3-40ad-b7cc-c5e9d903fd06.ws-us02.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			portfolioValue: 10000,
			buyingPower: 5000,
			username: "Moldovanjason",
			currentStocks: []
		},
		actions: {
			createUser: (username, email, password) => {
				// console.log("user created with", username, email, password);
				fetch(URI + "/register_user", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: username,
						email: email,
						password: password
					})
				})
					.then(data => data.json().then(response => ({ status: data.status, resMsg: response.msg })))
					.then(({ status, resMsg }) => {
						alert("THE ALERT", resMsg, status);
					})
					.catch(err => alert(err.message));
			},

			// signInUser: () => {

			// }

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
