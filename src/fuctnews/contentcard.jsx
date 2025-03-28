import React from 'react'
import './contentcard.css'
function Contentcard({title,content,date,onClick}) {
  // Function to extract the content of the <h2> tag
  const extractH2Content = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const h2 = doc.querySelector("h2");
    return h2 ? h2.textContent : null;
  };
  const extractH1Content = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const h2 = doc.querySelector("h1");
    return h2 ? h2.textContent : null;
  };
  const h2Content = extractH2Content(content);
  const h1Content = extractH1Content(content);
  return (
    <div className='contentcard' onClick={onClick} style={{ cursor: 'pointer' }}>
        <img src={title} alt="subimg" />
        <div className='content_align'>
          <div className='content'>
            <h3>{h1Content}</h3>
            <p className='p1'>{h2Content}</p>
          </div>
          <p className='p2'>Đăng ngày:{date}</p>
        </div>
    </div>
  )
}

export default Contentcard
