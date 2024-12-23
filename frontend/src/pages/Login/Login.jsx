import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
    const { url, setToken } = useContext(StoreContext)
    const navigate = useNavigate();
    const [currState, setCurrState] = useState('Login');

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;

        if (currState === 'Login') {
            newUrl += "/v1/api/user/login"
        } else {
            newUrl += "/v1/api/user/signup"
        }

        const response = await axios.post(newUrl, data);

        setToken(response.data.metadata.token);
        toast.success('Đăng nhập thành công!')
        localStorage.setItem("token", response.data.metadata.token);

        navigate('/')

    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>ĐĂNG NHẬP</h2>
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input name='username' onChange={onChangeHandler} value={data.username} type="text" placeholder='Tài khoản' required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Mật khẩu' required />
                </div>
                <div className="Oauth2">
                    <button className='btn-fb'>Facebook</button>
                    <button className='btn-gg'>Google</button>
                </div>

                <button type='submit' className='btn-sub'>{currState === "Sign Up" ? "Tạo tài khoản mới" : "Đăng nhập"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>Đồng ý với các chính sách của công ty</p>
                </div>
                {currState === "Login"
                    ? <p><span onClick={() => setCurrState("Sign Up")}>Tạo tài khoản mới?</span></p>
                    : <p><span onClick={() => setCurrState("Login")}>Đã có tài khoản?</span></p>
                }
            </form>
        </div>
    )
}

export default Login;
