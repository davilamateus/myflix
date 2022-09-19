import Categories from "../../services/Categories"
import Api from "../../services/Api"
import CategoyGet from '../../components/categoryGet/CategoryGet'

const Movies = () => {
  return (
    <div className="page-div">
      <div className="container">
        <div className="img-title">
          <img src="../../../image/titles/movies.png" alt="Movies" />
        </div>
        <hr />

      </div>
      {Categories.map((item, index)=>(
         item.type === 'movies' ? 
          
         <CategoyGet key={item.slug}  path={item.path} slug={item.slug} title={item.title} type={'movie'} /> 

        :''   
      ))}

    </div>
  )
}

export default Movies