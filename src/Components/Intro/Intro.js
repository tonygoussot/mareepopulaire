import React, {Component} from 'react';
import './Intro.scss';

class Intro extends Component {
	constructor (props) {
		super(props);
		this.state = {
			imgPl: '',
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

		const plRef = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/poing-levé.jpg');

		plRef.getDownloadURL().then(url => this.setState({imgPl: url}));
	}

	render () {
		return (
			<div className="">

				<div className="col-one">
				</div>

			</div>
		);
	}
}

export default Intro;
