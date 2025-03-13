import React, { useState } from 'react';
import "/src/styles/MainTestScreen.css"
import { Link, useLocation } from 'react-router-dom';

const HeightWeightScreen = () => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const location = useLocation();
  const message = location.state?.message || 'No data passed';
  const calculateBMI = (height, weight) => {
    if (height > 0 && weight > 0) {
      return (weight / ((height / 100) ** 2)).toFixed(1);  
    }
    alert('Invalid Input!');
  };
  console.log('height-weight-render')
  const handleClick = (message) =>{
    const bmi_index = calculateBMI(height, weight);
    if (bmi_index < 18.5)
      {
        message.bmi = 1 
      }
      else if (bmi_index>=18.5 && bmi_index <=24.9){
        message.bmi = 2
      }
      else if (bmi_index> 24.9 && bmi_index <=29.9){
        message.bmi = 3
      }
      else{
        message.bmi = 4
      }
      console.log(message.bmi)
  }
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
          value={height}
          onChange={(e) => setHeight(e.target.value)}
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
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <div className='weight_container'>
          <div className='weight_title'>Cân nặng...</div>
          <div className='weight_unit'>kg</div>
        </div>
      </div>
      
      <Link to='/test/body-shape' state={{message : message}}>
        <button onClick={() => handleClick(message)}>TIẾP THEO</button>
      </Link>
    </div>
  );
};

export default HeightWeightScreen;