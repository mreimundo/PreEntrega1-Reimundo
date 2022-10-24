import { useState, useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import CartForm from '../CartForm/CartForm'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    const MySwal = withReactContent(Swal)

    const createOrder = async (buyer) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer,
                items: cart,
                total
            }
        
        const ids = cart.map(item => item.id)
        const itemsRef = collection(db, 'items')

        const itemsDb = await getDocs(query(itemsRef, where(documentId(), 'in', ids)))
        const { docs } = itemsDb

        const batch = writeBatch(db)
        const itemsWithoutStock = []

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock
            const itemInCart = cart.find(item => item.id === doc.id)
            const itemQuantity = itemInCart?.quantity

            stockDb >= itemQuantity ? batch.update(doc.ref, { stock: stockDb - itemQuantity}) : itemsWithoutStock.push({id: doc.id, ...dataDoc})
        })

        if(itemsWithoutStock.length === 0) {
            await batch.commit()
            const orderRef = collection(db, 'orders')
            const orderAdded = await addDoc(orderRef, objOrder)
            MySwal.fire({
                title: '¡Gracias por confiar en GG!',
                icon: 'success',
                text:`El ID de su orden es ${orderAdded.id}`,
                confirmButtonColor: 'rgb(120, 189, 54)',
                confirmButtonText: 'Perfecto'
            })
            clearCart()
        }else{
            MySwal.fire({
                title: 'No se pudo concretar la compra',
                icon: 'error',
                text:'Hay productos que no se encuentran con stock en estos momentos',
                confirmButtonColor: 'rgb(206, 66, 46)'
            })
        }
        } catch(error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Su orden se está generando...</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            <CartForm order={createOrder}></CartForm>
        </>
    )
}

export default Checkout