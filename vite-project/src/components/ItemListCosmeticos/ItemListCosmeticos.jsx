import { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
//import { getProductsByCategoriaCos } from "../../asyncMock"
import { ItemCount } from "../ItemCount/ItemCount"
import { collection, doc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { db } from "../../Config/firebaseConfig";
import { useParams } from 'react-router-dom';



export const ItemListCosmeticos = () => {
  const {categoria} = useParams();

  const [products , setProducts] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const getProductsDB = ( cosmeticos )  => {
    const myProducts = categoria ? query( collection(db, "products"), where("categoria", "==", cosmeticos )) : collection(db,"products")
    
    getDocs(myProducts).then((response) => {
      const productList = response.docs.map((doc) => {
        const item = {
          id: doc.id,
          ...doc.data(),
        };
        return item;
      });
      setProducts(productList);
      //setIsLoading(false);
    });
  };
  useEffect (() => {
    getProductsDB(categoria);
}, [categoria]);
return (<> (
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
</>
)
}
  
 
 



     
  
