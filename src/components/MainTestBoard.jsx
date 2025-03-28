import React, { useEffect, useState } from 'react'
import '/src/styles/mainpage.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css";
function MainTestBoard() {
  useEffect(() =>{
      Aos.init({
        duration: 1000,
        once: false,
      })
    }, [])
  return (
    <div className='main-test-board'>
      <div className='main-component'>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}> 
        <div className='board-text'>
          <h1 className='board-header'>Tìm ra phong cách phù hợp cùng <b>FUCT</b></h1>
          <h2 className='board-subheader'>Làm bài test và mở khóa kĩ năng phối đồ cực xịn để
          để tiếp thêm sự tự tin mỗi khi có dịp ra ngoài.</h2>
          <Link to='/test'>
          <button className='board-explore-btn'>LÀM TEST NGAY</button>
          </Link>
        </div>
        <div className='icon'>
          <img src='/image/female_maintestboard.svg' alt='background-img' className='female_maintestboard-img'></img>
          <img src='/image/male_maintestboard.svg' alt='background-img' className='male_maintestboard-img'></img>
        </div>
      </div>
      </div>
    </div>
  )
}
export default MainTestBoard