import React from 'react'
import Rebase from 're-base'
import { connect } from 'react-redux'
import { actions as counterActions } from '../../redux/modules/counter'
import { History } from 'react-router'
import ErrorMessage from '../../components/errorMessage/errorMessage'

import '../../../Libs/styles/loginView.scss'
import styles from './loginView.scss'

var base = Rebase.createClass('https://xpressdesign.firebaseio.com/');
const auth = () => {return base.getAuth();}

const mapStateToProps = (state) => ({
  counter: state.counter
})

var LoginView = React.createClass({
	mixins: [ History ],
	getInitialState(){
		return {message:'',
				};
	},
	authHandler(error, authData){
		if (error) {
			this.setState({
				message:"Incorrect password or username"
			})
			console.log(this.state.message);
		} else {
			this.history.pushState(null, '/dashboard')
		}
	},
	userLogin(e){
		e.preventDefault();

		let login = {"email": this.refs.email.value, "password": this.refs.password.value}
		return login
	},

	render() {
			return (
				<div className='row login-wrapper'>
					<div className='login-logo'>
						<img src="logo.png" className="img-responsive" />
					</div>
					<div className="welcome">
						<p>Weclome! Please login to view your dashboard. {this.props.counter}</p>
					</div>
					<div className="panel panel-default">
						<div className="panel-body">
						<ErrorMessage message={this.state.message} />
							<form onSubmit={this.userLogin}>
								<div className="form-group">
									<input className="form-control login-input" type="text"  ref="email" placeholder="Email" />
								</div>
								<div className="form-group">
									<input className="form-control login-input" type="password" ref="password" placeholder="password" />
								</div>
								<button className="btn btn-sign-in col-md-12 " type="submit" >Sign In</button>

								<a href="/forgotPass" className="forgot-button"> Forgot Password? </a>
							</form>
							<button className='btn btn-default'
											onClick={() => this.props.increment({"email": this.refs.email.value, "password": this.refs.password.value})}>
								Increment
							</button>
						</div>
					</div>
				</div>
			)
		}
});



export default connect(mapStateToProps, counterActions)(LoginView);
