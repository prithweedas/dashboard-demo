import React, { Component } from 'react'

import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import DashBoard from './components/DashBoard'
import UserData from './data/user'
import './styles.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarActive: true
    }
  }

  // This is to simulate network fetch
  componentDidMount() {
    setTimeout(() => this.setState({ userData: UserData }), 500)
  }

  sideBarToggel = () => {
    this.setState(state => ({ sidebarActive: !state.sidebarActive }))
  }

  render() {
    if (!!!this.state.userData)
      return <div className="spinner" style={styles.spinner} />
    return (
      <div>
        <div style={styles.app} className="App">
          <SideBar active={this.state.sidebarActive} />
          <NavBar onBarPress={this.sideBarToggel} user={this.state.userData} />
          <DashBoard />
        </div>
        <div className="small__screen">
          <p>Device width needs to be greater than 640px </p>
        </div>
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
    right: 0,
    backgroundColor: '#f7f7f7',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  spinner: {
    width: '10vmin',
    height: '10vmin',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    borderRadius: '50%',
    border: '5px solid #c0c0c0'
  }
}

export default App
