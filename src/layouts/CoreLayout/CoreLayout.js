import React from 'react'
import '../../styles/core.scss'

function CoreLayout ({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

CoreLayout.propTypes = {
  children: React.PropTypes.element
}

export default CoreLayout
