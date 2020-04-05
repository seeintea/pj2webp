import React from 'react';
import config from '../web.config';
import svgIcon from '../static/extra/svg_icons.svg';

class Slider extends React.Component {




	render() {
		return (
			<div className='slider'>
				<div className='warp'>
					<div className='control'>
						<div className='title'>{config.slider.title}</div>
						<div className='close'>
							<svg className='icon'>
								<use xmlns="http://www.w3.org/2000/svg" xlinkHref={svgIcon + '#etapes_close'}></use>
							</svg>
						</div>
					</div>
					<div className='channels'>

					</div>
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