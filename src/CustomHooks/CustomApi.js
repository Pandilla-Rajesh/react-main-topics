import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {

        setLoading(true)
        setError(null)

        try {

            const result = await axios.get(url)
            setData(result.data)
            console.log(result, 'custom data fetch')

        } catch(err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }, [url])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return { data, loading, error, refetch: fetchData }
}

export default useFetch