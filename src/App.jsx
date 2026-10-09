
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signin from './pages/Signin.jsx';
import HomePage from './pages/HomePage.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
