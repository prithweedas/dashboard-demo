import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/fontawesome-free-solid'

import PortfolioData from '../data/portfolioData'

const PortFolio = () => {
  return (
    <div style={styles.container}>
      <div style={styles.listHeader}>
        <div style={styles.listHeaderItem}>
          Type{' '}
          <span style={styles.icon}>
            <FontAwesomeIcon icon={faSortDown} />
          </span>
        </div>
        <div style={styles.listHeaderItem}>
          Date{' '}
          <span style={styles.icon}>
            <FontAwesomeIcon icon={faSortDown} />
          </span>
        </div>
        <div style={styles.listHeaderItem}>
          Value{' '}
          <span style={styles.icon}>
            <FontAwesomeIcon icon={faSortDown} />
          </span>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: '100%',
    width: '90%',
    marginLeft: '2rem'
  },
  listHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '3rem'
  },
  listHeaderItem: {
    fontSize: '1.3rem',
    color: '#95959f',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500'
  },
  icon: {
    marginLeft: '.5rem'
  }
}

export default PortFolio
