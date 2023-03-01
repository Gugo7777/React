import './App.css';
// import { Route, Routes, Link, NavLink } from 'react-router-dom';
// import Home from './Home';
// import BookList from './BookList';
// import Error404 from './Error404';
// import Book from './Book';
// import NewBook from './NewBook';
// import UseReduce from './UseReduce';
// import BookLayOut from './BookLayOut';
// import Router from './Router';
// import axios from 'axios';
// import Item from './Item';
// import Router1 from './Router1';
// import Secret from './Secret';
// import Login from './Login';
import Redux from './Redux/Redux';
import Todo from './store-toolkit/Todo';
import Web from './components/Web/Web';
import Product from './components/Products/Product'
import NoTransitionExample from './components/slideshow/Slideshow'
import Slideshow from './components/slideshow/Slideshow';
import Sales from './components/Sales/Sales'
import LargeProducts from './components/LargeProducts/LargeProducts';
import Footer from './components/footer/Footer'
import {useState} from "react" 


function App() {
  const [text, setText] = useState('');
  return (
    <div>
      <Web setText={setText} />
      <Slideshow />
      <Product />
      <Sales text={text} />
      <LargeProducts />
      <Sales />
      <LargeProducts />
      <Footer />

    </div>

  );
}

export default App;
