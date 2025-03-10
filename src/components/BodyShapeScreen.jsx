import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import styles from '/src/styles/HeightWeightScreen.module.css';

const BodyShapeScreen = ({ onSelect, onNext }) => {
  const [selectedShape, setSelectedShape] = useState()
  const [tooltipVisible,setToolTipVisible] = useState(false)
  const [tooltipPosition, setToolTipPosition] = useState({x: 0, y: 0})
  const [currentShape, setCurrentShape] = useState()
  const female_shapes = [
    { 
      name: 'Dáng tam giác ngược', 
      img: '/image/tamgiacnguoc.svg', 
      description: 'Vai ngang, ngực rộng \n Vẫn có eo \n Hông nhỏ hơn vai \n Chân gầy' 
    },
    { 
      name: 'Dáng đồng hồ cát', 
      img: '/image/donghocat.svg', 
      description: 'Thân người trên và dưới khá đẹp, cơ thể nhiều đường cong \n Hông và ngực nở \n Mỡ thường tích tụ ở ngực, tay, hông, đùi và bụng, nhưng rất ít \n Eo tho nhỏ hơn vòng 1, vòng 3' 
    },
    { 
      name: 'Dáng hình chữ nhật', 
      img: '/image/hinhchunhat.svg', 
      description: 'Trọng lượng dồn đều cơ thể, không có đường cong \n Kích thước vai, hông và eo thường bằng nhau \n Ngực lép, không có eo, mông nhỏ' 
    },
    { 
      name: 'Dáng quả lê', 
      img: '/image/quale.svg', 
      description: 'Thân người dưới to, thân người trên nhỏ \n Vai, ngực, eo nhỏ hơn hông \n Trọng lượng thường dồn vào từ dưới hông trở xuống \n Ngực nhỏ, bụng phẳng, tho \n Tay mảnh khảnh \n Hông, đùi, mông to' 
    },
    {
      name: 'Dáng quả táo',
      img: '/image/quatao.svg',
      description: 'Thân người trên và dưới khá đẹp, cơ thể nhiều đường cong \n Hông và ngực nở \n Mỡ thường tích tụ ở ngực, tay, hông, đùi và bụng, nhưng rất ít \n Eo thon nhỏ hơn vòng 1, vòng 3'
    }
  ];
  const male_shapes =[
    {
      name: ''
    }
  ]
  //Handle when hover
  const handleMouseEnter = (shape) =>{
    setCurrentShape(shape)
    setToolTipVisible(true)
  }
  //Handle when leave
  const handleMouseLeave = () =>{
    setToolTipVisible(false)
    setCurrentShape()
  }
  //Update position
  const handleMouseMove = (e) =>{
    setToolTipPosition({x: e.clientX, y: e.clientY})
  }
  // Handle Click
  const handleMouseClick = (shapename) =>{
    setCurrentShape(shapename)
    onSelect(shapename)
  }
  return (
    <div className='bodyshape_container'>
      <div className='bodyshape_text'>
        <h2>Bạn đã biết dáng người của mình là gì chưa?</h2>
        <p>Dáng người rất là yêu và rất có quan trọng quyết định màu sắc phong cách phù hợp cho bạn đấy!</p>
      </div>
      <div className='shape-container'>
        {female_shapes.map((shape) => (
          <div 
            key={shape.name} 
            onClick={() => handleMouseClick(shape.name)}
            onMouseEnter={() => handleMouseEnter(shape)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`shape-item-container ${selectedShape === shape.name ? 'selected' : ''}`}
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
      <Link to='/test/undertone'>
        <button onClick={onNext}>TIẾP THEO</button>
      </Link>
    </div>
  );
};

export default BodyShapeScreen;