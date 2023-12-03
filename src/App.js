import './App.css';
import  Navbar  from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/clothes' element={<Category category="clothes"/>}/>
        <Route path='/bags' element={<Category category="bags"/>}/>
        <Route path='/jewelry' element={<Category category="jewelry"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path='/productID' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cart' element={<LoginSignUp/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
