
import React from 'react';
import "./home.css";
import CategoryCard from "../../components/categorycard";
import { useNavigate } from 'react-router-dom';
import MainApp from "../../components/mainapp"
import {useSelector} from "react-redux";
const Home =()=>{
    const navigate=useNavigate();
    const categories = useSelector(state =>state.categoryReducer.categories);
    const onCategoryClick =(index)=>{
        console.log(index);
        navigate("/products",{state: index.toString()});
    }
   
    return (
        <div>
            <MainApp /> 
            <div className="main">
                <h3>Featured Categories</h3>
                <div className="slider-container">
                    <div className="slider">
                        {categories.map((category, index) => 
                            <div onClick={()=>onCategoryClick(index)}>
                                <CategoryCard category={category} key={index}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;