import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Menu.scss';

class Menu extends Component {

	render () {
		return (
			<div className="Menu">
				<Link to="/" className="Menu__link waves-effect waves-light btn" onClick={() => window.location.reload()}>
					Infos
				</Link>
				<Link to="/comites" className="Menu__link waves-effect waves-light btn">
					Votre Comité
				</Link>
				<Link to="/media" className="Menu__link waves-effect waves-light btn">
					Affiches
				</Link>
				<Link to="/tracts" className="Menu__link waves-effect waves-light btn">
					Tracts
				</Link>
				<Link to="/nos1000raisons" className="Menu__link waves-effect waves-light btn">
					1000 raisons
				</Link>
				{/*<Link to="/logos" className="Menu__link waves-effect waves-light btn">
					Ils seront à la fête
				</Link>*/}
			</div>
		);
	}
}

export default Menu;

