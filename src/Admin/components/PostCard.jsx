import React from 'react'
import './PostCard.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
function PostCard({date,title,id,bg,titleEmpty}) {
  const navigate = useNavigate();

  const extractH1Content = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const h2 = doc.querySelector("h1");
    return h2 ? h2.textContent : null;
  };
  const h1Content = extractH1Content(title);
  const handleDelete = async () => {
    let conf = confirm("Bạn chắc chắn muốn xoá bài viết này?");
    if(conf === true){
      try {
        const response = await axios.delete(`https://be.fuct.gay/articles/delete-article/${id}`, { withCredentials: true });
        console.log('Post deleted:', response.data);
        window.location.reload();
      } catch (error) {
        console.error('Error deleting the post:', error);
        alert('Không thể xoá bài viết!Thử lại');
      }
    }else{
      return;
    }
  };
  const handleEdit = () => {
      navigate(`/admin/success/addpost`, { state: { title,id,bg} });
      console.log(bg);
  }

  return (
    <div className="post-header">
    <div>{h1Content + titleEmpty}</div>
    <div>FUCT NEWS</div>
    <div>{date}</div>
    <div onClick={handleDelete} style={{ cursor: "pointer", color: "red" }}>
        Xoá
    </div>
    <div onClick={handleEdit} style={{ cursor: "pointer", color: "blue" }}>Sửa</div>
</div>
  )
}

export default PostCard
