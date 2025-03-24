import React from 'react'
import '/src/styles/MainTestScreen.css'
import { Link } from 'react-router-dom'
function TestIntroScreen() {
  return (
    <div className='intro-container'>
      <h2>Kiểm tra phong cách phù hợp với bạn</h2>
      <p>Bạn đã bao giờ đứng trước tủ quần áo đầy ắp mà vẫn cảm thấy "không có gì để mặc"? Hay bạn đang muốn làm mới không gian sống nhưng lại băn khoăn không biết bắt đầu từ đâu? Có lẽ bạn chỉ đơn giản là muốn khám phá và định hình phong cách cá nhân một cách rõ ràng hơn, để mỗi lựa chọn trang phục hay đồ đạc đều thể hiện đúng con người bạn.</p>
      <p>Nếu bạn đang tìm kiếm câu trả lời cho những câu hỏi trên, thì bài kiểm tra này chính là dành cho bạn. Bài kiểm tra này không chỉ đơn thuần là một danh sách các câu hỏi, mà là một công cụ tương tác giúp bạn khám phá những khía cạnh khác nhau trong gu thẩm mỹ của bản thân. Các bạn sẽ được tìm hiểu rõ hơn về các khía cạnh trên cơ thể của mình, những trang phục phù hợp và những thứ cần tránh. Tin chắc rằng, sau khi học được những tips phối đồ này, bạn sẽ trở nên tự tin hơn khi đi chơi, đi hẹn hò, hay thậm chí là tham dự các sự kiện quan trọng.</p>
      <br/>
      <h4><b>Cấu trúc bài kiểm tra: </b>4 phần</h4>
      <ul>
        <li>Xác định chỉ số BMI(chỉ số trọng của cơ thể);</li>
        <li>Xác định dáng người;</li>
        <li>Xác định tone da;</li>
        <li>Xác định tỉ lệ cơ thể;</li>
      </ul>
      <br/>
      <h4><b>Lưu ý khi làm bài:</b></h4>
      <ul>
        <li>Không bấm F5 hay tải lại trang trong quá trình làm bài để tránh mất dữ liệu của bài thi.</li>
        <li>Trả lời chân thực, sát với bản thân nhất để nhận được kết quả chính xác.</li>
      </ul>
      <div className='sub-container'>
        <Link to="/test/gender" >
          <button className='test_button_class'>TÔI ĐÃ SẴN SÀNG</button>
        </Link>
      </div>
    </div>
  )
}

export default TestIntroScreen