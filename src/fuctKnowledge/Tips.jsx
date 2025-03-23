import React from 'react'
import { useState } from 'react'
import ReactPaginate from "react-paginate";
import Contentcard from './contentcard'
import './Appearance.css'
function Tips() {
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
            <div class="text">TIPS</div>
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
      <Contentcard title={"8 nguyên tắc phối đồ “bất di bất dịch” mà các nàng chuộng mốt không thể bỏ qua"} content={"Mặc làm sao cho đẹp và hợp thời không chỉ đơn thuần là một kỹ năng mà nó còn là cách khẳng định cái tôi cá nhân thông qua gu thẩm mỹ thời trang phong phú của các quý cô. Tuy vậy, khi đứng trước tủ đồ với hằng hà sa số sự lựa chọn, các nàng lại do dự thốt lên rằng “Không có gì để mặc!” Cùng FUCT khám phá 8 bí quyết phối đồ không bao giờ lỗi mốt sau đây để tự tin tham dự mọi sự kiện với một phong cách thời trang chỉn chu và thời thượng."} img={"../src/fuctKnowledge/img/tip1.jpg"}/>
      <Contentcard title={"Cách phối màu quần áo siêu đỉnh mà bạn cần biết"} content={"Màu sắc có khả năng biến hóa trang phục tạo nên sự thú vị và phong cách độc đáo. Việc hiểu cách kết hợp màu sắc không chỉ giúp bạn trông tự tin hơn mà còn thể hiện cá tính và phong cách riêng của mình. Hãy cùng FUCT tìm hiểu về cách phối màu quần áo một cách sáng tạo và hiệu quả ngay nhé."} img={"../src/fuctKnowledge/img/tip2.jpg"}/>
      <Contentcard title={"Chọn Form T-Shirt Chuẩn Dáng Người, Bạn Có Biết?"} content={"T-shirt chắc hẳn là item quen thuộc luôn phải có trong tủ quần áo với mỗi chúng ta. Cần thiết là vậy nhưng bạn đã biết cách chọn form áo chuẩn dáng người để giúp tôn dáng của mình?"} img={"../src/fuctKnowledge/img/tip3.jpg"}/>
      <Contentcard title={"Mẹo chọn trang sức phù hợp với kiểu tóc"} content={"Trang sức không chỉ là phụ kiện làm đẹp mà còn thể hiện phong cách và cá tính riêng. Việc lựa chọn trang sức phù hợp với kiểu tóc sẽ giúp bạn tỏa sáng và tự tin hơn. Hãy cùng khám phá cách kết hợp trang sức với các kiểu tóc để tạo nên vẻ ngoài hoàn hảo và thu hút mọi ánh nhìn."} img={"../src/fuctKnowledge/img/tip4.jpg"}/>
      <Contentcard title={"5 cách quàng khăn siêu đẹp giúp bạn tự tin hơn"} content={"Khăn quàng cổ không chỉ là một phụ kiện giữ ấm mà còn giúp tô điểm thêm sự bắt mắt cho set đồ. Biết cách quàng khăn đẹp giúp bạn tự tin hơn. Cùng FUCT tham khảo ngay 5 cách quàng khăn siêu đẹp lại dễ thực hiện dưới đây!"} img={"../src/fuctKnowledge/img/tip5.jpg"}/>
      <Contentcard title={"Quy tắc 1/3 và 2/3: Bí quyết phối đồ tăng thêm chiều cao"} content={"Không phải cá nhân nào cũng thành công trong việc phá vỡ các quy tắc để thể hiện cá tính riêng, việc vận dụng những kinh nghiệm đắt giá sẽ giữ bạn trong vòng an toàn, tạo ra một diện mạo thời thượng và gọn gàng."} img={"../src/fuctKnowledge/img/tip6.jpg"}/>
    </div>
  )
}

export default Tips
