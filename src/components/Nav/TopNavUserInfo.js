import React, {Component} from 'react'

class TopNavUserInfo extends Component {
	render () {
		  return (
			<ul className='nav navbar-toolbar navbar-right navbar-toolbar-right'>
						<li className="dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" data-animation="scale-up"
							aria-expanded="false" role="button">
							<span className="flag-icon flag-icon-us"></span>
							</a>
							<ul className="dropdown-menu" role="menu">
							<li role="presentation">
								<a href="javascript:void(0)" role="menuitem">
								<span className="flag-icon flag-icon-gb"></span> English</a>
							</li>
							<li role="presentation">
								<a href="javascript:void(0)" role="menuitem">
								<span className="flag-icon flag-icon-fr"></span> French</a>
							</li>
							<li role="presentation">
								<a href="javascript:void(0)" role="menuitem">
								<span className="flag-icon flag-icon-cn"></span> Chinese</a>
							</li>
							<li role="presentation">
								<a href="javascript:void(0)" role="menuitem">
								<span className="flag-icon flag-icon-de"></span> German</a>
							</li>
							<li role="presentation">
								<a href="javascript:void(0)" role="menuitem">
								<span className="flag-icon flag-icon-nl"></span> Dutch</a>
							</li>
							</ul>
						</li>
						<li className="dropdown">
							<a className="navbar-avatar dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false"
							data-animation="scale-up" role="button">
							<span className="avatar avatar-online">
								<span>{this.props.user}</span>
								<i></i>
							</span>
							</a>
							<ul className="dropdown-menu" role="menu">
							<li role="presentation">
								<a href="javascript:void(0)" role="menuitem"><i className="icon wb-user" aria-hidden="true"></i> Profile</a>
							</li>
							<li role="presentation">
								<a href="javascript:void(0)" role="menuitem"><i className="icon wb-payment" aria-hidden="true"></i> Billing</a>
							</li>
							<li role="presentation">
								<a href="javascript:void(0)" role="menuitem"><i className="icon wb-settings" aria-hidden="true"></i> Settings</a>
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
							<span className="badge badge-danger up">5</span>
							</a>
							<ul className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
							<li className="dropdown-menu-header" role="presentation">
								<h5>NOTIFICATIONS</h5>
								<span className="label label-round label-danger">New 5</span>
							</li>
							<li className="list-group" role="presentation">
								<div data-role="container">
								<div data-role="content">
									<a className="list-group-item" href="javascript:void(0)" role="menuitem">
									<div className="media">
										<div className="media-left padding-right-10">
										<i className="icon wb-order bg-red-600 white icon-circle" aria-hidden="true"></i>
										</div>
										<div className="media-body">
										<h6 className="media-heading">A new order has been placed</h6>
										<time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">5 hours ago</time>
										</div>
									</div>
									</a>
									<a className="list-group-item" href="javascript:void(0)" role="menuitem">
									<div className="media">
										<div className="media-left padding-right-10">
										<i className="icon wb-user bg-green-600 white icon-circle" aria-hidden="true"></i>
										</div>
										<div className="media-body">
										<h6 className="media-heading">Completed the task</h6>
										<time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">2 days ago</time>
										</div>
									</div>
									</a>
									<a className="list-group-item" href="javascript:void(0)" role="menuitem">
									<div className="media">
										<div className="media-left padding-right-10">
										<i className="icon wb-settings bg-red-600 white icon-circle" aria-hidden="true"></i>
										</div>
										<div className="media-body">
										<h6 className="media-heading">Settings updated</h6>
										<time className="media-meta" dateTime="2015-06-11T14:05:00+08:00">2 days ago</time>
										</div>
									</div>
									</a>
									<a className="list-group-item" href="javascript:void(0)" role="menuitem">
									<div className="media">
										<div className="media-left padding-right-10">
										<i className="icon wb-calendar bg-blue-600 white icon-circle" aria-hidden="true"></i>
										</div>
										<div className="media-body">
										<h6 className="media-heading">Event started</h6>
										<time className="media-meta" dateTime="2015-06-10T13:50:18+08:00">3 days ago</time>
										</div>
									</div>
									</a>
									<a className="list-group-item" href="javascript:void(0)" role="menuitem">
									<div className="media">
										<div className="media-left padding-right-10">
										<i className="icon wb-chat bg-orange-600 white icon-circle" aria-hidden="true"></i>
										</div>
										<div className="media-body">
										<h6 className="media-heading">Message received</h6>
										<time className="media-meta" dateTime="2015-06-10T12:34:48+08:00">3 days ago</time>
										</div>
									</div>
									</a>
								</div>
								</div>
							</li>
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
						<li className="dropdown">
							<a data-toggle="dropdown" href="javascript:void(0)" title="Messages" aria-expanded="false"
							data-animation="scale-up" role="button">
							<i className="icon wb-envelope" aria-hidden="true"></i>
							<span className="badge badge-info up">3</span>
							</a>
							<ul className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
							<li className="dropdown-menu-header" role="presentation">
							{this.props.user}
								<span onClick={this.props.logout} classNameName="btn btn-danger btn-small">Logout</span>

								<span className="label label-round label-info">New 3</span>
							</li>
							<li className="list-group" role="presentation">
								<div data-role="container">
								<div data-role="content">
									<a className="list-group-item" href="javascript:void(0)" role="menuitem">
									<div className="media">
										<div className="media-left padding-right-10">
										<span className="avatar avatar-sm avatar-online">
											<img src="" alt="..." />
											<i></i>
										</span>
										</div>
										<div className="media-body">
										<h6 className="media-heading">Mary Adams</h6>
										<div className="media-meta">
											<time dateTime="2015-06-17T20:22:05+08:00">30 minutes ago</time>
										</div>
										<div className="media-detail">Anyways, i would like just do it</div>
										</div>
									</div>
									</a>
									<a className="list-group-item" href="javascript:void(0)" role="menuitem">
									<div className="media">
										<div className="media-left padding-right-10">
										<span className="avatar avatar-sm avatar-off">
											<img src="" alt="..." />
											<i></i>
										</span>
										</div>
										<div className="media-body">
										<h6 className="media-heading">Caleb Richards</h6>
										<div className="media-meta">
											<time dateTime="2015-06-17T12:30:30+08:00">12 hours ago</time>
										</div>
										<div className="media-detail">I checheck the document. But there seems</div>
										</div>
									</div>
									</a>
									<a className="list-group-item" href="javascript:void(0)" role="menuitem">
									<div className="media">
										<div className="media-left padding-right-10">
										<span className="avatar avatar-sm avatar-busy">
											<img src="" alt="..." />
											<i></i>
										</span>
										</div>
										<div className="media-body">
										<h6 className="media-heading">June Lane</h6>
										<div className="media-meta">
											<time dateTime="2015-06-16T18:38:40+08:00">2 days ago</time>
										</div>
										<div className="media-detail">Lorem ipsum Id consectetur et minim</div>
										</div>
									</div>
									</a>
									<a className="list-group-item" href="javascript:void(0)" role="menuitem">
									<div className="media">
										<div className="media-left padding-right-10">
										<span className="avatar avatar-sm avatar-away">
											<img src="" alt="..." />
											<i></i>
										</span>
										</div>
										<div className="media-body">
										<h6 className="media-heading">Edward Fletcher</h6>
										<div className="media-meta">
											<time dateTime="2015-06-15T20:34:48+08:00">3 days ago</time>
										</div>
										<div className="media-detail">Dolor et irure cupidatat commodo nostrud nostrud.</div>
										</div>
									</div>
									</a>
								</div>
								</div>
							</li>
							<li className="dropdown-menu-footer" role="presentation">
								<a className="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
								<i className="icon wb-settings" aria-hidden="true"></i>
								</a>
								<a href="javascript:void(0)" role="menuitem">
									See all messages
								</a>
							</li>
							</ul>
						</li>
						<li id="toggleChat">
							<a data-toggle="site-sidebar" href="javascript:void(0)" title="Chat" data-url="site-sidebar.tpl">
							<i className="icon wb-chat" aria-hidden="true"></i>
							</a>
						</li>
						</ul>
		)
	}
}

export default TopNavUserInfo
