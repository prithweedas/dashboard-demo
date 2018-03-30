import React from 'react'

import PortfolioData from '../data/portfolioData'

const PortFolio = () => {
  return (
    <div style={styles.container}>
      <div style={styles.listHeader}>
        <div>Type</div>
        <div>Date</div>
        <div>Value</div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: '100%',
    width: '90%',
    marginLeft: '5%'
  },
  listHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    border: '2px solid red'
  }
}

export default PortFolio
