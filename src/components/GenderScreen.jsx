import React from 'react';
import '/src/styles/MainTestScreen.css'
import { Link } from 'react-router-dom';

const GenderScreen = ({ onSelect }) => {
  return (
    <div className='gender_container'>
      <h1>Giới tính của bạn là gì?</h1>
      <div className='gender_items'>
        <div className='gender_male'>
          <img alt='Male'></img>
          <h4>Nam</h4>
        </div>
        <div className='gender_female'>
          <img alt='gender_female'></img>
          <h4>Nữ</h4>
        </div>
      </div>
      <Link to='/test/height-weight'>
        <button>Tiếp theo</button>
      </Link>
    </div>
  );
};

export default GenderScreen;