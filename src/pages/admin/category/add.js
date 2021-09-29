import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
const AdminCategoryAddPage = ({ onCateAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onHandleSubmit = data => {
    const uploads = new FormData();
    uploads.append("name", data.name);
    onCateAdd(uploads);
    history.push("/admin/category");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="tên danh mục"
            {...register("name", { required: true })}
          />
          <label htmlFor="category-name">Tên sản phẩm</label>
          {errors.name && (
            <span className="text-danger mt-2">This filed is required</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminCategoryAddPage;
