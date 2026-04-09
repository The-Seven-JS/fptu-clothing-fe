import React from 'react'
import { useState } from 'react'
import ReactPaginate from "react-paginate";
import Contentcard from './contentcard'
import './Appearance.css'
import { Link } from 'react-router-dom';
function Appearance() {
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
            <div class="text">NGOẠI HÌNH</div>
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
      <Link to={'/knowledge/appearance/id1'} style={{textDecoration:'none'}}>
        <Contentcard title={"Nhận Biết 5 Dáng Người Cơ Bản Để Chọn Đồ Đẹp Hơn"} content={"Trong bài viết này, FUCT sẽ giúp bạn nhận biết dáng người của bản thân một cách chính xác nhất, đây là bước đầu tiên trong quá trình tìm hiểu phong cách phối đồ phù hợp với cơ thể của bạn. Từ đây, bạn có thể lựa chọn những trang phục khiến bản thân tự tin nhất. Cùng FUCT tìm hiểu nhé! "} img={"/image/fuctKnowledge/dang.jpg"}/>
      </Link>
      <Link to={'/knowledge/appearance/id2'} style={{textDecoration:'none'}}>
        <Contentcard title={"5 kiểu dáng người nam và cách chọn trang phục theo dáng người"} content={"Dáng người nam thường bao gồm dáng hình chữ nhật, hình tam giác, hình tam giác ngược, hình thang, hình oval. Bạn cần hiểu rõ vóc dáng để chọn trang phục phù hợp"} img={"/image/fuctKnowledge/dangnam.jpg"}/>
      </Link>
      <Link to={'/knowledge/appearance/id3'} style={{textDecoration:'none'}}>
        <Contentcard title={"Cách xác định tone da dựa vào Skintone và Undertone uy tín"} content={"Làm thế nào để xác định tone da? Cho đến nay, có khá nhiều bạn vẫn không biết mình thuộc tone da nào? Ấm hay lạnh? Sáng hay trung tính? Việc lựa chọn màu da khá quan trọng, giúp cho bạn lựa chọn mỹ phẩm, phụ kiện cũng như trang phục phù hợp với mình. Trong bài viết dưới đây, FUCT sẽ chia sẻ đến bạn cách xác định tone da đơn giản, chính xác."} img={"/image/fuctKnowledge/skintone.jpg"}/>
      </Link>
      <Link to={'/knowledge/appearance/id4'} style={{textDecoration:'none'}}>
        <Contentcard title={"Cách tính chiều cao cân nặng theo chuẩn BMI chính xác"} content={"Hiện nay BMI được xem là một trong những chỉ số đánh giá tình trạng sức khỏe của một người chuẩn xác nhất. Chỉ số BMI có thể phản ánh những vấn đề sức khỏe mà bạn đang gặp phải như tim mạch, tiểu đường, béo phì,… Thông qua bài viết này hãy cùng FUCT tìm hiểu cách tính chiều cao cân nặng đúng với chuẩn BMI nhất hiện nay."} img={"/image/fuctKnowledge/bmi.jpg"}/>
      </Link>
      <Link to={'/knowledge/appearance/id5'} style={{textDecoration:'none'}}>
        <Contentcard title={"Tỉ lệ lưng và chân nam nữ như thế nào là chuẩn?"} content={"Bạn đang tìm hiểu về tỉ lệ lý tưởng giữa lưng và chân của cơ thể? Tại sao tỉ lệ này quan trọng và làm thế nào để đạt được sự cân bằng và hài hòa? Trong bài viết này, FUCT sẽ bật mí cho bạn các yếu tố quan trọng để hiểu rõ hơn về vấn đề này."} img={"/image/fuctKnowledge/tilelungchan.jpg"}/>
      </Link>
    </div>
  )
}

export default Appearance
