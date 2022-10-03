import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const handleOnAdd = () => {
    MySwal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        text: 'Gracias por confiar en GG',
        confirmButtonColor: 'rgb(206, 66, 46)',
        confirmButtonText: '¡Excelente!'
    })
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

const ItemDetail = ({item}) => {
    return(
        <div className='itemCardDetailed'>
            <h1>Detalle del producto</h1>
            <h2>{item?.title}</h2>
            <img src={item?.pictureUrl} alt={item.pictureUrl}/>
            <p>{item?.description}</p>
            <h2>{item?.price}</h2>
            <ItemCount stock={item?.stock} onAdd={handleOnAdd} onAddError={handleOnAddError}/>
        </div>
    )
    
}


export default ItemDetail