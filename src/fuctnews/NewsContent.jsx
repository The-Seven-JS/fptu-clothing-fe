import React from 'react';
import { useEffect,useState } from 'react';
import { useLocation,useParams } from 'react-router-dom';
import './NewsContent.css';
import axios from 'axios';
import Comment from './Comment';
function NewsContent() {
  const [username,setUsername] = useState("");
  const [comment,setComment] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { idx } = useParams();// id on link
  const [userData, setUserData] = useState([]);
  const[datex,setDatex] = useState("");
  const[reload,setReload] = useState(false);
  const location = useLocation();
  const { content, date,id } = location.state || { content:userData , date:datex,id:idx }||{content:"No content" , date:"N/A",id:"N/A"};
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
  //post comment
  const handlePostComment = async () => {
    const data = { username, content:comment }; // Prepare the data to send

    try {
      const response = await axios.post(`https://be.fuct.gay/comments/new/${id}`, data);
      console.log(response.data);
      alert("Đã tải lên bình luận. Nhấn'Tải lại bình luận' để cập nhật mới nhất")
    } catch (error) {
      console.error(error);
      alert("Tên hoặc bình luận không được trống!")
    }
  };

  const handleReload = () =>{
    setReload((prevState) => !prevState)
  }

  useEffect(() => {
    const fetchCmt = async () => {
      setIsLoading(true); // Show loading state
  
      try {
        const response = await axios.get(`https://be.fuct.gay/comments/${id}`); // Replace with your API endpoint
        setData(response.data.slice().reverse()); // Update state with fetched data
      } catch (err) {
        setError(err.message); // Handle error
      } finally {
        setIsLoading(false); // End loading state
      }
    };
    fetchCmt();
  }, [reload]);


  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top
}, [location]);


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://be.fuct.gay/articles/get-article/${idx}`); // Replace with your API endpoint
      setUserData(response.data.article.content);
      setDatex(response.data.article.created_at);
      console.log(response.data)
    } catch (err) {
      setError(err.message); // Handle error
    }
  };

  fetchData();

  const fetchCmt = async () => {
    setIsLoading(true); // Show loading state

    try {
      const response = await axios.get(`https://be.fuct.gay/comments/${id}`); // Replace with your API endpoint
      setData(response.data.slice().reverse()); // Update state with fetched data
    } catch (err) {
      setError(err.message); // Handle error
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  fetchCmt();
}, [idx]);
  
  return (
    <div className='news-content'>
      <div className="content-view" dangerouslySetInnerHTML={{ __html: updatedContent }} />
      <div className='comment-section'>
        <div className="comment-container">
        {/* Comment Input */}
        <div className="comment-section">
          <label>Bình luận</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="comment-box"
            placeholder="Nhập bình luận..."
          />
        </div>

        {/* Username Input */}
        <div className="username-section">
          <label>Tên</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="username-box"
            placeholder="Tên bạn là..."
          />
        </div>

        {/* Submit Button */}
        <button onClick={handlePostComment} className="submit-button">
          ĐĂNG
        </button>
        <button onClick={handleReload} className="reload-button">
          Tải lại bình luận
        </button>
      </div>
        {data.map((cmt,index) =>(
        <Comment key={index} username={cmt.username} content={cmt.content} date={cmt.created_at}/>
        ))}
      </div>
    </div>
  );
}

export default NewsContent;