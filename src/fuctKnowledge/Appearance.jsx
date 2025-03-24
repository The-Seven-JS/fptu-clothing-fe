import React from 'react'
import { useState } from 'react'
import ReactPaginate from "react-paginate";
import Contentcard from '../fuctnews/contentcard'
import './Appearance.css'
function Appearance() {
    const itemsPerPage = 5;//so card content tren trang
    const [curPage,setCurPage] = useState(0);//vi tri trang news
    const cards = Array.from({length:10});//fetch tu db
    
    const offset = curPage * itemsPerPage;//vi tri bat dau cua content card render tren moi trang
    const curCards = cards.slice(offset,offset + itemsPerPage);//sao mang hien thi tren 1 thoi diem
    
    function handlePageClick({selected}){//xu ly click chuyen trang
        setCurPage(selected);
    }
    //----------ket thuc pagination cac bai viet--------------------------------------------
  return (
    <div>
        <div class="container">
            <div class="line"></div>
            <div class="text">NGOẠI HÌNH</div>
            <div class="line"></div>
        </div>
        {curCards.map((_, index) => (
        <Contentcard key={index + offset} number={index + offset} />
      ))}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={Math.ceil(10 / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  )
}

export default Appearance
