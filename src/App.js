import React, { Component } from 'react'

import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import DashBoard from './components/DashBoard'
import UserData from './data/user'
import './styles.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    setTimeout(() => this.setState({ userData: UserData }), 500)
  }
  render() {
    if (!!!this.state.userData)
      return (
        <div className="spinner" style={styles.spinner}>
          <p />
        </div>
      )
    return (
      <div style={styles.app} className="App">
        <SideBar />
        <NavBar user={this.state.userData} />
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
    right: 0,
    overflow: 'hidden',
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
    border: '5px solid rgba(0,0,0,0.4)'
  }
}

export default App
