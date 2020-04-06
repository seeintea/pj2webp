import Header from '../components/Header';
import Footer from '../components/Footer';
import Article from '../components/Article';

import config from '../web.config';

import React from 'react';
import styled from 'styled-components';

import '../static/scss/normalize.scss';
import '../static/scss/extra.scss'

import md from '../markdown/一份毫无用处的webpack参考文档.md';


class Post extends React.Component {

	postInfo = {
		input: md,
		title: '一份毫无用处的webpack参考文档',
		date: '2020-4-6',
		classity: '前端'
	}

	Blank = styled.div`
		height: 15rem;
		background-color: #285943;
	`;

	render() {
		return (
		<div>
			<Header {...(config.header)}/>
			<this.Blank />
			<Article { ...this.postInfo } />
			<Footer { ...(config.footer)} />
		</div>
		)
	}
}

export default Post;