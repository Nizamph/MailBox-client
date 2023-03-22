import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { fetchRecipient } from '../../../Redux-Store/email-actions'
import InboxItems from './InboxItems'
const Inbox = () => {
  const dispatch = useDispatch()
  const recipientData = useSelector(state =>state.email.recipientData)
  const currentLoggedEmail = useSelector(state => state.auth.authorEmail)
  const cleanLoggedInEmail = currentLoggedEmail.split(".").join("")
  console.log('recipient data from inbox',recipientData)
  useEffect(() => {
    dispatch(fetchRecipient(cleanLoggedInEmail))
  },[])
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