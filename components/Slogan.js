import React from 'react';
import styled from 'styled-components';
import config from '../web.config';

class Slogan extends React.Component {

	SloganTag = styled.div`
		width: 100vw;
		height: 97vh;
		background-color: #285943;
		display: flex;
		justify-content: center;
    align-items: center;
		& p {
			color: #fff;
			font-size: 3.7rem;
			font-weight: bold;
			text-align: center;
			padding: 0 2.1rem;
			cursor: default;
			user-select:none;
		}
		& p:hover {
			text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
		}
		@media (max-width: 500px) {
			height: 100vh;
		}
		
	`;

	render() {
		return (
			<div>
				<this.SloganTag>
					<p>{ config.slogan.content }</p>
				</this.SloganTag>
			</div>
		)
	}

}

export default Slogan