import React from 'react'
import { Link } from 'react-router-dom';
import './main.css'
const Main = () => {
  return (
    <main className='main-container'>
        <div className='mian-content'>
            <h1>Share Your Memories</h1>
            <div className='link'>
                <Link to='/login'>Login</Link>
                <Link to='/sigup'>sigup</Link>
            </div>
        </div>
    </main>
  )
}

export default Main;