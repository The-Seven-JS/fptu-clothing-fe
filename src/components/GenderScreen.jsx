import React, { useEffect, useRef, useState } from 'react';
import '/src/styles/MainTestScreen.css'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

const GenderScreen = () => {
  const [gender, setGender] = useState('')
  const [disableAOS, setDisableAOS] = useState(false); 
  const aosInitialized = useRef(false)
  const message = {
    gender: '',
    shape: 0,
    skin: 0,
    leg: 0,
    bmi: 0
  }
  useEffect(() => {
    if (!aosInitialized.current) {
      Aos.init({
        duration: 1000,
        once: true,
      });
      aosInitialized.current = true; // Mark AOS as initialized
    }
    return () => setTimeout(() => setDisableAOS(true), 1000);
  }, []);
  useEffect(() =>{
    if (gender ==='male' || gender ==='female'){
      document.body.style.backgroundColor= '#ADD8E6'
    }
    else{ 
      document.body.style.backgroundColor= 'white'
    }
  },[gender])
  const handleClick = (message) =>{
    message.gender = gender
  }
  return (
    <div className='gender_container'>
      <h1>Giới tính của bạn là gì?</h1>
      <div className='gender_items'>
        <div className={`gender_male ${gender==='male'?'selected':''}`} onClick={() => {
          setGender('male')
          }} 
        {...(!disableAOS && {'data-aos':'zoom-in'})}>  {/*This spread syntax trick  */}
          <img alt='Male' src ='/image/OC_boy.svg'></img>
          <h4>Nam</h4>
        </div>
        <div className={`gender_male ${gender==='female'?'selected':''}`} onClick={() => setGender('female')} {...(!disableAOS && {'data-aos':'zoom-in'})}>
          <img alt='gender_female' src ='/image/OC_girl.svg'></img>
          <h4>Nữ</h4>
        </div>
      </div>
      <Link to='/test/height-weight' state={{message: message}} >
        <button className='test_button_class' onClick={() => handleClick(message)}>TIẾP THEO</button>
      </Link>
    </div>
  );
};

export default GenderScreen;