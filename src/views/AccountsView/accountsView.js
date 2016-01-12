import React from 'react'
import Rebase from 're-base'
import { History } from 'react-router'

var base = Rebase.createClass('https://xpressdesign.firebaseio.com/');
const AccountsView = React.createClass({
	mixins: [ History ],
	getInitialState(){
		return(
			this.state = {
				roles: [],
				users:[]
			}
		)

	},
	componentDidMount(){
		this.getRoles()
		this.getUsers();

	},
	componentWillUnmount(){
		base.removeBinding(this.userRef);
	},
	clearFields(){
				this.refs.name.value = '';
				this.refs.organization.value = '';
				this.refs.email.value = '';
				this.refs.password.value = '';
	},
	userHandler(error, userData){
		console.log(userData.uid)

		let location = 'users/'+userData.uid;
		this.createUser = base.post(location,{
			data: {
				name:this.refs.name.value,
				organization: this.refs.organization.value
			}
		});
	},
	getRoles(){
		this.users = base.fetch('userRoles',{
			context: this,
			asArray: true,
			then(data){
				this.setState({
					roles:data
				})
			}
		});
	},
	getUsers(){
		this.userRef = base.syncState(`users`, {
			context: this,
			state: 'users',
			asArray: true
		});
	},
	createUser(){
		this.ref = base.createUser({
		email: this.refs.email.value,
		password: this.refs.password.value
		}, this.userHandler);
	},
	roleOptions(item, index) {
		return <option  key={index }>{item}</option>;
	},
	render() {
			return (
				<div className="col-md-12">
					<div>
				    <div className="page-header">
				      <h1 className="page-title">Accounts</h1>
				    </div>
					</div>
					<div className="col-md-5">
						<div className="form-group">
							<input type="text" className="form-control" ref="email" placeholder="email" />
						</div>
						<div className="form-group">
							<input type="password" className="form-control" ref="password" placeholder="password" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" ref="name" placeholder="name" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" ref="organization" placeholder="organization" />
						</div>
						<select className="form-control">
							{this.state.roles.map(this.roleOptions)}
						</select>
						<br />
						<button className="btn btn-success" onClick={this.createUser}>Create User </button>
					</div>
					<div className="col-md-6 col-md-offset-1">
						<ul className="list-group">
							{this.state.users.map((item, index) => {
								return <li className="list-group-item" key={index} >
									{item.name}
								</li>;
							})}
						</ul>
					</div>
				</div>
			)
		}
});

export default AccountsView;