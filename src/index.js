import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.css';
import './index.scss';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

(function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js     = d.createElement(s);
	js.id  = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
