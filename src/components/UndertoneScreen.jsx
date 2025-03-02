import React from 'react';
// import styles from './UndertoneScreen.module.css';

const UndertoneScreen = ({ onSelect, onNext }) => {
  const undertones = [
    { name: 'Undertone lạnh', img: 'cool-undertone.png' },
    { name: 'Undertone trung tính', img: 'neutral-undertone.png' },
    { name: 'Undertone ấm', img: 'warm-undertone.png' },
  ];

  return (
    <div >
      <h2>Bạn có biết undertone da của mình là gì không?</h2>
      <p>Undertone là màu sắc nằm sâu, dưới da, quyết định màu sắc phong cách phù hợp cho bạn.</p>
      <div >
        {undertones.map((undertone) => (
          <div 
            key={undertone.name} 
            
            onClick={() => onSelect(undertone.name)}
          >
            <img src={undertone.img} alt={undertone.name} />
            <p>{undertone.name}</p>
          </div>
        ))}
      </div>
      <button onClick={onNext}>TIẾP THEO</button>
    </div>
  );
};

export default UndertoneScreen;