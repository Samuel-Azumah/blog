import { Link } from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h2>Sorry </h2>
      <p>Please visit the home page</p>
      <Link to="/">Home</Link>
    </div>
  )
}

export default NotFoundPage
