import React, {Component} from 'react';
import {base, parse} from '../../redux/utils/firebaseUtil'
import ProjectList from 'components/Projects/projectList'
import Dropzone from 'react-dropzone';
import ProjectComment from 'components/Projects/projectComment'


class ProjectDetailsView extends Component {
  constructor(props){
    super(props);
    this.state = {
      project:{},
      files:[]
    }
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
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
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
log(){
  console.log(this.state.project);
}
 updateProject(){
  let Refs = this.refs
  let newFiles = this.state.files.slice();
  let alert = this.alertMessage;
  let parseFile = new parse.File(newFiles[0].name, newFiles[0]);
  parseFile.save().then(function(url){
    console.log(url);
    base.push('projects',{
        data:{
          title: Refs.projectName.value,
          discription: Refs.projectDiscription.value,
          mainImg: url._url,
          docs:[{
            docType:url._source.file.type,
            docName:url._source.file.name,
            url: url._url
          }]
        },
        then(){
          Refs.projectName.value = '';
          Refs.projectDiscription.value = '';
        }
      })
    })
      this.setState({
        files:[]
      })
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
               <h3 onClick={this.log.bind(this)} className="panel-title">Project Description
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
               <dt>Team:</dt>
               <dd>
                <img className="avatar avatar-sm" src="../../../global/portraits/7.jpg"/>
                <img className="avatar avatar-sm" src="../../../global/portraits/6.jpg"/>
                <img className="avatar avatar-sm" src="../../../global/portraits/8.jpg"/>
                </dd><br/>
               <dt>Last Updated:</dt>
               <dd>1/26/16</dd>
             </dl>

             </div>
           </div>
           <div className="panel">
             <div className="panel-body">
               <div className="comments margin-horizontal-20">
                 <h3>Comments</h3>

               </div>
               <form className="comments-add margin-top-35" action="#" method="post">
                 <h3 className="margin-bottom-35">Leave A Reply</h3>
                 <div className="form-group">
                   <input type="text" className="form-control" name="name" placeholder="Name"/>
                 </div>
                 <div className="form-group">
                   <input type="email" className="form-control" name="email" placeholder="Email"/>
                 </div>
                 <div className="form-group">
                   <input type="text" className="form-control" name="email" placeholder="Websit"/>
                 </div>
                 <div className="form-group">
                   <textarea className="form-control" rows="5" placeholder="Comment here"></textarea>
                 </div>
                 <div className="form-group">
                   <button type="button" className="btn btn-primary">Comment</button>
                 </div>
               </form>
              </div>
             </div>
           </div>
         <div className="tab-pane animation-slide-left" id="documents" role="tabpanel">
           <div className="panel">
             <div className="panel-heading">
               <h3 onClick={this.log.bind(this)} className="panel-title">Project Documents
               </h3>
             </div>
             <div className="panel-body">
               {this.state.project.docs.map((item, index) => {
    						return <div className="panel col-xs-3">
                  <figure className="overlay overlay-hover animation-hover">
                    <img className="caption-figure img-responsive" src={item.url} />
                    <figcaption className="overlay-panel overlay-background overlay-fade text-center vertical-align">
                      <a href={item.url} className="btn btn-outline btn-default project-button">download</a>
                    </figcaption>
                  </figure>
                  <div className="time pull-right">{item.docName}</div>
                  <div className="text-truncate">{item.docType}</div>
                </div>;

    					})}
             </div>
           </div>
         </div>
         <div className="tab-pane animation-slide-left" id="Taskboard" role="tabpanel">

         </div>
       </div>
     </div>
   </div>
   <div className="modal fade" id="editProjectForm" aria-hidden="true" aria-labelledby="addProjectForm"
   role="dialog" tabindex="-1">
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
             <Dropzone onDrop={this.onDrop.bind(this)}>
               <div>Try dropping some files here, or click to select files to upload.</div>
              </Dropzone>
           </form>
         </div>
         <div className="modal-footer text-right">
           <button onClick={this.updateProject.bind(this)} className="btn btn-primary" data-dismiss="modal" type="button">Create</button>
           <a className="btn btn-sm btn-white" data-dismiss="modal" href="javascript:void(0)">Cancel</a>
         </div>
       </div>
     </div>
   </div>
 </div>
		);
	}
}

export default ProjectDetailsView;
