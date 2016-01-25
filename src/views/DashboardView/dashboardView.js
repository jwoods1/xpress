import React, {Component} from 'react'
import {base, parse, Ref} from '../../redux/utils/firebaseUtil'
import OverView from '../../containers/Dashboard/OverView'

class DashboardView extends Component{
	constructor(props){
		super(props)
		this.state={
			user:{},
			userId:""
		}
	}
	componentDidMount(){
		this.getUserStatus()
		this.getActivities()
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
					console.log(data);
					this.setState({
						user:data,
						userId:this.ref.uid
					})
				}
			});
		}
	}
	getActivities(){
		base.fetch('projects', {
			context: this,
			asArray:true,
			queries:{
				orderByChild:'date'

			},
			then(data){
				console.log(data);
			}
		})
	}
	render() {

			return (
				<div>
					<OverView user={this.state.user}/>
				</div>
			)
		}
};

export default DashboardView;
