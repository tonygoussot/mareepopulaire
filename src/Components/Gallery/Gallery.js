import React, {Component} from "react";
import './Gallery.scss';
import FullScreenImage from "../FullScreenImage/FullScreenImage";

class Gallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			images: this.props.images,
			fullScreenImage: null
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({images: nextProps.images});
	}

	fullScreen(image) {
		this.setState({fullScreenImage: image});
	}

	closedFullScreen() {
		this.setState({fullScreenImage: null});
	}

	render() {
		return (
			<div>
				<div className="Gallery">
					{this.state.images.map((image, index) => (
						<img key={index}
							 className="Gallery__image"
							 src={image.thumbnailUrl} style={{width: image.thumbnailWidth, height: image.thumbnailHeight}}
							 onClick={this.fullScreen.bind(this, image)}
						/>
					))}
				</div>
				<FullScreenImage image={this.state.fullScreenImage} closedFullScreen={() => this.closedFullScreen()}/>
			</div>

		);
	}
}

export default Gallery;