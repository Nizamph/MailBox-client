import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import InboxItems from './InboxItems'
const Inbox = () => {
  const recipientData = useSelector(state =>state.email.recipientData)
  console.log(recipientData)
  
  return (
    <div>
      <h3 style={{textAlign:"center"}}>Recieved Emails</h3>
      {
        recipientData?.map((item) => (
          <InboxItems
           key={item.id}
           id={item.id}
           blue={item.blue}
           emailFrom={item.authorEmail}
           content={item.content}
           subject={item.subject}
          />
        ))
      }
    </div>
  )
}

export default Inbox