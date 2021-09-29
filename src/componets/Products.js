import React from "react";
import { Link } from "react-router-dom";
const Products = props => {
  return (
    <div className="row">
      <div className="col-4">
        {props.categories.map((cate,index) =>{
          return (
            <div className="card" key={index} style={{ float:"left", margin:"5px 5px 5px", width: "18rem" }}> 
              <h5 className="card-title">
                <Link to={`/category/${cate._id}`}>{cate.name}</Link>
              </h5>
          </div>
          );
        })}
      </div>
    <div className="col-8">
      {props.products.map((todo, index) => {
        return (
          <div className="card" key={index} style={{ float:"left", margin:"5px 5px 5px", width: "18rem" }}>
           <img src={`http://localhost:4000/api/product/photo/${todo._id}`} height="100px" alt />
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/product/${todo._id}`}>{todo.name}</Link>
              </h5>
              <p className="card-text">
              {`/product/${todo._id}`}{todo.description}
              </p>
              <a href="#" className="btn btn-primary">
                BUY
              </a>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Products;
