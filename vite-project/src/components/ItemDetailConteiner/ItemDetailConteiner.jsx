import { useEffect, useState } from "react";
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailConteiner = () => {

    const { id } = useParams();
    const [item, setItem] = useState (null);

    useEffect (() => {
        getProduct(id)
        .then(resp =>{
            setItem(resp)
        })
    }, [])

    return (
        <> {item && <ItemDetail {...item}/>}
        </>
    )

}