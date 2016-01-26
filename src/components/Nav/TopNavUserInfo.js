import React, {Component} from 'react'
import {Link} from 'react-router'
import NotifyWidget from 'components/Nav/notifyWidget'
class TopNavUserInfo extends Component {
	render () {
		  return (
			<ul className='nav navbar-toolbar navbar-right navbar-toolbar-right'>
						<li className="dropdown">
							<a className="navbar-avatar dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false"
							data-animation="scale-up" role="button">
							<span className="avatar avatar-online">
								<img src={this.props.avatar} />
								<i></i>
							</span>
							</a>
							<ul className="dropdown-menu" role="menu">
							<li role="presentation">
								<Link to="/profile"><i className="icon wb-user" aria-hidden="true"></i> Profile Settings</Link>
							</li>
							<li className="divider" role="presentation"></li>
							<li role="presentation">
								<a onClick={this.props.logout} role="menuitem"><i className="icon wb-power" aria-hidden="true"></i> Logout</a>
							</li>
							</ul>
						</li>
						</ul>
		)
	}
}

export default TopNavUserInfo
