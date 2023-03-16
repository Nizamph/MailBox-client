import SignUp from './components/authentication/SignUp';
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom'
import Login from './components/authentication/Login';
import HomePage from './components/Pages/HomePage';
import { useSelector,useDispatch } from 'react-redux';
import Inbox from './components/Email/Inbox/Inbox';
import Send from './components/Email/Send/Send';
import ErrorModal from './components/UI/ErrorModal';
import { fetchRecipient, fetchAuthor } from './Redux-Store/email-actions';
import {useEffect} from 'react'
import EmailTextEditor from './components/Email/Email-components/EmailTextEditor';
function App() {
  const emailContent = useSelector(state => state.email.emailContent)
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const showErrorModal = useSelector(state => state.ui.show)
  const recipientEmail = useSelector(state => state.email.recepientEmail)
  const authorEmail = useSelector(state => state.auth.authorEmail)

  console.log(isLoggedIn)
  
  useEffect(() => {
    dispatch(fetchRecipient())
  },[dispatch])

  useEffect(() => {
    dispatch(fetchAuthor())
  },[dispatch])

//  useEffect(() => {
//   dispatch(sendEmail(emailContent,recipientEmail,authorEmail))
//   console.log("running")
//  },[dispatch,emailContent,recipientEmail,authorEmail])
  return (
    <div>
    <Header/>
     {showErrorModal && <ErrorModal message={showErrorModal.errorMessage} />}
    <Routes>
      <Route path='/Home' element={<HomePage/>}>
        <Route path='compose' element={<EmailTextEditor/>}/>
        <Route path='inbox' element={<Inbox/>}/>
        <Route path='send' element={<Send/>}/>
      </Route>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
