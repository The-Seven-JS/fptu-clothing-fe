import React from 'react';
import { useLocation } from 'react-router-dom';
import './NewsContent.css';

function NewsContent() {
  const location = useLocation();
  const { content, date } = location.state || { content: '<p>No content available</p>', date: 'No date available' };
  // Parse the content and insert a <p> tag after the <h2> tag
  const addParagraphAfterH2 = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const h2 = doc.querySelector('h2'); // Find the first <h2> tag

    if (h2) {
      // Create and insert the <date> tag
      const newDateTag = document.createElement('date');
      newDateTag.textContent = `FUCT NEWS | ĐĂNG NGÀY ${date}`; // Use the date string directly
      h2.insertAdjacentElement('afterend', newDateTag); // Insert <date> after <h2>

      // Create and insert the <div> with class "line"
      const newDiv = document.createElement('div');
      newDiv.className = 'line'; // Add the class name "line"
      newDateTag.insertAdjacentElement('afterend', newDiv); // Insert <div> after <date>
    }

    return doc.body.innerHTML; // Return the updated HTML as a string
  };

  const updatedContent = addParagraphAfterH2(content);

  return (
    <div className='news-content'>
      <div className="content-view" dangerouslySetInnerHTML={{ __html: updatedContent }} />
    </div>
  );
}

export default NewsContent;