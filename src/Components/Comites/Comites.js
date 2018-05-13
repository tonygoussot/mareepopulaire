import React, {Component} from 'react';
import './Comites.scss';
import ComitesCarte from "../ComitesCarte/ComitesCarte";
import ComitesToolbox from "../ComitesToolbox/ComitesToolbox";
import ComitesIntro from "../ComitesIntro/ComitesIntro";

class Comites extends Component {
	constructor (props) {
		super(props);
		this.state = props;
	}

	render () {
		return (
			<div className="Comites Page">
				<div className="Page__title">
					<h1> Tout sur les comités de la Fête à Macron </h1>
					<h2> Trouvez, créez, animez votre comité </h2>
				</div>
				<div className='Comites__tellus Section'>
					Prévenez-nous à l'adresse:&nbsp;
					<a href="mailto:comitefeteamacron@gmail.com">
						comitefeteamacron@gmail.com
					</a>
				</div>
				<ComitesIntro/>
				<ComitesCarte/>
				<ComitesToolbox storage={this.state.storage}/>

			</div>
		);
	}
}

export default Comites;

