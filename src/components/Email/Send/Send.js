import React from 'react'
import { useSelector } from 'react-redux'
import SendItems from './SendItems'
const Send = () => {
  const authorData = useSelector(state => state.email.emailContent)

  console.log(authorData)
  return (
    <div>
      <h3 style={{textAlign:"center"}}>Sent Emails</h3>
      {
        authorData?.map((item) => (
          <SendItems
           key={item.id}
           id={item.id}
           emailTo={item.toEmail}
           content={item.content}
           subject={item.subject}
           blue={item.blue}
          />
        ))
      }
      
    </div>
  )
}

export default Send