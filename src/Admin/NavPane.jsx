import React from 'react'
import './NavPane.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
function NavPane() {
  const handleLogout = async () =>{
    try{
      const response = await axios.get('https://be.fuct.gay/logout', { withCredentials: true });
      console.log(response.data.isAuthorized)
    }
    catch(error){
      console.error('Error logging in:', error);
      throw error;
    }
  }
  return (
    <div className='nav-pane'>
      <div className='menu'>
        <div className='menu-item'>
        <Link to='/admin/success/' style={{textDecoration: 'none', color: 'white'}}>
          <p>Quản lý bài viết</p>
        </Link>
        <Link to={'/admin/success/draft'} style={{textDecoration: 'none', color: 'white'}}>
        <p>Bản nháp</p>
        </Link>
        <Link to={'/admin/success/notification'} style={{textDecoration: 'none', color: 'white'}}>
        <p>Quản lý bình luận</p>
        </Link>
        </div>
        <div className='admin'>
            <img id='admin' src="/image/admin.png" alt="" />
            <Link to='/admin/success/changepass'>
            <div className='change-pass'>
                <p style={{textDecoration: 'none', color: 'white', border:'none'}}>Đổi mật khẩu</p>
                <img src="/image/padlock.png" alt="" />
            </div>
            </Link>
            <Link to='/admin' onClick={handleLogout}>
            <div className='logout'>
                <p style={{textDecoration: 'none', color: 'white', border:'none'}}>Đăng xuất</p>
                <img src="/image/logout.png" alt="" />
            </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default NavPane
