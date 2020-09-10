const URI = "https://3000-db7faf47-57eb-437f-9041-fb8b878c370d.ws-us02.gitpod.io/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			//user: null
			user: {
				userId: 1,
				username: "Moldovanjason",
				email: "moldovanjason@gmail.com",
				password: "okokokok",
				it_active: true,
				portfolioValue: "64,562.47",
				buyingPower: "34,550.00",
				portfolio: []
			},
			allUsers: [],
			currentStocks: [],
			portfolio: []
		},
		actions: {
			createUser: (username, email, password, buying_power) => {
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
						alert("User Created", resMsg, status);
					})
					.catch(err => console.log(err.message));
			},

			getPotfolio: async () => {
				let updatedPortfolio = [];
				try {
					let response = await fetch(URI + "/portfolio/1", {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					});
					if (response.ok) {
						updatsedPortfolio = await response.json();
					}
				} catch (err) {
					console.log(err);
				}
				setStore({
					portfolio: updatedPortfolio
				});
				console.log("Users", users);
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

					.catch(error => console.log(error.message));
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

				fetch("https://financialmodelingprep.com/api/v3/stock/list?apikey=f19b2da4e27cfbbaeaa219bc4d346fd5")
					.then(res => res.json())
					.then(data => setStore({ ...store, currentStocks: data.slice(0, 50) }))
					.catch(err => console.log(err.message));
			},
			loginUser: (username, password) => {
				fetch(URI + "/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: username,
						password: password
					})
				})
					.then(response => response.json())
					.then(data => setStore({ token: data.jwt, user: data.user }));
			},
			logoutUser: () => {
				setStore({ token: null, user: null });
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
				console.log("Users", users);
			}
		}
	};
};

export default getState;
