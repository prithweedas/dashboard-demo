import React from 'react'
import {
  faHome,
  faUser,
  faCog,
  faFolder
} from '@fortawesome/fontawesome-free-solid/'

import Icon from './Icon'

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <Icon icon={faHome} active />
      <Icon icon={faUser} />
      <Icon icon={faFolder} />
      <Icon icon={faCog} />
    </div>
  )
}

const styles = {
  sidebar: {
    position: 'absolute',
    left: 0,
    top: '5rem',
    bottom: 0,
    backgroundColor: 'white',
    width: '5rem',
    zIndex: 1,
    borderRight: '1px solid rgba(0,0,0,0.1)'
  }
}

export default Sidebar
