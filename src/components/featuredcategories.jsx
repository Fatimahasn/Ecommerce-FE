import React from 'react';
import "./featuredcategories.css";
// import CategoryCard from './categoryCard';
import {useSelector, useDispatch} from "react-redux";
const FeaturedCategories = () => {
    
    const categories = useSelector((state) => state.FeaturedCategories)
    categories.map((category) => console.log("category: ",category))
    return (
        <div className="main">
            <h3>Featured Categories</h3>
            <div className="cardsdisplay">
                {/* {categories.map((category, index) => 
                (
                    <div key={index} className="card" style={{width: "18rem", "height":"200px", paddingRight:"30px"}}>
                        <img className="card-img-top" src={imgpath} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text">{category} {index}</p>
                    </div>
                </div>
                )
                )} */}
            </div>
        </div>
    );
}
export default FeaturedCategories;