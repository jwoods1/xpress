import React from 'react'
import Rebase from 're-base'
import { connect } from 'react-redux'
import { actions as counterActions } from '../../redux/modules/login'
import { History } from 'react-router'
import ErrorMessage from '../../components/errorMessage/errorMessage'

import '../../../Libs/styles/loginView.scss'
import styles from './loginView.scss'

const mapStateToProps = (state) => ({
  auth: state.auth
})

var LoginView = React.createClass({
	mixins: [ History ],
	getInitialState(){
		return {message:'',
				};
	},

  loginRoute(){
    console.log("hey");

  },
	userLogin(e){
		e.preventDefault();
		this.props.authUser(this.refs.email.value, this.refs.password.value)
    this.props.pushPath('/dashboard')
    console.log(this.props.auth.auth);
	},

	render() {
			return (
				<div className='row login-wrapper'>
					<div className='login-logo'>
						<img src="logo.png" className="img-responsive" />
					</div>
					<div className="welcome">
						<p>Weclome! Please login to view your dashboard.</p>
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
						</div>
					</div>
				</div>
			)
		}
});
export default connect(mapStateToProps, counterActions)(LoginView)
