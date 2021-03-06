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
import '../../../Libs/fonts/web-icons/web-icons.css'
import '../../../Libs/styles/DashboardLayout.scss'




import {base, parse} from '../../redux/utils/firebaseUtil'
import { History } from 'react-router'
import TopNav from '../../components/Nav/TopNav'
import SideNav from '../../containers/Dashboard/SideNav'
import OverView from '../../containers/Dashboard/OverView'
import moment from 'moment'


const DashboardLayout = React.createClass({
	mixins: [ History ],

	getInitialState(){
		return {user:'no user',
				role:'',
			actCount:0};
	},
	componentDidMount(){
		this.getUserStatus();
		Breakpoints();
		Site.run();
		this.getActivitiesCount()
	},
	componentWillUnmount(){
		base.removeBinding(this.act);
  },
	logout(){
		base.unauth();
		this.history.pushState(null, '/login')
	},
	getUserStatus(){
		this.userId = base.getAuth();
		console.log(this.userId.uid);
		if(!this.userId){
			this.history.pushState(null, '/login')
		}else{
			base.fetch('users/'+this.userId.uid,{
				context: this,
				asArray: false,
				then(data){
					this.setState({
						user:data,
						role:data.role,
						id:this.userId.uid
					})
				}
			});
		}
	},
	getActivitiesCount(){
		var past = moment().subtract(1, 'days');
		this.act = base.listenTo('activities', {
					context: this,
					asArray:true,
					then(data){
						let currentActivies = data.filter((i) => {
				      return moment(i.timeStamp).isAfter(past)
				    });
						this.setState({
							actCount:currentActivies.length
						})
					}
		})
	},
	render() {
			return (
				<div className="dashboard">
					<TopNav user={this.state.user} logout={this.logout}/>
					<SideNav role={this.state.role} count={this.state.actCount}/>
					<div className="page animsition">
					{this.props.children}
					</div>
				</div>
			)
		}
});

export default DashboardLayout;
