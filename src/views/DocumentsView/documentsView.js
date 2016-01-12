import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import Image from '../../components/images/image'

var Parse  = require('parse');
Parse.initialize("ioE7VoxkOqu75bhOxg7NdDnk2mF8NW9CVVfZ42cy", "JEqfGJvRjQgO9CZYjONtdFACkXHDeEtSpK1lm20o");

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
		console.log(this.state);
			this.state.files.map((item, index) => {
				var parseFile = new Parse.File(item.name, item);
				parseFile.save().then(function(url){
					console.log(url._url);
				});
			})
	},
	render() {
		return (
			<div>
				<div className="page-header">
					<h1 className="page-title">Overview</h1>
				</div>
				<div>
					<Dropzone onDrop={this.onDrop}>
           	<div>Try dropping some files here, or click to select files to upload.</div>
	         </Dropzone>
				 </div>
				 <ul className="list-group">
					 {this.state.files.map((item, index) => {
						return <li className="list-group-item" key={index} >
							{item.name}
						</li>;
					})}
				 </ul>
				 <button onClick={this.upload} className="btn btn-success" >Upload Now!</button>

		</div>
		);
	}
})

export default DocumentsView;
