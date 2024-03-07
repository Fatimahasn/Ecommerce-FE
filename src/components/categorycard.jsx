const CategoryCard = (props) => {
  return (
    <div className="card">
      <div style={{ minheight: "200px"}}>
        <img className="card-img-top" src={props.category.imgpath}alt="Card image cap"/>
      </div>
      <div className="card-body">
        <p className="card-text">{props.category.name}</p>
      </div>
    </div>
  );
};
export default CategoryCard;
