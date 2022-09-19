import React, { useEffect, useState } from 'react'
import GetFavourite from './GetFavourite'
import './favourite.css'

const FavouritesComponent = () => {

  const [movies, setMovies] = useState([])

useEffect(()=>{
  loadFavourite()
  
},[])


function loadFavourite(){
  setMovies(JSON.parse(localStorage.getItem('@favourites')) )
  console.log('carregou')

}

  
  return (


    <div className="favourite-box">
      <span className='space-left'></span>
      {movies.map((item)=>(
        <div  key={ item.id+item.type}>
          <GetFavourite  className='favourite-img' id={item.id} type={item.type} loadFavourite={loadFavourite}/>
        </div>
      ))}
    </div>
  

    )
}

export default FavouritesComponent