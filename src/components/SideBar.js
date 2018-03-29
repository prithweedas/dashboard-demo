import React, { Component } from 'react'

const Sidebar = () => {
  return <div style={styles.sidebar} />
}

const styles = {
  sidebar: {
    position: 'absolute',
    left: 0,
    top: '4rem',
    bottom: 0,
    backgroundColor: 'white',
    width: '4rem',
    zIndex: 1,
    borderRight: '1px solid rgba(0,0,0,0.1)'
  }
}

export default Sidebar
