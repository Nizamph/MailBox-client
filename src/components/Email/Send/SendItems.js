import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import styles from '../EmailItems.module.css'

const SendItems = (props) => {
  return (
    <div>
      <Container className='lg-12 md-6 p-2 border border-grey mb-2'>
        <div className={styles.flux}>
      <p>To: {props.emailTo}</p>
      <p>Subject: {props.subject}</p>
      <p>content: {props.content}</p>
        </div>
      </Container>

 
    </div>
  )
}

export default SendItems