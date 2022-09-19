import Categories from './../../services/Categories'
import { useEffect, useState } from 'react'
import Api from '../../services/Api'
import './BannerHome.css'



const BannerHome = () => {

    const [movies, setMovies ] = useState([])
    const [bannerPage, setBannerPage] = useState(0)

    // Get News Movies
    useEffect(()=>{

        async function loadMovies(){
            const res = await Api.get(Categories[0].path)
            setMovies(res.data.results)
        }

        loadMovies()
        // autotransition
        setTimeout(() => {
            pageBannerBack()
        }, 10000);

    },[])


    // functions control banner
    function pageBannerBack(){
        setBannerPage(bannerPage-1)
        if(bannerPage<1){
            setBannerPage(9)
        }
    }

    function pageBannerNext(){
        setBannerPage(bannerPage+1)
        if(bannerPage==9){
            setBannerPage(0)
        }
    }


    
    // function animation banner ( item, time)
    function textBanner(item, time){
        const banners = document.querySelectorAll('.banner-box')
        for(let i = 0;i< banners.length;i++){
            document.querySelectorAll(`.${item}`)[i].style.opacity = '0'
        }
        setTimeout(() => {
            document.querySelectorAll(`.${item}`)[bannerPage].style.opacity = '1'         
        }, time);
    
    }

useEffect(()=>{
    const banners = document.querySelectorAll('.banner-box')
    // verific if banner loaded
    if(banners[bannerPage] !== undefined){
        textBanner('banner-text h2', 500)
        textBanner('banner-text h4', 700)
        textBanner('banner-text p',1000)
        for(let i = 0; i<banners.length; i++){
            banners[i].classList.add('banner-off')
            
        }
        banners[bannerPage].classList.remove('banner-off')
    }
},[bannerPage])



  return (
    <div>
        {movies.slice(0,10).map((item, index)=>(
          <div className={`banner-box ${index != 0 ? 'banner-off':''}`} id={index} key={item.id} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
              <div className='banner-degrade'>
                      <button className='banner-btn-back' onClick={ ()=>{ pageBannerBack()}}>{'<'}</button>
                      <button className='banner-btn-next' onClick={ ()=>{ pageBannerNext()}}>{'>'}</button>
                  <div className='banner-page'>
                    {
                        movies.slice(0,10).map((item, index)=>(
                            <span className={index === bannerPage ? 'page-select':''} key={`page@${index}`}></span>
                        ))
                    }
                  </div>
                  <div className='banner-text'>
                      <h4>New Movie</h4>
                      <h2>{item.title}</h2>
                      <p>{item.overview}</p>
                  </div>
              </div>
          </div>
        ))}
        <div className='banner-btns'></div>

    </div>
  )
}

export default BannerHome;