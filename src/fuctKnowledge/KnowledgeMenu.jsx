import React from 'react'
import './KnowledgeMenu.css'
function KnowledgeMenu() {
  return (
    <div className="background">
        <div className='item'>
            <img src="/image/fuctKnowledge/ngoaihinh.jpeg" alt="" />
            <p>NGOẠI HÌNH</p>
        </div>
        <div className='item'>
            <img src="/image/fuctKnowledge/phukien.jpg" alt="" />
            <p>PHỤ KIỆN</p>
        </div>
        <div className='item'>
            <img src="/image/fuctKnowledge/phoido.jpg" alt="" />
            <p>PHỐI ĐỒ</p>
        </div>
        <div className='item'>
            <img src="/image/fuctKnowledge/khac.jpg" alt="" />
            <p>KHÁC</p>
        </div>
            
    </div>
  )
}

export default KnowledgeMenu
