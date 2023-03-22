import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchAuthor } from '../../../Redux-Store/email-actions'
import SendItems from './SendItems'
const Send = () => {
  const dispatch = useDispatch()
  const authorData = useSelector(state => state.email.emailContent)
  const currentLoggedEmail = useSelector(state => state.auth.authorEmail)
  const cleanLoggedInEmail = currentLoggedEmail.split(".").join("")
  console.log('authorData from send',authorData)

  useEffect(() => {
    dispatch(fetchAuthor(cleanLoggedInEmail))
    console.log("fetch author from the send.js")
  },[])

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