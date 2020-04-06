import React from 'react';
import styled from 'styled-components';
import ListChild from './ListChild';

import test from '../test.info';

const data = test.info;

class List extends React.Component {

	Warp = styled.div`
		padding: 6rem 4rem;
    max-width: 55rem;
		background-color: #fff;
		box-shadow: 0px 10px 20px rgba(1,1,1,0.1);
		border-radius: 0.3rem 0.3rem 0 0;
		margin: -7rem auto 0;
	`;
	Tip = styled.div`
		max-width: 100%;
		text-align: center;
		font-size: 1rem;
		color: #999;
	`;

	render() {
		return (
			<this.Warp>
				<this.Tip>LATEST</this.Tip>
				<ListChild { ...data } />
				<ListChild { ...data } />
				<ListChild { ...data } />
				<ListChild { ...data } />
			</this.Warp>
		)
	}

}

export default List