import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './Item.css'


const Item = ({item}) => {
    return (
        <div className='itemCard'>
            <h4>{item.title}</h4>
            <img src={item.pictureUrl} alt={item.pictureUrl}/>
            <h5>{`$${item.price}`}</h5>
            <Link to={`/detail/${item.id}`}><Button label={'Ver detalle'} background={'rgb(206, 66, 46)'}></Button></Link>
        </div>
    )
}


export default Item