import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import './product.css'
const Product=()=>{
    const location = useLocation();
    const categoryIndex = parseInt(location.state);
    const categories = useSelector(state =>state.categoryReducer.categories);
    const selCategory =  categories[categoryIndex];
    const products =  categories[categoryIndex].products;
    return (
    <div className="categories-navbar">
        <div className="sidebar">
            <h3>Categories</h3>
            <ul>
            {categories.map((category, index) => 
                <div className="categories-dropdown">
                    <li key={'cat'+'-'+index} className="category-item">{category.name}</li>
                    <i className="fa-solid fa-angle-right icon-position"></i>
                </div>
                )}
            
          </ul>
        </div>
        <div className="product-container">
            <div className="category-title">
                <h1>{categories[categoryIndex].name}</h1>
            </div>
            <div className="products-div">
                <p>{products.length} products found</p>
            </div>
        </div>
    </div>)
}
export default Product;