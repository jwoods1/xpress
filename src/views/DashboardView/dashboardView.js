import React, {Component} from 'react'
import {base, parse} from '../../redux/utils/firebaseUtil'
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
	render() {
			return (
				<div>
					<OverView user={this.state.user}/>
				</div>
			)
		}
};

export default DashboardView;
