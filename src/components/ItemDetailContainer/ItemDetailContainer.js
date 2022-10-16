import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef).then(doc => {
            const data = doc.data()
            const itemAdapted = { id: doc.id, ...data }
            setItem(itemAdapted)
        }).finally(() => {
            setLoading(false)
        })
    }, [itemId])


    if(loading){
        return <h2>Aguarde mientras carga su producto...</h2>
    }
    return (
        <div>
            <ItemDetail {...item}/>
        </div>
    )


}

export default ItemDetailContainer