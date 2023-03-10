import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Auth.module.css'
import { useNavigate } from 'react-router';
const Login = () => {
  
  const navigate = useNavigate()

  const moveToSignUpHandler = () => {
     navigate("/")
  }
  return (
    <div className={styles.backgroundContainer}>
    <Form className={styles.background}>
         <h2 style={{textAlign:'center',marginBottom:"2rem",color:"white"}}>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={styles.formLabel}>Email address</Form.Label>
        <Form.Control className={styles.formControl} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={styles.formLabel}>Password</Form.Label>
        <Form.Control className={styles.formControl} type="password" placeholder="Password" />
      </Form.Group>
      <Button  className={styles.Button} type="submit">
        Submit
      </Button>
      <div style={{textAlign:"center",marginTop:"1rem"}}>
      <Button onClick={moveToSignUpHandler} className={styles.Button} style={{padding:"10px 80px "}} type="submit">
        Dont Have an account? SignUp
      </Button>
      </div>
    </Form>
    </div>
  );
}

export default Login