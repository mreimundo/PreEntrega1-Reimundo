import { useEffect, useState } from 'react'
import { getItem } from '../../data/asyncMock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()


    useEffect(() => {
        getItem(itemId).then(item => {
            setItem(item)
        }).finally(() => {
            setLoading(false)
        })
    }, [itemId])


    console.log(item)

    if(loading){
        return <h2>Aguarde mientras carga su producto...</h2>
    }
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )


}

export default ItemDetailContainer