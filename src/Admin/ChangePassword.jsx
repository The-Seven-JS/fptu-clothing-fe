import React, { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ChangePassword({ onLogin }) {
  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [retypePass, setRetypePass] = useState('')
  const navigate = useNavigate()
  const sendChangePassRequest = async (oldPass, newPass, retypePass) => {
    try {
      const response = await axios.patch('https://be.fuct.gay/changepass',
        { oldPass, newPass, retypePass },
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
    const message = sendChangePassRequest(oldPass, newPass, retypePass)
  };

return (
    <div className='admin_validate_container' >
        <div className='admin_pin1'>
            <h1>ĐỔI MẬT KHẨU</h1>
            <form onSubmit={handleSubmit} className='admin_pin_input1'>
              <input type="text" value ={oldPass} onChange={(e) => setOldPass(e.target.value)} placeholder='Mật khẩu cũ'/>
              <input type="text" value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder='Mật khẩu mới'/>
              <input type="text" value={retypePass} onChange={(e) => setRetypePass(e.target.value)} placeholder='Nhập lại mật khẩu mới'/>
              <button type="submit">Đổi Mật Khẩu</button>
            </form>
        </div>
    </div>
);
}

export default ChangePassword