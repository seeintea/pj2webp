import React from 'react';

class Footer extends React.Component {
	constructor(props){
		super(props);
	}

	getICPInfo() {
		if(this.props.icp !== undefined){
			return this.props.icp;
		}
	}

	render() {
		return (
			<footer>
				<a className='icp-link' href='http://www.beian.miit.gov.cn' target='_blank'>{ this.getICPInfo() }</a>
				<div>
					<p>Power By </p>
					<a href='https://github.com/gdroof/etapes' target='_blank'>Etapes</a>
				</div>
				<div>
					<p>©2020 GLW</p>
				</div>
				<style jsx>{`
					footer {
						color: #aaa;
						display: flex;
						flex-direction: column;
						align-items: center;
					}
					div {
						padding: 5px 0 0 0;
					}
					a {
						font-size: 14px;
						color: #77AF9C;
						padding: 0 5px;
					}
					p {
						display: inline;
						font-size: 14px;
					}
					.icp-link {
						color: #aaa;
					}
				`}</style>
		</footer>
		)
	}
	
}

export default Footer