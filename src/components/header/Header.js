import './Header.css'
import {Link,  useNavigate} from 'react-router-dom'
import { useEffect , useState} from 'react'

const Header = () => {

  const [active, setActive] = useState('/')
  const [searchText, setSearchText] = useState('')
  
  
  useEffect(()=>{
    setActive(window.location.pathname.split('/')[1])
  
  },[useNavigate()])

  const navigate = useNavigate();


  useEffect(()=>{

    if(searchText !== ''){
      return(
          navigate(`search/${searchText}`)
      )

    }
  


  },[searchText])

 

  return (
    <div className='header-box'>
        <div className='logo'>
            <img src="./../../../image/icons/logo.png" alt="logo" />
        </div>
        <div>
        <Link className={active === ''? 'active':''} to='/'>
          <img src="../../../image/icons/home.png" alt="home" />
          <span>Home</span>
        </Link>
        <Link className={active === 'movie'? 'active':''} to='/movie'>
          <img src="../../../image/icons/movies.png" alt="movies" />
          <span>Movies</span>
        </Link>
        <Link className={active === 'tv'? 'active':''} to='/tv'>
          <img src="../../../image/icons/tv.png" alt="tv" />
          <span>Tv Sessions</span>
        </Link>
        <Link className={active === 'top'? 'active':''} to='/top'>
          <img src="../../../image/icons/top.png" alt="top" />
          <span>Top</span>
        </Link>
        <Link className={active === 'favorites'? 'active':''} to='/favorites'>
          <img src="../../../image/icons/favorite.png" alt="favorites" />
          <span>Favorites</span>
        </Link>
        </div>
        <div className='seach'>
            <form onSubmit={(e)=>{e.preventDefault()}} >
                <img src="../../../image/icons/seach.png" alt="" />
                <input type="text" placeholder='Search'  onChange={(e)=> setSearchText(e.target.value)}/>
            </form>
        </div>
    </div>
  )
}

export default Header