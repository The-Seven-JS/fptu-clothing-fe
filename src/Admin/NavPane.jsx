import React from 'react'
import './NavPane.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
function NavPane() {
  const handleLogout = async () =>{
    try{
      const response = await axios.get('https://be.fuct.gay/logout', { withCredentials: true });
      console.log(response.data.message)
    }
    catch(error){
      console.error('Error logging in:', error);
      throw error;
    }
  }
  return (
    <div className='nav-pane'>
      <div className='menu'>
        <div className='menu-item'>
        <Link to='/admin/success/' style={{textDecoration: 'none', color: 'white'}}>
          <p>Quản lý bài viết</p>
        </Link>
        <Link to={'/admin/success/draft'} style={{textDecoration: 'none', color: 'white'}}>
        <p>Bản ghi rỗng</p>
        </Link>
        <p>Thống kê</p>
        </div>
        <div className='admin'>
            <img id='admin' src="https://s3-alpha-sig.figma.com/img/c958/b7e2/8324c64ed7b705151873e4e3b3063235?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nDgqI7pAXHmIFAU7qva6S-vTdTEk6jGKwaDjOJbrgAytDsj3lNEA2SwtoBq3Novni8L23tkRDKoX0wHyCkqf2OPlMNDj~9hLYF3shEmjsEq3pa7oOVCY3tOa4CiTda4Pg2-GG7TaidMGMhCsK6LJaNZPls7jlSQVdX~PFiicyKgB3L9AsOe31-BlWxKX4S2qDdE-vha0sy55yHq0WH6VMiJJocR25FNTEL9oxwGnzURm6F4x57BZYPM0O42bn3XHg6Jy8UJZSyiEF9svv7hmKumDYfmkvAYXx6QjWh-UwHZT-EaezAIX3mWDEovtsTThddd~vKE-ZJPZ85vLDqxw6Q__" alt="" />
            <Link to='/admin/changepass'>
            <div className='change-pass'>
                <p>Thay đổi mã PIN</p>
                <img src="https://s3-alpha-sig.figma.com/img/e874/ec27/a1475682b39490c8a45302ca0d4c8d9b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SFcAY-Pk-oWvzBH6eu2IE5Fw1TzVYAyW8ZRPzcncVMkaDGhJZWgnlDiGb9GH8cbYROrORkCHw3lpks2vg8lSapGSBhb~IrUjsgVH8rZdPKElen~AMT5aLYxXJ67bZyNXiXo1SdGoNWMitmg50xamdZvfJumNQ~radjqTN~KUcDzVrQ~jL5W3cNmVdS0LgGiV1tEEPLii5pWYRE-7OET7Aj7B~nS0iK-PFfZ1IPmEY35debkwqB1ciGUviyXJezsPwNw1Vt4KJggdXjrnNLOOKO3fJFtz1uZcxjG~YGA2TaQ30NHy-OgSk3TgddzKrXxyY3TCbwqwOj4G001gV0qXCw__" alt="" />
            </div>
            </Link>
            <div className='logout' onClick={handleLogout}>
                <p>Đăng xuất</p>
                <img src="https://s3-alpha-sig.figma.com/img/83e9/ac08/d197c513863055d6a5f5a57e5c468a0d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AH06Az2ls-fNGLeNDXq~awIieyo74NCdl6J7Mjg6K7NqYSJKg84WMdCevwMakK3-17-xuUJrqGuNRNC8B9Zzk9QBMKWBMzERjUqNYCaV1VRPoaIH3~Lvg6lcVtyW6FZnaTBjxpbWySaeAKM67h-W6APsd0apGBCec-TT4tqW-6l0RCmWX5PVRMYhbEVPhIwSfnh8kafm0X9EDHJ1nP3JzbhEMpONehjguad9v2Ffer9OnXOmCyfGIFXZKSP1uZ7ww21kV7L6POj0NphyClRCoaX6os7k-QCWXGSFI5fsxHRtk08iLqClYfRVFa-RG9DrKKm~1Uy~FWOBBqGV~D586A__" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavPane
