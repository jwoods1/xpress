import React from 'react'
import {base} from '../../redux/utils/firebaseUtil'
import { History } from 'react-router'
import UserList from 'components/Auth/UserList'
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

				console.log(this.state.users);

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
	createUserAccount(){
		this.ref = base.createUser({
		email: this.refs.email.value,
		password: this.refs.password.value
		}, this.userHandler);
	},
	removeUser(key){
		alert("This will remove a user "+ key.name + ". Still a work in progress");
	 console.log(key);
	},
	editUser(key){
		alert("This will edit a user "+ key.name + ". Still a work in progress");
		console.log(key);
	},
	userHandler(error, userData){
		let location = 'users/'+userData.uid;
		this.createUser = base.post(location,{
			data: {
				name:this.refs.name.value,
				organization: this.refs.organization.value,
				role: this.refs.role.value,
				avatar:"https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-128.png"
			}
		});

	},
	roleOptions(item, index) {
		return <option  key={index } >{item}</option>;
	},
	render() {
			return (
				<div className="col-md-12">
					<div className="panel">
						<div className="panel-body nav-tabs-animate">
							<ul className="nav nav-tabs nav-tabs-line" data-plugin="nav-tabs" role="tablist">
								<li className="active" role="presentation"><a data-toggle="tab" href="#AddAccount" aria-controls="AddAccount"
									role="tab">Add Account </a></li>
									<li  role="presentation"><a data-toggle="tab" href="#Managment" aria-controls="Managment"
										role="tab">User Managment</a></li>
							</ul>

							<div className="tab-content">
								<div className="tab-pane active animation-slide-left" id="AddAccount" role="tabpanel">
									<div className="page-header">
							      <h1 className="page-title">Create Accounts</h1>
							    </div>
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
									<select className="form-control" ref="role">
										{this.state.roles.map(this.roleOptions)}
									</select>
									<br />
									<button className="btn btn-success" onClick={this.createUserAccount}>Create User </button>
									<button className="btn" onClick={this.clearFields}>Clear</button>
								</div>
								<div className="tab-pane animation-slide-left" id="Managment" role="tabpanel">
									<h2>User Accounts</h2>
									<table className="table">
										<thead>
											<tr>
												<th>
													Name
												</th>
												<th>
													Organization
												</th>
												<th>
												Role
												</th>
												<th>
													Edit
												</th>
												<th>
													Delete
												</th>
											</tr>
										</thead>
										<tbody>
											{this.state.users.map((item, index) => {
												return <UserList org={item.organization} key={index} name={item.name} role={item.role} edit={this.editUser} remove={this.removeUser} id={item} / >
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
});

export default AccountsView;
