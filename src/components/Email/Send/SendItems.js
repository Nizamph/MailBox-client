import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import styles from '../EmailItems.module.css'
import { Link } from 'react-router-dom'

const SendItems = (props) => {
  return (
    <div>
      <Container className='lg-12 md-6 p-2 border border-grey mb-2'>
        <Link to={`/sendDetails/${props.id}`}>
        <div className={styles.flux}>
      <p>To: {props.emailTo}</p>
      <p>Subject: {props.subject}</p>
        </div>
        </Link>
      </Container>

 
    </div>
  )
}

export default SendItems