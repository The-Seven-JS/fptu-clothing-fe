import React, { useState } from 'react'
import MainTestBoard from './components/MainTestBoard'
import MainCard from './components/MainCard'
import '/src/styles/mainpage.css'
import './styles/MainCard.css'
function MainPage() {
  return (
    <div className='main_container'>
      <MainTestBoard/>
      <div className='intro-web'> 
        <h2 className='intro-title'>FUCT là gì?</h2>
        <p className='intro-subtext'>FUCT - FPT University Clothing là không gian để bạn khám phá và định hình phong cách thời trang cá nhân, được tạo ra bởi chính những sinh viên năng động của Đại học FPT. Chúng tôi cung cấp những gợi ý phối đồ thông minh, dựa trên dáng người, sở thích và xu hướng mới nhất – từ góc nhìn của chính những người trẻ am hiểu về thời trang và môi trường FPTU. Bạn sẽ tìm thấy những bí quyết chọn trang phục từ cơ bản đến nâng cao, giúp bạn tự tin hơn trong mọi hoàn cảnh. Hơn thế nữa, FUCT liên tục cập nhật các xu hướng thời trang. Hãy đến với FUCT để biến hóa phong cách và khẳng định dấu ấn riêng, cùng với sự sáng tạo của sinh viên FPT!</p>
      </div>
        <div className='main-mini-nav'>
          <h1 className='title'>ĐIỂM NỔI BẬT</h1>
          <div className='mini-nav'>
            <div className='news-text'>
              <h2>FUCT NEWS</h2>
              <p>Cập nhật những thông tin mới nhất về những xu hướng và phong cách thời trang hiện đại, các bộ sưu tập mới nhất từ các thương hiệu và nhà thiết kế nổi tiếng.</p>
              <button>Chi tiết</button>
            </div>
            <img className='news-img' src='/image/news-slider.jpg'></img>
            <div className='knowledge-text'>
              <h2>KIẾN THỨC THỜI TRANG</h2>
              <p>Cung cấp cái nhìn chi tiết về các thuật ngữ và khái niệm trong thời trang, như định nghĩa về phong cách, thiết kế,và các yếu tố ảnh hưởng đến sự thay đổi trong các xu hướng thời trang.</p>
              <button>Chi tiết</button>
            </div>
            <img className='knowledge-img' src='/image/knowledge-slider.png'></img>
        </div>
      </div>
      <div className='UX-containner'>
        <h1>Sinh viên FPTU nói gì về FUCT!</h1>
        <div className='card-container'>
          <MainCard/> <MainCard/> <MainCard/>
        </div>
      </div>
    </div>
  )
}

export default MainPage