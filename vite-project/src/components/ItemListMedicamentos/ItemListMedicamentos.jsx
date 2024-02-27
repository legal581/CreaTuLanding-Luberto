import { useEffect, useState } from "react"
import { getProducts, getProductsByCategoria, getProductsByCategoriaMed } from "../../asyncMock"
import { ItemCount } from "../ItemCount/ItemCount"


export const ItemListMedicamentos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      getProductsByCategoriaMed()
      .then( resp =>{
          setProducts(resp);
      })
  }, [])
  return (
      <div className="carta">
           { products.map( product =>(
              <div key={product.id}>
                <div className="border bg-light rounded-3 border-1 border-dark">
                  <h5>{product.name}</h5>
                  <picture>
                     <img src={product.img} alt="Comprimidos" />
                  </picture>
                  <p>{product.descripcion}</p>
                  <p> Precio: ${product.price} </p>
                  <ItemCount></ItemCount>
                  <button className="btn bg-success m-2">Detalle</button>
                </div>
              </div>

           ))

           }
      
      </div>
  )
}