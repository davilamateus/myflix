import Categories from "../../services/Categories"
import CategoyGet from '../../components/categoryGet/CategoryGet'

const Tv = () => {

  return (
    <div className="page-div">
      <div className="container">
        <div className="img-title">
          <img src="../../../image/titles/tv.png" alt="Tv" />
        </div>
<hr />

      </div>
      {Categories.map((item, index)=>(
         item.type === 'tv' ? 
         <CategoyGet key={item.slug}  path={item.path} slug={item.slug} title={item.title} type={'tv'} /> 

        :''   
      ))}

    </div>
  )
}

export default Tv