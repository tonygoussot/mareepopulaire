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
				<Link to="/media" className="Menu__link waves-effect waves-light btn">
					Affiches
				</Link>
				<Link to="/tracts" className="Menu__link waves-effect waves-light btn">
					Tracts
				</Link>
			</div>
		);
	}
}

export default Menu;

