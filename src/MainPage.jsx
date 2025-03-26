import React, { useEffect, useState } from 'react'
import MainTestBoard from './components/MainTestBoard'
import MainCard from './components/MainCard'
import '/src/styles/mainpage.css'
import './styles/MainCard1.css'
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
      src:'/image/thuyet_experience.jpg',
      description:'Nhờ FPTU Clothing, bây giờ tôi cảm thấy mình thật phong cách và lịch lãm trong mắt người khác'
    },
    {
      name: 'Anh Quý Đào Xuân',
      job:'Sinh viên K17 - Digital Marketing',
      src:'/image/quy_experience.jpg',
      description:"Là một thành viên nhà F, ai không biết FPTU Clothing thì vứt."
    },
    {
      name: 'Anh Phú Mạnh',
      job: 'Sinh viên K18 - International Business',
      src:'/image/phu_experience.jpg',
      description:'Thật sự với FPTU Clothing, tôi luôn ghi điểm tuyệt đối trong mắt nữ chính của mình.'
    },
    {
      name: 'Anh Hòa Xoăn',
      job: 'Sinh viên K18 - Digital Art',
      src:'/image/hoa-experience.png',
      description:'FPTU Clothing mang cho tôi trải nghiệm thật YOMOST!'
    },
    {
      name:'Bạn Tú Cute',
      job: 'Sinh viên K20 - Hotel Management', 
      src:'/image/icon-test.jpg',
      description:'Nhờ FPT Clothing đã buff cho tôi thêm 120% độ đẹp trai!'
    }
    ,
    {
      name: 'Đăng Đẹp Trai',
      job: 'Sinh viên K20 - International Law',
      src: '/image/dang-experience.jfif',
      description:'Lòng tôi tan nát khi nhận ra tôi là FUCT.GAY :('
    }
  ]
  const news_slider = [
    'news-slider.jpg',
    'news-slider(1).png',
    'news-slider(2).png',
  ]
  const knowledge_slider = [
    'knowledge-slider.png',
    'knowledge-slider(1).png',
    'knowledge-slider(2).png'
  ]
  return (
    <div className='main_container'>
      <MainTestBoard/>
      <div className='maintest_introduction'>
        <img src='/image/female_introduction.svg' data-aos='fade-down-right' alt='background-img' className='f_introduction-img'></img>
        <div className='intro-web'>
          <h2 className='intro-title'>FUCT là gì?</h2>
          <p className='intro-subtext' data-aos ="fade-up">FUCT - FPT University Clothing là không gian để bạn khám phá và định hình phong cách thời trang cá nhân, được tạo ra bởi chính những sinh viên năng động của Đại học FPT. Chúng tôi cung cấp những gợi ý phối đồ thông minh, dựa trên dáng người, sở thích và xu hướng mới nhất – từ góc nhìn của chính những người trẻ am hiểu về thời trang và môi trường FPTU. Bạn sẽ tìm thấy những bí quyết chọn trang phục từ cơ bản đến nâng cao, giúp bạn tự tin hơn trong mọi hoàn cảnh. Hơn thế nữa, FUCT liên tục cập nhật các xu hướng thời trang. Hãy đến với FUCT để biến hóa phong cách và khẳng định dấu ấn riêng, cùng với sự sáng tạo của sinh viên FPT!</p>
        </div>
        <img src='/image/male_introduction.svg' data-aos='fade-left' alt='background-img' className='m_introduction-img'></img>
      </div>
      <div className='main-mini-nav'>
        <h1 className='title' data-aos='fade-up'>ĐIỂM NỔI BẬT</h1>
        <div className='mini-nav'>
          <div className='news-text' data-aos ='fade-right'>
            <h2>FUCT NEWS</h2>
            <p>Cập nhật những thông tin mới nhất về những xu hướng và phong cách thời trang hiện đại, các bộ sưu tập mới nhất từ các thương hiệu và nhà thiết kế nổi tiếng.</p>
          </div>
            <img data-aos='fade-left' className='news-img' src='/image/news-slider(1).png' alt='news'></img>
          <div className='knowledge-text' data-aos='fade-left'>
            <h2>KIẾN THỨC THỜI TRANG</h2>
            <p>Cung cấp cái nhìn chi tiết về các thuật ngữ và khái niệm trong thời trang, như định nghĩa về phong cách, thiết kế, và các yếu tố ảnh hưởng đến sự thay đổi trong các xu hướng thời trang.</p>
          </div>
            <img className='knowledge-img' src='/image/knowledge-slider(1).png' data-aos='fade-right' alt='knowledge'></img>
        </div>
      </div>
      <div className='UX-containner'>
        <h1 data-aos='fade-right'>Sinh viên FPTU nói gì về FUCT!</h1>
        <div className='card-container' data-aos='fade-up'>
          {userExperienceObj.map((ele, index) => (
            <MainCard key={index} comment={ele.description} user_img={ele.src} user={ele.name} description={ele.job}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainPage