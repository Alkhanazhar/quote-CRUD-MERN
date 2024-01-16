import axios from 'axios'
import React, { useRef } from 'react'
import styles from "./New.module.css"
import { useNavigate } from 'react-router-dom'
const NewForm = () => {
  const navigate=useNavigate()
  const authorRefInput=useRef()
  const blogRefInput=useRef()
  const imgRefInput=useRef()

const handleSubmit=async(e)=>{
e.preventDefault()
const author=authorRefInput.current.value;
const blog=blogRefInput.current.value;
const img=imgRefInput.current.value;
console.log("submitting")
if(img==="" || blog==="" || author===""){
  console.log("empty string")
  return
}
else{
  try {
    const res=await axios.post(`${process.env.REACT_APP_BACK_END_URL}`,{author,blog,img})
  } catch (error) {
    return console.log("you can't post")
  }
  navigate("/")
}
}
  
  return (
   <div className='container mx-auto my-10 w-3/6 p-4 text-lg bg-slate-400 shadow-2xl'>
    <form method="post" onSubmit={handleSubmit}>
    <div className='m-2'>
      <label htmlFor="author" className='block capitalize'>author</label>
      <input type="text" className={styles.input} name='author' placeholder='author' ref={authorRefInput}/>
    </div>
    <div className='m-2'>
      <label htmlFor="blog" className='block capitalize'>blog</label>
      <textarea type="text" name='blog' placeholder='blog' rows={5} className={styles.textarea} ref={blogRefInput}/>
    </div>
    <div className='m-2'>
      <label htmlFor="img" className='block capitalize'>image</label>
      <input type="text" name='img' placeholder='imgUrl' className={styles.input} ref={imgRefInput}/>
    </div>
        <button className='p-2'>submit</button>
    </form>
   </div>
  )
}

export default NewForm
