import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import AllProducts from './components/AllProducts';
import SectionProducts from './components/SectionProducts';
import SubSectionProducts from './components/SubSectionProducts';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/productos' element={<AllProducts />}/>
        <Route path='/productos/:seccionParam' element={<SectionProducts />}/>
        <Route path='/productos/subSeccion/:subSeccionParam' element={<SubSectionProducts />}/>
      </Routes>
    </Router>
  );
}

export default App;

