import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import Products from './Components/Products/Products';
import ProductsAdmin from './Components/Admin/ProductsAdmin/ProductsAdmin';
import {ToastContainer} from 'react-toastify';
import UsersAdmin from './Components/Admin/UsersAdmin/UsersAdmin';
import ProductView from './Components/ProductView/ProductView';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/productos' element={<Products />}/>
        <Route path='/productos/:seccionParam' element={<Products />}/>
        <Route path='/productos/:sectionParam/:subSeccionParam' element={<Products />}/>
        <Route path='/productosAdmin' element={<ProductsAdmin />}/>
        <Route path='/usuariosAdmin' element={<UsersAdmin />}/>
        <Route path='/productos/producto/:id' element={<ProductView />}/>
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

export default App;

