import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import firebase from "firebase/app/index";
import 'firebase/storage';

import Header from "./Components/Header/Header";
import Accueil from "./Components/Accueil/Accueil";
import Menu from "./Components/Menu/Menu";
import Media from "./Components/Media/Media";
import Tracts from "./Components/Tracts/Tracts";

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
		// Initialize Firebase
		const config = {
			apiKey: "AIzaSyA5rf5uFyXFwyIFY54MKBH-YiFp1s1NOPA",
			authDomain: "mareepopulaire.firebaseapp.com",
			databaseURL: "https://mareepopulaire.firebaseio.com",
			projectId: "mareepopulaire",
			storageBucket: "mareepopulaire.appspot.com",
			messagingSenderId: "589881943673"
		};
		firebase.initializeApp(config);

		this.setState({storage: firebase.storage()});
	}

	componentWillUnmount () {
		window.addEventListener("resize", null);
	}

	render () {
		return (
			<div className="maree">
				<Header/>
				<Router>
					<div>
						<Menu/>
						<Route exact path="/" render={() =>
							<Accueil storage={this.state.storage} width={this.state.width}/>
						}
						/>
						<Route exact path="/media" render={() =>
							<Media storage={this.state.storage}/>
						}/>
						<Route exact path="/tracts" render={() =>
							<Tracts storage={this.state.storage}/>
						}/>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
