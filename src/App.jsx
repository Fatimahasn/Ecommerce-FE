import './App.css'
import Navbar from './components/navbar';
import MainApp from './components/mainapp';
import FeaturedCategories from './components/featuredcategories';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from "react-redux";
function App() {
  const dispatch = useDispatch();
  const getData =async()=>{
    const result=await axios.get("http://localhost:3000/home/getData")
    dispatch({type:"addData", payload:result.data})

  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <div>
      <Navbar />
      <div style={{height: "200%"}}>
        <MainApp />
        <FeaturedCategories />
      </div>
    </div>    
  )
}
export default App
