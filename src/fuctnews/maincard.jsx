import React from 'react'
import './maincard.css'
function Maincard({title,content}) {
  return (
    <div className='outer'>
      <img src="https://s3-alpha-sig.figma.com/img/9b92/834d/ba5db2760928a8f3f665c5a65b4b8020?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=emPg0UXMY8DL~PaOx4tz9PxxVigtmWnSaUJOEMyYXzJ1MuGtLuO0SER56zVDo~VLDpMi3TNScpggMAL~jl-KHV9exaiJvfN-6aoASV8N5djj66w9YjdMlNjnF5y95uQeG6r6n7h24CaRW-SqVs06R5G6DGe1W1WsmnVVt9ElzAwF-x4u-9DTJE-PevAsZCRg2JlpDWQOp1uJzNIDGhl-EqSOp4P3M5Lq2nrhC6DT2cY2HErpvQ42bzBhvXO84JUxALE~eNFlvgeVgKbEGzhX1-jDYMLYjSkv07HAqCLrvSuxmqB~TX17C2pezL1hz~s-jaRIy85aYZMSIwYXP2A3ow__" alt="mainimage"  />
      <div className='maincard'>
        <h5>TIN NỔI BẬT</h5>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Maincard
