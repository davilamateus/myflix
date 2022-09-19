import React from 'react'
import BannerHome from '../../components/bannerHome/BannerHome'
import Companies from '../../components/companies/Companies'
import CategoryGet from '../../components/categoryGet/CategoryGet'
import Categories from '../../services/Categories'



const Home = () => {


  return (

    <>
        <BannerHome/>
        <Companies/>
        <CategoryGet path={Categories[1].path} slug={Categories[1].slug} title={Categories[1].title}  page=''/>
        <span className='space'/>
    </>

    )
}

export default Home