import React,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Auth.module.css'
import { useNavigate } from 'react-router';
import { errorModalActions } from '../../Redux-Store/errorModal-slice';
import { useDispatch} from 'react-redux';
const Login = () => {
  
  const navigate = useNavigate()

  const moveToSignUpHandler = () => {
     navigate("/")
  }

  const[enteredEmail,setEnteredEmail] = useState('')
  const[enteredPassword,setEnteredPassword] = useState('')
  const[isLoading,setIsLoading] = useState(false)
  
  
  const dispatch = useDispatch()
  const formSubmitHandler = (e)  => {
    e.preventDefault()
    setIsLoading(true)
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlXgEK5KuClR6s4quTaWEDTD5UVMnx3N8',{
      method:"POST",
      body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword
      }),
      returnSecureToken:true,
      headers:{
        "Content-Type":"application/json"
      }
    }).then((response) => {
      setIsLoading(false)
      if(response.ok) {
        return response.json()
      }else {
        return response.json().then((response) => {
          let errorMessage = "Login Failed"
          if(response && response.error && response.error.message) {
            errorMessage = response.error.message
          }
          throw new Error(errorMessage)
        })
      }
    }).then((data) => {
      console.log(data)
    }).catch((err) => {
      dispatch(errorModalActions.onShow())
      dispatch(errorModalActions.errorMessage({message:err.message}))
    })
  }
  return (
    <div className={styles.backgroundContainer}>
    <Form className={styles.background} onSubmit={formSubmitHandler}>
         <h2 style={{textAlign:'center',marginBottom:"2rem",color:"white"}}>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={styles.formLabel}>Email address</Form.Label>
        <Form.Control className={styles.formControl} type="email" placeholder="Enter email" onChange={(e) =>{setEnteredEmail(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={styles.formLabel}>Password</Form.Label>
        <Form.Control className={styles.formControl} type="password" placeholder="Password" onChange={(e) =>{setEnteredPassword(e.target.value)}} />
      </Form.Group>
     {!isLoading && <Button  className={styles.Button} type="submit">
        Submit
      </Button>}
      {isLoading && <p style={{color:"white"}}>Loading...</p>}
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