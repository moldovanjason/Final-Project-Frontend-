import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { MyStocks } from "./views/myStocks";
import { NoPageFound } from "./views/noPageFound";
import { TradeStocks } from "./views/tradeStocks";
import { LeaderBoard } from "./views/leaderBoard";
import injectContext from "./store/appContext";
import { TransactionHistory } from "./views/transactionHistory";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { UserProfile } from "./views/userProfile";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/userprofile" component={UserProfile} />
						<Route exact path="/mystocks" component={MyStocks} />
						<Route exact path="/tradestocks" component={TradeStocks} />
						<Route exact path="/leaderboard" component={LeaderBoard} />
						<Route exact path="/transactionhistory" component={TransactionHistory} />

						{/* <Route exact path="/planetsdetails/:id" component={PlanetsDetails} />
						<Route exact path="/charactersdetails/:id" component={CharactersDetails} /> */}
						<Route>
							<h1 className="nf">***Page Not Found***</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
