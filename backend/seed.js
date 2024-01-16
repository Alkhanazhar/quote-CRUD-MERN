const mongoose=require("mongoose")
const env=require('dotenv').config()
const Blog = require("./models/Blogs")
mongoose.connect(
  process.env.MONGO_URL).then(() => {
    console.log("connected db")
})
const seedBlogs=[
    {
        author:"mahatma gandhi",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HtpU6-1mr29p0xZtKth7Tb5qnxHIq60UvXKMxNfBSg&s",
        blog: "Few other public figures have inspired artistic imaginations as sustainably as Mahatma Gandhi had done. Here was a man who hardly watched films, rarely attended a concert of classical music and demonstrated no great interest in Western-style modernism in the visual and performing art forms.To understand Gandhi’s psyche, therefore, one has to visit his ideas on the arts, literature and their creators.On December 10, 1931, he told Romain Rolland: “I am against the formula of ‘art for art’s sake’.For me, all art must be based on truth.” Seven years later, he said, “We have somehow accustomed ourselves to the belief that art is independent of the purity of private life… I can say that purity of life is the highest and truest art.The art of producing good music from a cultivated voice can be achieved by many, but the art of producing that music from the harmony of a pure life is achieved very rarely.”",
        category:"philosophy"
    },
    {
        author: "mahatma gandhi",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HtpU6-1mr29p0xZtKth7Tb5qnxHIq60UvXKMxNfBSg&s",
        blog: "Few other public figures have inspired artistic imaginations as sustainably as Mahatma Gandhi had done. Here was a man who hardly watched films, rarely attended a concert of classical music and demonstrated no great interest in Western-style modernism in the visual and performing art forms.To understand Gandhi’s psyche, therefore, one has to visit his ideas on the arts, literature and their creators.On December 10, 1931, he told Romain Rolland: “I am against the formula of ‘art for art’s sake’.For me, all art must be based on truth.” Seven years later, he said, “We have somehow accustomed ourselves to the belief that art is independent of the purity of private life… I can say that purity of life is the highest and truest art.The art of producing good music from a cultivated voice can be achieved by many, but the art of producing that music from the harmony of a pure life is achieved very rarely.”",
        category: "philosophy"
    }
]
async function Seed(){
    try {
        await Blog.deleteMany({})
        await Blog.insertMany(seedBlogs)
        console.log(process.env.MONGO_URL)
        console.log("mongo db created")
    } catch (error) {
        console.log(err.message) 
    }
}
Seed()