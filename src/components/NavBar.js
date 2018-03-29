import React, { Component } from 'react'

const NavBar = () => {
  return (
    <div style={styles.navbar}>
      <div style={styles.menuIcon} />
    </div>
  )
}

const styles = {
  navbar: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    backgroundColor: 'white',
    height: '4rem',
    zIndex: 1,
    borderBottom: '1px solid rgba(0,0,0,0.1)'
  },
  menuIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '4rem',
    width: '4rem',
    backgroundColor: '#fff',
    borderRight: '1px solid rgba(0,0,0,0.1)'
  }
}

export default NavBar
