import React, {Component} from 'react';
import './Logos.scss';

class Logos extends Component {

	constructor (props) {
		super(props);
		const self = this;
		this.state = {
			refs: ['FI', 'GS', 'NPA', 'PCF']
		};

		this.state.refs.forEach((elem) => {
			self.state[elem] = '';
		});
	}

	componentDidMount () {
		const refFI = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/logo/LogoFI.jpg');
		const refGS = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/logo/LogoG.png');
		const refNPA = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/logo/LogoNPAv2.jpg');
		const refPCF = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/logo/LogoPCF.png');

		refFI.getDownloadURL().then(url => this.setState({'FI': url}));
		refGS.getDownloadURL().then(url => this.setState({'GS': url}));
		refNPA.getDownloadURL().then(url => this.setState({'NPA': url}));
		refPCF.getDownloadURL().then(url => this.setState({'PCF': url}));
	}

	render () {
		return (
			<div className="Logos">
				<div className="Page__title">
					<h1>Ils feront la fête à Macron !</h1>
				</div>
				<div className="logos">
					{
						Object.keys(this.state.refs).map((ref) => (
							<div className="logo">
								<img src={this.state[`${ref}`]}/>
								{/*<a className="md-btn md-btn-raised" href={this.state[`${ref}pdf`]}
								   download="rmc" target="_blank">Télécharger</a>*/}
							</div>
						))
					}
				</div>
			</div>
		);
	}
}

export default Logos;

