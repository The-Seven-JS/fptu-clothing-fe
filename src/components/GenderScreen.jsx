import React from 'react';
// import styles from '/src/styles/GenderScreen.module.css';

const GenderScreen = ({ onSelect }) => {
  return (
    <div>
      <h2>Giới tính của bạn là?</h2>
      <div >
        <button 
          
          onClick={() => onSelect('Nam')}
        >
          Nam
        </button>
        <button 
          
          onClick={() => onSelect('Nữ')}
        >
          Nữ
        </button>
      </div>
    </div>
  );
};

export default GenderScreen;