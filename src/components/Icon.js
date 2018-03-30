import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Icon = ({ icon, active }) => {
  return (
    <div
      className={active ? 'active__icon' : ''}
      style={{
        ...styles.icon,
        color: active ? '#1976d2' : '#444'
      }}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}

const styles = {
  icon: {
    height: '4rem',
    width: '100%',
    fontSize: '2rem',
    fontWeight: '200',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
    marginBottom: '1rem',
    cursor: 'pointer'
  }
}
export default Icon
