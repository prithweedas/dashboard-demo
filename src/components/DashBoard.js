import React from 'react'

import FundsCard from './FundsCard'
import ActivitesSection from './ActivitesSection'

const DashBoard = () => {
  return (
    <div style={styles.container}>
      <FundsCard totalFund="20600" increment="5.2" deposite="10500" />
      <ActivitesSection />
    </div>
  )
}

const styles = {
  container: {
    position: 'relative',
    marginLeft: '5rem',
    marginTop: '5rem',
    backgroundColor: '#f7f7f7'
  }
}
export default DashBoard
