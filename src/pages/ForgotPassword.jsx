import React from 'react'
import LoginLeft from '../components/Shared/LoginLeft'
import ForgotRightSide from '../components/Forgot Password/ForgotRightSide'
import Header from '../components/Shared/Header'

function ForgotPassword() {
  return (
    <>
      <Header />
      <div className='flex flex-row'>
          <LoginLeft />
          <ForgotRightSide />
      </div>
    </>
  )
}

export default ForgotPassword