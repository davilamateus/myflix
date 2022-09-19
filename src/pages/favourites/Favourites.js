import React from 'react'
import FavouritesComponent from '../../components/getFavourite/Favourites'

const Favourites= () => {
  return (
    <>
    <div className="page-div">
      <div className="container">
        <div className="img-title">
          <img src="../../../image/titles/favourite.png" alt="favourite" />
        </div>
        <hr />
      </div>       
       </div>

      <FavouritesComponent/>
    </>
  )
}

export default Favourites