import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({items}) => {
    return <ul className='itemsContainer'>{items.map(item => <li key={item.id}><Item item={item}/></li>)}</ul>
}


export default ItemList