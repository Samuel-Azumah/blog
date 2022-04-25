import { useState } from 'react'
import { apiUrl } from '../custom-hooks/useFetch'
import { useHistory } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')
  const data = { title, body, author }
  const [isLoading, setLoading] = useState(false)
  const history = useHistory()

  const submitBlog = (e) => {
    e.preventDefault()
    setLoading(true)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
    fetch(`${apiUrl}/blogs`, requestOptions).then((res) => {
      setLoading(false)
      history.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Add new blog</h2>
      <form onSubmit={submitBlog}>
        <label>Blog title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body: </label>
        <textarea
          required
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value)
          }}
        ></textarea>
        <label>Select author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isLoading && <button>Add blog</button>}
        {isLoading && <button>Adding blog...</button>}
      </form>
    </div>
  )
}

export default Create
