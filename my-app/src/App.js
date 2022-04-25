import Navbar from './components/Navbar'
import Home from './components/Home'
import Create from './components/Create'
import BlogDetails from './components/BlogDetails'
import NotFoundPage from './components/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/blog-details/:id">
              <BlogDetails></BlogDetails>
            </Route>
            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
