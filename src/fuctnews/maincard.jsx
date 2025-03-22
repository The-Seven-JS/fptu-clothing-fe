import React from 'react'
import './maincard.css'
function Maincard({title,content,onClick}) {
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
    <div className='outer' onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={title} alt="mainimage"  />
      <div className='maincard'>
        <h5>TIN NỔI BẬT</h5>
        <h2>{h1Content}</h2>
        <p>{h2Content}</p>
      </div>
    </div>
  )
}

export default Maincard
