import React from 'react'
import '/src/styles/MainCard.css';

function Card({comment, user_img, user, description}) {
  return (
    <div className='card-item'>
        <p className='comment'>{comment}</p>
        <div className='user'>
          <img src={user_img}alt='user-image' className='user-img'></img>
          <div className='user-info'>
            <p className='user-name'>{user}</p>
            <p className='user-description'>{description}</p>
          </div>
        </div>
    </div>
  )
}

export default Card