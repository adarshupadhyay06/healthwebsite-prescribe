import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const { aToken } = useContext(AdminContext)

  return (
    <div>
      {aToken && (
        <ul>
          <NavLink to="/admin-dashboard">Dashboard</NavLink>
          <NavLink to="/all-appointments">Appointments</NavLink>
          <NavLink to="/add-doctor">Add Doctor</NavLink>
          <NavLink to="/doctor-list">Doctors List</NavLink>
        </ul>
      )}
    </div>
  )
}

export default Sidebar
