import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {postPerson, fetchData, postDelet} from '../../Actions/Actions'
import './posts.css';
import Post from './post/Post';
const Posts = () => {
  const [information, setInformation] = useState({
    name:'',date:'', message: ''
  })
  const [dayid, setDayId] = useState();
  const [handleButton, setHandleButton] = useState(false);
  const [loading,setLoading] = useState(false)
  const token = useSelector(state => state.Token.token)
  const data = useSelector(state => state.Post.data)
  //console.log(alldata);

  //console.log(data);
  const dispatch = useDispatch()
  useEffect(()=>{
    setLoading(true)
    dispatch(fetchData(token))
    setLoading(false)
  },[information,dispatch,token])
  
  if(handleButton) {
    dispatch(postDelet(dayid,token))
    dispatch(fetchData(token))
    setHandleButton(false)
  }
  if(!token) return <Navigate to='/login' />
  const HandleInput = (e) => {
    setInformation({...information,[e.target.name]:e.target.value})
  }


  const HandleSubmit = (e) => {
    e.preventDefault()
    dispatch(postPerson(information,token))
    setInformation({ name:'',date:'', message: ''})
  }
  
  return (
    <main className='dash-main'>
      
      <div className='left-container'>
        {
          data && data.map(day => <Post name= {day.name}  date = {day.date} message = {day.message} key={day._id} id={day._id} getId = {setDayId} handleButton = {setHandleButton} />)
        }
      </div>
      <div className='form-container'>
            <form onSubmit={HandleSubmit} >
              <input type='text' placeholder='Occasion Name ..' name= 'name' autoComplete='off' value={information.name} onChange={HandleInput} />
              <input type='date' name= 'date' autoComplete='off' value={information.date} onChange={HandleInput} />
              <textarea cols='25' rows='10' placeholder='Enter Your message..' name='message' value={information.message} onChange={HandleInput} />
              <button disabled = {!information.name||! information.message||!information.date}>Save Memory</button>
            </form>
      </div>
    </main>
  )
}

export default Posts;