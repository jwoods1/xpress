import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import '../../../Libs/styles/homeView.scss'
import classes from './HomeView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const bgTrans = {
  background: 'transparent'
}
const bgBlack = {
  background: '#000'
}
export class HomeView extends React.Component {
  constructor(){
    super();
    this.state = {
      navColor: bgTrans
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
     window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(e){
    let pos = e.srcElement.body.scrollTop;
    console.log(e.srcElement.body.scrollTop);
    if (pos > 100){
      this.setState({
        navColor:bgBlack
      });
    }else{
      this.setState({
        navColor:bgTrans
      });
    }
  }
  render () {
    return (
      <div className="landing">
        <nav className="navbar navbar-default navbar-fixed-top" style={this.state.navColor}>
                 <div className="container">
                     <div className="navbar-header page-scroll">
                         <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                             <span className="sr-only">Toggle navigation</span>
                             <span className="icon-bar"></span>
                             <span className="icon-bar"></span>
                             <span className="icon-bar"></span>
                         </button>
                         <a className="navbar-brand page-scroll" href="#page-top"><img src="logo.png" className="img-responsive" alt="" /></a>
                     </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav navbar-right">
                          <li className="hidden">
                              <a href="#page-top"></a>
                          </li>
                          <li>
                              <a className="page-scroll" href="#services">Services</a>
                          </li>
                          <li>
                              <a className="page-scroll" href="#skills">Skills</a>
                          </li>
                          <li>
                              <a className="page-scroll" href="#portfolio">Portfolio</a>
                          </li>
                          <li>
                              <a className="page-scroll" href="#contact">Contact</a>
                          </li>
                          <li>
                             <Link to="/login">Login</Link>
                          </li>
                      </ul>
                  </div>

              </div>
          </nav>
         <header>
              <div className="container">
                  <div className="intro-text">
                      <div className="intro-heading">WE'LL TELL YOUR STORY</div>
                      <div className="intro-body">Draw your audience in with real stories
                      that touch their hearts and minds.</div>
                      <a href="#services" className="page-scroll btn btn-xl">Tell Me More</a>
                  </div>
              </div>
          </header>
         <section id="services">
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-12 text-center">
                             <h2 className="section-heading">Services We Provide</h2>
                             <h3 className="section-subheading">As a small business owner, you understand the balance of money in and money out. We understand this too. That is why we work hard finding creative ways to build affordable websites that kick-ass! A great website doesn't have to cost thousands, but it does have to be awesome!</h3>
                         </div>
                     </div>
                     <div className="row">
                         <div className="col-md-6">
                             <img src="branding.png"  className="service-icon img-responsive" alt="" />
                             <h4 className="service-heading">BRANDING</h4>
                             <p>Coupled with your brand, is your identity. Imavex and its talented designers create an identity package that represents your company. Logo, business card, letterhead, brochure, we do it all to make your identity effective and consistent.</p>
                         </div>
                         <div className="col-md-6">
                             <img src="design.png"  className="service-icon img-responsive" alt="" />
                                 <h4 className="service-heading">DESIGN</h4>
                                 <p>The experience for a user needs to be intuitive. Providing a great user experience (UX) and user interface (UI), combines many elements and best practices to increase a more enjoyable experience, which in turn creates higher conversions.</p>
                             </div>
                         </div>

                        <div className="clearfix visible-xs-block"></div>

                      <div className="row">
                         <div className="col-md-6">
                             <img src="development.png"  className="service-icon img-responsive" alt="" />
                                 <h4 className="service-heading">DEVELOPMENT</h4>
                                 <p>You have the idea to take your website or company to the next level. Our talented team of experts balance form and function to deliver those powerful, effective solutions you envisioned.</p>
                             </div>
                          <div className="col-md-6">
                              <img src="responsive.png"  className="service-icon img-responsive" alt="" />
                                  <h4 className="service-heading">RESPONSIVE & ADAPTIVE</h4>
                                  <p>Users are beginning to use their mobile and tablet devices more frequently to view websites. Responsive design streamlines your site to be effective on all devices while keeping the same content… like our site… go ahead and resize the browser.</p>
                              </div>
                         </div>
                     </div>
             </section>
         <section id="skills">
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-12 text-center">
                             <h2 className="section-heading">We Got Skills!</h2>
                             <h3 className="section-subheading">Exceptional creativity mixed with vision, marketing and cutting edge-technology is what we pour behind the bar at XpressDesigns.co Then we add a flame to fashion an exciting, eye-catching final product that makes the competitors wish they had what you’re having.</h3>
                         </div>
                     </div>
                     <div className="row">
                         <div className="col-md-6">
                         <h4 className="service-heading">WEBSITE DESIGN</h4>
                            <div className="progress">
                              <div className="progress-bar progress-bar-success prog-90" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" >
                                <span className="sr-only">90%</span>
                              </div>
                            </div>
                            <h4 className="service-heading">HTML/CSS</h4>
                            <div className="progress">
                              <div className="progress-bar progress-bar-info prog-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
                                <span className="sr-only">75%</span>
                              </div>
                            </div>
                         </div>

                         <div className="col-md-6">
                         <h4 className="service-heading">MOBILE / RESPONSIVE</h4>
                         <div className="progress">
                           <div className="progress-bar progress-bar-success prog-85" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" >
                             <span className="sr-only">85%</span>
                           </div>
                         </div>
                         <h4 className="service-heading">UI / UX DESIGN</h4>
                         <div className="progress">
                           <div className="progress-bar progress-bar-info prog-80" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" >
                             <span className="sr-only">80%</span>
                           </div>
                         </div>

                         </div>
                     </div>

                 </div>
             </section>
             <section id="portfolio">
               <div className="container">
               <div className="row">
                   <div className="col-lg-12 text-center">
                       <h2 className="section-heading">Our Portfolio</h2>
                       <h3 className="section-subheading">Check out our latest work in UI/UX design, mobile app development, wearable technology, website design and development, Web app development, and brand strategy.</h3>
                   </div>
               </div>
               <div className="row">
                   <div className="col-md-4 portfolio-item">
                       <a href="#">
                           <img className="img-responsive" src="http://placehold.it/700x400" alt=""/>
                       </a>
                       <h3>
                           <a href="#">Project Name</a>
                       </h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                   </div>
                   <div className="col-md-4 portfolio-item">
                       <a href="#">
                           <img className="img-responsive" src="http://placehold.it/700x400" alt=""/>
                       </a>
                       <h3>
                           <a href="#">Project Name</a>
                       </h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                   </div>
                   <div className="col-md-4 portfolio-item">
                       <a href="#">
                           <img className="img-responsive" src="http://placehold.it/700x400" alt=""/>
                       </a>
                       <h3>
                           <a href="#">Project Name</a>
                       </h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                   </div>
               </div>
               <div className="row">
                   <div className="col-md-4 portfolio-item">
                       <a href="#">
                           <img className="img-responsive" src="http://placehold.it/700x400" alt=""/>
                       </a>
                       <h3>
                           <a href="#">Project Name</a>
                       </h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                   </div>
                   <div className="col-md-4 portfolio-item">
                       <a href="#">
                           <img className="img-responsive" src="http://placehold.it/700x400" alt=""/>
                       </a>
                       <h3>
                           <a href="#">Project Name</a>
                       </h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                   </div>
                   <div className="col-md-4 portfolio-item">
                       <a href="#">
                           <img className="img-responsive" src="http://placehold.it/700x400" alt=""/>
                       </a>
                       <h3>
                           <a href="#">Project Name</a>
                       </h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                   </div>
               </div>
             </div>
         </section>
         <section id="contact">
         </section>
      </div>
    )
  }
}

export default HomeView
