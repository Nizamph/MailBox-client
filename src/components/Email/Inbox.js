import React from 'react'
import { useSelector } from 'react-redux'
const Inbox = () => {
  const recipientData = useSelector(state =>state.email.recipientData)
  console.log(recipientData)
  
  return (
    <div style={{marginLeft:"300px"}}>Inbox
    </div>
  )
}

export default Inbox