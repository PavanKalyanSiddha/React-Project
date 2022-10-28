import React, { useState } from 'react'
import HomePage from './components/homePage/homePage'
import LoginPage from './components/login/loginPage'

const App = () => {
  const [loginPage, setLoginPage] = useState(true)
  return (
    <>
    {
      loginPage ? <LoginPage setLoginPage={setLoginPage}  /> : 
      <HomePage setLoginPage={setLoginPage} />

    }  
    </>
  )
}

export default App
