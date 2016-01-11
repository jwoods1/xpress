import React, {Component} from 'react';
import Dropzone from 'react-dropzone';


var Parse  = require('parse');
Parse.initialize("ioE7VoxkOqu75bhOxg7NdDnk2mF8NW9CVVfZ42cy", "JEqfGJvRjQgO9CZYjONtdFACkXHDeEtSpK1lm20o");

class DocumentsView extends Component {

	onDrop(files){
		if(files.length > 0 ){
			var file = files[0];
			console.log(file);
			var name = file.name;
			var parseFile = new Parse.File(name, file);
			parseFile.save().then(function(url){
				console.log(url._url);
			})
		}
	}
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

		</div>
		);
	}
}

export default DocumentsView;
