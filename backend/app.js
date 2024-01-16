const express=require("express")
const app=express()
const mongoose=require("mongoose")
const blogRoutes = require("./controller/blogs")
const cors=require("cors")
const env = require('dotenv').config()

app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())
try {
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log(process.env.MONGO_URL)
})
} catch (error) {
    console.log("error connecting");
}
const PORT = process.env.PORT || 8000
app.use(blogRoutes)
app.listen(8000,()=>{
    console.log("server running in 8000")
})
