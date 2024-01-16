import React from 'react'
import Layout from './components/layout/Layout'
import { Route, Routes } from 'react-router-dom'
import AllBlogs from './components/pages/AllBlogs'
import New from './components/pages/New'
import ViewQuote from './components/viewQuote/ViewQuote'
// require("dotenv").config();
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllBlogs />}/>
        <Route path='/new' element={<New />}/>
        <Route path='/:id' element={<ViewQuote/>}/>
      </Routes>
    </Layout>
  )
}

export default App
