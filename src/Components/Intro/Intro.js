import React, {Component} from 'react';
import './Intro.scss';
import Manifeste from "./Manifeste";

class Intro extends Component {
	constructor (props) {
		super(props);
		this.state = {
			tractoFile: '',
			imgPl: '',
			videoFile: '',
			poster: '',
			ref19: '',
			ruffin19: '',
			cagnotte: '',
			plan1: '',
			plan2: '',
			CP5M: '',
			illusCP5M: '',
			screenWidth: props.width,
			elemWidth: props.width
		};
	}

	setElementsWidth (width) {
		const capElementsWidth = width > 400 ? 400 : width;
		this.setState({elemWidth: capElementsWidth, screenWidth: width});
	}

	componentWillMount () {
		this.setElementsWidth(this.props.width);
	}

	componentDidMount () {
		if (this.props.width && this.props.width !== this.state.elemWidth) {
			this.setElementsWidth(this.props.width);
		}

		const plRef        = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/poing-levé.jpg');
		const tractoRef    = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/TractCheminot_FeteAMacron5mai.pdf');
		const videoRef     = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/#5mai - #LaFeteaMacron - Du mouvement Social !.mp4');
		const posterRef    = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/poster3.png');
		const ref19        = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/FICHE 19 .png');
		const refRuffin19  = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/photos/photo5972006975908719918.jpg');
		const refCagnotte  = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/unecagnotte.jpg');
		const refPlan1     = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/cortege/plan manif2.png');
		const refPlan2     = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/cortege/plan manif3.png');
		const refCP5M      = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/communiqués/CP5M.pdf');
		const refIllusCP5M = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/photos/5M/Fête à Macron-11-sm.jpg');

		tractoRef.getDownloadURL().then(url => this.setState({tractoFile: url}));
		plRef.getDownloadURL().then(url => this.setState({imgPl: url}));
		videoRef.getDownloadURL().then(url => this.setState({videoFile: url}));
		posterRef.getDownloadURL().then(url => this.setState({poster: url}));
		ref19.getDownloadURL().then(url => this.setState({ref19: url}));
		refRuffin19.getDownloadURL().then(url => this.setState({ruffin19: url}));
		refCagnotte.getDownloadURL().then(url => this.setState({cagnotte: url}));
		refPlan1.getDownloadURL().then(url => this.setState({plan1: url}));
		refPlan2.getDownloadURL().then(url => this.setState({plan2: url}));
		refCP5M.getDownloadURL().then(url => this.setState({CP5M: url}));
		refIllusCP5M.getDownloadURL().then(url => this.setState({illusCP5M: url}));
	}

	render () {
		return (
			<div className="Intro">

				<div className="col-one">

					<div className="Intro-networks card">
						<div className="card-content">
							<div className="card-title">
								RENDEZ-VOUS LE 26 MAI
							</div>
						</div>
						<div className="logos">
							<iframe width="390" height="315"
							        src="https://www.youtube.com/embed/SYMns2mrWnY"
							        frameBorder="0" allow="autoplay; encrypted-media"
							        allowFullScreen>
							</iframe>
						</div>
					</div>

					<div className="Intro-networks card">
						<div className="logos">
							<iframe width="390" height="315"
							        src="https://www.youtube.com/embed/MOX3-ZPw3eM"
							        frameBorder="0"
							        allow="autoplay; encrypted-media"
							        allowFullScreen>
							</iframe>
						</div>
					</div>

					<div className="Intro-networks card">
						<div className="card-content">
							<div classNam e="card-title">
								MOBILISONS-NOUS !
							</div>
						</div>
						<div className="logos">
							<a className="social-networks facebook--link card-action"
							   href="https://www.facebook.com/lafeteamacron/"
							   target="_blank">
								<i className="fab fa-facebook-square"></i>
								<span> La Page de la communauté </span>
							</a>
							<a className="social-networks card-action facebook--link"
							   href="https://www.facebook.com/events/168405913879142/"
							   target="_blank">
								<i className="fab fa-facebook-square"></i>
								<span> Inscrivez-vous à l'évènement </span>
							</a>
							<a className="social-networks card-action"
							   href="https://twitter.com/LaFeteaMacron"
							   target="_blank">
								<i className="fab fa-twitter-square"></i>
								<span> Le Twitter du mouvement </span>
							</a>
						</div>
					</div>

					<div className="Intro-networks card">
						<div className="card-content">
							<div className="card-title">
								ECRIVEZ-NOUS !
							</div>
						</div>
						<div className="logos">
							<a className="resources card-action"
							   href="mailto:contact@lafeteamacron.org">
								<i className="material-icons">email</i>
								<span> contact@lafeteamacron.org </span>
							</a>
						</div>
					</div>

					<div className="Intro-networks card">
						<div className="card-content">
							<div className="card-title">
								SIGNEZ L'APPEL !
							</div>
						</div>
						<div className="logos">
							<a href={"https://www.change.org/p/le-peuple-appel-au-samedi-5-mai-faire-sa-f%C3%AAte-%C3%A0-macron"}
							   className="sign__button card-action">
								<i className="material-icons">assignment</i>
								<span> Je signe sur change.org</span>
							</a>
						</div>
					</div>

					<div className="Subscribe-newsletter card">
						<div className="card-content">
							<span className="Subscribe-newsletter card-title"> LA LISTE DE DIFFUSION</span>
						</div>
						<div className="card-action">
							<iframe src="https://landing.mailerlite.com/webforms/landing/b1s0p3"
							        style={{
								        border: 'none',
								        height: '180px',
								        maxWidth: this.state.elemWidth
							        }}>
							</iframe>
						</div>
					</div>
				</div>

				<div className="col-one">

					<div className="Intro-networks card">
						<div className='image-title'>
							<img style={{width: '390px', height: '585px'}}
							     src={this.state.illusCP5M}/>
						</div>
						<div className="Intro-networks__title card-image">
							<span className="card-title">QUE LA FÊTE COMMENCE !</span>
						</div>
						{/*<div className="Intro-networks__texte card-content">
							<Manifeste/>
						</div>*/}
						<a className="card-action resources"
						   href={this.state.CP5M}
						   target="_blank">
							<i class="material-icons">
								description
							</i>
							<span>Notre communiqué</span>
						</a>
					</div>

				</div>

			</div>
		);
	}
}

export default Intro;
