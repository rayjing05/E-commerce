
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Signup from './components/signup';
import PrivateComponent from './components/privatecomponent';
import Login from './components/login';
import Addproduct from './components/Addproduct';
import ProductList from './components/products-list'
import UpdateProduct from './components/updateproduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />}></Route>

            <Route path="/add" element={<Addproduct />} />

            <Route path="/update/:id" element={<UpdateProduct />}></Route>

            <Route path="/logout" element={<h1>logout  Component</h1>}></Route>

            <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
          </Route>

          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}



export default App;
