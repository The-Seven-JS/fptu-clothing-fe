import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './ResultScreen.module.css';

const ResultScreen = ({ formData, onNext }) => {
  return (
    <div className='result_container'>
      <div className='result_items'>
        <h1>KẾT QUẢ</h1>
        <p>Với dữ liệu chúng tôi nhận được từ kết quả bài kiểm tra vừa rồi, FUCT có 1 số gợi ý về cách lựa chọn trang phục như sau:</p>
      </div>
      <Link to='/'>
        <button>XONG!</button>
      </Link>
    </div>
  );
};

export default ResultScreen;