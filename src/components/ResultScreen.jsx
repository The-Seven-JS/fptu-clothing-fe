import React from 'react';
// import styles from './ResultScreen.module.css';

const ResultScreen = ({ formData, onNext }) => {
  return (
    <div >
      <h2>Tôi đã đủ! - Xác định dáng người</h2>
      <p>Qua những câu trả lời, chúng tôi đã tìm hiểu và đưa ra phong cách phù hợp, giúp bạn tràn đầy tự tin và năng lượng.</p>
      <div >
        <label>Xác định độ dài chân</label>
        <input 
          type="number" 
          placeholder="Xác định vòng đo" 
        />
      </div>
      <button onClick={onNext}>TIẾP THEO</button>
    </div>
  );
};

export default ResultScreen;