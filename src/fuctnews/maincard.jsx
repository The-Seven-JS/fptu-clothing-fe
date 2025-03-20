import React from 'react'
<<<<<<< Updated upstream
function Maincard({title,content}) {
  return (
    <div className='outer'>
      <img src="https://s3-alpha-sig.figma.com/img/9b92/834d/ba5db2760928a8f3f665c5a65b4b8020?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HXsW6AXLqR-i0Pz4D0KHi1mNP6Jn8VBjpTJwCd7MxhhIF3jLVbioV4OzqVfqz0hqdtyP38IdRU2zWXwvHojWAdPPbOhanziajE1vWGV8dgSWgimGMZWOIQWH7RPTMyaWbbgqJW4gX8IamndAWm5ZzgxMJqadumnZhy38eJYuABDpbhgp6bQ99XyaJ9cOaoI3z-QuHYhZ5jEh7D2riZl3Tl0yuENVOQMBhwwhs1B3TKiaYK7u-JIbkbiWATijziwRZHlV6pVlDuCx9RcpSu4FhbGQ-ss5OZIkKi5ObjB7qKNpRQOo9MrvKw57~1mXQFClpMYxP7TeamwSqr5HTfBUbg__" alt="mainimage"  />
=======
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
>>>>>>> Stashed changes
      <div className='maincard'>
        <h5>TIN NỔI BẬT</h5>
        <h2>{h1Content}</h2>
        <p>{h2Content}</p>
      </div>
    </div>
  )
}

export default Maincard
