import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Api from '../../services/Api'
import './ModalMovie.css'
import movieTrailer from 'movie-trailer'


const ModalMovie = ({movieId, resetState, type}) => {
  const [movie, setMovie] = useState([])
  const [trailerStatus, setTrailerStatus] = useState(false)
  const [movieTrailerUrl, setMovieTrailerUrl] = useState('')
  const API_KEY = '?api_key=fc38b829824811adfd0f77be846c5495';
  const [favouriteStatus, setFavouriteStatus]= useState(false)


  
  
  useEffect(()=>{
        movieTrailer( `${movie.title} `, {id: true, multi: false} )
        .then( response => setMovieTrailerUrl(response) ) 

        setTimeout(() => {
          if(document.querySelector('.modal-body') !=null){
            document.querySelector('.modal-body').style.opacity = '1'  
            document.querySelector('.modal-body').style.marginTop = '0px'  

          }
          if(document.querySelector('.modal-error') != null){
            document.querySelector('.modal-error').style.opacity = '1'  

          }
             
        }, 100);

  },[movie])



  useEffect(()=>{
    
    setTimeout(() => {
      if(movieTrailerUrl !== null){
        setTrailerStatus(true)
      } else{
        setTrailerStatus(false)
      }
    
      
    }, 3000);

  },[movieTrailerUrl])
  

  useEffect(()=>{
  

    async function loadMovie(){
      const res = await Api.get(`${type}/${movieId}${API_KEY}`).catch(function (error) {
  });

      setMovie(res.data)
    }
    
    loadMovie()

    
  },[movieId])



useEffect(()=>{

  function addState(id) {
    let stateObj = { id: "100" };
    const url = window.location.pathname.split('/')[1]
    if(window.location.pathname.split('/')[1] !== '' ){
        window.history.pushState(stateObj,
            "Movie", `/${url}/${id}`);


    } else{
      window.history.pushState(stateObj,
        "Movie", `home/${id}/`);

    }

    }

    addState(movieId)


    checkFavourite()
    

},[])


function checkFavourite(){
  
  
  const local = localStorage.getItem('@favourites')
  
  let list = JSON.parse(local) ||[]
  console.log(list)
  
  const hasMovie = list.some((item)=>
  item.type === type && item.id == movieId
  
  )

  if(hasMovie){
    setFavouriteStatus(true)
  }  else{    setFavouriteStatus(false)
  }
}




  function favourite(id , type){

    const local = localStorage.getItem('@favourites')
    
    let list = JSON.parse(local) ||[]
    
    const hasMovie = list.some((item)=>
    item.type === type && item.id == id
    
    )
 
    if(hasMovie){
      setFavouriteStatus(true)

      let newList = list.filter((item)=>{
        if(item.id !== id){
          return (item)
        }
      })
      localStorage.setItem('@favourites',JSON.stringify(newList))
      setTimeout(() => {
        
      }, 2000);
      checkFavourite()



    } else{
      setTimeout(() => {
        checkFavourite()
        
      }, 200);
      localStorage.setItem('@favourites',JSON.stringify(list.concat({type:type, id:id})))

    }

 
    
  }  
  
  function addState() {
    let stateObj = { id: "100" };
 
      if(window.location.pathname.split('/')[1] ==='home'){
        window.history.pushState(stateObj,"", `/`);

      }  else{
        window.history.pushState(stateObj,"", `/${window.location.pathname.split('/')[1]}`);

      }
            }
    
            return (
              movie.backdrop_path != undefined || movie.backdrop_path != null?  
              
              <div className='modal-page'>
                <div className='modal-div'>
                      <div className='filter' onClick={()=>{resetState() 
                                                      addState()
                                                    }}></div>
                      <div className='modal-body  '>
                        <div className='modal-backdrop' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
                        <div className='video-trailer'>
                            {trailerStatus === true ?  <iframe width="100%" height="130%"  src={`https://www.youtube.com/embed/${movieTrailerUrl}?controls=0&autoplay=1&loop=1` }allow="accelerometer; autoplay;  encrypted-media;  gyroscope; picture-in-picture" ></iframe> : ''}
                        </div>
                        <div className='video-trailer-block'>
                              <div className='close-btn'>
                                  <img  onClick={()=>{
                                addState()
                                resetState()
                                }} 
                                src='./../../../image/icons/close.png'/>
                                </div>
                            <div className='modal-info'>
                                  <div className='modal-btns'>
                                      <a href={`https://www.youtube.com/watch?v=${movieTrailerUrl}`}>
                                        <img src="../../../image/icons/watch.png" />
                                      </a>
                                      <div onClick={()=>{favourite(movie.id, type)}}>
                                        <img src={`../../../image/icons/${ favouriteStatus == true? 'favoriteActive' : 'favoriteOff'}.png`}/>
                                      </div>
                                  </div>
                                  <h1>{movie.title !=undefined ? movie.title : movie.name}</h1>
                            </div>

                        </div>

                        </div>
                        <div>
                          <div className='modal-infos'>
                            <div className='modal-top'>
                                <div className='modal-infor-left'>
                                  <div className='modal-gener'>
                                    {movie.genres !== undefined ? (movie.genres).map((item)=>(<Link key={item.id} to={`${item.id}`}>{item.name}</Link>)):``}
                                  </div>
                                  <div className='modal-detals'>
                                      <p className='modal-relance'> Relevance {parseFloat((movie.vote_average)).toFixed(2)}</p>
                                      {movie.release_date !== undefined ? <p className='modal-date'> {movie.release_date.split('-')[0]} </p>:``}
                                      {movie.runtime !== undefined ? <p className='modal-runtime'> {movie.runtime}min </p>:``}
                                  </div>
                                </div>
                                <div className='modal-right'>
                                    {movie.production_companies != undefined ? 
                                    <div className='modal-companies'>
                                        <p> Companies </p> 
                                        {movie.production_companies.map((item)=>(
                                          item.logo_path !== null ? 
                                            <Link key={item.id} to={`/${item.id}`}>
                                            <img src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}></img>
                                          </Link>
                                            :''

                                        ))}
                                    </div>
                                    :``}

                                </div>

                            </div>
                            <div className='modal-bottom'>
                            {movie.overview !== undefined ? <p className='modal-overview'> {movie.overview} </p>:``}


                            </div>
                          </div>
                        </div>
                                      
                      </div>
                </div>
              </div>
              :
              <div className='modal-page'>
                    <div className='filter' onClick={()=>{resetState()}}></div>
                    <div className='modal-body'>
                      <div className='modal-error'>
                          <h1 >Sorry, this content is not available!</h1>

                      </div>
                    </div>
                    </div>
        ) 
  
  
}

export default ModalMovie