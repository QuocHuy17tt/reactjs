// import React, { useEffect, useState } from 'react'
// import { set, useForm } from 'react-hook-form'
// import { useHistory, Link, useParams } from 'react-router-dom'
// import CateAPI from '../../../api/Cate'
// const EditCategory = ({ onEdit }) => {
//     const { register, handleSubmit, reset, formState: { errors } } = useForm();
//     const history = useHistory();
//     let { id } = useParams();
//     const [category, setCategory] = useState({});

//     useEffect(() => {
//         const getCategory = async () => {
//             try {
//                 const { data } = await CateAPI.get(id);
//                 setCategory(data);
//                 reset(data)
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         getCategory()
//     }, [])
//                     <input type="text"
//                         className="form-control"
//                         id="category-name"
//                         placeholder="Tên danh mục"
//                         defaultValue={category.name}
//                         {...register('category-name', { required: true })}
//                     />
//                     <label htmlFor="category-name">Tên danh mục</label>
//                     {errors.name && <span className="text-danger mt-2">This field is required</span>}
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
            
//         </div>
//     )
// }

// export default EditCategory