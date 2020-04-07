import React from 'react';
import styled from 'styled-components';
import ListChild from './ListChild';

import info from '../test.info';

class List extends React.Component {

	Warp = styled.div`
		padding: 6rem 4rem;
    max-width: 55rem;
		background-color: #fff;
		box-shadow: 0px 10px 20px rgba(1,1,1,0.1);
		border-radius: 0.3rem 0.3rem 0 0;
		margin: -7rem auto 0;
		@media (max-width: 500px) {
			margin: auto;
			padding: 1rem;
			border-radius: 0;
		}
	`;
	Tip = styled.div`
		max-width: 100%;
		text-align: center;
		font-size: 1rem;
		color: #999;
		cursor: default;
	`;

	render() {
		return (
			<this.Warp>
				<this.Tip>LATEST</this.Tip>
				<ListChild {...info.md_2} />
				<ListChild {...info.md_1} />
			</this.Warp>
		)
	}

}

export default List