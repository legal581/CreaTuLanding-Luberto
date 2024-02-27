import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ descripcion, name, price, img, stock }) => {

    return (
        <div className="border m-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <img src={img} alt="" />
                    <p> Precio: ${price} </p>
                    <p className="card-text">{descripcion}</p>
                    <ItemCount></ItemCount>
                </div>
            </div>
        </div>
    )
}