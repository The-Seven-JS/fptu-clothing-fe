import React, { useEffect, useState } from 'react'
import MainTestBoard from './components/MainTestBoard'
import MainCard from './components/MainCard'
import '/src/styles/mainpage.css'
import './styles/MainCard.css'
import Aos from 'aos'
import "aos/dist/aos.css";
function MainPage() {
  useEffect(() =>{
    Aos.init({
      duration: 1000,
      once: false,
    })
  }, [])
  const userExperienceObj = [
    {
      name: 'Mr Thuyết Trần',
      job:'Sinh viên K18 - Digital Marketing',
      src:'/image/thuyet-experience.jpg',
      description:'Nhờ FPTU Clothing, bây giờ tôi cảm thấy mình thật phong cách và lịch lãm trong mắt người khác'
    },
    {
      name: 'Anh Quý Đào Xuân',
      job:'Sinh viên K17 - Digital Art',
      src:'/image/quy-experience.jpg',
      description:"Là một thành viên nhà F, ai không biết FPTU Clothing thì vứt."
    },
    {
      name: 'Anh Phú Mạnh',
      job: 'Sinh viên ngành Kinh Tế Quốc Tế',
      src:'/image/phu-experience.jpg',
      description:'Thật sự với FPTU Clothing, tôi luôn ghi điểm tuyệt đối trong mắt nữ chính của mình.'
    }
  ]
  return (
    <div className='main_container'>
      <MainTestBoard/>
      <div className='intro-web'> 
        <h2 className='intro-title'>FUCT là gì?</h2>
        <p className='intro-subtext' data-aos ="fade-up">FUCT - FPT University Clothing là không gian để bạn khám phá và định hình phong cách thời trang cá nhân, được tạo ra bởi chính những sinh viên năng động của Đại học FPT. Chúng tôi cung cấp những gợi ý phối đồ thông minh, dựa trên dáng người, sở thích và xu hướng mới nhất – từ góc nhìn của chính những người trẻ am hiểu về thời trang và môi trường FPTU. Bạn sẽ tìm thấy những bí quyết chọn trang phục từ cơ bản đến nâng cao, giúp bạn tự tin hơn trong mọi hoàn cảnh. Hơn thế nữa, FUCT liên tục cập nhật các xu hướng thời trang. Hãy đến với FUCT để biến hóa phong cách và khẳng định dấu ấn riêng, cùng với sự sáng tạo của sinh viên FPT!</p>
      </div>
        <div className='main-mini-nav'>
          <h1 className='title' data-aos='fade-up'>ĐIỂM NỔI BẬT</h1>
          <div className='mini-nav'>
            <div className='news-text'data-aos ='fade-right'>
              <h2>FUCT NEWS</h2>
              <p>Cập nhật những thông tin mới nhất về những xu hướng và phong cách thời trang hiện đại, các bộ sưu tập mới nhất từ các thương hiệu và nhà thiết kế nổi tiếng.</p>
              <button>Chi tiết</button>
            </div>
            <img data-aos='fade-left' className='news-img' src='/image/news-slider.jpg'></img>
            <div className='knowledge-text' data-aos='fade-left'>
              <h2>KIẾN THỨC THỜI TRANG</h2>
              <p>Cung cấp cái nhìn chi tiết về các thuật ngữ và khái niệm trong thời trang, như định nghĩa về phong cách, thiết kế,và các yếu tố ảnh hưởng đến sự thay đổi trong các xu hướng thời trang.</p>
              <button>Chi tiết</button>
            </div>
            <img className='knowledge-img' src='/image/knowledge-slider.png' data-aos='fade-right'></img>
        </div>
      </div>
      <div className='UX-containner'>
        <h1 data-aos='fade-right'>Sinh viên FPTU nói gì về FUCT!</h1>
        <div className='card-container' data-aos='fade-up'>
          <MainCard/> <MainCard/> <MainCard/>
        </div>
      </div>
    </div>
  )
}

export default MainPage