import React, { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'

import AuthStore from '../stores/auth.store'
import axios from '../api/axiosClient'

const LOGIN_URL = '/api/auth/login'

function Login() {
  const { setAuth } = useContext(AuthStore)

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [username, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ username, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      console.log(username, pwd);
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles
      setAuth({ username, pwd, roles, accessToken });
      setUsername('')
      setPwd('')
      setSuccess(true)
    } catch (error) {
        if (!error?.response) {
          setErrMsg('No Server Response!')
        } else if (error.response.status === 400) {
          setErrMsg('Missing Username or Password!')
        } else if (error.response.status === 401) {
          setErrMsg('Unauthorized')
        } else {
          setErrMsg('Login Failed')
        }
        userRef.current.focus()
    }
  }

  return (
    <div id="login">
      <h2 className="heading-page">Đăng nhập</h2>
      <div className="form-wp">
        <form className="form-log-up" onSubmit={handleSubmit}>
          <label htmlFor="username" className="">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            placeholder="Your Username"
            ref={userRef}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <label htmlFor="password" className="">Mật khẩu</label>
          <div className="pwd-wp">
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <FaEye id="FaEye" className="FaEye none"></FaEye>
            <FaEyeSlash id="FaEyeSlash" className="FaFaEyeSlash none"></FaEyeSlash>
          </div>
          <button className="btn submit-btn log-up-btn" type="submit">Đăng nhập</button>
          <p className="have-account">Chưa có tài khoản?</p>
          <Link to="/log-up">
            <button className="btn sub-btn">Đăng ký</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
