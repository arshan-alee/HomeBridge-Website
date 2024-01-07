import React from 'react'
import LoginLeft from '../components/Shared/LoginLeft'
import ForgotRightSide from '../components/Forgot Password/ForgotRightSide'

function ForgotPassword() {
  return (
    <div className='flex flex-row'>
        <LoginLeft />
        <ForgotRightSide />
    </div>
  )
}

export default ForgotPassword