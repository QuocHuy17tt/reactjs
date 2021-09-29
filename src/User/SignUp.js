import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signUp } from '../auth'
import { Link } from 'react-router-dom'
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error , setError] = useState("");
    const [sucess, setSucess] = useState(false);
    const onSubmit = (data , e) => {
        signUp(data)
            .then(dataInput => {
                if(dataInput.error){
                    setError(dataInput.error);
                }else{
                  
                    setError("");
                    setSucess(true)
                }
            })
    }
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>
            {error}
        </div>
    }
    const showSucess = () => {
        return <div className="alert alert-danger" style={{ display: sucess ? "block" : "none" }}>
            Bạn tạo tài khoản thành công . Cick để <Link to="/signin">đăng nhập</Link>
        </div>
    }


    const signUpForm = () => {

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Họ và tên</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        {...register('name')}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Email</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        {...register('email')}
                    />
                </div>
                <div classame="mb-3">
                    <label htmlFor="product-name" className="form-label">Mật khẩu</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        {...register('password')}
                    />
                </div>
                <div classame="mb-3">
                    <label htmlFor="product-name" className="form-label">Quyền</label>
                    <input type="text"
                        className="form-control"
                        id="role"
                        {...register('role')}
                    />
                </div>
                <button className="btn btn-primary" type="submit">Đăng kí</button>
            </form>
        )

    }
    return (
        <div>
            {signUpForm()}
            {showError()}
            {showSucess()}
        </div>
    )
}

export default SignUp
