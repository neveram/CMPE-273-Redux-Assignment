import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions'
const Logout = () => {
  const userData = useSelector(state=>state.user)
  console.log(userData)
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    dispatch(logout())
  }
  return (
      <>
        <div>Welcome {userData?.name}</div>
        <button onClick={handleLogout}>Logout</button>
      </>
  )
}

export default Logout