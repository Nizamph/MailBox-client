import React from 'react'
import { useSelector } from 'react-redux'
import InboxItems from './InboxItems'
const Inbox = () => {
  const recipientData = useSelector(state =>state.email.recipientData)
  console.log(recipientData)
  
  return (
    <div>
      <h3 style={{textAlign:"center"}}>Sent Emails</h3>
      {
        recipientData?.map((item) => (
          <InboxItems
           key={item.id}
           id={item.id}
           emailFrom={item.emailFrom}
           content={item.content}
           subject={item.subject}
          />
        ))
      }
      
    </div>
  )
}

export default Inbox