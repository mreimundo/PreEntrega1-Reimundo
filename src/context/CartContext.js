import { useState, createContext } from "react"
//import Swal from 'sweetalert2'
//import withReactContent from "sweetalert2-react-content"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    //const MySwal = withReactContent(Swal)

    const addItem = (itemToAdd) => {
        if(!isInCart(itemToAdd.id)) {
            setCart([...cart, itemToAdd])
            return true
        } else {
            /*MySwal.fire({
                title: 'El producto ya esta agregado',
                icon: 'error',
                confirmButtonColor: 'rgb(206, 66, 46)'
            }
            )*/
            return false
        }
    }
    
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    
    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }
    

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getTotalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}