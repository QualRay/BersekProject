import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Error404 from './Pages/Error404'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  //1. State / Hook variables

    // functions

    //3. Return Statements
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/register" element={ <Register /> }/>
        <Route path="*" element={ <Error404 /> }/>
      </Routes>
    </Router>
    
  );
}

export default App;
