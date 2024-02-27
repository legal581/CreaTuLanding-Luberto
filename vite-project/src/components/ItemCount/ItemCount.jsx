import { useState } from "react"
import {getProducts} from '../../asyncMock'


export const ItemCount = () => {
    const [count, setCount] = useState(0)


    const stock = 100

    const increment = () => {
        if (count < stock) {
            return setCount (count + 1)
        }

        setCount(count);

    }

    const decrement = () => {
        if (count == 0) {
            return setCount(count)
        }

        setCount(count - 1);

    }
    
  return (
    <div>
        <p>Cantidad: {count}</p>
        <button className="btn btn-primary inline-buttons m-3" onClick={increment}> + </button>
        <button className="btn btn-dark inline-buttons m-3" onClick={decrement}> - </button>
    </div>
  )
}


