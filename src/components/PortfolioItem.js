import React from 'react'

import RandomColor from '../utils/RangomColor'

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: RandomColor()
    }
  }

  render() {
    const { data } = this.props
    return (
      <div className="portfolio__item" style={styles.container}>
        <div style={styles.type}>
          <div
            style={{
              ...styles.icon,
              backgroundColor: this.state.color
            }}
          >
            {data.type[0]}
          </div>
          <p>{data.type}</p>
        </div>
        <div style={styles.date}>
          <p>{data.date}</p>
        </div>
        <div className="value" style={styles.value}>
          <p>$ {data.value}</p>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    fontSize: '1.6rem',
    display: 'flex',
    alignItems: 'center',
    padding: '1.8rem 2.5rem',
    margin: '2rem 0',
    borderRadius: '0.5rem',
    background: '#fff',
    textAlign: 'center',
    border: '2px solid #fff',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    boxShadow: '4px 4px 5px rgba(85, 85, 85, 0.11)'
  },
  type: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  date: {
    flex: 1
  },
  value: {
    flex: 1,
    color: '#1976d2',
    fontWeight: '500'
  },
  icon: {
    display: 'inline-block',
    fontWeight: 'bold',
    lineHeight: 1,
    padding: '1.2rem 1.4rem',
    backgroundColor: 'white',
    borderRadius: '50%',
    color: 'rgba(0,0,0,0.25)',
    margin: '.5rem'
  }
}

export default PortfolioItem
