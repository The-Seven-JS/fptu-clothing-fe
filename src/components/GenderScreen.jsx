import React, { useEffect, useRef, useState } from 'react';
import '/src/styles/MainTestScreen.css'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import { notifications } from '@mantine/notifications';
import { GoAlertFill } from "react-icons/go";

const GenderScreen = () => {
  const [gender, setGender] = useState('')
  const [disableAOS, setDisableAOS] = useState(false); 
  const [showNotification, setShowNotification] = useState();
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
  const handleNavigate = (e) => {
    if (gender == '') {
      e.preventDefault()
      setShowNotification(true)
      notifications.show({
        id:'warning',
        position:'bottom-right',
        withBorder:'true',
        autoClose:'500',
        title:'WARNING',
        color:'#cc3300',
        message:'Bạn cần phải chọn giới tính của bạn trước khi chuyển!',
        icon:<GoAlertFill/>
      })
    }
    else {
      setShowNotification(false)
      message.gender=gender
    }
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
      <Link to='/test/height-weight' state={{message: message}} onClick={handleNavigate} >
        <button className='test_button_class'>TIẾP THEO</button>
      </Link>
    </div>
  );
};

export default GenderScreen;

/* Có 3 cách để passing data qua các page:
1, Sử dụng Local Storage hoặc Session Storage
2, Sử dụng Context API để quản lý trạng thái toàn cục
3, Sử dụng location.state của React Router Dom
*/
