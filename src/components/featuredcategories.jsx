import React from 'react';
import "./featuredcategories.css";
// import CategoryCard from './categoryCard';
import {useSelector, useDispatch} from "react-redux";
import CategoryCard from './categorycard';
const FeaturedCategories = () => {
    
    const categories = useSelector(state =>state.categoryReducer.categories);

    return (
        <div className="main">
            <h3>Featured Categories</h3>
            <div className="slider-container">
                <div className="slider">
                    {categories.map((category, index) => 
                        <CategoryCard category={category} key={index} />
                    )}
                </div>
            </div>
        </div>
    );
}
export default FeaturedCategories;