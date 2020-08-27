const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			portfolioValue: 5000,
			buyingPower: 5000,
			stocks: [
				{
					name: "apple",
					symbol: "AAPL",
					price: 500,
					shares: 0,
					currentValue: 1000
				}
			]
		},
		actions: {
			createUser: (username, email, password) => {
				// console.log("user created with", username, email, password);
				// fetch("", {
				// 	method: "POST",
				// 	headers: { "Content-Type": "application/json" },
				// 	body: JSON.stringify({
				// 		username: username,
				//         email: email,
				//         password: password
				// 	})
				// })
				//     .then(data => data.json()
				//     .then(response => ({ status: data.status, resMsg: response.msg })))
				// 	.then(({ status, resMsg }) => {
				// 		if (status === 400) alert(resMsg);
				// 	})
				// 	.catch(err => alert(err.message));
			},

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
