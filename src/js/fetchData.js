const fetchData = async (url) => {
  const result = {
    data: null,
    error: null,
  }

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const json = await response.json()
    result.data = json
  } catch (error) {
    result.error = error
  }

  return result
}

export default fetchData
