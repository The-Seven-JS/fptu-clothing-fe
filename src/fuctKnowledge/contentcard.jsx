import React from 'react'
function Contentcard({title,content,onClick,img}) {
  // Function to extract the content of the <h2> tag
  return (
    <div className='contentcard' onClick={onClick} style={{ cursor: 'pointer' }}>
        <img src={img} alt="subimg" />
        <div className='content'>
            <h3>{title}</h3>
            <p className='p1'>{content}</p>
        </div>
    </div>
  )
}

export default Contentcard
