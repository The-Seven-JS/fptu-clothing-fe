import React from 'react'
import Header from './Header'
import NavPane from './NavPane'
import './MainPage.css'
function MainPage() {
  return (
    <div>
      <div className='fixed-top'>
        <NavPane/>
        <Header/>
        </div>
    </div>
  )
}

export default MainPage
