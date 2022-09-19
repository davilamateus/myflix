import React from 'react'
import Api from '../../services/Api'
import { useEffect, useState } from 'react'
import ModalMovie from '../modalMovie/ModalMovie'



const GetFavourite = ( {type, id, loadFavourite}) => {

    const [item, setItem] = useState()
    const [movie, setMovie] = useState('')
    const [movieStatus, setMovieStatus] = useState(false)

    const API_KEY = '?api_key=fc38b829824811adfd0f77be846c5495';


    useEffect(()=>{
        async function loadMovie(){
            const res = await Api.get(`${type}/${id}${API_KEY}`).catch(function (error) {
        });
            setItem(res.data)
          }
          
          loadMovie()
          
          
        },[])
        



    function resetState(){
        setMovie([])
        loadFavourite()
    }


  return (
    <>
        {item != undefined ? 
                     <div  onClick={()=>{(setMovie(item))}} key={item.id}  >
                            <img className='img-favourite' loading="lazy" src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
                    </div> 
    
        :''}
            <div>
            {movie != '' ? <ModalMovie type={movie.media_type != undefined ? movie.media_type : type} resetState={resetState} movieId={movie.id} />:''}
             </div>

    </>
  )
}

export default GetFavourite