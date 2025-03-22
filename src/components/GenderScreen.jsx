import React, { useState } from 'react';
import '/src/styles/MainTestScreen.css'
import { Link } from 'react-router-dom';

const GenderScreen = () => {
  const [gender, setGender] = useState('')
  const message = {
    gender: '',
    shape: 0,
    skin: 0,
    leg: 0,
    bmi: 0
  }
  console.log('Gender-render')
  const handleClick = (message) =>{
    message.gender = gender
  }
  return (
    <div className='gender_container'>
      <h1>Giới tính của bạn là gì?</h1>
      <div className='gender_items'>
        <div className='gender_male' onClick={() => setGender('male')}>
          <img alt='Male' src ='/image/OC_boy.svg'></img>
          <h4>Nam</h4>
        </div>
        <div className='gender_female' onClick={() => setGender('female')}>
          <img alt='gender_female' src ='/image/OC_girl.svg'></img>
          <h4>Nữ</h4>
        </div>
      </div>
      <Link to='/test/height-weight' state={{message: message}} >
        <button onClick={() => handleClick(message)}>Tiếp theo</button>
      </Link>
    </div>
  );
};

export default GenderScreen;