import React, {Component} from 'react';
import {base, parse} from '../../redux/utils/firebaseUtil'
import Dropzone from 'react-dropzone';
import Image from '../../components/images/image'
import AlertContainer from 'react-alert'


const style = {
	"height": 600
};
const margin = {
	"marginLeft": 30
};
const alertOptions = {
	offset: 14,
	position: 'bottom right',
	theme:'dark',
	time: 2000,
	transitions: 'scale'
};
const DocumentsView = React.createClass ({
	getInitialState(){
		return(
			this.state = {
				//images: [],
				files: []
			}
		)

	},
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
	/* If we do images in the preview this could work.
		(fileType[0] === "image"){
				this.setState({
					images:this.state.images.concat([file]),
					files: this.state.files.concat([file])
				})
			}else{

			}
			*/

		}
	},
	upload (){
		let newFiles = this.state.files.slice();
		let alert = this.alertMessage;
		let comment = this.refs.comment.value;
			this.state.files.map((item, index) => {
				var parseFile = new parse.File(item.name, item);
				parseFile.save().then(function(url){
					base.push('documents', {
						data:{
							project: '123123123',
							docType:url._source.file.type,
							docName:url._source.file.name,
							url: url._url,
							comments: comment
						},then(){
							alert("Items uploaded!")
						}
					})
					console.log(url._url);
				});
			})

			this.setState({
				files:[]
			})
	},
	alertMessage(message){
		msg.show(message , {
			type:'success'

		})
	},
	render() {
		return (
			<div style={style}>
				<div className="page-header">
					<h1 className="page-title">Overview</h1>
				</div>
				<div style={margin}>
					<Dropzone onDrop={this.onDrop}>
           	<div>Try dropping some files here, or click to select files to upload.</div>
	         </Dropzone>
					 <textarea ref="comment" className="form-control" />
				 </div>
				 <ul className="list-group" style={margin}>
					 {this.state.files.map((item, index) => {
						return <li className="list-group-item" key={index} >
							{item.name}
						</li>;
					})}
				 </ul>
				 <button style={margin} onClick={this.upload} className="btn btn-success" >Upload Now!</button>
				 <AlertContainer ref={(a) => global.msg = a} {...alertOptions} />
		</div>
		);
	}
})

export default DocumentsView;
