import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/pos/1')
      .then(res => {
        console.log(res.data)
        setLoading(false)
        setPost(res.data)
        setError('')
      })
      .catch(err => {
        setLoading(false)
        setPost({})
        setError("Something went wrong")
      })
  }, [])
  return (
    <div>
      {loading ? "Loading data" : post.title}
      {error && error}
    </div>
  )
}

export default DataFetchingOne
