import React from 'react'
import {useForm} from "react-hook-form";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import {useCompanyContext} from "../state/Context";

const LoginForm = () => {

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        setError
    } = useForm()

    const {dispatch} = useCompanyContext()

    const onSubmit = async (data) => {
        if (data.login === 'user' && data.password === 'password') {
            dispatch({
                type: "SET_LOGIN",
                isLoggedIn: true
            })
        localStorage.setItem("login",data.login)
        localStorage.setItem("password",data.password)
        } else {
            setError('login', { type: 'manual', message: 'Invalid login or password' });
            return
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*Login*/}
                <div>{errors?.login && <span style={{color:"#cd2d2d", margin:'5px'}}>{errors?.login.message}</span>}</div>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Login"
                    className="mb-3"
                >
                    <Form.Control {...register("login", {
                        required: "Login is required"
                    })} type="login" placeholder="Login"
                    />
                </FloatingLabel>
                {/*Password*/}
                <div>{errors?.password && <div style={{color:"#cd2d2d",padding:'5px'}}>{errors?.password.message}</div>}</div>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control {...register("password", {
                        required: "Password is required"
                    })} type="password" placeholder="Password"/>
                </FloatingLabel>
                <Button className='w-100 mt-4' variant='secondary' type='submit'>Log in</Button>
            </form>
        </div>
    )
}

export default LoginForm
