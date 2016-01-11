//import authDataCallback from '../../util/userStatus'
import React from 'react'
import AdminNav from '../../components/Nav/adminNav'
import DevNav from '../../components/Nav/devNav'
import ClientNav from '../../components/Nav/clientNav'

var nav;
const SideNav = React.createClass({


	componentDidMount(){
		//this.getNav();
		this.role = this.props.role;
	},
	getNav(){
		if(this.role ==='admin'){
			nav = <AdminNav/>
		}else if(this.role == 'dev'){
			nav= <DevNav />
		}else{
			nav=<ClientNav />
		};
	},
	render() {
			return (
				  <div id="menubar" className="site-menubar">
						<div className="site-menubar-body">
						<div>
							<div>
							{(() => {
								switch (this.props.role) {
								case "admin":   return <AdminNav />;
								case "dev": return <DevNav/>;
								default:      return <ClientNav/>;
								}
     						 })()}
							</div>
						</div>
						</div>

					</div>


			)
		}
});

export default SideNav;
