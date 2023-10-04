import React from 'react'

function Order(props) {
  return (
        <div className='order'>
          <p> 
            we are  open until {props.closedHour}:00. come visit us or order online
          </p>
          <button>order</button>
        </div>
  )
}

export default Order