import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { actions as loginActions } from '../../redux/modules/login'
import ErrorMessage from '../../components/errorMessage/errorMessage'

import '../../../Libs/styles/loginView.scss'
import styles from './loginView.scss'

const mapStateToProps = (state) => ({
  authError: state.authInfo.error,
	authorized: state.authInfo.auth,
	user: state.authInfo.user

})

export class LoginView extends React.Component {
		static propTypes = {
			authError: PropTypes.string,
			authorized: PropTypes.bool.isRequired,
			user: PropTypes.object
		};
	componentWillReceiveProps(nextProps){

		if(nextProps.authorized){
			console.log(nextProps.authorized);
			nextProps.pushPath('/dashboard')
		}
	}
	authorize(){
		if(this.props.authorized){
			console.log(this.props.user);
		}else{
			console.log(this.props.authorized);
		}
  }
	userLogin(e){
		e.preventDefault();
		this.props.authUser(this.refs.email.value, this.refs.password.value)


	}
	render() {
			return (
				<div className='row login-wrapper'>
					<div className='login-logo'>
						<img src="logo.png" className="img-responsive" />
					</div>
					<div className="welcome">
						<p>Weclome! Please login to view your dashboard. {this.props.user.uid}</p>
					</div>
					<div className="panel panel-default">
						<div className="panel-body">

						<ErrorMessage message={this.props.authError} />
							<form onSubmit={this.userLogin.bind(this)}>
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
};
export default connect(mapStateToProps, loginActions)(LoginView)
