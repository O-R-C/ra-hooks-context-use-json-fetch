import { useState, useEffect } from 'react'

export default function useJsonFetch(
  fetchFunction,
  { url = import.meta.env.VITE_API_URL, addURL = '', seconds = 0 } = {}
) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    const timer = setTimeout(async () => {
      const { data, error } = await fetchFunction(url + addURL)
      data && setData(data)
      error && setError(error)
      setIsLoading(false)
    }, seconds * 1000)

    return () => clearTimeout(timer)
  }, [fetchFunction, url, addURL, seconds])

  return [data, error, isLoading]
}
