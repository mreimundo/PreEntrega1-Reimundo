import { useState, useEffect } from 'react'

export const useAsync = (asyncFunc, dependencies = []) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    if(!Array.isArray(dependencies)){
        dependencies = []
    }
    
    useEffect(() => {
        setLoading(true)
        
        asyncFunc().then(res => {
            console.log(res)
            setData(res)
        }).catch(err => {
            setError(err)
        }).finally(() => {
            setLoading(false)
        })
    }, dependencies) //eslint-disable-line

    return (
        data,
        error,
        loading
    )
}