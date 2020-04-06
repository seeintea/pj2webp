import React from 'react';
import styled from 'styled-components';
import config from '../web.config';
import svgIcon from '../static/extra/svg_icons.svg';

import avatar from '../static/extra/avatar.jpg';

class Slider extends React.Component {

	constructor(props) {
		super(props);
		this.state = config.slider;
	}

	childMenuClick = ()=>{
		this.props.actMenu();
	}

	Icon = styled.div`
		width: 48px;
		height: 48px;
		margin: 5px;
		display: inline-block;
		&:hover {
			opacity: 0.5;
		}
	`;

	IconSvg = styled.svg`
		width: 48px;
		height: 48px;
	`;

	Channels = styled.div`
		padding: 0 25px;
		& p {
			font-size: 1.5rem;
			font-weight: bold;
			color: #77AF9C;
		}
		& .avatar {
			display: flex;
		}
		& .avatar img {
			width: 90px;
			height: 90px;
			margin: 0 15px 0 0;
		}
		& .avatar span {
			display: inline-block;
			height: 90px;
			line-height: 90px;
			font-size: .8rem;
		}
		& .description {
			font-size: 0.8rem;
    	text-indent: 1.5rem;
		}
	`;

	Contact = styled.div`
		padding: 0 25px;
		& p {
			font-size: 1.5rem;
			font-weight: bold;
			color: #77AF9C;
		}
	`; 

	render() {

		if(!this.props.open) {
			return <div></div>;
		}

		return (
			<div className='slider'>
				<div className='warp'>
					<div className='control'>
						<div className='title'>{config.slider.title}</div>
						<div className='close' onClick={this.childMenuClick}>
							<svg className='icon'>
								<use xmlns="http://www.w3.org/2000/svg" xlinkHref={svgIcon + '#etapes_close'}></use>
							</svg>
						</div>
					</div>
					<this.Channels>
						<p>About Me</p>
						<div className='personal'>
							<div className='avatar'>
								<img src={this.state.avatar || avatar} alt='avatar'/>
								<span>{ this.state.description_sub || '底层码农 热心市民'}</span>
							</div>
							<div className='description'>{this.state.description}</div>
						</div>
					</this.Channels>

					<this.Contact>
						<p>Contact Me</p>
						{ 
							this.state.icons.map((val, idx)=>{
								return (
									<this.Icon key={idx}>
										<a href={ val.name === 'mail' ? 'mailto:' + val.link: val.link } target='_blank'>
											<this.IconSvg>
												<use xmlns='http://www.w3.org/2000/svg' xlinkHref={svgIcon + val.icon}></use>
											</this.IconSvg>
										</a>
									</this.Icon>
								)
							}) 
						}	
					</this.Contact>
				</div>
				<style jsx>{`
					.slider {
						width: 100%;
						height: 100vh;
						position: fixed;
						top: 0;
						background-color: rgba(0,0,0,0.5);
					}
					.warp {
						width: 400px;
						height: 100%;
						position: fixed;
						right: 0;
						background-color: #fff;
					}
					.control {
						width: 100%;
						height: 80px;
						background: #285943;
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 0 25px;
						box-sizing: border-box;
					}
					.control .title {
						font-size: 1.5rem;
						font-weight: bold;
						color: #fff;
					}
					.control .close {
						width: 38px;
						height: 38px;
						line-height: 40px;
						text-align: center;
						cursor: pointer;
					}
					.control .close:hover {
						background-color: rgba(255,255,255,0.1)
					}
					.close .icon {
						width: 14px;
						height: 14px;
						fill: #fff;
					}
				`}</style>
			</div>
		)
	}
}

export default Slider