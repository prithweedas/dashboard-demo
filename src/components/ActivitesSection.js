import React from 'react'

import DashboardTab from './DashboardTab'
import Portfolio from './Portfolio'

const ActivitiesSection = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Activites</h1>
      <DashboardTab />
      <Portfolio />
    </div>
  )
}

const styles = {
  container: {
    position: 'absolute',
    width: '60%',
    left: 0,
    top: 0,
    height: '100%',
    color: '#444'
  },
  heading: {
    display: 'block',
    marginLeft: '2rem',
    marginBottom: '2rem',
    marginTop: '2rem'
  }
}

export default ActivitiesSection
