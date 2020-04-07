import React from 'react';
import Head from 'next/head';

import Slogan from '../components/Slogan';
import List from '../components/List';

import config from '../web.config';

class Main extends React.Component {
	render() {
		return (
		<div>
			<Head>
				<title>{config.header.title}</title>
			</Head>
			<Slogan/>
			<List/>
		</div>
		)
	}
}

export default Main