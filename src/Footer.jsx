import React from 'react'
import './styles/footer.css'
function Footer() {
return (
    <div className='footer'>
        <div className='footer-left'>
            <div className='footer-text'>
                <h1 className='footer-title'>FUCT - FPT UNIVERSITY CLOTHING</h1>
                <h5 className='footer-subtitle'>Copyright © The_Sevens_JS_Club</h5>
            </div>
            <div className='footer-img'>
                <img className='fb' src='/image/footer-fb.svg'>
                </img>
                <img className='insta' src='/image/footer-insta.svg'></img>
                <img className='ytb' src='/image/footer-ytb.svg'></img>
                <img className='github' src='/image/footer-github.svg'></img>
            </div>
        </div>
        <div className='footer-right'>
            <h4>Contact us!</h4>
            <div>
                <h5 className='footer-lead-fb'>JSClub:   <a>https://www.facebook.com/fu.jsclub</a></h5>
                <h5 className='footer-lead-fb'>FPTU leader:   <a>https://www.facebook.com/hathanhtu526</a></h5>
            </div>
        </div>
    </div>
)
}

export default Footer