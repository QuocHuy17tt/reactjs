import React from "react";
import { Link } from "react-router-dom";

const AdminCategoryPage =( props) => {
  return (      
      <div>
        <h2>Danh mục </h2>
        <Link className="btn btn-primary" to="/admin/category/add">Add</Link>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>thao tác</th>
              </tr>
            </thead>
            <tbody>
                {props.categories.map((category, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{category.name}</td>
                    <td>
                    <Link to={`/admin/category/${category._id}`} className="btn btn-primary">Edit</Link>
                       <button className="btn btn-danger" onClick={() => props.onDelete(category._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default AdminCategoryPage;
