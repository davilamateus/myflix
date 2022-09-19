import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Api from '../../services/Api'
import {Link} from 'react-router-dom'
import './Search.css'
import ModalMovie from '../modalMovie/ModalMovie'

const Search = () => {


    const {text} = useParams() 
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState('')
    const [page, setPage] = useState(1)

 
    async function loadMovies(more){
      const res = await Api.get(`search/multi?api_key=fc38b829824811adfd0f77be846c5495&query=${text}&page=${page}`)
      if(more!==undefined){
        setMovies(movies.concat(res.data.results))
        console.log(movies)

      }else{ setMovies((res.data.results))
        console.log(movies)

      }
  }

  function resetState(){
    setMovie('')
}
  useEffect(()=>{
    loadMovies('true')
    

  },[page])

  useEffect(()=>{
    const url = window.location.pathname.split('/')

    if(url[url.length-1] >0){
        setMovie(url[url.length-1])
    }

},[])

  function addState(id) {
    let stateObj = { id: "100" };
    
    window.history.pushState(stateObj,
        "Movie", `/search?${text}&${id}`);
    }
  
  useEffect(()=>{
      setMovies([])
      setPage(1)
      
      loadMovies()


    },[text])

  return (
    <div className='search'>
        <div className='search-div' >{movies.map((item)=>(
           item.poster_path != null  && item.poster_path !=undefined ? 

            <div key={item.id+page} onClick={()=>{
              console.log(item.poster_path)

              setMovie(item)
              addState(item.id)
            }} to={`/movie/${item.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
            </div>
            : ''
            ))}</div>
            <button onClick={()=>{
              setPage(page+1)
              }}>View More</button>
                          <div>
                {movie != '' ? <ModalMovie type={movie.media_type} resetState={resetState} movieId={movie.id} />:''}
            </div>

    </div>
  )
}

export default Search