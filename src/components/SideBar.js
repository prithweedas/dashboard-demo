import React from 'react'
import {
  faHome,
  faUser,
  faCog,
  faFolder
} from '@fortawesome/fontawesome-free-solid/'

import Icon from './Icon'

const Sidebar = ({ active }) => {
  return (
    <div style={{ ...styles.sidebar, left: active ? 0 : '-5rem' }}>
      <Icon icon={faHome} active />
      <Icon icon={faUser} />
      <Icon icon={faFolder} />
      <Icon icon={faCog} />
    </div>
  )
}

const styles = {
  sidebar: {
    position: 'fixed',
    top: '5rem',
    bottom: 0,
    backgroundColor: 'white',
    width: '5rem',
    zIndex: 1,
    transition: 'all 300ms',
    borderRight: '1px solid rgba(0,0,0,0.1)'
  }
}

export default Sidebar
