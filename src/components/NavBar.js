import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars, faAngleDown } from '@fortawesome/fontawesome-free-solid/'

const NavBar = ({ user, userImage }) => {
  console.log(user)
  return (
    <div style={styles.navbar}>
      <div style={styles.sidebarMenuIcon}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div style={styles.profileMenu}>
        <img src={user.image} alt="profile pic" style={styles.profileImage} />
        <p style={styles.userName}>{user.name}</p>
        <div style={styles.downArrow}>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </div>
  )
}

const position = {
  position: 'absolute',
  top: 0
}

const centerWithFlex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const styles = {
  navbar: {
    ...position,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    height: '4rem',
    zIndex: 1,
    borderBottom: '1px solid rgba(0,0,0,0.1)'
  },
  sidebarMenuIcon: {
    ...position,
    left: 0,
    height: '4rem',
    width: '4rem',
    backgroundColor: 'white',
    color: '#444',
    fontSize: '2rem',
    fontWeight: '200',
    cursor: 'pointer',
    borderRight: '1px solid rgba(0,0,0,0.1)',
    ...centerWithFlex
  },
  profileMenu: {
    ...position,
    right: 0,
    height: '4rem',
    width: '12rem',
    backgroundColor: 'white',
    borderLeft: '1px solid rgba(0,0,0,0.1)',
    ...centerWithFlex
  },
  profileImage: { width: '2rem', height: '2rem', margin: 10 },
  userName: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#444'
  },
  downArrow: {
    marginLeft: 5,
    color: '#444'
  }
}

export default NavBar
