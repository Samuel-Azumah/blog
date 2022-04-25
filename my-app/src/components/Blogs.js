import { Link } from 'react-router-dom'
const Blogs = ({ title, blogs }) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog-details/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Blogs
