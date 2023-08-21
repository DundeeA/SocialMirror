import {
  Route,
  Routes,
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import Home from './Pages/Home'
import Options from './Pages/Options'

import Twitter from './Pages/Twitter/Twitter'

import NotFound from './Pages/NotFound'

function App() {
  return (
    <>
      <Router>
        <nav className="bg-slate-300">
          <ol className=" flex flex-row  ">
            <li className="mr-3.5 hover:text-white">
              <Link to="/">HOME</Link>
            </li>
            <li className="mr-3.5 hover:text-white">
              <Link to="/options">OPTIONS</Link>
            </li>
            <li className="mr-3.5 hover:text-white">
              <Link to="/twitter">TWITTER</Link>
            </li>
          </ol>
        </nav>
        <Routes>
          <Route path="*" Component={NotFound} />
          <Route path="/" Component={Home} />
          <Route path="/options" Component={Options} />
          <Route path="/twitter" Component={Twitter} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
