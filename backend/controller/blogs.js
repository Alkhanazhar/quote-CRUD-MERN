const  mongoose = require("mongoose")
const Blog = require("../models/Blogs")

const router=require("express").Router()
router.get("/blogs",async(req,res)=>{
    try {
        const allBLogs =await Blog.find()
        res.status(200).json(allBLogs)   
    } catch (error) {
        res.status(400).json({msg:"somethig went Wrong"})  
        console.log(error)      
    }
})
router.get("/blogs/:id",async(req,res)=>{
    const {id}=req.params
    const quote=await Blog.findById(id)
    res.status(200).json(quote)
})
router.post("/blogs", async (req, res) => {
    const {author,blog,img}=req.body
    await Blog.create({author,blog,img})
    res.status(200).json({msg:"New blog created succesfully"})
})
module.exports=router