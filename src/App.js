import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Components/Home'
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import ProductsAdmin from './Components/Admin/ProductsAdmin/ProductsAdmin';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/productos' element={<Products />}/>
        <Route path='/admin' element={<ProductsAdmin />}/>
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

export default App;
