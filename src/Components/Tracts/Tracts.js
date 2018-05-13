import React, {Component} from 'react';
import '../Media/Media.scss';

class Tracts extends Component {

	constructor (props) {
		super(props);
		this.state = {
			T26M1: '',
			T26M1A: '',
			T26M1B: '',
		};
	}

	componentDidMount () {
		const refT26M1jpg  = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T26M1.pdf');
		const refT26M1Apng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T26M1A.png');
		const refT26M1Bpng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T26M1B.png');

		refT26M1jpg.getDownloadURL().then(url => this.setState({T26M1: url}));
		refT26M1Apng.getDownloadURL().then(url => this.setState({T26M1A: url}));
		refT26M1Bpng.getDownloadURL().then(url => this.setState({T26M1B: url}));
	}

	render () {
		return (
			<div className="Media">
				<div className="Page__title">
					<h1>Téléchargez vos Tracts</h1>
				</div>
				<div className="affiches">
					<div className="affiche">
						<img src={this.state.T26M1A}/>
						<img src={this.state.T26M1B}/>
						<a className="md-btn md-btn-raised" href={this.state.T26M1}
						   download="rmc" target="_blank">télécharger</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Tracts;

