import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn, authenticate, isAuthenticated } from '../auth'
import { Redirect, useHistory } from 'react-router-dom'
const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [redirectToRef, setRedirectToRef] = useState(false);
    const { user } = isAuthenticated();
    let history = useHistory();
    const onSubmit = (data) => {
        setLoading(true);
        signIn(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error);
                    setLoading(false);
                } else {
                    authenticate(dataUser, () => {
                        setRedirectToRef(true)
                    })
                    console.log(dataUser);

                }


            })
    }
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>
            {error}
        </div>
    }
    const redirectUser = () => {
        if(redirectToRef){
            if(user.role ==1){
                return <Redirect to="/admin/dashbroad"/>
            }else{
                return <Redirect to="/user/dashbroad"/>
            }
        }
    }
    const showLoading = () => {
        return loading && <div className="alert alert-info">
            <h2>...Loading</h2>
        </div>
    }


    const signInForm = () => {

        return (
            <form onSubmit={handleSubmit(onSubmit)}>

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
                <button className="btn btn-primary" type="submit">Đăng nhập</button>
            </form>
        )

    }
    return (
        <div>
            {redirectUser()}
            {signInForm()}
            {showError()}
            {showLoading()}
        </div>
    )
}

export default SignIn
