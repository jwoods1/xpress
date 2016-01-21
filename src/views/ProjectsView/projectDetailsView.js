import React, {Component} from 'react';
import {base, parse} from '../../redux/utils/firebaseUtil'
import ProjectList from 'components/Projects/projectList'
import Dropzone from 'react-dropzone';
import ProjectComment from 'components/Projects/projectComment'
import ProjectDocs from 'components/Projects/projectDocs'
import TaskBoardView from '../TaskBoardView/taskBoardView'
import AlertContainer from 'react-alert'
import moment from 'moment'
import "../../../Libs/styles/taskboard.scss";

const alertOptions = {
	offset: 14,
	position: 'top right',
	theme:'dark',
	time: 2000,
	transitions: 'scale'
};
class ProjectDetailsView extends Component {
  constructor(props){
    super(props);
    this.state = {
      project:{
        docs:[],
        taskboards:{"Backlog":{
          'tasks':[]
        },
          "Doing":{
            'tasks':[]
          },
          "Completed":{
            'tasks':[]
          }
        },
				comments:[]
      },
      files:[],
			user:{},
			userId:''
    }
    this.addDocs = this.addDocs.bind(this);
  }
  componentDidMount(){
    let params = this.props.params.projectId.split(':');
    let projectId = params[1];
    let query = 'projects/' + projectId
    this.ref = base.bindToState(query, {
      context: this,
      state:'project',
      asArray:false
    })
		this.getUserStatus()
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  addDocs(){
    let params = this.props.params.projectId.split(':');
    let projectId = params[1];
    let query = 'projects/' + projectId + '/docs';
    let newFiles = this.state.files.slice();
    let message = this.alertMessage;
    let comment = this.refs.docsComment.value;
      this.state.files.map((item, index) => {
        var parseFile = new parse.File(item.name, item);
        parseFile.save().then(function(url){
          base.push(query, {
            data:{
                docType:url._source.file.type,
                docName:url._source.file.name,
                url: url._url,
                comments: comment

            },then(){
              message("Items uploaded!")
            }
          })
        });
      })
      comment = "";
      this.setState({
        files:[]
      })
  }
  alertMessage(message){
    msg.show(message , {
      type:'success'
    })
  }
  mapObject(object, callback) {
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
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
 updateProject(){
  let params = this.props.params.projectId.split(':');
  let projectId = params[1];
  let query = 'projects/' + projectId;
  let projTitle = this.refs.projectName.value
	let projDisc = this.refs.projectDiscription.value
  let alert = this.alertMessage;
	base.post(query,{
		data:{
			client:this.state.project.client,
			date:this.state.project.date,
			discription:projDisc,
			docs:this.state.project.docs,
			mainImg:this.state.project.mainImg,
			status:this.state.project.status,
			taskboards:this.state.project.taskboards,
			title:projTitle
		},
		then(){
			alert('Updated Project')

		}
	})

	this.refs.projectName.value = '';
	this.refs.projectDiscription.value = '';
 }
 uploadComment(){
	 let comment = this.refs.userComment.value;
	 let params = this.props.params.projectId.split(':');
   let projectId = params[1];
   let query = 'projects/' + projectId +'/comments';
   let alert = this.alertMessage;
 	base.push(query,{
 		data:{
 			user:this.state.user,
			comment: comment,
			date:moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
 		},
 		then(){
 			alert('Updated Project')

 		}
 	})
 	this.refs.userComment.value= '';
 }
	render() {
		return (
 <div className="col-md-12">
   <div className="example example-well">
     <div className="page-header">
       <h1 className="page-title">Project {this.state.project.title}</h1>
       <div className="page-header-actions">
         <button type="button" className="btn btn-sm btn-icon btn-default btn-outline btn-round"
           data-target="#editProjectForm"
          data-toggle="modal"  data-original-title="Edit">
           <i className="icon wb-pencil" aria-hidden="true"></i>
         </button>
         <button type="button" className="btn btn-sm btn-icon btn-default btn-outline btn-round"
         data-toggle="tooltip" data-original-title="Refresh">
           <i className="icon wb-refresh" aria-hidden="true"></i>
         </button>
       </div>
     </div>
   </div>
   <div className="panel">
     <div className="panel-body nav-tabs-animate">
       <ul className="nav nav-tabs nav-tabs-line" data-plugin="nav-tabs" role="tablist">
         <li className="active" role="presentation"><a data-toggle="tab" href="#details" aria-controls="details"
           role="tab">Project Details </a></li>
         <li  role="presentation"><a data-toggle="tab" href="#documents" aria-controls="documents"
             role="tab">Project Documents</a></li>
         <li  role="presentation"><a data-toggle="tab" href="#Taskboard" aria-controls="Taskboard"
               role="tab">Project Taskboard</a></li>
          </ul>

        <div className="tab-content">
         <div className="tab-pane active animation-slide-left" id="details" role="tabpanel">
           <div className="panel">
             <div className="panel-heading">
               <h3 className="panel-title">Project Description
                 <span className="label label-primary">{this.state.project.status}</span>
               </h3>
             </div>
             <div className="panel-body">
               <p>{this.state.project.discription}</p>

             <dl className="dl-horizontal">
               <dt>Project Due Date:</dt>
               <dd>{this.state.project.date}</dd><br/>
               <dt>Client:</dt>
               <dd>{this.state.project.client}</dd><br/>
               <dt>Last Updated:</dt>
               <dd>1/26/16</dd>
             </dl>

             </div>
           </div>
           <div className="panel">
             <div className="panel-body">
               <div className="comments margin-horizontal-20">
                 <h3>Comments</h3>
									 {
 		                this.mapObject(this.state.project.comments, function(index, item){
											return <ProjectComment key={index} user={item.user} date={item.date} comment={item.comment}/>
 		                })
 		              }
               </div>
               <div className="comments-add margin-top-35" >
                 <h3 className="margin-bottom-35">Leave A Reply</h3>
                 <div className="form-group">
                   <textarea className="form-control" rows="5" ref="userComment" placeholder="Comment here"></textarea>
                 </div>
                 <div className="form-group">
                   <button type="button" onClick={this.uploadComment.bind(this)} className="btn btn-primary">Comment</button>
                 </div>
               </div>
              </div>
             </div>
           </div>
         <div className="tab-pane animation-slide-left" id="documents" role="tabpanel">
           <div className="panel">
             <div className="panel-heading">
               <h3 className="panel-title">Project Documents</h3>
               <button type="button" className="btn-raised btn btn-success btn-floating "
                 data-target="#addDocs"
                data-toggle="modal"  data-original-title="Add Documents">
                 <i className="icon wb-upload" aria-hidden="true"></i>
               </button>
             </div>
             <div className="panel-body">
             {
               this.mapObject(this.state.project.docs, function(index, item){
                 console.log(item.docType);
                 if(item.docType == 'image/jpeg' || item.docType == 'image/png'){
                   return <ProjectDocs url={item.url} docType={item.docType} docName={item.docName} key={index} />

                 }else if(!item.docType){
                   return
                 }else{
                   return <ProjectDocs url='https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/document.png' docType={item.docType} docName={item.docName} key={index} />

                 }

               })
             }
             </div>
           </div>
         </div>
         <div className="tab-pane animation-slide-left" id="Taskboard" role="tabpanel">
           <TaskBoardView boards={this.state.project} projectId={this.props.params.projectId} user={this.state.user}/ >
         </div>
       </div>
     </div>
   </div>
   <div className="modal fade" id="editProjectForm" aria-hidden="true" aria-labelledby="addProjectForm" role="dialog" tabindex="-1">
     <div className="modal-dialog">
       <div className="modal-content">
         <div className="modal-header">
           <button type="button" className="close" aria-hidden="true" data-dismiss="modal">×</button>
           <h4 className="modal-title">Create New Project</h4>
         </div>

         <div className="modal-body">
           <form action="#" method="post" role="form">
             <div className="form-group">
               <label className="control-label margin-bottom-15" htmlFor="name">Project name:</label>
               <input type="text" className="form-control" ref="projectName" id="name" name="name" placeholder="Project name" />
             </div>
             <div className="form-group">
               <label className="control-label margin-bottom-15" htmlFor="name">Project description:</label>
               <textarea className="maxLength-textarea form-control mb-sm" ref="projectDiscription" placeholder="Project description."
               rows="4" maxLength="225" data-plugin="maxLength"></textarea>
             </div>
           </form>
         </div>
         <div className="modal-footer text-right">
           <button onClick={this.updateProject.bind(this)} className="btn btn-primary" data-dismiss="modal" type="button">Create</button>
           <a className="btn btn-sm btn-white" data-dismiss="modal" href="javascript:void(0)">Cancel</a>
         </div>
       </div>
     </div>
   </div>
   <div className="modal fade" id="addDocs" aria-hidden="true" aria-labelledby="addDocs" role="dialog" tabindex="-1">
     <div className="modal-dialog">
       <div className="modal-content">
         <div className="modal-header">
           <button type="button" className="close" aria-hidden="true" data-dismiss="modal">×</button>
           <h4 className="modal-title">Add Documents</h4>
         </div>

         <div className="modal-body">
           <form action="#" method="post" role="form">

             <Dropzone onDrop={this.onDrop.bind(this)}>
               <div>Try dropping some files here, or click to select files to upload.</div>
              </Dropzone>
              <div className="form-group">
                <label className="control-label margin-bottom-15" htmlFor="Comment">Comment:</label>
                <textarea className="maxLength-textarea form-control mb-sm" ref="docsComment" placeholder="Comment on document"
                rows="2" maxLength="225" data-plugin="maxLength"></textarea>
              </div>
           </form>
         </div>
         <div className="modal-footer text-right">
           <button onClick={this.addDocs.bind(this)} className="btn btn-primary" data-dismiss="modal" type="button">Create</button>
           <a className="btn btn-sm btn-white" data-dismiss="modal" href="javascript:void(0)">Cancel</a>
         </div>
       </div>
     </div>
   </div>
    <AlertContainer ref={(a) => global.msg = a} {...alertOptions} />
 </div>
		);
	}
}

export default ProjectDetailsView;
