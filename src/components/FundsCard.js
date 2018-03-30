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
    position: 'absolute',
    width: '25%',
    minWidth: '300px',
    height: '30%',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: `2px 2px 5px 0 rgba(0,0,0,0.3),
                -2px 2px 5px 0 rgba(0,0,0,0.3)`,
    top: '5%',
    right: '7%'
  },
  total: {
    fontSize: '3rem',
    fontWeight: '600',
    margin: 0,
    color: '#444',
    position: 'absolute',
    top: '10px',
    left: '20px',
    paddingLeft: '10px'
  },
  increment: {
    position: 'absolute',
    color: '#1976d2',
    fontWeight: '600',
    fontSize: '1.1rem',
    top: '10px',
    right: '20%'
  },
  deposite: {
    color: '#444',
    position: 'absolute',
    left: '20px',
    fontWeight: '500',
    bottom: '45%'
  },
  button: {
    position: 'absolute',
    color: 'white',
    backgroundColor: '#1976d2',
    height: '40px',
    width: '60%',
    minWidth: '60%',
    paddingLeft: '5px',
    paddingRight: '5px',
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
    transition: 'all 300ms'
  },
  text: {
    marginLeft: '5px',
    fontWeight: '500'
  },
  arrow: {
    height: '30px',
    width: '30px',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default FundsCard
