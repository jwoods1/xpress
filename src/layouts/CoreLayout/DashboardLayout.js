import React from 'react'

import '../../../Libs/styles/bootstrap.css'
import '../../../Libs/styles/bootstrap-extend.css'
import '../../../Libs/styles/site.css'
import '../../../Libs/scripts/bootstrap.js'
import '../../../Libs/global/vendor/breakpoints/breakpoints.js'
import '../../../Libs/global/vendor/animsition/animsition.js'
import '../../../Libs/global/vendor/asscroll/jquery-asScroll.js'
import '../../../Libs/global/vendor/mousewheel/jquery.mousewheel.js'
import '../../../Libs/global/vendor/asscrollable/jquery.asScrollable.all.js'
import '../../../Libs/global/vendor/ashoverscroll/jquery-asHoverScroll.js'
import '../../../Libs/global/core.js'
import '../../../Libs/global/site.js'
import '../../../Libs/global/sections/menu.js'
import '../../../Libs/global/sections/menubar.js'
import '../../../Libs/global/v1.js'
import '../../../Libs/fonts/web-icons/web-icons.css'
import '../../../Libs/styles/DashboardLayout.scss'

Breakpoints();

import Rebase from 're-base'
import { History } from 'react-router'
import TopNav from '../../components/Nav/TopNav'
import SideNav from '../../containers/Dashboard/SideNav'
import OverView from '../../containers/Dashboard/OverView'


var base = Rebase.createClass('https://xpressdesign.firebaseio.com/');

const DashboardLayout = React.createClass({
	mixins: [ History ],

	getInitialState(){
		return {user:'no user',
				role:''};
	},
	onDrop(files){
		console.log('Received files: ', files);
	},
	componentDidMount(){
		this.getUserStatus();
	},
	logout(){
		this.ref = base.unauth();
		this.history.pushState(null, '/login')
	},
	getUserStatus(){
		this.ref = base.getAuth();
		if(!this.ref){
			this.history.pushState(null, '/login')
		}else{
			this.userData = base.fetch('users/'+this.ref.uid,{
				context: this,
				asArray: false,
				then(data){
					console.log(data);
					this.setState({
						user:data.name,
						role:data.role
					})
				}
			});
		}
	},
	render() {
			return (
				<div className="dashboard">
					<TopNav user={this.state.user} logout={this.logout}/>
					<SideNav role={this.state.role}/>
					<div className="page animsition">
					{this.props.children}
					</div>
				</div>
			)
		}
});

export default DashboardLayout;
