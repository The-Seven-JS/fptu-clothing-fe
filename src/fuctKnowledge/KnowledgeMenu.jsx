import React from 'react'
import './KnowledgeMenu.css'
import { Link } from 'react-router-dom';
function KnowledgeMenu() {
  return (
    <div className="background">
        <Link to={'/knowledge/appearance'}>
            <div className='item'>
                <img src="/image/fuctKnowledge/ngoaihinh.jpeg" alt="" />
                <p>NGOẠI HÌNH</p>
            </div>
        </Link>
        <Link to={'/knowledge/Accessory'}>
            <div className='item'>
                <img src="/image/fuctKnowledge/phukien.jpg" alt="" />
                <p>PHỤ KIỆN</p>
            </div>
        </Link>
        <Link to={'/knowledge/Tips'}>
            <div className='item'>
                <img src="/image/fuctKnowledge/phoido.jpg" alt="" />
                <p>PHỐI ĐỒ</p>
            </div>
        </Link>
        <Link to={'/knowledge/other'}>
            <div className='item'>
                <img src="/image/fuctKnowledge/khac.jpg" alt="" />
                <p>KHÁC</p>
            </div>
        </Link>
    </div>
  )
}

export default KnowledgeMenu
