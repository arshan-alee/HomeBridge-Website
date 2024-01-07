import React from 'react'
import LoginLeft from '../components/Shared/LoginLeft'
import RegisterRightSide from '../components/Register/RegisterRightSide'

function Register() {
  return (
    <div className="flex flex-row">
        <LoginLeft />
        <RegisterRightSide />
    </div>
  )
}

export default Register