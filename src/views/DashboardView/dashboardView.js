import React, {Component} from 'react'
import {base, parse, Ref} from '../../redux/utils/firebaseUtil'
import OverView from '../../containers/Dashboard/OverView'
import moment from 'moment'
class DashboardView extends Component{
	constructor(props){
		super(props)
		this.state={
			user:{},
			userId:"",
			activities:[]
		}
	}
	componentDidMount(){
		this.getUserStatus()
		this.getActivities()
		console.log(this.state);
	}
	componentWillUnmount(){
		base.removeBinding(this.act);
	}
	getUserStatus(){
		this.ref = base.getAuth();
		if(!this.ref){
			this.history.pushState(null, '/login')
		}else{
			this.userData = base.fetch('users/'+this.ref.uid,{
				context: this,
				asArray: false,
				then(data){
					this.setState({
						user:data,
						userId:this.ref.uid
					})
				}
			});
		}
	}
	getActivities(){
		this.act = base.bindToState('activities', {
					context: this,
					asArray:true,
					state:'activities'
		})
	}
	render() {
		var past = moment().subtract(3, 'days');
		let currentActivies = this.state.activities.filter((i) => {
      return moment(i.timeStamp).isAfter(past)
    });
			return (
				<div>
					<OverView user={this.state.user} activities={currentActivies}/>
				</div>
			)
		}
};

export default DashboardView;
