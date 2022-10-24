import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ? query(collection(db, 'items'), where('category', '==', categoryId)) : collection(db, 'items')

        getDocs(collectionRef).then(response => {
            const itemsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id:doc.id, ...data}
            })

        setItems(itemsAdapted)
        }).finally(() => {
            setLoading(false)
        })

        getDocs(collectionRef)

    }, [categoryId])


    if(loading){
        return <h2 className='listContainerTitle'>Aguarde mientras cargan los productos...</h2>
    }
    return (
        <div>
            <h1 className='listContainerTitle'>{greeting}</h1>
            <ItemList items={items}/>
        </div>
    )
    
}

export default ItemListContainer