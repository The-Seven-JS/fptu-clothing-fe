import React, { useState } from 'react'
import './NotiCard.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewsContent from '../../fuctnews/NewsContent'
function NotiCard({content,id,time,user,cmtid}) {
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://be.fuct.gay/articles/get-article/${id}`); // Không có URL mặc định
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Quăng lỗi để xử lý bên ngoài (nếu cần)
    }
  };
  
  const handleOpen = async () => {
    const result = await fetchData(); // Wait for the data to be fetched
    navigate(`/news/content/`, {
      state: {
        content: result.article.content,
        date: result.article.created_at,
        id: id,
      },
    });
  };
  
  const handleDelete = async () => {
    let conf = confirm("Bạn chắc chắn muốn xoá bình luận này?");
    if(conf === true){
      try {
        const response = await axios.delete(`https://be.fuct.gay/comments/delete/${id}/${cmtid}`, { withCredentials: true });
        console.log('Post deleted:', response.data);
        window.location.reload();
      } catch (error) {
        console.error('Error deleting the post:', error);
        alert('Không thể xoá bình luận!Thử lại');
      }
    }else{
      return;
    }
  };

  return (
    <div className="noti-header">
    <div>{content}</div>
    <div>{id}</div>
    <div>{time}</div>
    <div>{user}</div>
    <div onClick={handleDelete} style={{ cursor: "pointer", color: "red" }}>Xoá</div>
    <div onClick={handleOpen} style={{ cursor: "pointer", color: "blue" }}>Mở bài viết</div>
</div>
  )
}

export default NotiCard
