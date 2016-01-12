import React, {Component} from 'react';
const textColor = {
  color: 'red'
}
class ErrorMessage extends Component {
	render() {
		return (
			<div className="error-message text-warning" style={textColor}>
				{this.props.message}
			</div>
		);
	}
}

export default ErrorMessage;
