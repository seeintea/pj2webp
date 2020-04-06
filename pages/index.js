import Header from '../components/Header';
import Footer from '../components/Footer';
import Slogan from '../components/Slogan';
import List from '../components/List';
import config from '../web.config';

import '../static/scss/normalize.scss';
import '../static/scss/extra.scss'

import React from 'react';
import Head from 'next/head';

class Main extends React.Component {
	render() {
		return (
		<div>
			<Head>
				<title>{config.header.title}</title>
			</Head>
			<Header {...(config.header)}/>
			<Slogan />
			<List />
			<Footer { ...(config.footer)} />
		</div>
		)
	}
}

export default Main;