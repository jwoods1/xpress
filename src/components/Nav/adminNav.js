import React, {Component} from 'react';
import {Link } from 'react-router'

class SideNav extends Component {
	render() {
		return (
			<ul className="site-menu">
				<li className="site-menu-category">General</li>
				<li className="site-menu-item ">
					<Link to={'/dashboard'}>
						<i className="site-menu-icon wb-dashboard" aria-hidden="true"></i>
						<span className="site-menu-title">Dashboard</span>
						<div className="site-menu-badge">
						<span className="badge badge-success">3</span>
						</div>
					</Link>
				</li>
				<li className="site-menu-item">
					<Link to={'/accounts'}>
						<i className="site-menu-icon wb-layout" aria-hidden="true"></i>
						<span className="site-menu-title">Accounts</span>
						<span className="site-menu-arrow"></span>
					</Link>
				</li>

				<li className="site-menu-item has-sub">
				<Link to={'/projects'}>
					<i className="site-menu-icon wb-pie-chart" aria-hidden="true"></i>
					<span className="site-menu-title">Manage Projects</span>
					<span className="site-menu-arrow"></span>
				</Link>
				</li>
			</ul>

		);
	}
}

export default SideNav;
