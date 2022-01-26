import { HashRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Products from './components/Products/Products';
=======
import Home from '../src/Components/Home'
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import ProductsAdmin from './Components/Admin/ProductsAdmin/ProductsAdmin';
import {ToastContainer} from 'react-toastify';
>>>>>>> 1e7d3d74d8af7b429945f140d9ae8c2b9aa5b46c

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/productos' element={<Products />}/>
<<<<<<< HEAD
        <Route path='/productos/:seccionParam' element={<Products />}/>
        <Route path='/productos/:sectionParam/:subSeccionParam' element={<Products />}/>
=======
        <Route path='/admin' element={<ProductsAdmin />}/>
>>>>>>> 1e7d3d74d8af7b429945f140d9ae8c2b9aa5b46c
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

export default App;

