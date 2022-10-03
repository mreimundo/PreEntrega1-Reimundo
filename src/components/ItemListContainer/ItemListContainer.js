import { getItems } from '../../data/asyncMock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        getItems(categoryId).then(resolve => {
            setItems(resolve)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading){
        return <h2>Aguarde mientras cargan los productos...</h2>
    }
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList items={items}/>
        </div>
    )
    
}

export default ItemListContainer