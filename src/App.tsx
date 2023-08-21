import './App.css'

import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Options from './Pages/Options'

function App() {
  return (
    <>



      <Router>

      <nav>
        <ol>
         <li>    
         <Link to="/">HOME</Link>
         </li>
         <li>    
         <Link to="/options">OPTIONS</Link>
         </li>
        </ol>  
      </nav>



        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/options" Component={Options} />
        </Routes>
      </Router>
    </>
  )
}

export default App
