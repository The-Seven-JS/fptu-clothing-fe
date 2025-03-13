import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function LegComputeScreen() {
    const [currentLeg, setCurrentLeg] = useState(1)
    const location = useLocation()
    const message = location.state?.message || 'No data passed';
    console.log('Leg-render')
  return (
    <div className='leglength_container'>
        <div>
            <h2>Tới bước cuối - Xác định độ dài chân rồi nè!</h2>
            <p>Qua chiều dài chân, chúng tôi có thể xác định đúng tỉ lệ chân - lưng, giúp bạn tránh chọn phải những bộ trang phục dìm dáng, từ đó tự tin hơn mỗi khi ra ngoài.</p>
        </div>
        <div className='leglength_items'>
                                                                         
        </div>
        <Link to='/test/result' state={{message: message}}>
            <button onClick={() => {
                message.leg = currentLeg
            }}>Hoàn thành</button>
        </Link>
    </div>
  )
}

export default LegComputeScreen