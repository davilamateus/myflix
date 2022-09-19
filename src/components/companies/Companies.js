import{Link} from 'react-router-dom'
import './Companies.css'
import { useEffect } from 'react'


const Companies = () => {

    useEffect(()=>{
        //add scrollHorizontal
    const scrollContainer = document.querySelector(`.companies-box`);

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
});
    },[])



  return (
    <div className='companies-div'>
        <p>find the right movie for you.</p>
        <div className='companies-box'>
        <span className='space-right'></span>

            <div  >
                <img src='../../../image/logos/Image 4.png' ></img>
            </div>
            <div >
                <img src='../../../image/logos/Image 5.png' ></img>
            </div>
            <div  >
                <img src='../../../image/logos/Image 6.png' ></img>
            </div>
            <div  >
                <img src='../../../image/logos/Image 7.png' ></img>
            </div>
            <div  >
                <img src='../../../image/logos/Image 8.png' ></img>
            </div>
            <div>
                <img src='../../../image/logos/Image 9.png' ></img>
            </div>
        <span className='space-right'></span>
        </div>

        <hr />
    </div>
  )
}

export default Companies