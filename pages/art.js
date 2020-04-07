import React from 'react';
import styled from 'styled-components';

import Article from '../components/Article';

import md from '../markdown/一份毫无用处的webpack参考文档.md';
//import md from '../markdown/一点都不平坦的软件设计师.md';


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
		@media (max-width: 500px) {
				height: 12rem;
		}
	`;

	render() {
		return (
		<div>
			<this.Blank />
			<Article { ...this.postInfo } />
		</div>
		)
	}
}

export default Post;