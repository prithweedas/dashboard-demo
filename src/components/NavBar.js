import React from 'react'

const NavBar = ({ user, userImage }) => {
  console.log(user)
  return (
    <div style={styles.navbar}>
      <div style={styles.sidebarMenuIcon}>
        <img
          src={require('../assets/menu.png')}
          style={{ height: '50%', width: '50%' }}
          alt="menu icon"
        />
      </div>
      <div style={styles.profileMenu}>
        <img src={user.image} alt="profile pic" style={styles.profileImage} />
        <p style={styles.userName}>{user.name}</p>
        <img
          style={styles.downArrow}
          alt="down arrow"
          src={require('../assets/downarrow.png')}
        />
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
    fontWeight: '600'
  },
  downArrow: {
    height: '1rem',
    width: '1rem',
    marginLeft: 5,
    marginTop: 5
  }
}

export default NavBar
