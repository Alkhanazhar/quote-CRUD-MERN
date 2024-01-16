import React from 'react'
import styles from "./Blog.module.css"
import { useNavigate } from 'react-router-dom'
import Button from '../../utils/Button'

const Blog = ({author,blog,id}) => {
  const navigate=useNavigate()
  return (
    <div className={styles.blog}>
      <em className='italic font-bold'>{author}</em>
      <p className='flex flex-wrap'>{blog}</p>
      <button onClick={()=>navigate(`/${id}`)}>view</button>
    </div>
  )
}

export default Blog
