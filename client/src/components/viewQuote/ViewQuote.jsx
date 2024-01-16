import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ViewQuote = () => {
    const [resData,setResData]=useState({
        author:"",
        blog:"",
        img:"",
    })
  const params=useParams()
  const navigate=useNavigate()
  async function fetchdata(){
    const res=await axios.get(`http://localhost:8000/blogs/${params.id}`)
    const {author,blog,img}=res.data
    setResData({author,blog,img})
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className='mt-6 container sm:px-10'>
    <button className='px-3 border' onClick={()=>navigate("/")}>home</button>
      <h1 className='mt-10 italic border-b-2 text-xl' >
      "{resData.author}"
      </h1>
      <p className='mt-14 text-4xl border-b-2'>{resData.blog}</p>
      <img src={resData.img} alt="" className='mt-10'/>
    </div>
  )
}

export default ViewQuote
