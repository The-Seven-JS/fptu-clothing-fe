import React from 'react'
import { useState } from 'react'
import ReactPaginate from "react-paginate";
import Contentcard from './contentcard'
import './Appearance.css'
import { Link } from 'react-router-dom';
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
    <Link to={'/knowledge/accessory/id1'} style={{textDecoration:'none'}}>
      <Contentcard title={"Quy tắc chọn phụ kiện trang sức “chuẩn không cần chỉnh” cho phái đẹp"} content={"Phụ kiện tuy nhỏ nhưng lại là mảnh ghép quan trọng cho phong cách của bạn. Trong bài viết hôm nay hãy cùng chúng tôi tìm hiểu về những quy tắc lựa chọn trang sức phù hợp với trang phục cho phái đẹp. Xem ngay nhé!"} img={"/image/fuctKnowledge/trangsuc2.png"} />
    </Link>
    <Link to={'/knowledge/accessory/id2'} style={{textDecoration:'none'}}>
      <Contentcard title={"Những lưu ý khi chọn trang sức"} content={"Trang sức là phụ kiện giúp tôn lên vẻ đẹp và tính cách của mỗi người. Mỗi loại trang sức khác nhau sẽ cho ta một góc nhìn khác nhau về chủ nhân của trang sức đó. Vậy nên việc lựa chọn trang sức sao cho phù hợp với bản thân cũng rất quan trọng. Hãy cùng chúng tôi tìm hiểu những điều cần lưu ý khi mua trang sức và địa chỉ mua trang sức uy tín trong bài viết lần này nhé!"} img={"/image/fuctKnowledge/trangsuc.jpg"} />
    </Link>
    <Link to={'/knowledge/accessory/id3'} style={{textDecoration:'none'}}>
      <Contentcard title={"9 Cách Chọn Mũ Phù Hợp Với Khuôn Mặt Chuẩn, Kèm Ảnh Minh Họa"} content={"Bạn chưa biết cách chọn mũ phù hợp với khuôn mặt? Tham khảo ngay những gợi ý từ chúng tôi giúp bạn chọn lựa được kiểu mũ phù hợp với khuôn mặt qua bài viết sau đây nhé!"} img={"/image/fuctKnowledge/cach-chon-mu-hop-voi-khuon-mat.jpg"} />
    </Link>
    <Link to={'/knowledge/accessory/id4'} style={{textDecoration:'none'}}>
      <Contentcard title={"7 Mẹo Chọn Mũ Len Nam Hợp Khuôn Mặt & Phong Cách"} content={"Mùa đông đến rồi, bạn đã biết cách chọn mũ len nam sao cho vừa ấm áp lại tôn lên vẻ ngoài? FUCT bật mí 7 mẹo chọn mũ len hoàn hảo cho khuôn mặt và phong cách của bạn!"} img={"/image/fuctKnowledge/chon-mu-len-nam-hop-voi-khuon-mat_407.jpg"}/>
    </Link>
    <Link to={'/knowledge/accessory/id5'} style={{textDecoration:'none'}}>
      <Contentcard title={"Cách chọn mũ lưỡi trai nam đẹp, phù hợp với gương mặt"} content={"Nếu bạn đang tìm kiếm một phụ kiện thời trang nam thời thượng, thì mũ lưỡi trai là một lựa chọn không thể bỏ qua. Tuy nhiên, để chọn được một chiếc mũ lông trai nam đẹp phù hợp với gương mặt của mình, không thể là một điều đơn giản. Trong bài viết này, chúng tôi sẽ chia sẻ cho các bạn một số lưu ý khi chọn mũ lưỡi trai nam đẹp và những dòng mũ trai cơ bản hiện nay."} img={"/image/fuctKnowledge/3.png"}/>
    </Link>
    </div>
  )
}

export default Accessory
