import React, {Component} from 'react';
import Intro from "./../Intro/Intro";
import './Accueil.scss';

class Accueil extends Component {
    constructor (props) {
        super(props);
        this.state = props;
    }

	render () {
		return (

            <div className="Accueil">
                <Intro storage={this.state.storage} width={this.state.width}/>
            </div>
		);
	}
}

export default Accueil;

