import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Fixed/Navbar';
import Footer from './Components/Fixed/Footer';
import Main from './Components/Content/Main';
import Maincoll from './Components/Maincoll';
import Product from './Components/Product';
import Cart from './Components/Pages/Cart';
import Favorite from './Components/Pages/Favorite';
import Login from './Components/Pages/Login';
import { useState } from 'react';


function App() {
  const [favorite, setFavorite] = useState([])
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Main/>}/>
          <Route path='/cart' exact element={<Cart/>}/>
          <Route path='/favorite' exact element={<Favorite favlist={favorite}/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/:categorie' element={<Maincoll  setFavorite={setFavorite} favorite={favorite}/>}/>
          <Route path='/:categorie/:id' element={<Product/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
