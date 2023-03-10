import SignUp from './components/authentication/SignUp';
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom'
import Login from './components/authentication/Login';
function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
