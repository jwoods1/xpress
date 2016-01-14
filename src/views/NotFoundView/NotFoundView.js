import React from 'react'
import '../../../Libs/styles/bootstrap.css'
import '../../../Libs/styles/bootstrap-extend.css'
import '../../../Libs/styles/site.css'
import '../../../Libs/styles/errors.scss'

import { Link } from 'react-router'

export class NotFoundView extends React.Component {
  render () {
    return (
        <div className="row text-center">
          <div className="col-md-5 col-md-offset-3">
            <header>
              <h1 className="animation-slide-top">404</h1>
              <p>Page Not Found !</p>
            </header>
            <p className="error-advise">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
            <Link className="btn btn-primary btn-round" to="/">GO TO HOME PAGE</Link>

            <footer className="page-copyright">
              <p>WEBSITE BY XpressDesign</p>
              <p>© 2015. All RIGHT RESERVED.</p>
            </footer>
          </div>

        </div>
    )
  }
}

export default NotFoundView
