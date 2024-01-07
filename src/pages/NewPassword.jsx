import React from 'react'
import LoginLeft from '../components/Shared/LoginLeft'
import NewPasswordRightSide from '../components/Forgot Password/NewPasswordRightSide'

function NewPassword() {
  return (
    <div className='flex flex-row'>
        <LoginLeft />
        <NewPasswordRightSide />
    </div>
  )
}

export default NewPassword