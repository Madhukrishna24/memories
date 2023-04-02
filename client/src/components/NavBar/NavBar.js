import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import './nav.css'
import { fetchLogin } from '../../Actions/Actions';


const NavBar = () => {
  const token = useSelector(state => state.Token.token)
  return (
    <header className='header'>
        <div className='logo'><h1>Memories</h1></div>
        <div className='ele'>
        {!token&&<div><Link to='/login'>Login</Link><Link to='/sigup'>Sign In</Link></div>}
        </div>
    </header>
  )
}
export default NavBar