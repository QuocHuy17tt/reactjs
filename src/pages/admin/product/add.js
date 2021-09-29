import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
const AdminProductAddPage = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onHandleSubmit = data => {
    //
    const uploads = new FormData();
    // const image =  document.querySelector("#photo").files[0];
    // uploads.append("photo", image, data.photo);
    uploads.append("name", data.name);
    uploads.append("photo", data.image[0]);
    uploads.append("category", data.category);
    uploads.append("price", data.price);
    uploads.append("description", data.description);

    props.onAdd(uploads, data);
    history.push("/admin/product");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="tên sản phẩm"
            {...register("name", { required: true })}
          />
          <label htmlFor="product-name">Tên sản phẩm</label>
          {errors.name && (
            <span className="text-danger mt-2">This filed is required</span>
          )}
        </div>
        <div className="form-floating mb-3">
          <select {...register("category", { required: true })}>
            <option></option>
            {props.categories.map((category, index) => {
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
        </div>
        <div className="mb-3">
          <p htmlFor="photo">Ảnh sản phẩm</p>
          <input
            type="file"
            className="form-control"
            id="photo"
            {...register("image")}
          />
          {errors.photo && <span className="text-danger mt-2">Chọn ảnh</span>}
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Giá sản phẩm"
            {...register("price", { required: true })}
          />
          <label htmlFor="price">Giá sản phẩm</label>
          {errors.name && (
            <span className="text-danger mt-2">This filed is required</span>
          )}
        </div>
        <div className="form-floating mb-3">
          <label htmlFor="product-desc">Mô tả sản phẩm</label>
          <textarea
            type="text"
            className="form-control"
            id="product-desc"
            {...register("description", { required: true })}
          ></textarea>
          {errors.name && (
            <span className="text-danger mt-2">This filed is required</span>
          )}
        </div>
        <div className="form-floating mb-3">
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

export default AdminProductAddPage;
