import Link from 'next/link';
import Slider from '../components/Slider';
import svgIcon from '../static/extra/svg_icons.svg';

class Header extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			menu: false
		}
	}

	actMenuClick = () => {
		const status = !this.state.menu;
		this.setState({
			menu: status
		})
	}

	render() {
		return(
			<header className='active'>
				<div className='warp'>
					<Link href="/">
						<a>{this.props.title}</a>
					</Link>
					<div className='menu' onClick={this.actMenuClick}>
						<svg className='icon'>
							<use xmlns="http://www.w3.org/2000/svg" xlinkHref={svgIcon + '#etapes_menu'}></use>
						</svg>
					</div>
				</div>
				<Slider open={this.state.menu} actMenu={this.actMenuClick} />
				<div className={ this.state.menu ? 'curtain' : '' }></div>
				<style jsx>{`
					header {
						width: 100%;
						height: 80px;
						position: fixed;
						top: 0;
						z-index: 1;
						background: #285943;
					}
					.active {
						box-shadow: 0 0 1px 1px rgba(0,0,0,0.3);
					}
					.warp {
						height: 100%;
						padding: 0 20px;
						display: flex;
						align-items: center;
						justify-content: space-between;
					}
					.warp a {
						font-size: 1.5rem;
						font-weight: bold;
						color: #fff;
						padding: 0 15px;
					}
					.menu {
						width: 38px;
						height: 38px;
						line-height: 40px;
						text-align: center;
						cursor: pointer;
					}
					.menu:hover {
						background-color: rgba(255,255,255,0.1)
					}
					.menu .icon {
						width: 14px;
						height: 14px;
						fill: #fff;
					}
					.curtain {
						width: 100%;
						height: 100vh;
						position: fixed;
						top: 0;
						z-index: 2;
						background-color: rgba(0,0,0,0.5);
					}
				`}</style>
			</header>
		)
	}
}

export default Header