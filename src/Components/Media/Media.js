import React, {Component} from 'react';
import './Media.scss';

class Media extends Component {

	constructor (props) {
		super(props);
		this.state = {
			refs: [6, 7, 8, 9],
			'6png': '',
			'7png': '',
			'8png': '',
			'9png': '',
			'6pdf': '',
			'7pdf': '',
			'8pdf': '',
			'9pdf': ''
		};
	}

	componentDidMount () {

		const ref6png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 6.png');
		const ref7png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 7.png');
		const ref8png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 8.png');
		const ref9png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 9.png');

		const ref6pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 6.pdf');
		const ref7pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 7.pdf');
		const ref8pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 8.pdf');
		const ref9pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 9.pdf');

		ref6png.getDownloadURL().then(url => this.setState({'6png': url}));
		ref7png.getDownloadURL().then(url => this.setState({'7png': url}));
		ref8png.getDownloadURL().then(url => this.setState({'8png': url}));
		ref9png.getDownloadURL().then(url => this.setState({'9png': url}));

		ref6pdf.getDownloadURL().then(url => this.setState({'6pdf': url}));
		ref7pdf.getDownloadURL().then(url => this.setState({'7pdf': url}));
		ref8pdf.getDownloadURL().then(url => this.setState({'8pdf': url}));
		ref9pdf.getDownloadURL().then(url => this.setState({'9pdf': url}));
	}

	render () {
		return (
			<div className="Media">
				<div className="Page__title">
					<h1>Téléchargez vos affiches</h1>
					<p>Tous les fichiers proposés sont au format vectoriel - pdf</p>
				</div>
				<div className="affiches">
					{
						Object.values(this.state.refs).map((ref) => (
							<div className="affiche">
								<img src={this.state[`${ref}png`]}/>
								<a className="md-btn md-btn-raised" href={this.state[`${ref}pdf`]}
								   download="rmc" target="_blank">Télécharger</a>
							</div>
						))
					}
				</div>
			</div>
		);
	}
}

export default Media;
