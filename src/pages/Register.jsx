import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'

function Register() {
  const [users, setUsers] = useState({ username: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);

  }

  return (
    <div id="register">
      <h2 className="heading-page">Đăng ký</h2>
      <div className="form-wp">
        <form onSubmit={handleSubmit} className="form-log-up">
          <label htmlFor="username">Tên đăng nhập</label>
          <input onChange={e => setUsers({ ...users, username: e.target.value })} id="username" placeholder="Your Username" type="text" />
          <label htmlFor="email">Email</label>
          <input onChange={e => setUsers({ ...users, email: e.target.value })} id="email" placeholder="Your Email" type="text" />
          <label htmlFor="password">Mật khẩu</label>
          <div className="pwd-wp">
            <input onChange={e => setUsers({ ...users, password: e.target.value })} id="password" placeholder="Your Password" required type="password" />
            <FaEye className="FaEye none"></FaEye>
            <FaEyeSlash className="FaEyeSlash none"></FaEyeSlash>
          </div>
          <button className="btn submit-btn log-up-btn">Đăng ký</button>
          <p className="have-account">Đã có tài khoản?</p>
          <Link to="/log-in">
            <button className="btn sub-btn">Đăng nhập</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register
