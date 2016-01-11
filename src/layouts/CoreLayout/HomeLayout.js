import React from 'react'
import '../../../Libs/styles/bootstrap.css'
import '../../styles/core.scss'

function HomeLayout ({ children }) {
  return (
    <div className='HomeLayout'>
      {children}
    </div>
  )
}

HomeLayout.propTypes = {
  children: React.PropTypes.element
}

export default HomeLayout
