const ItemCard = (props) => {
    const {product, index, category} ={...props};
    console.log("Item Card Props: ",props)
    return (
      <div className="card" key={index}>
        <div style={{justifyContent:'center'}} >
          <img className="card-img-top" src={product.imgpath}alt="Card image cap"/>
        </div>
        <div className="card-body">
                <div className="row g-1 pl-4">
                    <p className="category-name">{category}</p>
                </div>
                <div className="row g-1 pl-4">                       
                    <p className="product-name">{product.name}</p>
            </div>
    
            
          
        </div>
      </div>
    );
  };
  export default ItemCard;
  