//import authDataCallback from '../../util/userStatus'
import React from 'react'
import TopNavUserInfo from './topNavUserInfo'


const TopNav = React.createClass({

	render() {
			return (
				 <nav className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega" role="navigation">
					<div className="navbar-header">
					<button type="button" className="navbar-toggle hamburger hamburger-close navbar-toggle-left hided"
					data-toggle="menubar">
						<span className="sr-only">Toggle navigation</span>
						<span className="hamburger-bar"></span>
					</button>
					<button type="button" className="navbar-toggle collapsed" data-target="#site-navbar-collapse"
					data-toggle="collapse">
						<i className="icon wb-more-horizontal" aria-hidden="true"></i>
					</button>
					<div className="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
						<img className="navbar-brand-logo img-responsive" src="logo.png" title="Xpress" />
					</div>
					<button type="button" className="navbar-toggle collapsed" data-target="#site-navbar-search"
					data-toggle="collapse">
						<span className="sr-only">Toggle Search</span>
						<i className="icon wb-search" aria-hidden="true"></i>
					</button>
					</div>
					<div className="navbar-container container-fluid">
					<div className="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
						<ul className="nav navbar-toolbar">
						<li className="hidden-float" id="toggleMenubar">
							<a data-toggle="menubar" href="#" role="button">
							<i id="nav-icon"className="icon hamburger hamburger-arrow-left">
								<span className="sr-only">Toggle menubar</span>
								<span className="hamburger-bar"></span>
								</i>
							</a>
						</li>
						<li className="hidden-float">
							<a className="icon wb-search" data-toggle="collapse" href="#" data-target="#site-navbar-search"
							role="button">
							<span className="sr-only">Toggle Search</span>
							</a>
						</li>
						</ul>
						<TopNavUserInfo avatar="http://lorempixel.com/50/50/" logout={this.props.logout}/>
					</div>
					<div className="collapse navbar-search-overlap" id="site-navbar-search">
						<form role="search">
						<div className="form-group">
							<div className="input-search">
							<i className="input-search-icon wb-search" aria-hidden="true"></i>
							<input type="text" className="form-control" name="site-search" placeholder="Search..." />
							<button type="button" className="input-search-close icon wb-close" data-target="#site-navbar-search"
							data-toggle="collapse" aria-label="Close"></button>
							</div>
						</div>
						</form>
					</div>
					</div>
				</nav>

			)
		}
});

export default TopNav;
