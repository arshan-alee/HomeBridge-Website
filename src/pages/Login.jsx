import React from 'react'
import LoginLeft from '../components/Shared/LoginLeft'
import LoginRightSide from '../components/Login/LoginRightSide'
import Header from '../components/Shared/Header'

function Login() {
  return (
    <>
      <Header />
      <div className='flex flex-row'>
          <LoginLeft />
          <LoginRightSide />
      </div>
    </>
  )
}

export default Login