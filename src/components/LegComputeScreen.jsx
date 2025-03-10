import React from 'react'
import { Link } from 'react-router-dom'

function LegComputeScreen() {
  return (
    <div className='leglength_container'>
        <div>
            <h2>Tới bước cuối - Xác định độ dài chân rồi nè!</h2>
            <p>Qua chiều dài chân, chúng tôi có thể xác định đúng tỉ lệ chân - lưng, giúp bạn tránh chọn phải những bộ trang phục dìm dáng, từ đó tự tin hơn mỗi khi ra ngoài.</p>
        </div>
        <div className='leglength_items'>
            <div>
                <img alt='Thuoc do' src=''></img>
                <h4>Xác định bằng thước đo</h4>
            </div>
            <div>
                <img alt='Thuoc do' src='/image/uoc_luong.svg'></img>
                <h4>Xác định bằng ước lượng</h4>
            </div>
            <div>
                <img alt='Thuoc do' src=''></img>
                <h4>Tôi không rõ cách xác định</h4>
            </div>
        </div>
        <Link to='/test/result'>
            <button>Hoàn thành</button>
        </Link>
    </div>
  )
}

export default LegComputeScreen