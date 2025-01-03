import React, { useContext, useEffect, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
    const { url, setToken } = useContext(StoreContext)
    const navigate = useNavigate();
    const [currState, setCurrState] = useState('Đăng nhập');

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

    const handleGoogleLogin = async (credentialResponse) => {
        try {
            const response = await axios.post(`${url}/v1/api/identity/google-login`, {
                token: credentialResponse.credential,
            });

            if (response.data.status) {
                const { user } = response.data.metadata;
                toast.success(`Chào mừng ${user.username || user.email}!`);
                localStorage.setItem("token", response.data.metadata.token); // Nếu cần thêm token sau này
                navigate('/');
            } else {
                toast.error(response.data.message || 'Đăng nhập thất bại');
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error(
                error.response?.data?.message || 'Có lỗi xảy ra, vui lòng thử lại'
            );
        }
    };


    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;

        if (currState === 'Đăng nhập') {
            newUrl += "/v1/api/identity/login"
        } else {
            newUrl += "/v1/api/identity/signup"
        }

        try {
            const response = await axios.post(newUrl, data);
            if (response.data.status) {
                setToken(response.data.metadata.token);
                toast.success(currState === 'Đăng ký' ? 'Đăng ký thành công!' : 'Đăng nhập thành công!');
                localStorage.setItem("token", response.data.metadata.token);
            }

            navigate('/')
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || 'Có lỗi xảy ra, vui lòng thử lại!');
            } else {
                toast.error('Lỗi kết nối với máy chủ!');
            }
        }


    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                </div>
                <div className="login-popup-inputs">
                    {currState === "Đăng nhập" ? <></> : <input name='username' onChange={onChangeHandler} value={data.username} type="text" placeholder='Tài khoản' required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Mật khẩu' required />
                </div>
                <div className="Oauth2">
                    {/* <button className='btn-fb'>Facebook</button> */}
                    <GoogleLogin
                        onSuccess={handleGoogleLogin}
                    />
                </div>

                <button type='submit' className='btn-sub'>{currState === "Đăng ký" ? "Tạo tài khoản mới" : "Đăng nhập"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>Đồng ý với các chính sách của công ty</p>
                </div>
                {currState === "Đăng nhập"
                    ? <p><span onClick={() => setCurrState("Đăng ký")}>Tạo tài khoản mới?</span></p>
                    : <p><span onClick={() => setCurrState("Đăng nhập")}>Đã có tài khoản?</span></p>
                }
            </form>
        </div>
    )
}

export default Login;
