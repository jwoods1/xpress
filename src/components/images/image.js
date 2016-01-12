import React, {Component} from 'react';

class Image extends Component {
	render() {
		return (
			<div>
        <img src={this.props.path} className="img-responsive img-thumbnail" />
			</div>
		);
	}
}

export default Image;
