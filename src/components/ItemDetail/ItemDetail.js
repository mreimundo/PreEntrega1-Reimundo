import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { NotificationContext } from '../../Notification/Notification'

const ItemDetail = ({id, title, pictureUrl, description, price, stock}) => {
    const MySwal = withReactContent(Swal)
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const { addItem } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)


    const handleOnAdd = (quantity) => {
        /*MySwal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            text: 'Gracias por confiar en GG',
            confirmButtonColor: 'rgb(206, 66, 46)',
            confirmButtonText: '¡Excelente!'
        })*/
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, title, price, quantity
        }

        addItem(productToAdd) ? setNotification(`Se agregó correctamente ${quantity} ${title} al carrito`, 'success') : setNotification(`Ya se agregó ${title} al carrito`, 'error')

    }
    
    const handleOnAddError = () => {
        MySwal.fire({
            icon: 'error',
            title: 'No se pudo agregar al carrito',
            text: 'Verifique que la cantidad es válida',
            confirmButtonColor: 'rgb(206, 66, 46)',
            confirmButtonText: 'Voy a validar...'
        })
    }

    return(
        <div className='itemCardDetailed'>
            <h1>Detalle del producto</h1>
            <h2>{title}</h2>
            <img src={pictureUrl} alt={title}/>
            <p>{description}</p>
            <h2>{price}</h2>
            {quantityToAdd === 0 ? (<ItemCount stock={stock} onAdd={handleOnAdd} onAddError={handleOnAddError}/>) : (<Link to='/cart'>Finalizar compra</Link>)}
            
        </div>
    )
    
}


export default ItemDetail