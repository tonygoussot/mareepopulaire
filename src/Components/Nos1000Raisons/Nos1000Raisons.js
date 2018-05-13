import React, {Component} from 'react';
import './Nos1000Raisons.scss';
import Gallery from "../Gallery/Gallery";

class Nos1000Raisons extends Component {

	constructor(props) {
		super(props);
		this.state = {
			galleryImages: []
		};

		const prefix1000Reasons = 'gs://lafeteamacron.appspot.com/nos1000raisons/';
		const prefix1000ReasonsThumbnails = 'gs://lafeteamacron.appspot.com/nos1000raisons/thumbnails/tn_';
		const all1000Reasons = [
			'AgricultureBio.jpg',
			'Chocolat.png',
			'ChomeursPasFaineants.png',
			'ConvergenceDesLuttes.png',
			'DogmeCadeaux.png',
			'EHPAD.jpg',
			'fermeturesClasses.jpg',
			'FonctionnairesActionnaires.png',
			'FraudeFiscale.png',
			'FricServicePublic.png',
			'HommageSoignants.png',
			'Hopitaux.jpg',
			'Hopitaux.png',
			'LaFeteAMacron-fermetures de classe.png',
			'LaFeteAMacron-forêt.png',
			'LaFeteAMacron-lepeupleunijamaisneseravaincu.png',
			'LaFeteAMacron-malàmonécole.png',
			'LaFeteAMacron-oligarchie.png',
			'LaFeteAMacron-privépublic.png',
			'LaFeteAMacron-égalitéfemmeshommes.png',
			'LoiAsileImmigration.jpg',
			'lycees.png',
			'medef.jpg',
			'MillionsMilliards.png',
			'MoyensEHPAD.png',
			'NDDL.png',
			'Oligarchie.jpg',
			'PlusBureSeraLaChute.png',
			'politiqueEnvironementale.jpg',
			'postiers.png',
			'Priv2.png',
			'Quartiers.png',
			'racisme.png',
			'Retraites.png',
			'Réfugiés.jpg',
			'SansDents.jpg',
			'servicesPublics.jpg',
			'societeEMancipatrice.jpg',
			'TransitionEcologique.jpg',
			'zad.jpg'
		];

		const galleryImagesProps = [];
		all1000Reasons.forEach(reason => {
			const gsUrl = prefix1000Reasons + reason;
			const gsUrlThumbnail = prefix1000ReasonsThumbnails + reason;
			Promise.all([
				this.props.storage.refFromURL(gsUrl).getDownloadURL(),
				this.props.storage.refFromURL(gsUrlThumbnail).getDownloadURL(),
			]).then(urls => {
					galleryImagesProps.push({
						url: urls[0],
						thumbnailUrl: urls[1],
						thumbnailWidth: 200,
						thumbnailHeight: 200
					});
					this.setState({galleryImages: galleryImagesProps})
				}
			);
		});
	}

	componentDidMount() {
		this.forceUpdate();
	}

	render() {
		return (
			<div className="Nos1000Raisons Page">
				<div className="title Page__title">
					<h1>1000 raisons de faire sa fête à Macron</h1>
				</div>
				<div className="gallery">
					<Gallery images={this.state.galleryImages}></Gallery>
				</div>
			</div>
		);
	}
}

export default Nos1000Raisons;

