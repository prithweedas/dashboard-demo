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
    marginLeft: '5%'
  },
  tabItem: {
    color: '#95959f',
    fontWeight: '500',
    marginRight: '30px'
  },
  devider: {
    position: 'relative',
    marginLeft: '5%',
    height: '2px',
    width: '90%',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  activeDevider: {
    height: '2px',
    width: '20%',
    backgroundColor: '#1976d2'
  }
}

export default DashboardTab
