import Blogs from './Blogs'
import { useFetch } from '../custom-hooks/useFetch'
const title = 'All blogs'

const Home = () => {
  const { data: blogs, isPending, displayErrorMessage } = useFetch('blogs')
  return (
    <div className="home">
      <div>{displayErrorMessage}</div>
      {isPending && <p>Loading ...</p>}
      {blogs && <Blogs blogs={blogs} title={title} />}
    </div>
  )
}

export default Home
