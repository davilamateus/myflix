import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Favourites from './pages/favourites/Favourites'
import Movies from './pages/movies/Movies'
import Category from './pages/category/Category'
import Search from './components/search/Search'
import React from 'react'
import Tv from './pages/tv/Tv'
import Top from './pages/top/Top'
import HeaderMobile from './components/headerMobile/HeaderMobile'

const Routers = () => {
  return (

    <BrowserRouter>
       <Header/>
       <HeaderMobile/>
        <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<Home/>} path='home/:id' />
            <Route element={<Favourites/>} path='/favorites' />
            <Route element={<Movies/>} path='/movie' />
            <Route element={<Tv/>} path='/tv' />
            <Route element={<Top/>} path='/top' />
            <Route element={<Category/>} path='/category/:id' />
            <Route element={<Search/>} path='/search/:text' />

        </Routes>
    </BrowserRouter>

  )
}

export default Routers