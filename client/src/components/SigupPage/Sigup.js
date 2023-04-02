import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate, navigate } from 'react-router-dom'
import { fetchUser } from '../../Actions/Actions'
import './sigup.css'
const Sigup = () => {
  const [user,setUser] = useState({username:'',email:'',password:''})
  const [navigate, setNavigate] = useState(false);
  const [conformpassword,setConformPassword] = useState('')
  const dispatch = useDispatch();
  const InputHandler = e => {
    setUser({...user,[e.target.name]:e.target.value})
  }
  const SubmitHandler = e => {
    e.preventDefault()
    dispatch(fetchUser(user))
    setUser({username:'',email:'',password:''})
    setConformPassword('')
    setNavigate(true);
  }
  if(navigate){
    return <Navigate to='/login' />
  }
  return (
    <main className='main'>
      <div className='container'>
        <h1>Sign Up</h1>
        <form onSubmit={SubmitHandler}>
        <input type='text' name = 'username' value={user.username} placeholder="Enter your name .." autoComplete='off' onChange={InputHandler}/>
        <input type='email' name = 'email' value={user.email} placeholder="Enter your mail.." autoComplete='off' onChange={InputHandler}/>
        <input type='password' name = 'password' value={user.password} placeholder="Password" onChange={InputHandler}/>
        <input type='password' name = 'conformpassword'  placeholder="Conform Password" onChange={e => setConformPassword(e.target.value)}/>
        <button type='submit' disabled={!user.email||!user.password||!user.username||user.password !== conformpassword}>Sign up</button>
        <Link to='/login'>Login</Link>
        </form>
      </div>
    </main>
  )
}

export default Sigup;