import React from "react";
import TopNav from "./Navbar";
import Footer from "./Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import AcademicStudy from "./components/AcademicStudy";
import Awards from "./components/Awards";
import WorkSample from "./components/WorkSample";
import ContactMe from "./components/ContactMe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
	return (
		<Router>
			<div className="App">
				<TopNav />
				<Switch>
					<Route path="/contactme">
						<ContactMe />
					</Route>
					<Route path="/skills">
						<Skills />
					</Route>
					<Route path="/academicstudy">
						<AcademicStudy />
					</Route>
					<Route path="/worksample">
						<WorkSample />
					</Route>
					<Route path="/awards">
						<Awards />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
