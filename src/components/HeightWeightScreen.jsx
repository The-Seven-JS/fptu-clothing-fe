import React from 'react';
// import styles from '/src/styles/HeightWeightScreen.module.css';

const HeightWeightScreen = ({ onNext, onChange, formData }) => {
  return (
    <div >
      <h2>Cùng tìm hiểu về cơ thể của bạn nhé!</h2>
      <p>Chung tôi cần biết chiều cao và cân nặng của bạn để đưa ra câu trả lời thích hợp nhất.</p>
      <div >
        <label>Chiều cao <span >cm</span></label>
        <input 
          type="number" 
          value={formData.height} 
          onChange={(e) => onChange('height', e.target.value)} 
          placeholder="Chiều cao"
        />
      </div>
      <div >
        <label>Cân nặng <span >kg</span></label>
        <input 
          type="number" 
          value={formData.weight} 
          onChange={(e) => onChange('weight', e.target.value)} 
          placeholder="Cân nặng"
        />
      </div>
      <button onClick={onNext}>TIẾP THEO</button>
    </div>
  );
};

export default HeightWeightScreen;