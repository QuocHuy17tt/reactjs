import React from "react";
import { Link } from "react-router-dom";

const AdminProductPage = props => {
  return (
    <div>
      
      <div>
        <h2>Danh mục sản phẩm</h2>
        <Link className="btn btn-primary" to="/admin/product/add">Add</Link>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Image</th>
                <th>Price</th>
                <th>Description</th>
                <th>thao tác</th>
              </tr>
            </thead>
            <tbody>
                {props.products.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td><img src={`http://localhost:4000/api/product/photo/${product._id}`} height="100px"  /></td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td>
                    <Link to={`/admin/product/${product._id}`} className="btn btn-primary">Edit</Link>
                       <button className="btn btn-danger" onClick={() => props.onDelete(product._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProductPage;
