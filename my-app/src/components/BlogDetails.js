import { useParams } from 'react-router-dom'
import { useFetch } from '../custom-hooks/useFetch'
import { apiUrl } from '../custom-hooks/useFetch'
import { useHistory } from 'react-router'

const BlogDetails = () => {
  const history = useHistory()
  const { id } = useParams()
  const { data: blogs, isPending, displayErrorMessage } = useFetch(`blogs/${id}`)

  const deleteBlog = (id) => {
    fetch(`${apiUrl}/blogs/${id}`, { method: 'DELETE' }).then((res) => {
      console.log(id)
      history.push('/')
    })
  }
  return (
    <div className="blog-details">
      {isPending && <div>isLoading</div>}
      {displayErrorMessage && <div>{displayErrorMessage}</div>}
      {blogs && (
        <div>
          <article>
            <h2>{blogs.author}</h2>
            <p>{blogs.title}</p>
            <div>{blogs.body}</div>
            <button onClick={() => deleteBlog(id)}>Delete</button>
          </article>
        </div>
      )}
    </div>
  )
}

export default BlogDetails
