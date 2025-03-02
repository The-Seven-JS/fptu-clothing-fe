import React from 'react';
// import styles from '/src/styles/HeightWeightScreen.module.css';

const BodyShapeScreen = ({ onSelect, onNext }) => {
  const shapes = [
    { name: 'Dáng tam giác ngược'},
    { name: 'Dáng đồng hồ cát' },
    { name: 'Dáng hình chữ nhật'},
    { name: 'Dáng quả lê'},
  ];

  return (
    <div>
      <h2>Bạn đã biết dáng người của mình là gì chưa?</h2>
      <p>Dáng người rất là yêu và rất có quan trọng quyết định màu sắc phong cách phù hợp cho bạn đấy!</p>
      <div >
        {shapes.map((shape) => (
          <div 
            key={shape.name} 
            
            onClick={() => onSelect(shape.name)}
          >
            <img src={shape.img} alt={shape.name} />
            <p>{shape.name}</p>
          </div>
        ))}
      </div>
      <button onClick={onNext}>TIẾP THEO</button>
    </div>
  );
};

export default BodyShapeScreen;