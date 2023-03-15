import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Notification = (props) => {
  const notificationShow = useSelector(state => state.ui.showStatus)
  const[show,setShow] = useState(notificationShow)
  setShow( notificationShow )
  return (
    <div show={show}>
     <p style={{color:"rgb(233, 49, 79)"}}>{props.message}</p>
    </div>
  )
}

export default Notification