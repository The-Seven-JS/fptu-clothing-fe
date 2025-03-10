import React from 'react'
import '/src/styles/MainTestScreen.css'
import BodyShapeScreen from './components/BodyShapeScreen';
import TestIntroScreen from './components/TestIntroScreen';
import { Outlet } from 'react-router-dom';
function MainTestScreen() {
  return (
    <div className='test-container'>
      <h1 className='test-title'>FUCT</h1>
      <div className='maintest-content'>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainTestScreen