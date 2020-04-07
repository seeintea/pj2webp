import React from 'react';
import styled from 'styled-components';
import getMarkdownText from '../utils/marked';
import svgIcon from '../static/extra/svg_icons.svg'
import '../static/scss/markdown.scss';

class Article extends React.Component {

	constructor(props){
		super(props)
	}

	Warp = styled.div`
		padding: 6rem 4rem;
    max-width: 60rem;
		background-color: #fff;
		box-shadow: 0px 10px 20px rgba(1,1,1,0.1);
		border-radius: 0.3rem 0.3rem 0 0;
		margin: -7rem auto 0;
		@media (max-width: 500px) {
			border-radius: 0;
			padding: 1.1rem;
		}
	`;

	ArtTitle = styled.div`
		color: #77af9c;
		max-width: 45rem;
		text-align: center;
		font-size: 2.1rem;
		font-weight: bold;
		margin: 0 auto 2.1rem;
	`;

	ArtInfo = styled.div`
		display: flex;
		height: 1.5rem;
		line-height: 1.5rem;
		max-width: 45rem;
		margin: 0 auto;
		justify-content: center;
		font-size: 0.9rem;
		cursor: default;
		color: #666;
		& svg {
			width: 1rem;
			height: 1rem;
			margin: 0 1px -3px 0;
		}
		& div {
			margin: 0 0.5rem;
		}
		& .dp {
			display: none;
		}
	`;

	Content = styled.div`
		max-width: 45rem;
		margin: 0 auto;
		& p{
			font-size: .9rem;
		}
	`;

	render() {
		return (
			<this.Warp>
				<this.ArtTitle>{ this.props.title }</this.ArtTitle>
				<this.ArtInfo>
					<div className= { this.props.date === '' ? 'dp' : '' } >
						<svg>
							<use xmlns="http://www.w3.org/2000/svg" xlinkHref={svgIcon + '#etapes_post'}></use>
						</svg>
						{ this.props.date }
					</div>
					<div className= { this.props.classity === '' ? 'dp' : '' } >
						<svg>
							<use xmlns="http://www.w3.org/2000/svg" xlinkHref={svgIcon + '#etapes_tag'}></use>
						</svg>
						{ this.props.classity }
					</div>
				</this.ArtInfo>
				<this.Content className='markdown-body' dangerouslySetInnerHTML={getMarkdownText(this.props.input)}>
				</this.Content>
			</this.Warp>
		)
	}
}

export default Article
