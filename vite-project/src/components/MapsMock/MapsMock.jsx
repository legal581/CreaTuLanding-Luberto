import { useEffect, useState } from "react"
//import { getProducts } from "../../asyncMock"
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { db } from "../../Config/firebaseConfig";
import './MapsMock.css'
import { ItemCount } from "../ItemCount/ItemCount";
//import ItemList from "../ItemList/ItemList";


export const MapsMock =  () => {
    const [products, setProducts] = useState([]);
    const getProductsDB = async () => {
        const myProducts = collection( db, "products");
        const response = await getDocs(myProducts);

        const productsList = response.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
            }));
            setProducts(productsList);
      };
useEffect (() => {
    getProductsDB();
},[]);
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
    );

};

