import React from 'react';
import "/src/styles/MainTestScreen.css"
import { Link } from 'react-router-dom';

const HeightWeightScreen = ({ onNext, onChange, formData }) => {

  return (
    <div className='bodysize_container'>
      <div className='bodysize_text'>
        <h2>Cùng tìm hiểu về cơ thể của bạn nhé!</h2>
        <p>Chúng tôi cần biết chiều cao và cân nặng của bạn để đưa ra câu trả lời thích hợp nhất.</p>
      </div>
      <div>
        <input 
          type="text"
          className='height_input'
          onChange={() => handleChange('height')}
        />
        <div className='height_container'>
          <div className='height_title'>Chiều cao...</div>
          <div className='height_unit'>cm</div>
        </div>
      </div>
      <div>
        <input 
          type="text"
          className='weight_input'
            onChange={() => handleChange('weight')}
        />
        <div className='weight_container'>
          <div className='weight_title'>Cân nặng...</div>
          <div className='weight_unit'>kg</div>
        </div>
      </div>
      
      <Link to='/test/body-shape'>
        <button>TIẾP THEO</button>
      </Link>
    </div>
  );
};

export default HeightWeightScreen;