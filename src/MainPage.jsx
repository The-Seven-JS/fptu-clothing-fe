import React, { useState } from 'react'
import MainTestBoard from './components/MainTestBoard'
import '/src/styles/mainpage.css'
import MainCard from './components/MainCard'
function MainPage() {
  const [nav, setNav] = useState(1)
  const handleClick = (index) => {
    setNav(index)
  }
  return (
    <div>
      {<MainTestBoard/>}
      <div className='information-section'>
        <h1 className='_title'>FUCT là gì?</h1>
        <p className='details'>FUCT - FPT University Clothing là không gian để bạn khám phá và định hình phong cách thời trang cá nhân, được tạo ra bởi chính những sinh viên năng động của Đại học FPT. Chúng tôi cung cấp những gợi ý phối đồ thông minh, dựa trên dáng người, sở thích và xu hướng mới nhất – từ góc nhìn của chính những người trẻ am hiểu về thời trang và môi trường FPTU. Bạn sẽ tìm thấy những bí quyết chọn trang phục từ cơ bản đến nâng cao, giúp bạn tự tin hơn trong mọi hoàn cảnh. Hơn thế nữa, FUCT liên tục cập nhật các xu hướng thời trang. Hãy đến với FUCT để biến hóa phong cách và khẳng định dấu ấn riêng, cùng với sự sáng tạo của sinh viên FPT!</p>
        <button className='inform-btn'>TÌM HIỂU NGAY</button>
      </div>
      <div className='suggestions-section'>
        <h1 className='suggest-title'><b>Điểm nổi bật</b></h1>
        <div className='news'>
            <div className='news-text'>
              <h2>FUCT NEWS</h2>
              <p>Cập nhật những thông tin mới nhất về những xu hướng và phong cách thời trang hiện đại, các bộ sưu tập mới nhất từ các thương hiệu và nhà thiết kế nổi tiếng.</p>
              <button>Chi tiết</button>
            </div>
            <img src='https://media.vneconomy.vn/w800/images/upload/2021/08/09/eco-fashion2.jpg' alt='model' className='news-img'></img>
        </div>
        <div className='knowledge'>
            <img src='https://img.freepik.com/fotos-premium/fondo-vacaciones-verano-accesorios-mujer-playa-plana-sombrero-paja-pulseras-sandalias-cuero-gafas-sol-cuentas-estrellas-mar-mesa-azul_73691-642.jpg?w=1380' alt='image' className='knowledge-img'></img>
            <div className='knowledge-text'>
              <h2>KIẾN THỨC THỜI TRANG</h2>
              <p>Cung cấp cái nhìn chi tiết về các thuật ngữ và khái niệm trong thời trang, như định nghĩa về phong cách, thiết kế,và các yếu tố ảnh hưởng đến sự thay đổi trong các xu hướng thời trang.</p>
              <button>Chi tiết</button>
            </div>
            <img hidden='false' src='https://img.freepik.com/fotos-premium/fondo-vacaciones-verano-accesorios-mujer-playa-plana-sombrero-paja-pulseras-sandalias-cuero-gafas-sol-cuentas-estrellas-mar-mesa-azul_73691-642.jpg?w=1380' alt='image' className='knowledge-img1'></img>
        </div>
      </div>
      <div className='comment-section'>
        <h1>FPTUers và những chia sẻ về FUCT</h1>
        <div className='card-containner'>
          {<MainCard/>}{<MainCard/>}{<MainCard/>}
        </div>
        <div className='dot-slider'>
          <div className={nav === 1? 'dot1':'dot'} onClick={() => handleClick(1)} id='1'></div>
          <div className={nav === 2? 'dot1':'dot'} onClick={() => handleClick(2)} id='2'></div>
          <div className={nav === 3? 'dot1':'dot'} onClick={() => handleClick(3)} id='3'></div>
        </div>  
      </div>
    </div>
  )
}

export default MainPage