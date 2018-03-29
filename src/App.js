import React, { Component } from 'react'

import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import DashBoard from './components/DashBoard'

class App extends Component {
  render() {
    return (
      <div style={styles.app} className="App">
        <SideBar />
        <NavBar />
        <DashBoard />
      </div>
    )
  }
}

const styles = {
  app: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
}

export default App
