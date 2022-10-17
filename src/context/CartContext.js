import { useState, createContext } from "react"


export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (itemToAdd) => {
        if(!isInCart(itemToAdd.id)) {
            setCart([...cart, itemToAdd])
        } else {
            const cartUpdated = cart.map(item => {
                if(item.id === itemToAdd.id) {
                    const itemUpdated = {
                    ...item,
                    quantity: itemToAdd.quantity
                    }

                    return itemUpdated

                } else {
                    return item
                }
            })
            setCart(cartUpdated)
        }
    }
    
    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }
    
    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(item => item.id !== id)
        setCart(cartWithoutItem)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(item => {
            totalQuantity += item.quantity
        })

        return totalQuantity
    }

    const getItemQuantity = (id) => {
        const item = cart.find(item => item.id === id)
        return item?.quantity
    }
    

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getTotalQuantity, getItemQuantity }}>
            {children}
        </CartContext.Provider>
    )
}