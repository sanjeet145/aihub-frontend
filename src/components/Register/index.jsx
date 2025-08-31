import React from 'react'
import RegisterCard from './RegisterCard'
import Navbar from '../Navbar'
export default function index() {
  return (
    <>
    <Navbar/>
    <div className='login-register'>
        <RegisterCard/>
    </div>
    </>
  )
}
