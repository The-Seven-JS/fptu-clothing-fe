import React from 'react'
import '/src/styles/MainCard.css'

function Card({comment, user_img, user, description}) {
  return (
    <div className='card-item'>
        <p className='comment'>"A terrrific piece of praise"</p>
        <div className='user'>
          <img src='/image/icon-test.jpg' alt='user-image' className='user-img'></img>
          <div className='user-info'>
            <p className='user-name'>Atus</p>
            <p className='user-description'>Hâm Hấp</p>
          </div>
        </div>
    </div>
  )
}

export default Card