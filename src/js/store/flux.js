const URI = "https://3000-dc5b60a1-e9c7-47df-8afe-d76da2d221f2.ws-us02.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			portfolioValue: 10000,
			buyingPower: 5000,
			user: {
				userId: 1,
				username: "Moldovanjason",
				email: "moldovanjason@gmail.com",
				password: "okokokok",
				it_active: true,
				portfolio: []
			},
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
						password: password,
						buying_power: 50000.0
					})
				})
					.then(data => data.json().then(response => ({ status: data.status, resMsg: response.msg })))
					.then(({ status, resMsg }) => {
						alert("User Created", resMsg, status);
					})
					.catch(err => alert(err.message));
			},

			buyStock: (userId, symbol, companyName, price, shares, totalReturn) => {
				fetch(URI + "/portfolio/1", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						symbol: symbol,
						companyName: companyName,
						price: price,
						shares: shares,
						totalReturn: totalReturn
					})
				})
					.then(data => data.json())
					.then(response => console.log(response))
					.catch(error => console.log(error));
			},

			sellStock: (userId, symbol, price, shares) => {
				fetch(URI + "/portfolio/1", {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						symbol: symbol,
						price: price,
						shares: parseInt(shares)
					})
				})
					.then(data => data.json())
					.then(response => console.log(response))
					.catch(error => console.log(error));
			},

			loadStockData: () => {
				const store = getStore();
				fetch("https://financialmodelingprep.com/api/v3/stock/list?apikey=134e7faf232ad1a579a7db83b38ade6e")
					.then(res => res.json())
					.then(data => setStore({ ...store, currentStocks: data.slice(0, 50) }))
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
