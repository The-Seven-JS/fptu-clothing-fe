import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, useMemo} from 'react';
import processText from '../utils/standardizeText.js';

const ResultScreen = () => {
  const location = useLocation()
  const message = location.state?.message || {
    gender: '',
    shape: 0,
    skin: 0,
    leg: 0,
    bmi: 0
  };
  const api = useMemo(() => `https://be.fuct.gay/advice?gender=${message.gender}&shape=${message.shape}&skin=${message.skin}&leg=${message.leg}&bmi=${message.bmi}`, [message]);
  console.log(api)
  const [renderedContent, setRenderedContent] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API  
        const response = await axios.get(api,{ withCredentials: true});
        const data = response.data.advice;
        const dataObj = processText(data, message.gender);
        const content = (
        <div>
            {dataObj.map((section, i) => (
              <div key={i} className='result_items1'>
                <h3>{section.header}</h3>
                <ul>
                  {section.content.map((subsection, j) => (
                    <li key={j}>
                      {subsection.subheader}
                      <ul>
                        {subsection.content.map((item, k) => (
                          <li key={k}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )
        setRenderedContent(content);
      } catch (error) {
        console.error('Error fetching data:', error);
        setRenderedContent(<div>Error loading results</div>);
      };
    }
    const timer = setTimeout(fetchData, 1000);
    return () => clearTimeout(timer);
  }, [api, message.gender]);
  return (
    <div className='result_container'>
      <div className='result_items'>
        <h1>KẾT QUẢ</h1>
        <p>Với dữ liệu chúng tôi nhận được từ kết quả bài kiểm tra vừa rồi, FUCT có 1 số gợi ý về cách lựa chọn trang phục như sau:</p>
      </div>
      {renderedContent ? renderedContent : <div>Loading...</div>}
      <Link to='/'>
        <button>XONG!</button>
      </Link>
    </div>
  )
}

export default ResultScreen;

// Suspense and lazy is meant for code-splitting and lazy loading, not for loading components, handling data fetching and async processing logic which is not necessary in this case.
// How this works:
/*
  1.Single Source of Truth -> there's only one place where a particular piece of data is stored. In React, this means keeping your state in one location(often a parent component
  or a global store) and then sharing that data with child components via PROPS or CONTEXT. This avoids having multiple copies of data that can get out of sync.
  => In our case: The useEffect hook handles both the API fetch and data processing(including the dynamic import standardizeText.js)
  2.State Management: The processed JSX is stored in the renderContent state, which is updated once all async operations are completed
  3.Simplified Rendering: The component renders renderContent directly when it's available, otherwise it renders a loading message
  4.No Lazy and Suspense needed: Since you're not code-splitting a component but rather fetching and processing data, lazy and Suspense are not necessary
  The loading state is handled manually with a ternary operator


    AWAIT => only work with Promise but not work with callback

  */