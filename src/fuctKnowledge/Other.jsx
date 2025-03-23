import React from 'react'
import { useState } from 'react'
import ReactPaginate from "react-paginate";
import Contentcard from './contentcard'
import './Appearance.css'
function Other() {
    // const itemsPerPage = 5;//so card content tren trang
    // const [curPage,setCurPage] = useState(0);//vi tri trang news
    // const cards = Array.from({length:10});//fetch tu db
    
    // const offset = curPage * itemsPerPage;//vi tri bat dau cua content card render tren moi trang
    // const curCards = cards.slice(offset,offset + itemsPerPage);//sao mang hien thi tren 1 thoi diem
    
    // function handlePageClick({selected}){//xu ly click chuyen trang
    //     setCurPage(selected);
    // }
    //----------ket thuc pagination cac bai viet--------------------------------------------
  return (
    <div>
        <div class="container">
            <div class="line"></div>
            <div class="text">KHÁC</div>
            <div class="line"></div>
        </div>
        {/* {curCards.map((_, index) => (
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
      /> */}
      <Contentcard title={"20 chất liệu vải phổ biến trong thời trang hiện nay"} content={"Bài viết cung cấp 20 chất liệu vải phổ biến trong ngành thời trang hiện nay, từ cotton truyền thống đến silk sang trọng và polyester đa năng."} img={"../src/fuctKnowledge/img/vai.png"}/>
      <Contentcard title={"Form quần là gì? Tất tần tật các form quần phổ biến nhất hiện nay"} content={"Trong thế giới thời trang ngày nay, có vô số kiểu dáng quần phổ biến được ưa chuộng, phản ánh sự đa dạng và sáng tạo trong gu thẩm mỹ của mọi người. Từng kiểu dáng quần không chỉ là một phần của thời trang, mà còn là cách mỗi người tự do diễn đạt bản thân. Cùng FUCT tìm hiểu thêm về những form quần phổ biến ngày nay nhé. "} img={"../src/fuctKnowledge/img/formquan.jpg"}/>
      <Contentcard title={"35 kiểu dáng & tên gọi các loại váy đầm bạn cần biết"} content={"Thời trang dành cho phái nữ vô cùng phong phú và đa dạng, đặc biệt là các loại váy áo tha thướt. Có khi nào các bạn bị lúng túng về tên gọi của chúng chưa?"} img={"../src/fuctKnowledge/img/loaivay.jpg"}/>
    </div>
  )
}

export default Other
