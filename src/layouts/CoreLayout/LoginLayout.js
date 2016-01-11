import React from 'react'
import '../../styles/core.scss'
import '../../../Libs/styles/bootstrap.css'

function LoginLayout ({ children }) {
  return (
    <div className='LoginLayout'>
      {children}
    </div>
  )
}

LoginLayout.propTypes = {
  children: React.PropTypes.element
}

export default LoginLayout
