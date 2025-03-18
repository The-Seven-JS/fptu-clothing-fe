import React, { useEffect, useState } from 'react';
import "/src/styles/MainTestScreen.css"
import { Link, useLocation } from 'react-router-dom';

const HeightWeightScreen = () => {
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [isHeightFocused, setHeightFocused] = useState(false)
  const [isWeightFocused, setWeightFocused] = useState(false)
  const location = useLocation();
  const message = location.state?.message || 'No data passed';

  const calculateBMI = (height, weight) => {
    if (height > 0 && weight > 0) {
      return (weight / ((height / 100) ** 2)).toFixed(1);  
    }
    alert('Invalid Input!');
  };
  useEffect(() =>{
    
  }, )
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
          onFocus={() => setHeightFocused(true)}
          onBlur = {() => setHeightFocused(height !== "")}
        />
        <div className='height_container' style={{width: isHeightFocused? "30px" :"auto", position: isHeightFocused?"relative": "", left: isHeightFocused?"258px": ""}}>
          {!height && (
              <div className='height_title' style={{opacity: isHeightFocused? 0: 1, color: isHeightFocused? "white":''}}
                  onClick={() =>{
                    setHeightFocused(true);
                    document.querySelector('.height_input').focus()
                  }}>Chiều cao...</div>
            )
          }
          <div className={`height_unit ${isHeightFocused || height ? 'unit_hidden': ''}`} >cm</div>
        </div>
      </div>
      <div>
        <input 
          type="text"
          className='weight_input'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          onFocus={() => setWeightFocused(true)}
          onBlur = {() => setWeightFocused(weight !=="")}
        />
        <div className='weight_container' style={{position:isWeightFocused?"relative" : "", width: isWeightFocused?"30px": "auto", left:isWeightFocused?"258px":""}}>
          {!weight && 
            (
              <div className='weight_title' style={{opacity: isWeightFocused? 0: 1}}
                  onClick={() => {
                    setWeightFocused(true);
                    document.querySelector('.weight_input').focus()
                  }}>Cân nặng...</div>
            )
          }
          <div className={`weight_unit ${isWeightFocused || weight ? 'unit_hidden': ''}`}>kg</div>
        </div>
      </div>
      
      <Link to='/test/body-shape' state={{message : message}}>
        <button className='test_button_class' onClick={() => handleClick(message)}>TIẾP THEO</button>
      </Link>
    </div>
  );
};

export default HeightWeightScreen;