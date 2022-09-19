import './HeaderMobile.css'
import {Link,  useNavigate} from 'react-router-dom'
import { useEffect , useState} from 'react'

const HeaderMobile = () => {

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
    <div >

        <div className='header-mobile-box'>
        <Link className={`${active === ''? 'active':'' }`} to='/'>
          <img src="../../../image/icons/home.png" alt="home" />
        </Link>
        <Link className={active === 'movie'? 'active':''} to='/movie'>
          <img src="../../../image/icons/movies.png" alt="movies" />
        </Link>
        <Link className={active === 'tv'? 'active':''} to='/tv'>
          <img src="../../../image/icons/tv.png" alt="tv" />
        </Link>
        <Link className={active === 'top'? 'active':''} to='/top'>
          <img src="../../../image/icons/top.png" alt="top" />
        </Link>
        <Link className={active === 'favorites'? 'active':''} to='/favorites'>
          <img src="../../../image/icons/favorite.png" alt="favorites" />
        </Link>
        </div>
        <div className='seach-mobile'>
            <form onSubmit={(e)=>{e.preventDefault()}} >
                <img src="../../../image/icons/seach.png" alt="" />
                <input type="text" placeholder='Search'  onChange={(e)=> setSearchText(e.target.value)}/>
            </form>
        </div>
    </div>
  )
}

export default HeaderMobile