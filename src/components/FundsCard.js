import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/fontawesome-free-solid'
const FundsCard = ({ totalFund, deposite, increment }) => {
  return (
    <div className="card" style={styles.container}>
      <p className="total__funds" style={styles.total}>
        {parseInt(totalFund, 10).toLocaleString('en-IN')}
      </p>
      <p className="deposite__funds" style={styles.deposite}>
        {'$' + parseInt(deposite, 10).toLocaleString('en-IN')}
      </p>
      <p className="increment__rate" style={styles.increment}>
        {increment}
      </p>
      <div className="button" style={styles.button}>
        <p style={styles.text}>Add funds</p>
        <div style={styles.arrow}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    position: 'fixed',
    float: 'right',
    width: '20rem',
    height: '15rem',
    padding: '.5rem',
    backgroundColor: 'white',
    borderRadius: '.5rem',
    boxShadow: `2px 2px 5px 0 rgba(0,0,0,0.3),
                -2px 2px 5px 0 rgba(0,0,0,0.3)`,
    top: '8rem',
    right: '2rem'
  },
  total: {
    fontSize: '3rem',
    fontWeight: '600',
    margin: 0,
    color: '#444',
    position: 'absolute',
    top: '2rem',
    left: '2rem',
    paddingLeft: '1rem'
  },
  increment: {
    position: 'absolute',
    color: '#1976d2',
    fontWeight: '600',
    fontSize: '1.5rem',
    margin: 0,
    top: '2rem',
    right: '2.5rem',
    paddingTop: '1rem'
  },
  deposite: {
    color: '#444',
    position: 'absolute',
    left: '2rem',
    fontWeight: '600',
    bottom: '45%'
  },
  button: {
    position: 'absolute',
    color: 'white',
    backgroundColor: '#1976d2',
    height: '3rem',
    width: '12rem',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: '15%',
    left: '20%',
    textDecoration: 'none',
    boxShadow: `2px 2px 5px 0 rgba(25, 118, 210, 0.3),
                -2px 2px 5px 0 rgba(25, 118, 210, 0.3)`,
    transition: 'all 300ms',
    cursor: 'pointer'
  },
  text: {
    marginLeft: '.5rem',
    fontWeight: '500'
  },
  arrow: {
    height: '2rem',
    width: '2rem',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default FundsCard
