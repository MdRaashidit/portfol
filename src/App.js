import './App.css';
import NavMenu from './components/NavMenu';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';



function App() {
  return (
    <div className="App">
      <Router>

      <NavMenu></NavMenu>
      <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/project" element={<Project></Project>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>

      </Router>
      
    
    </div>
  );
}

export default App;
