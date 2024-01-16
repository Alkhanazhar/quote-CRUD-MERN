import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "../blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  async function data() {
    try {
      console.log(process.env.REACT_APP_BACK_END_URL);
      const res = await axios.get(`${process.env.REACT_APP_BACK_END_URL}`);
      setBlogs(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    data();
  }, []);
  return (
    <div className="flex flex-wrap text-slate-200">
      {blogs?.length > 0
        ? blogs?.map((item) => (
            <Blog
              key={item._id}
              id={item._id}
              author={item.author}
              blog={item.blog.substring(0, 50)}
            />
          ))
        : ""}
    </div>
  );
};

export default Blogs;
