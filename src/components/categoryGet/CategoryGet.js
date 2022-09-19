import './categoryGet.css'
import Api from '../../services/Api'
import {useState, useEffect}from 'react'
import ModalMovie from '../modalMovie/ModalMovie'
import { Link } from 'react-router-dom'



const TopHome = ({path, slug, title, type}) => {
    
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState('')


    // Reset movie select
    function resetState(){
        setMovie([])
    }



    useEffect(()=>{
        async function loadMovies(){
            const res = await Api.get(path)
            
            setMovies(res.data.results)

        }
        loadMovies()

        
    },[])


    
    useEffect(()=>{
        //add scrollHorizontal
    const scrollContainer = document.querySelector(`.${slug}`);

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
});
    },[movie])
    
    

        
        return (
            <div className={`categori-div`}>
                <div className='categori-top'>
                        <h5>{title}</h5>
                        <Link to={`category/${slug}`}> View More</Link>
                </div>
            <div className={`categori-box ${slug}`}>
                <span className='space-left'></span>
                {movies.map((item)=>(
                    <div onClick={()=>{(setMovie(item))}} key={item.id} >
                            <img loading="lazy" src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
                    </div> 
                ))}
                <span className='space-right'></span>

            </div>
            <div>
                {movie != '' ? <ModalMovie type={movie.media_type != undefined ? movie.media_type : type} resetState={resetState} movieId={movie.id} />:''}
            </div>

    </div>
  )
}

export default TopHome