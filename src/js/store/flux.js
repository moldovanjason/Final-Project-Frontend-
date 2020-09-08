const URI = "https://3000-db7faf47-57eb-437f-9041-fb8b878c370d.ws-us02.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			portfolioValue: 50000,
			buyingPower: 50000,
			user: {
				userId: 1,
				username: "Moldovanjason",
				email: "moldovanjason@gmail.com",
				password: "okokokok",
				it_active: true,
				portfolio: []
			},
			allUsers: [],
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
						buying_power: buying_power
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
					.then(response => alert("Thank you for your puchase!"))

					.catch(error => error);
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
					.then(response => response)
					.catch(error => error);
			},

			loadStockData: () => {
				const store = getStore();
				fetch("https://financialmodelingprep.com/api/v3/stock/list?apikey=134e7faf232ad1a579a7db83b38ade6e")
					.then(res => res.json())
					.then(data => setStore({ ...store, currentStocks: data.slice(0, 50) }))
					.catch(err => alert(err.message));
			},
			loginUser: () => {
				fetch(URI + "/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: email
					})
				});
			},
			getUsers: async () => {
				let users = [];
				try {
					let response = await fetch(URI + "/users", {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					if (response.ok) {
						users = await response.json();
					}
				} catch (err) {
					console.log(err);
				}
				setStore({
					allUsers: users
				});
				console.log(users);
			}
		}
	};
};

export default getState;
