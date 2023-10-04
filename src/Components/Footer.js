import React from 'react'
import './Footer.css'
import Order from './Order'

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;
  return (
    <div className='footer'>
      {isOpen ? (
        <Order closedHour={closedHour} />) : (
        <p>
          we are happy to welcome you between {openHour}:00 and {closedHour}:00.
        </p>
      )}
        </div>
  )
}

export default Footer;