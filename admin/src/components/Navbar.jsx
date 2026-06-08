import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { setaToken } = useContext(AdminContext)
  const navigate = useNavigate()

  const logout = () => {
    setaToken('')
    localStorage.removeItem('aToken')
    navigate('/')
  }

  return (
    <div className='flex justify-between px-4 py-3 bg-white border-b'>
      <img src={assets.react} className="w-28" />
      <button onClick={logout} className="bg-primary text-white px-6 py-2 rounded-full">
        Logout
      </button>
    </div>
  )
}

export default Navbar
