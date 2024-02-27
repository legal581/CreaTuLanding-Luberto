import { useState , useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import { ItemList } from '../ItemList/ItemList'
import { Link } from 'react-router-dom'




const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
   
  return (
  <>
    <div>
        <p className = "display-5"> {greeting} </p>
        <Link to="/comerce">
        <button className="btn btn-primary m-3">Tienda Online</button>
        </Link>
       
    </div>
    <div>
    <img className="d-block w-100 img-fluid mx-auto" src="../src/components/MapsMock/Imagenes/Carousel02.jpg" alt="Imagen de fondo" />
    </div>
  </>
      
    
  )
}

export default ItemListContainer


