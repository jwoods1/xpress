import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {base, parse} from '../../redux/utils/firebaseUtil'
import AlertContainer from 'react-alert'

const alertOptions = {
	offset: 14,
	position: 'top right',
	theme:'dark',
	time: 2000,
	transitions: 'scale'
};
class ProfileView extends Component {
	constructor(props){
		super(props)
		this.state={
			files:[],
			user:{},
			userId:''
		}
	}
	componentDidMount(){
		this.getUserStatus()

	}

updateUser(){
    let query = 'users/' + this.state.userId;
    let newFiles = this.state.files.slice();
		let userRole = this.state.user.role;
    let message = this.alertMessage;
    let bio = this.refs.bio.value ;
		let fullName = this.refs.fullName.value;
		let org = this.refs.organization.value;
      this.state.files.map((item, index) => {
        var parseFile = new parse.File(item.name, item);
        parseFile.save().then(function(url){
          base.post(query, {
            data:{
                name:fullName,
                organization:org,
                avatar: url._url,
                bio: bio,
								role:userRole

            },then(){
              message("Profile Updated")
            }
          })
        });
      })
      this.setState({
        files:[]
      })
  }
  alertMessage(message){
    msg.show(message , {
      type:'success'
    })
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
  onDrop(files){
		if(files.length > 0 ){
			var file = files[0];
			let name = file.name;
			let type = file.type;
			let fileType = type.split("/");

			this.setState({
				//images:this.state.images.concat([file]),
				files: this.state.files.concat([file])
			})
    }
  }
	render() {
		return (
			<div className="col-md-12">
				<div className="panel">
					<div className="panel-body nav-tabs-animate">
						<ul className="nav nav-tabs nav-tabs-line" data-plugin="nav-tabs" role="tablist">
							<li className="active" role="presentation"><a data-toggle="tab" href="#AccountSettings" aria-controls="AccountSettings"
								role="tab">Account Settings </a></li>
						</ul>

						<div className="tab-content">
							<div className="tab-pane active animation-slide-left" id="AccountSettings" role="tabpanel">
								<div className="page-header">
									<h1 className="page-title">Edit {this.state.user.name} Account Settings</h1>
								</div>
								<div className="form-group">
									<input type="text" className="form-control" ref="fullName" value={this.state.user.name} placeholder="Full Name" />
								</div>
								<div className="form-group">
									<input type="text" className="form-control" value={this.state.user.bio} ref="bio" placeholder="Bio" />
								</div>
								<div className="form-group">
									<input type="text" className="form-control" value={this.state.user.organization} ref="organization" placeholder="organization" />
								</div>
								<h4>Upload Avatar</h4>
								<div className="col-md-12" style={{marginBottom:20 +'px'}}>
									<div className="col-md-4">
										<Dropzone style={{height:100 + "px", width:100 + "px", border:4 +'px '+ 'dotted ' + '#000', textAlign:'center'}} onDrop={this.onDrop.bind(this)}>
											<div>Click</div>
											<div>To</div>
											<div>Upload</div>
											<div>Avatar</div>
										 </Dropzone>
									</div>
									<div className="col-md-6">
											{this.state.files.length > 0 ? <div>
			                <h2>Uploading {this.state.files.length} files...</h2>
			                <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
			                </div> : null}
									</div>
								</div>
								<div >
									<button className="btn btn-success" onClick={this.updateUser.bind(this)}>Update</button>
								</div>

							</div>
							<div className="tab-pane animation-slide-left" id="Managment" role="tabpanel">
							</div>
						</div>
					</div>
				</div>
				<AlertContainer ref={(a) => global.msg = a} {...alertOptions} />
			</div>

		);
	}
}

export default ProfileView;
