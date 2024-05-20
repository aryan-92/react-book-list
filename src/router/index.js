import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import BookList from '../pages/BookList'

function MyRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book-list' element={<BookList/>}/>
    </Routes>
  )
}

export default MyRouter