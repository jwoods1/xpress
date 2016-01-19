import React, {Component} from 'react';
import {base, parse} from '../../redux/utils/firebaseUtil'
import ProjectList from 'components/Projects/projectList'
import Dropzone from 'react-dropzone';
class ProjectsView extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects:[],
      files:[]
    }
  }
  componentDidMount(){
    this.ref = base.bindToState('projects', {
      context: this,
      state:'projects',
      asArray:true
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

 createProject(){
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
          status: Refs.projectStatus.value,
          date: Refs.projectDate.value,
          client: Refs.projectClient.value,
          comments:[],
          docs:[{
            docType:url._source.file.type,
            docName:url._source.file.name,
            url: url._url
          }]
        },
        then(){
          Refs.projectName.value = '';
          Refs.projectDiscription.value = '';
          Refs.projectStatus.value = '';
          Refs.projectClient.value = '';
          Refs.projectDate.value = '';
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
	      <h1 onClick={this.slidePanel} className="page-title">Projects</h1>

	      <div className="page-header-actions">
	        <form>
	          <div className="input-search">
	            <i className="input-search-icon wb-search" aria-hidden="true"></i>
	            <input type="text" className="form-control" name="" placeholder="Search..." />
	          </div>
	        </form>
	      </div>
	    </div>
	    <div className="page-content">
	      <div className="projects-wrap">
	        <ul className="blocks blocks-100 blocks-xlg-5 blocks-md-4 blocks-sm-3 blocks-xs-2"
	        data-plugin="animateList" data-child=">li">
          {
            this.state.projects.map((item, index) => {
              return <ProjectList key={index} link={item.key} title={item.title} img={item.mainImg}/>
            })
          }

	        </ul>
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
	              <label className="control-label margin-bottom-15" htmlFor="name">Project Details:</label>
	              <textarea className="maxLength-textarea form-control mb-sm" ref="projectDiscription" placeholder="Project description."
	              rows="4" maxLength="225" data-plugin="maxLength"></textarea>
	            </div>
              <div className="form-group">
	              <label className="control-label margin-bottom-15" htmlFor="name">Project Date:</label>
	              <input className="form-control" type="date" ref="projectDate" />
	            </div>
              <div className="form-group">
	              <label className="control-label margin-bottom-15" htmlFor="name">Client:</label>
                  <input className="form-control" type="text" ref="projectClient" />
	            </div>
              <div className="form-group">
	              <label className="control-label margin-bottom-15" htmlFor="name">Status:</label>
	              <select className="form-control" ref="projectStatus">
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Finished">Finished</option>
	              </select>
	            </div>
              <Dropzone onDrop={this.onDrop.bind(this)}>
                <div>Try dropping some files here, or click to select files to upload.</div>
               </Dropzone>
	          </form>
	        </div>
	        <div className="modal-footer text-right">
	          <button onClick={this.createProject.bind(this)} className="btn btn-primary" data-dismiss="modal" type="button">Create</button>
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

export default ProjectsView;
