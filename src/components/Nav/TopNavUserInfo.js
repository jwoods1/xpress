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
						<li className="dropdown">
							<a data-toggle="dropdown" href="javascript:void(0)" title="Notifications" aria-expanded="false"
							data-animation="scale-up" role="button">
							<i className="icon wb-bell" aria-hidden="true"></i>
							<span className="badge badge-danger up">{this.props.newNotify}</span>
							</a>
							<ul className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
								<li className="dropdown-menu-header" role="presentation">
									<h5>NOTIFICATIONS</h5>
									<span className="label label-round label-danger">{this.props.newNotify}</span>
								</li>
								<NotifyWidget icon={this.props.notifyIcon} text={this.props.notifyText} time={this.props.notifyTime} newNotify={this.props.newNotify} />
								<li className="dropdown-menu-footer" role="presentation">
					        <a className="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
					        <i className="icon wb-settings" aria-hidden="true"></i>
					        </a>
					        <a href="javascript:void(0)" role="menuitem">
					          All notifications
					        </a>
					      </li>
							</ul>
						</li>
						</ul>
		)
	}
}

export default TopNavUserInfo
