import cart from './assets/cart-shopping-solid.svg'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { getTotalQuantity } = useContext(CartContext)
    const totalQuantity = getTotalQuantity()


    return (
        <><Link to='/cart'><img src={cart} alt='cart'/>{totalQuantity}</Link></>
    )
}

export default CartWidget;