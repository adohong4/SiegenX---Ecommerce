import React, { useContext, useEffect, useState } from 'react'
import './Login.css';
import axios from 'axios'

const Login = () => {

    const [currState, setCurrState] = useState('Login');

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>ĐĂNG NHẬP</h2>
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input name='name' type="text" placeholder='Your name' required />}
                    <input name='email' type="email" placeholder='Email' required />
                    <input name='password' type="password" placeholder='Mật khẩu' required />
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
