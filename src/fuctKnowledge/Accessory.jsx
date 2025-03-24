import React from 'react'
import { useState } from 'react'
import ReactPaginate from "react-paginate";
import Contentcard from './contentcard'
import './Appearance.css'
function Accessory() {
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
            <div class="text">PHỤ KIỆN</div>
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

    <Contentcard title={"9 Cách Chọn Mũ Phù Hợp Với Khuôn Mặt Chuẩn, Kèm Ảnh Minh Họa"} content={"Bạn chưa biết cách chọn mũ phù hợp với khuôn mặt? Tham khảo ngay những gợi ý từ chúng tôi giúp bạn chọn lựa được kiểu mũ phù hợp với khuôn mặt qua bài viết sau đây nhé!"} img={"/image/fuctKnowledge/cach-chon-mu-hop-voi-khuon-mat.jpg"} />
    <Contentcard title={"Mùa đông đến rồi, bạn đã biết cách chọn mũ len nam sao cho vừa ấm áp lại tôn lên vẻ ngoài?"} content={"Mùa đông đến rồi, bạn đã biết cách chọn mũ len nam sao cho vừa ấm áp lại tôn lên vẻ ngoài? FUCT bật mí 7 mẹo chọn mũ len hoàn hảo cho khuôn mặt và phong cách của bạn!"} img={"/image/fuctKnowledge/chon-mu-len-nam-hop-voi-khuon-mat_407.jpg"}/>
    <Contentcard title={"Cách chọn mũ lưỡi trai nam đẹp, phù hợp với gương mặt"} content={"Nếu bạn đang tìm kiếm một phụ kiện thời trang nam thời thượng, thì mũ lưỡi trai là một lựa chọn không thể bỏ qua. Tuy nhiên, để chọn được một chiếc mũ lông trai nam đẹp phù hợp với gương mặt của mình, không thể là một điều đơn giản. Trong bài viết này, chúng tôi sẽ chia sẻ cho các bạn một số lưu ý khi chọn mũ lưỡi trai nam đẹp và những dòng mũ trai cơ bản hiện nay."} img={"/image/fuctKnowledge/3.png"}/>
    </div>
  )
}

export default Accessory
