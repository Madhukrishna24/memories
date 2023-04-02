import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Navigate} from 'react-router'
import { Link } from 'react-router-dom'
import { fetchLogin } from '../../Actions/Actions'
const Login = () => {
  const token =  useSelector(state => state.Token.token)
  const [data,setData] = useState({email:'',password:''})
  const dispatch = useDispatch()
  const HandleInput = e => {
    setData({...data,[e.target.name]:e.target.value})
 
  }
  const HandleSubmit = e => {
    e.preventDefault()
    dispatch(fetchLogin(data))
    setData({email:'',password:''})
}

if(token) {
  return <Navigate to='/admin' />
}
if(!token){
  return (
    <main className='main'>
      <div className='container'>
        <form onSubmit={HandleSubmit}>
          <input type="email" placeholder='Enter your Mail..' name='email' value={data.email} onChange={HandleInput} />
          <input type="password" placeholder='Password' name='password' value={data.password} onChange= {HandleInput}/>
          <input type='submit' value='Login'className='btn'/>
          <Link to='/sigup'>Signup</Link>
        </form>
      </div>
    </main>
  )
}
 
}

export default Login