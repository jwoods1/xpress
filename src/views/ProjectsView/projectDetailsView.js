import React, {Component} from 'react';
import {base, parse} from '../../redux/utils/firebaseUtil'
import ProjectList from 'components/Projects/projectList'
import Dropzone from 'react-dropzone';


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
	<div>
		<div>
	    <div className="page-header">
	      <h1 className="page-title">Project {this.state.project.title}</h1>
	    </div>
	    <div className="page-content">
	      <div className="projects-wrap">
          <div className="col-md-8">
  	        <h2>Details</h2>
            <img className="img-responsive pull-right" src={this.state.project.mainImg} />
            <p>{this.state.project.discription}</p>
            <hr/>

            <ul>
              <li> Date: {this.state.project.date} </li>
              <li> Status: {this.state.project.status} </li>
              <li> Client: {this.state.project.client} </li>
            </ul>
          </div>
          <div className="col-md-4">
              <div className="panel">
                <div className="panel-heading">
                  <h4>Project Todo's</h4>
                </div>
                <div className="panel-body">
                  <ul>
                    <li> Todo Item </li>
                  </ul>
                </div>
              </div>
          </div>
	      </div>
	    </div>
	  </div>
	  <button className="site-action btn-raised btn btn-success btn-floating" data-target="#addProjectForm"
	  data-toggle="modal" type="button">
	    <i className="icon wb-plus" aria-hidden="true"></i>
	  </button>

	  <div className="modal fade" id="addProjectForm" aria-hidden="true" aria-labelledby="addProjectForm"
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
		<a href="external.html" data-slidepanel="panel">Show Panel</a>
 </div>
		);
	}
}

export default ProjectDetailsView;
