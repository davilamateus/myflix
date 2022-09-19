import Categories from "../../services/Categories"
import CategoyGet from '../../components/categoryGet/CategoryGet'

const Top = () => {
  return (
    <div className="page-div">
      <div className="container">
        <div className="img-title">
          <img src="../../../image/titles/top.png" alt="Top" />
        </div>
        <hr />

      </div>
      {Categories.map((item, index)=>(
         item.type === 'top' ? 
          
         <CategoyGet key={item.slug}  path={item.path} slug={item.slug} title={item.title} type={'movie'} /> 

        :''   
      ))}

    </div>
  )
}

export default Top