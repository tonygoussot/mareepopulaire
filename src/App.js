import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import firebase from "firebase/app/index";
import 'firebase/storage';

import Header from "./Components/Header/Header";
import Accueil from "./Components/Accueil/Accueil";
import Menu from "./Components/Menu/Menu";
import Comites from "./Components/Comites/Comites";
import Media from "./Components/Media/Media";
import Tracts from "./Components/Tracts/Tracts";
import Nos1000Raisons from "./Components/Nos1000Raisons/Nos1000Raisons";
import Logos from "./Components/Logos/Logos";

class App extends Component {
	static getScreenWidth () {
		const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		console.log('setting width', width);
		return width;
	}

	constructor (props) {
		super(props);
		this.handleResize = this.handleResize.bind(this);

		this.state = {
			width: App.getScreenWidth(),
			storage: {}
		};
	}


	handleResize () {
		this.setState({width: App.getScreenWidth()});
	}

	componentDidMount () {
		window.addEventListener("resize", this.handleResize);
	}

	componentWillMount () {
		const config = {
			apiKey: "AIzaSyD8OjJf2PMTWlHw1QFhc2iNndBztJ3f988",
			authDomain: "lafeteamacron.firebaseapp.com",
			databaseURL: "https://lafeteamacron.firebaseio.com",
			projectId: "lafeteamacron",
			storageBucket: "lafeteamacron.appspot.com",
			messagingSenderId: "37731838438"
		};
		firebase.initializeApp(config);

		this.setState({storage: firebase.storage()});
	}

	componentWillUnmount () {
		window.addEventListener("resize", null);
	}


	render () {
		return (
			<div className="fam">
				<Header/>
				<Router>
					<div>
						<Menu/>
						<Route exact path="/" render={() =>
							<Accueil storage={this.state.storage} width={this.state.width}/>
						}
						/>
						<Route exact path="/comites" render={() =>
							<Comites storage={this.state.storage}/>
						}
						/>
						<Route exact path="/media" render={() =>
							<Media storage={this.state.storage}/>
						}/>
						<Route exact path="/tracts" render={() =>
							<Tracts storage={this.state.storage}/>
						}/>
						<Route exact path="/logos" render={() =>
							<Logos storage={this.state.storage}/>
						}/>
						<Route exact path="/nos1000raisons" render={() =>
							<Nos1000Raisons storage={this.state.storage}/>
						}/>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
