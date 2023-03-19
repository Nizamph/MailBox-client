import React from 'react'
import styles from '../EmailItems.module.css'
import { Container } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { emailActions } from '../../../Redux-Store/email-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { updateReadInbox } from '../../../Redux-Store/email-actions'
const InboxItems = (props) => {
  const dispatch = useDispatch()
  const recipientData = useSelector(state => state.email.recipientData)
  const currentLoggedEmail = useSelector(state => state.auth.authorEmail)
  console.log(recipientData)
  console.log('email from inbox',currentLoggedEmail)
  
  const onClickHandler = (e) => {
    e.preventDefault()
  
 const   updateRecipientData =  recipientData.map((item) => {
    let emailContent = {
      subject:item.subject,
      content:item.content,
      blue:false,
    }

  
      if(item.id === props.id) {
        dispatch(updateReadInbox( item.authorEmail,emailContent,item.id,currentLoggedEmail))
        return {...item,blue:false}
        
      }
      return item
    })

    //  let readUpdation = {...recipientData,blue:false}
    dispatch(emailActions.recipientData(updateRecipientData))

  }

  
 

  
  return (
    <div>
      
    <Container className='lg-12 md-6 p-2 border border-dark mb-2'>
    <button onClick={onClickHandler} className={styles.emailSelector}>
      <div className={styles.flux}>
      
      <div className={props.blue?styles.readStatus:''}>
      </div>
      <div>
      <Link to={`/inboxdetails/${props.id}`} className="d-flex">  
    <p style={{marginLeft:"9rem",marginRight:"9rem",marginTop:"10px"}}>From: {props.emailFrom}</p>
    <p style={{marginLeft:"9rem",marginRight:"9rem",marginTop:"10px"}}>Subject: {props.subject}</p>
    </Link> 
      </div>
      </div>
      </button>
    </Container> 
    
  </div>
  )
}

export default InboxItems