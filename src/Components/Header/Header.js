import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
	render() {
		return (
				<header className="Header-header">
					<h1 className="Header-title">La Fête à Macron !</h1>
					<p className="Header-sub">
						Rendez-vous le
						<span className="Header-sub__hour"> 26 Mai !</span>
					</p>
				</header>
		);
	}
}

export default Header;
