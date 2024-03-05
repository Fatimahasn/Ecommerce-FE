import './navbar.css';
import { useEffect, useState } from 'react';
function Navbar (){
  const [navbarFields,setNavbarFields] = useState([false,false,false,false,false,false,false,false,false]);
  const [flag,setFlag]=useState(false);
  const handleDropDownIconClick = (id) => {
    const newState = [...navbarFields];    
    if(newState.includes(true)){
      const index = newState.indexOf(true);
      newState[index]= false;
    }
    newState[id] = !navbarFields[id];
    setNavbarFields(newState);
    
  };
    return (
    <div className="nav-bar">
        <div className= "row nav1">
          <div className="col-1 titlebar">
            <div className="title-icon">
              <i className="fa fa-shopping-cart cartsize"></i>
              <h4>FreshCart</h4>
            </div>
          </div>
          <div className="col-5 titlebar">
            <div className='search-div'>
              <div className="input-group input-group-md m-3 search-products">
                <input type="text" className="form-control search-input" placeholder="Search for Products.." aria-label="Username" aria-describedby="basic-addon1"/>
                <i className="fa fa-search search-icon"></i>
              </div>
            </div>
          </div>
          <div className="col-2 titlebar">
            <div className="locationbutton">
              <button type="button" className="btn btn-light btnstyle">
                <i className="fa-solid fa-location-dot icon-styling"></i>
                Location</button>
            </div>
          </div>
          <div className="col-1 titlebar">
            <div className="detail-icons">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-user"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
          </div>
        </div>
        <div className='row nav1'>
          <ul className="nav nav-pills namebar">
            <li>
                <button className="btn btn-success" type="button"><i className="fa-solid fa-table-cells-large icon-styling"></i>All Departments</button>   
            </li>  
            <li className="nav-item dropdown">
              <a id="home" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={navbarFields[1]} onClick={()=>handleDropDownIconClick(1)}>Home</a>
              <div className={`dropdown-menu${navbarFields[1] ? ' show' : ''}`}>
                <a className="dropdown-item" href="#">Home 1</a>
                <a className="dropdown-item" href="#">Home 2</a>
                <a className="dropdown-item" href="#">Home 3</a>
              </div>
            </li>
              <li className="nav-item dropdown">
                <a id="shop" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={navbarFields[2]} onClick={()=>handleDropDownIconClick(2)}>Shop</a>
                <div className={`dropdown-menu${navbarFields[2] ? ' show' : ''}`}>
                  <a className="dropdown-item" href="#">Shop Grid - Filter</a>
                  <a className="dropdown-item" href="#">Shop Grid - 3 Column</a>
                  <a className="dropdown-item" href="#">Shop List - Filter</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a id="stores" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={navbarFields[3]} onClick={()=>handleDropDownIconClick(3)}>Stores</a>
                <div className={`dropdown-menu${navbarFields[3] ? ' show' : ''}`}>
                  <a className="dropdown-item" href="#">Store List</a>
                  <a className="dropdown-item" href="#">Store Grid</a>
                  <a className="dropdown-item" href="#">Store Single</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a id="Megamenu" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={navbarFields[4]} onClick={()=>handleDropDownIconClick(4)}>Mega Menu</a>
                <div className={`dropdown-menu wh-100${navbarFields[4] ? ' show' : ''} container-fluid`}>
                  <div className="row">
                    <div className="col">
                      <h5>Category 1</h5>
                      <a className="dropdown-item" href="#">Store List</a>
                      <a className="dropdown-item" href="#">Store Grid</a>
                      <a className="dropdown-item" href="#">Store Single</a>
                    </div>
                    <div className="col">
                      <h5>Category 2</h5>
                      <a className="dropdown-item" href="#">Store List</a>
                      <a className="dropdown-item" href="#">Store Grid</a>
                      <a className="dropdown-item" href="#">Store Single</a>
                    </div>
                    <div className="col">
                      <h5>Category 3</h5>
                      <a className="dropdown-item" href="#">Store List</a>
                      <a className="dropdown-item" href="#">Store Grid</a>
                      <a className="dropdown-item" href="#">Store Single</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a id="pages" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={navbarFields[5]} onClick={()=>handleDropDownIconClick(5)}>Pages</a>
                <div className={`dropdown-menu${navbarFields[5] ? ' show' : ''}`}>
                  <a className="dropdown-item" href="#">Blog</a>
                  <a className="dropdown-item" href="#">Single</a>
                  <a className="dropdown-item" href="#">Blog Category</a>
                  <a className="dropdown-item" href="#">About Us</a>
                  <a className="dropdown-item" href="#">404 Error</a>
                  <a className="dropdown-item" href="#">Contact</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a id="account" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={navbarFields[6]} onClick={()=>handleDropDownIconClick(6)}>Account</a>
                <div className={`dropdown-menu${navbarFields[6] ? ' show' : ''}`}>
                  <a className="dropdown-item" href="#">Sign in</a>
                  <a className="dropdown-item" href="#">Sign up</a>
                  <a className="dropdown-item" href="#">Forgot Password</a>
                  <a className="dropdown-item" href="#">My Account</a>
                </div>
              </li>
              <li className="nav-item">
                <a id="dashboard" className="nav-link" href="#" role="button" onClick={()=>handleDropDownIconClick(7)}>Dashboard</a>
              </li>
              <li className="nav-item dropdown">
                <a id="docs" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={navbarFields[8]} onClick={()=>handleDropDownIconClick(8)}>Docs</a>
                <div className={`dropdown-menu${navbarFields[8] ? ' show' : ''}`}>
                  <a className="dropdown-item" href="#">Documentation</a>
                  <a className="dropdown-item" href="#">Change Log v1.2.1</a>
                </div>
              </li>
            </ul>
        </div>
      </div>
    );
  }
  export default Navbar;