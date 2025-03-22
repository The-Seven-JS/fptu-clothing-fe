import React, { useEffect, useState } from 'react';
import Header from './Header';
import NavPane from './NavPane';
import './MainPage.css';
import Login from './Login';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddPost from './AddPost';
import PostManager from './PostManager';
function MainPage() {
  return (
    <div>
        <div className='fixed-top'>
          <NavPane />
          <div className='right-side'>
            <Header />
            <div className='inside-right-side'>
              <PostManager />
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainPage
