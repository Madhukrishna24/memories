import React from 'react'
import './post.css'
const Post = ({name, date, message, id, getId, handleButton}) => {
  const handleId = (id) => {
    getId(id)
    handleButton(true)
  }

  return (
    <section className='content'>
      <div className='details'>
        <h1>{name}</h1>
        <h4>{date}</h4>
      </div>
      <div className='discription'>
        <p>{message}</p>
      </div>
      <div className='btn'>
        <button onClick={() =>handleId(id)}>Delete</button>
      </div>
    </section>
  )
}

export default Post;