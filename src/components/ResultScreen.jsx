import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, useMemo} from 'react';
import processText from '/src/utils/standardizeText.js'

const ResultScreen = () => {
  const location = useLocation()
  const message = location.state?.message || {
    gender: '',
    shape: 0,
    skin: 0,
    leg: 0,
    bmi: 0
  };
  const api = useMemo(() => `http://34.87.162.201:3000/advice?gender=${message.gender}&shape=${message.shape}&skin=${message.skin}&leg=${message.leg}&bmi=${message.bmi}`, [message]);
  const [data, setData] = useState(null);  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setData(response.data.advice);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };  
    const timer = setTimeout(fetchData, 1000);
    return () => clearTimeout(timer);
  }, [api]);
  const handleRendering = (data) =>{
    const dataObj = processText(data, message.gender)
    
    return (
      <div>
      {dataObj.map((section, i) => (
        <div key={i}>
          <h3>{section.header}</h3>
          <ul>
            {section.content.map((subsection, j) => (
              <li key={j}>
                {subsection.subheader}
                <ul>
                  {subsection.content.map((item, k) => (
                    <li key={k}>
                      {item.title}: {item.content}
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
  }
  return (
    <div className='result_container'>
      <div className='result_items'>
        <h1>KẾT QUẢ</h1>
        <p>Với dữ liệu chúng tôi nhận được từ kết quả bài kiểm tra vừa rồi, FUCT có 1 số gợi ý về cách lựa chọn trang phục như sau:</p>
      </div>
      {data != null && handleRendering(data)}
      <Link to='/'>
        <button>XONG!</button>
      </Link>
    </div>
  );
};

export default ResultScreen;