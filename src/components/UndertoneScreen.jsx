import React from 'react';
import { Link } from 'react-router-dom';
const UndertoneScreen = ({ onSelect, onNext }) => {
  const undertones = [
    { name: 'Undertone lạnh', img: '/image/undertone-lanh.svg' },
    { name: 'Undertone trung tính', img: '/image/undertone-trungbinh.svg' },
    { name: 'Undertone ấm', img: '/image/undertone-am.svg' },
  ];

  return (
    <div className='undertone-container'>
      <div>
        <h2>Bạn có biết undertone da của mình là gì không?</h2>
        <p>Undertone là phần sắc độ nằm dưới da, được quyết định bởi sắc tố melanin và không thay đổi, được xác định dễ nhất bằng cách nhìn mạch máu cổ tay. Biết được undertone da của bạn cũng là 1 điều quan trọng để chúng tôi đưa ra những lời khuyên chính xác nhất liên quan tới trang phục. </p>
      </div>
      <div className='undertone-container-items'>
        {undertones.map((undertone) =>(
          <div 
            key={undertone.name}
            className='undertone-container-item'
          >
            <img src={undertone.img} alt={undertone.name} sty></img>
            <h3>{undertone.name}</h3>
          </div>
        ))}
      </div>
      <Link to='/test/leglength'>
        <button>Tiếp theo</button>
      </Link>
    </div>
  );
};

export default UndertoneScreen;