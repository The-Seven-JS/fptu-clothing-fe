import React, { useState } from 'react'
import './styles/header.css'
function Header() {
    const handleClick = (e) => {
      const [state, setState] = useState(1);
      e.preventDefault();
      
    };

    return (
      <div className="header">
      <div className="header-left">
        <h1 className="header-title">FUCT</h1>
      </div>
      <div className="header-right">
        <div className="header-menu">
        <a href="#" className="menu-item" onClick={handleClick}>TRANG CHỦ</a>
        <a href="#" className="menu-item" onClick={handleClick}>FUCT NEWS</a>
        <a href="#" className="menu-item" onClick={handleClick}>KIẾN THỨC THỜI TRANG</a>
        </div>
        <button className="header-test-button">LÀM TEST NGAY</button>
      </div>
      </div>
    );
}

export default Header