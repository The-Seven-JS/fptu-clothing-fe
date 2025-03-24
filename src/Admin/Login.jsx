import React, { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ onLogin }) {
  const [password, setPassword] = useState('');
  const [name,setName] = useState('')
  const navigate = useNavigate()
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleChange1 = (e) =>{
    setName(e.target.value)
  }
  const sendLoginRequest = async (name, password) => {
    try {
      const response = await axios.post('https://testing-2bfd.onrender.com/login',
        { name, password },
        { withCredentials: true } // Correct way to include credentials (cookies)
      );
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra mã PIN (ví dụ: mã PIN đúng là '1234')
    sendLoginRequest(name, password)
      .then((data) => {
        alert('Đăng nhập thành công!');
        onLogin()
        navigate('/admin/success')
      })
      .catch((error) => {
      alert('Đăng nhập thất bại!');
      });
  };

return (
    <div className='admin_validate_container' >
        <div className='admin_pin'>
            <h1>NHẬP MÃ PIN ĐỂ ĐĂNG NHẬP:</h1>
            <form onSubmit={handleSubmit} className='admin_pin_input'>
              <input type="text" value ={name} onChange={handleChange1}/>
              <input type="password" value={password} onChange={handleChange} />
              <button type="submit">Đăng nhập</button>
            </form>
        </div>
    </div>
);
}

export default Login;