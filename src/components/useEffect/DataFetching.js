import React, { useState, useEffect } from 'react'
import axios from 'axios'
// Controlled Component: we need to set the value and listen to the unchanged event to assign the value back to the input element
function DataFetching() {
  const [post, setPost] = useState([])
  const [id, setId] = useState(1)
  const [idFromBtnClick, setIdFromBtnClick] = useState(1)

  const handleClick = () => {
    setIdFromBtnClick(id)
  }
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [idFromBtnClick])
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <button type="button" onClick={handleClick}>Get Post</button>

      {/* <ul>
        {post.map(post => <li key={post.id}>{post.title}</li>)}
      </ul> */}
      <div>
        {post.title}
      </div>
    </div>
  )
}

export default DataFetching
