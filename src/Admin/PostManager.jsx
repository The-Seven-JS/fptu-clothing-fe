import PostCard from './components/PostCard'
import React, { useState,useEffect } from 'react'
import ReactPaginate from "react-paginate";
import axios from "axios";
import SearchBar from './components/SearchBar';
function PostManager() {
    const [data, setData] = useState([]);//fetch data tu db
    const [content, setContent] = useState([]);//fetch data tu db
    useEffect(() => {
      axios.get("https://be.fuct.gay/articles").then((res) => {
        setData(res.data.slice(res.data.length-5,res.data.length).reverse());
        setContent(res.data.slice().reverse());
      });
    }, []);
    //---------ket thuc fetch data--------------------------------
    const itemsPerPage = 5;//so card content tren trang
    const [curPage,setCurPage] = useState(0);//vi tri trang news
    const cards = content.slice();//fetch tu db

    const offset = curPage * itemsPerPage;//vi tri bat dau cua content card render tren moi trang
    const curCards = cards.slice(offset,offset + itemsPerPage);//sao mang hien thi tren 1 thoi diem

    function handlePageClick({selected}){//xu ly click chuyen trang
        setCurPage(selected);
    }
    //---------ket thuc pagination cac bai viet--------------------------------------------------   
        function handlePageClick({selected}){//xu ly click chuyen trang
            setCurPage(selected);
        }
  return (
    <div>
      <div>
        <SearchBar/>
      </div>
        {curCards.map((card, index) => (
        <PostCard key={index + offset} title={card.content} id={card.id} bg={card.title} source="FUCT NEWS" date={card.created_at} titleEmpty={""} />
      ))}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={Math.ceil(content.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        />
    </div>
  )
}

export default PostManager
