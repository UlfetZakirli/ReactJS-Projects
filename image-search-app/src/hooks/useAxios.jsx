import axios from 'axios'
import { useEffect, useState } from 'react'

const useAxios = (param) => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState([])

    axios.defaults.baseURL = 'https://api.unsplash.com';

    const fetchData = async (url) => {
        try {
            setIsLoading(true);
            const res = await axios(url);
            setResponse(res.data.results);
        } catch (err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchData(param)
    }, [param])

    return {
        error,
        isLoading,
        response,
        fetchData: url => fetchData(url)
    }
}

export default useAxios