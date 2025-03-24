import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css';

function Header() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    navigate('/admin/addpost'); // Navigate to /admin/addpost
  };

  return (
    <div className='header'>
      <p className='fuct'>FUCT</p>
      <p className='hello'>Hello</p>
      <button onClick={handleButtonClick} className='create'>TẠO BÀI VIẾT MỚI</button>
    </div>
  );
}

export default Header;