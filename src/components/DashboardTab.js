import React from 'react'

const DashboardTab = () => {
  return (
    <div style={styles.container}>
      <div style={styles.tab}>
        <p style={styles.tabItem}>Portfolio</p>
        <p style={styles.tabItem}>Operations</p>
        <p style={styles.tabItem}>Fees</p>
        <p style={styles.tabItem}>Others</p>
      </div>
      <div style={styles.devider}>
        <div style={styles.activeDevider} />
      </div>
    </div>
  )
}

const styles = {
  tab: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '2rem'
  },
  tabItem: {
    fontSize: '1.3rem',
    color: '#95959f',
    fontWeight: '500',
    marginRight: '3rem',
    marginBottom: '1rem'
  },
  devider: {
    position: 'relative',
    marginLeft: '2rem',
    height: '.2rem',
    width: '90%',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  activeDevider: {
    height: '.2rem',
    width: '5.5rem',
    backgroundColor: '#1976d2'
  }
}

export default DashboardTab
