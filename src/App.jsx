import './App.css'
import {Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useDispatch} from "react-redux";
import Home from './pages/Home/home';
import Navbar from './components/navbar';
import Product from './pages/Product/product';

function App() {
  const dispatch=useDispatch()
  const getData =async()=>{
    const result = await axios.get("http://localhost:3000/home/getData")
    dispatch({type:"addData", payload:result.data})
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <div>
      <Navbar />
      <div className='maindiv'>
        <div style={{width:"16%"}}></div>
        <div style={{width:"68%"}}>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/products' element={<Product/>} />
          </Routes>
        </div>
        <div style={{width:"16%"}}></div> 
      </div>
    </div>
  )
}
export default App;
