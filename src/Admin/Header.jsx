import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css';

function Header() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    navigate('/admin/success/addpost'); // Navigate to /admin/addpost
  };

  return (
    <div className='header'>
      <p className='fuct'>FUCT</p>
      <p className='hello'>Hello Admin</p>
      <button onClick={() => navigate('/admin/success/addpost')} className='create'>TẠO BÀI VIẾT MỚI</button>
    </div>
  );
}

export default Header;