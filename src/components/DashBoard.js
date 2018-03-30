import React from 'react'

import FundsCard from './FundsCard'

class DashBoard extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <FundsCard totalFund="20600" increment="5.2" deposite="10500" />
      </div>
    )
  }
}
const styles = {
  container: {
    position: 'absolute',
    top: '4rem',
    left: '4rem',
    bottom: 0,
    right: 0,
    backgroundColor: '#eee'
  }
}
export default DashBoard
