import plus from './images/plus-solid.svg'
import minus from './images/minus-solid.svg'
import {useState} from 'react'
import Button from '../Button/Button'
import './ItemCount.css'

const ItemCount = ({stock, onAdd, onAddError}) => {
    const init = 1
    const [count, setCount] = useState(init)

    const incrementar = () => {
        count < stock && setCount(count+1)
    }

    const decrement = () => {
        count > 0 && setCount(count-1)
    }

    return(
        <div className='countContainer'>
            <input type="image" src={plus} alt="plus" onClick={incrementar}></input>
            <h3>{count}</h3>
            <input type="image" src={minus} alt="minus" onClick={decrement}></input>
            <Button label={"Agregar al carrito"} background={'rgb(206, 66, 46)'} action={(count > 0 && count <= stock) ? onAdd : onAddError}/>
        </div>
    )
}

export default ItemCount