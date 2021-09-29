import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Routers from "./Routers";
import ProAPI from "./api/ProAPI";
import CateAPI from "./api/Cate";

function App() {
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    //call api
    const getTodos = async () => {
      try {
        const { data: products } = await ProAPI.getAll();
        console.log(products);
        setproducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    getTodos();
  }, []);
  const onHandleAdd = async product => {
    try {
      const { data } = await ProAPI.add(product);
      console.log(data);
      setproducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleDelete = async id => {
    let confirmRemove = window.confirm('bạn có chắc muốn xóa sản phẩm này')
    if (confirmRemove) {
    try {
      await ProAPI.remove(id);
      const newTodos = products.filter(todo => todo._id !== id);
      setproducts(newTodos);
    } catch (error) {
      console.log(error);
    }
    }
  };
  const onHandleEditProduct = async (id, product) => {
    try {
      const { data } = await ProAPI.update(id, product);
      const newProducts = products.map(item =>
        item._id === data._id ? data : item
      );
      console.log("newProducts", newProducts);
      setproducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  //category
  useEffect(() => {
    //call api
    const getTodoss = async () => {
      try {
        const { data: categories } = await CateAPI.getAll();
        console.log(categories);
        setcategories(categories);
      } catch (error) {
        console.log(error);
      }
    };
    getTodoss();
  }, []);
  const onHandleAdds = async category => {
    try {
      const { data } = await CateAPI.add(category);
      setcategories([...categories, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleEditCategory = async (id, category) => {
    try {
      const { data } = await CateAPI.update(id, category);
      const newCategories = categories.map(item =>
        item._id === data._id ? data : item
      );
      console.log("newCategories", newCategories);
      setcategories(newCategories);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleDeletes = async id => {
    try {
      await CateAPI.remove(id);
      const newTodos = categories.filter(todo => todo._id !== id);
      setcategories(newTodos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className="App">
    <div className="container">
      <Routers
        products={products}
        onDelete={onHandleDelete}
        onAdd={onHandleAdd}
        onEdit={onHandleEditProduct}
        categories={categories}
        onCateDelete={onHandleDeletes}
        onCateAdd={onHandleAdds}
        // onCateEdit={onHandleEditCategory}
      />
    </div>
  );
}

export default App;
