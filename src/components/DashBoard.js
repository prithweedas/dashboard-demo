import React from 'react'

class DashBoard extends React.Component {
  render() {
    return <div style={styles.container} />
  }
}
const styles = {
  container: {
    position: 'absolute',
    top: '4rem',
    left: '4rem',
    bottom: 0,
    right: 0,
    backgroundColor: '#fafafa'
  }
}
export default DashBoard
