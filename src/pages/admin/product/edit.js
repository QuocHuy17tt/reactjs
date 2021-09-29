import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useHistory, Link, useParams } from "react-router-dom";
import ProAPI from "../../../api/ProAPI";
const EditProduct = ({ props }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await ProAPI.get(id);
        setProduct(data);
        console.log(data);
        reset(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  const onHandleSubmit = data => {
    const uploads = new FormData();
    // const imageEdit = document.querySelector('#photo').files[0];
    uploads.append("name", data.name);
    uploads.append("photo", data.image[0]);
    // uploads.append("photo", imageEdit, data.photo);
    // uploads.append("category", data.category);
    uploads.append("price", data.price);
    uploads.append("description", data.description);
    uploads.append("shipping", data.shipping);
    props.onEdit(id, uploads, data);
    history.push("/admin/product");
    // console.log(data);
  };

  return (
    <div>
      <div className="d-flex justify-content-between items-center">
        <h1>Edit product</h1>

        <div className="mt-3">
          <Link to="/admin/product" className="btn btn-primary">
            Quay lại
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="product-name"
            placeholder="Tên sản phẩm"
            defaultValue={product.name}
            {...register("name", { required: true })}
          />
          <label htmlFor="product-name">Tên sản phẩm</label>
          {errors.name && (
            <span className="text-danger mt-2">This field is required</span>
          )}
        </div>
        {/* <div className="form-floating mb-3">
          <select defaultValue={product.category}
          {...register("category", { required: true })}>
            <option></option>
            {props.product.map((category, index) => {
              // console.log(category._id);
              return (
                <option value={`${category._id}`} key={index}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="category">Tên Danh mục</label>
          {errors.name && (
            <span className="text-danger mt-2">This filed is required</span>
          )}
        </div> */}
        <div className="mb-3">
          <label htmlFor="product-image" className="form-label">
            Ảnh
          </label>
          <input
            type="file"
            className="form-control"
            id="photo"
            placeholder="Ảnh"
            {...register("image", { required: true })}
          />
          <img
            src={`http://localhost:4000/api/product/photo/${product._id}`}
            height="100px"
            alt="..."
          />
          {errors.photo && (
            <span className="text-danger mt-2">This fied is required</span>
          )}
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="giá sản phẩm"
            defaultValue={product.price}
            {...register("price", { required: true })}
          />
          <label htmlFor="price">Gía sản phẩm</label>
          {errors.price && (
            <span className="text-danger mt-2">Nhập giá sản phẩm</span>
          )}
        </div>
        <div className=" mb-3">
          <textarea
            type="text"
            className="form-control"
            id="description"
            placeholder="Mô tả sản phẩm"
            defaultValue={product.description}
            {...register("description", { required: true })}
          ></textarea>
          <label htmlFor="description">description</label>
          {errors.description && (
            <span className="text-danger mt-2">Nhập mô tả sản phẩm</span>
          )}
        </div>
        <div className="mb-3">
          <input type="checkbox" {...register("shipping")} />
          Shipping
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
