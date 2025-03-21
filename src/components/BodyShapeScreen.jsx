import { notifications } from '@mantine/notifications';
import React, { useState } from 'react';
import { GoAlertFill } from 'react-icons/go';
import { Link, useLocation } from 'react-router-dom';
// import styles from '/src/styles/HeightWeightScreen.module.css';

const BodyShapeScreen = () => {
  const female_shapes = [
    { 
      id: 1,
      name: 'Dáng tam giác ngược', 
      img: '/image/tamgiacnguoc.svg', 
      description: 'Vai ngang, ngực rộng \n Vẫn có eo \n Hông nhỏ hơn vai \n Chân gầy' 
    },
    { 
      id: 2,
      name: 'Dáng đồng hồ cát', 
      img: '/image/donghocat.svg', 
      description: 'Thân người trên và dưới khá đẹp, cơ thể nhiều đường cong \n Hông và ngực nở \n Mỡ thường tích tụ ở ngực, tay, hông, đùi và bụng, nhưng rất ít \n Eo tho nhỏ hơn vòng 1, vòng 3' 
    },
    { 
      id: 3,
      name: 'Dáng hình chữ nhật', 
      img: '/image/hinhchunhat.svg', 
      description: 'Trọng lượng dồn đều cơ thể, không có đường cong \n Kích thước vai, hông và eo thường bằng nhau \n Ngực lép, không có eo, mông nhỏ' 
    },
    { 
      id: 4,
      name: 'Dáng quả lê', 
      img: '/image/quale.svg', 
      description: 'Thân người dưới to, thân người trên nhỏ \n Vai, ngực, eo nhỏ hơn hông \n Trọng lượng thường dồn vào từ dưới hông trở xuống \n Ngực nhỏ, bụng phẳng, tho \n Tay mảnh khảnh \n Hông, đùi, mông to' 
    },
    {
      id: 5,
      name: 'Dáng quả táo',
      img: '/image/quatao.svg',
      description: 'Thân người trên và dưới khá đẹp, cơ thể nhiều đường cong \n Hông và ngực nở \n Mỡ thường tích tụ ở ngực, tay, hông, đùi và bụng, nhưng rất ít \n Eo thon nhỏ hơn vòng 1, vòng 3'
    }
  ];
  const male_shapes =[
    {
      id: 1,
      name: 'Dáng tam giác ngược', 
      img: '/image/nam_tamgiacnguoc.svg',
      description: 'Vai rộng hơn hông \n Phần thân trên to, vạm vỡ \n Ngực nở, lưng rộng \n Hông và eo nhỏ.'
    },
    {
      id: 2,
      name: 'Dáng hình chữ nhật',
      img: '/image/nam_hinhchunhat.svg',
      description: 'Vai, eo và hông có chiều rộng tương đương nhau \n Thân hình thẳng đuột, ít đường cong \n Thường là dáng người gầy hoặc có thể hình trung bình.'
    },
    {
      id: 3,
      name: 'Dáng hình thang ngược',
      img: '/image/nam_hinhthangnguoc.svg',
      description:'Vai rộng hơn hông một chút \n Eo thon gọn hơn vai \n Phần thân trên cân đối \n Dáng người cân đối, khỏe khoắn.'
    },
    {
      id: 4,
      name: 'Dáng hình oval',
      img: '/image/nam_oval.svg',
      description:'Phần giữa cơ thể (bụng, eo) đầy đặn hơn vai và hông \n Vai và hông có xu hướng hẹp hơn \n Thân hình tròn trịa, thiếu đường nét góc cạnh.'
    },
    {
      id:5,
      name: 'Dáng hình tam giác thuận',
      img: '/image/nam_tamgiacthuan.svg',
      description:'Vai hẹp hơn hông \n Phần thân trên nhỏ hơn so với phần thân dưới \n Hông và đùi đầy đặn.'
    }
  ]
  const [selectedShape, setSelectedShape] = useState(null)
  const [tooltipVisible,setToolTipVisible] = useState(false)
  const [tooltipPosition, setToolTipPosition] = useState({x: 0, y: 0})
  const [currentShape, setCurrentShape] = useState(null)
  const [tooltipTimeout, setTooltipTimeout] = useState(null); // Thêm biến timeout
  const [showNotification, setShowNotification] = useState()
  const location = useLocation()
  let currentLst = []
  const message = location.state?.message|| 'Không có data trả về'
  if (message.gender === 'male'){
    currentLst = female_shapes
  }
  else (message.gender === 'female')
  {
    currentLst = male_shapes
  }
  const handleNavigate = (e) => {
      if (!message.shape) {
        e.preventDefault()
        setShowNotification(true)
        notifications.show({
          id:'warning',
          position:'bottom-right',
          withBorder:'true',
          autoClose:'500',
          title:'WARNING',
          color:'#cc3300',
          message:'Bạn cần phải chọn một dáng người phù hợp với bạn trước khi chuyển!',
          icon:<GoAlertFill/>
        })
      }
      else {
        setShowNotification(false)
      }
    }
  const handleMouseEnter = (shape) =>{  
    const timeout = setTimeout(() => {
      setCurrentShape(shape)
      setToolTipVisible(true)
    }, 800);
    setTooltipTimeout(timeout)
  }
  //Handle when leave
  const handleMouseLeave = () =>{
    if (tooltipTimeout){
      clearTimeout(tooltipTimeout)
    }
    setToolTipVisible(false)
    setCurrentShape()
  }
  //Update position
  const handleMouseMove = (e) =>{
    setToolTipPosition({x: e.clientX + window.scrollX, y: e.clientY+ window.scrollY})
  }
  // Handle Click
  const handleMouseClick = (shapename) =>{
    setCurrentShape(shapename)
    message.shape = shapename.id
    setSelectedShape(shapename.name)
  }
  return (
    <div className='bodyshape_container'>
      <div className='bodyshape_text'>
        <h2>Bạn đã biết dáng người của mình là gì chưa?</h2>
        <p>Dáng người rất là yêu và rất có quan trọng quyết định màu sắc phong cách phù hợp cho bạn đấy!</p>
      </div>
      <div className='shape-container'>
        {currentLst.map((shape) => (
          <div 
            key={shape.name} 
            onClick={() => 
            {
              handleMouseClick(shape)
            }}
            onMouseEnter={() => handleMouseEnter(shape)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`shape-item-container ${selectedShape === shape.name ? 'shape_selected' : ''}`}
          >
            <img src={shape.img} alt={shape.name} />
            <h2>{shape.name}</h2>
          </div>
        ))}
      </div>
      {/* tooltip */}
      {tooltipVisible && currentShape && (
        <div
          className='body-shape-tooltip'
          style={{
            position:'absolute',
            top: tooltipPosition.y + 10,
            left: tooltipPosition.x + 10,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius:'5px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            whiteSpace: 'pre-wrap',
            zIndex: 10,
          }}
        >
          <h4>{currentShape.name} là dáng có những đặc điểm sau:</h4>
          <ul>
            {currentShape.description.split('\n').map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      )}
      <Link to='/test/undertone' state={{message: message}} onClick={handleNavigate} >
        <button className='test_button_class'>TIẾP THEO</button>
      </Link>
    </div>
  );
};

export default BodyShapeScreen;