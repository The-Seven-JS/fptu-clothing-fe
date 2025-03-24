import React, { useEffect, useState } from 'react'
import '/src/styles/mainpage.css'
import { Link } from 'react-router-dom'
function MainTestBoard() {
  return (
    <div className='main-test-board'>
      <div>
        <div className='board-text'>
          <h1 className='board-header'>Tìm ra phong cách phù hợp cùng <b>FUCT</b></h1>
          <h2 className='board-subheader'>Làm bài test và mở khóa kĩ năng phối đồ cực xịn để
          để tiếp thêm sự tự tin mỗi khi có dịp ra ngoài.</h2>
          <Link to='/test'>
          <button className='board-explore-btn'>LÀM TEST NGAY</button>
          </Link>
        </div>
        <div className='icon'>
          <img src='/image/test1.png' alt='background-img' className='board-img'></img>
        </div>
      </div>
    </div>
  )
}
export default MainTestBoard