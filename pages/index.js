import '../static/scss/normalize.scss';
import '../static/scss/extra.scss'

import Header from '../components/Header';
import Footer from '../components/Footer';
import config from '../web.config';

import React from 'react';

class App extends React.Component {
	render() {
		return (
		<div>
			<Header {...(config.header)}/>
			<p>hello next.js + scss</p>
			<Footer { ...(config.footer)} />
		</div>
		)
	}
}

export default App;