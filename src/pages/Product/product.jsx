import { useNavigate, useLocation } from "react-router-dom";
import { useSelector} from "react-redux";
import './product.css';
import ItemCard from "../../components/itemcard";
import { useEffect } from "react";
import { useState } from "react";
const Product=()=>{
    const location = useLocation();
    const categoryIndex = parseInt(location.state);
    const categories = useSelector(state =>state.categoryReducer.categories);
    const [products,setProducts]=useState(categories[categoryIndex].products);
    const [selectedCategory, setSelectedCategory]= useState(categories[categoryIndex].name)
    // const flagarr =  new Array(categories.length).fill(false);
    const onCategoryClick=(index)=>{
        const newProd=categories[index].products;
        setProducts(newProd);
        setSelectedCategory(categories[index].name)
    }
    return (
    <div className="categories-navbar">
        <div className="sidebar">
            <h3>Categories</h3>
            <ul>
            {categories.map((category, index) => 
            <div className="category-sidebar">
                <div className="categories-dropdown" onClick={()=>onCategoryClick(index)}>
                    <li key={'cat'+'-'+index} className="category-item">{category.name}</li>
                    <i className="fa fa-angle-right icon-position"></i>
                </div>
                <div className="dropdown-container">
                {products.map((product, productIndex) => 
                            <li key={'cat'+'-'+index+'prod'+productIndex} className="category-item">{product.name}</li>
        
                    )}
                </div>
            </div>
                
                
                )}
            
          </ul>
        </div>
        <div className="product-container">
            <div className="category-title">
                <h1>{selectedCategory}</h1>
            </div>
            <div className="products-div">
                <p>{products.length} products found</p>
                <div className="wrapper">
                        {products.map((product, index) => 
                                <ItemCard product={product} category={selectedCategory} index={index}/>
            
                        )}
                    </div>
            </div>
        </div>
    </div>)
}
export default Product;