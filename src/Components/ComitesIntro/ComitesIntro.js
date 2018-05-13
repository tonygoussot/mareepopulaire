import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import './ComitesIntro.scss';

class ComitesIntro extends Component {

	render () {
		return (
			<div className="ComitesIntro Section">
				<p>
					Participez à l'organisation de la fête à Macron!
					Pour cela, rejoignez le comité le plus proche de chez vous en utilisant <a href="#section-trouver">la
					carte interactive</a> !
				</p>
				<p>
					Pas encore de comité créé dans votre ville ? Pas de panique, les comités locaux c’est vous !
					Pour vous lancer, vous avez à votre disposition <a href="#section-outils">la boîte à outil</a> !
					Elle contient des ressources et des liens utiles à la création de votre comité local.
				</p>
			</div>
		);
	}
}

export default ComitesIntro;

