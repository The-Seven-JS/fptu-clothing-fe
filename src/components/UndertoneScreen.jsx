import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const UndertoneScreen = () => {
  const [skinChoosen, setSkinChoosen] = useState('')
  const undertones = [
    { name: 'Undertone lạnh', img: '/image/undertone-lanh.svg' },
    { name: 'Undertone trung tính', img: '/image/undertone-trungbinh.svg' },
    { name: 'Undertone ấm', img: '/image/undertone-am.svg' },
  ];
  // console.log('Undertone-render')
  const location = useLocation()
  const message1 = location.state?.message || "No data passed"
  const handleClick1 = (name) =>{
    // alert(name)
    setSkinChoosen(name)
  }
  const handleClick = (message) =>{
    if (skinChoosen =='Undertone lạnh'){
      message.skin = 1
    }
    else if (skinChoosen == 'Undertone trung tính'){
      message.skin = 2
    }
    else{
      message.skin = 3
    }
    // console.log(message1)
  }

  return (
    <div className='undertone-container'>
      <div>
        <h2>Bạn có biết undertone da của mình là gì không?</h2>
        <p>Undertone là phần sắc độ nằm dưới da, được quyết định bởi sắc tố melanin và không thay đổi, được xác định dễ nhất bằng cách nhìn mạch máu cổ tay. Biết được undertone da của bạn cũng là 1 điều quan trọng để chúng tôi đưa ra những lời khuyên chính xác nhất liên quan tới trang phục. </p>
      </div>
      <div className='undertone-container-items'>
        {undertones.map((undertone) => (
          <div 
            key={undertone.name}
            className={`undertone-container-item ${
                        skinChoosen === undertone.name ? 'undertone_clicked' : ''}`}
            onClick={(e) => {
              handleClick1(undertone.name);
              const computedStyle = window.getComputedStyle(e.currentTarget);
              console.log('Current className:', e.currentTarget.className);
              console.log('Computed styles:', computedStyle);
            }}
          >
            <img src={undertone.img} alt={undertone.name}></img>
            <h3>{undertone.name}</h3>
          </div>
        ))}
      </div>
      <Link to='/test/leglength' state={{ message: message1 }}>
        <button className='test_button_class' onClick={() => handleClick(message1)}>TIẾP THEO</button>
      </Link>
    </div>
  );
};

export default UndertoneScreen;