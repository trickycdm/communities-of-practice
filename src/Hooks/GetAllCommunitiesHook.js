import { getAll } from 'Api/services/communities/methods/get-all/get-all';
import { useState, useEffect } from 'react'

const GetAllCommunitiesHook = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  async function fetchContent () {
    const resp = await getAll()
    if (resp.error) return setError(resp.error)
    setData(resp)
    setLoading(false)
  }

  useEffect(() => {
    fetchContent()
  }, [])
  return [data, loading, error]
}

export { GetAllCommunitiesHook }
