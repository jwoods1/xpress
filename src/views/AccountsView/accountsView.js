import React from 'react'
import {base} from '../../redux/utils/firebaseUtil'
import { History } from 'react-router'
import UserList from 'components/Auth/UserList'
import ContactList from 'components/Auth/contactList'
import AlertContainer from 'react-alert'

const alertOptions = {
	offset: 14,
	position: 'top right',
	theme:'dark',
	time: 2000,
	transitions: 'scale'
};
const AccountsView = React.createClass({
	mixins: [ History ],
	getInitialState(){
		return(
			this.state = {
				roles: [],
				users:[],
				contacts:[]
			}
		)

	},
	componentDidMount(){
		this.getRoles()
		this.getUsers();
		this.getContact();
	},
	componentWillUnmount(){
		base.removeBinding(this.userRef);
	},
	alertMessage(message){
    msg.show(message , {
      type:'success'
    })
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
	getContact(){
		base.fetch('contact',{
			context: this,
			asArray: true,
			then(data){
				this.setState({
					contacts:data
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
		let response = confirm("Are you sure you want to delete "+key.name+"?");
		if(response){
			base.post('users/'+key.key, {
				data:{

				}
			})
				this.alertMessage("User Deleted");
		}
	},
	setEditUser(key){
		this.refs.editName.value = key.name;
		this.refs.editOrganization.value = key.organization;
		this.refs.editRole.value = key.role;
		this.refs.editKey.value = key.key;
		this.refs.editAvatar.value = key.avatar ? key.avatar : " ";
		this.refs.editBio.value = key.bio ? key.bio : " ";
	},
	editUser(){
		let name = 	this.refs.editName.value;
		let org = this.refs.editOrganization.value;
		let key = 'users/' + this.refs.editKey.value;
		let role = this.refs.editRole.value;
		let avatar = this.refs.editAvatar.value ? this.refs.editAvatar.value : " ";
		let bio = this.refs.editBio.value ? this.refs.editBio.value : " ";

		base.post(key,{
			data:{
				name:name,
				organization:org,
				role:role,
				avatar:avatar
			}
		})
		this.alertMessage("User Updated");
	},
	userHandler(error, userData){
		let location = 'users/'+userData.uid;
		let Alertmessage = this.alertMessage;
		this.createUser = base.post(location,{
			data: {
				name:this.refs.name.value,
				organization: this.refs.organization.value,
				role: this.refs.role.value,
				avatar:"https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-128.png"
			},then(data){
				Alertmessage("user was created!")
			}
		});
		this.refs.name.value = "";
		this.refs.organization.value = "";
		this.refs.email.value ="";
		this.refs.password.value="";
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
									<li  role="presentation"><a data-toggle="tab" href="#ContactInfo" aria-controls="ContactInfo"
											role="tab">Contact us info</a></li>
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
												return <UserList org={item.organization} key={index} name={item.name} role={item.role} edit={this.setEditUser} remove={this.removeUser} id={item} / >
											})}
										</tbody>
									</table>
								</div>
								<div className="tab-pane animation-slide-left" id="ContactInfo" role="tabpanel">
									<h2>Contact info</h2>
									<table className="table">
										<thead>
											<tr>
												<th>
													Name
												</th>
												<th>
													Email
												</th>
												<th>
												Subject
												</th>
												<th>
													Details
												</th>
											</tr>
										</thead>
										<tbody>
											{this.state.contacts.map((item, index) => {
												return <ContactList name={item.name} key={index} subject={item.project} details={item.details} email={item.Email} / >
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<AlertContainer ref={(a) => global.msg = a} {...alertOptions} />
						<div className="modal fade" id="editUser" aria-hidden="true" aria-labelledby="addProjectForm" role="dialog" tabIndex="-1">
				      <div className="modal-dialog">
				        <div className="modal-content">
				          <div className="modal-header">
				            <button type="button" className="close" aria-hidden="true" data-dismiss="modal">×</button>
				            <h4 className="modal-title">Edit User</h4>
				          </div>

				          <div className="modal-body">
				            <form action="#" method="post" role="form">
											<div className="form-group">
												<input type="text" className="form-control" ref="editName" placeholder="name" />
											</div>
											<div className="form-group">
												<input type="text" className="form-control" ref="editOrganization" placeholder="organization" />
											</div>
											<select className="form-control" ref="editRole">
												{this.state.roles.map(this.roleOptions)}
											</select>
											<input type="hidden" className="hidden" ref="editKey" placeholder="" />
											<input type="hidden" className="hidden" ref="editAvatar" placeholder="" />
												<input type="hidden" className="hidden" ref="editBio" placeholder="" />
				            </form>
				          </div>
				          <div className="modal-footer text-right">
				            <button onClick={this.editUser} className="btn btn-primary" data-dismiss="modal" type="button">Save</button>
				            <a className="btn btn-sm btn-white" data-dismiss="modal" href="javascript:void(0)">Cancel</a>
				          </div>
				        </div>
				      </div>
				    </div>
				</div>
			)
		}
});

export default AccountsView;
