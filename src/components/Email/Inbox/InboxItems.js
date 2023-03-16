import React from 'react'
import styles from '../EmailItems.module.css'
import { Container } from 'react-bootstrap'
const InboxItems = (props) => {
  return (
    <div>
    <Container className='lg-12 md-6 p-2 border border-grey mb-2'>
      <div className={styles.flux}>
    <p>To: {props.emailFrom}</p>
    <p>Subject: {props.subject}</p>
    <p>content: {props.content}</p>
      </div>
    </Container>


  </div>
  )
}

export default InboxItems