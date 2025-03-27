import React, { useEffect, useState } from 'react';
import Header from './Header';
import NavPane from './NavPane';
import './MainPage.css';
import Login from './Login';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddPost from './AddPost';
import PostManager from './PostManager';
function MainPage() {
  const [validate, setValidate] = useState(true)
  const navigate = useNavigate()
  const sendRequestCheck = async () => {
    try{
      const response = await axios.get('http://localhost:3000/admin', { withCredentials: true });
      console.log(response.data.message)
    }
    catch(error){
      console.error('Error logging in:', error);
      navigate('/')
      throw error;
    }
  }
  sendRequestCheck()
  return (
    <div>
        <div className='fixed-top'>
          <NavPane />
          <div className='right-side'>
            <Header/>
            <div className='inside-right-side'>
                <Outlet/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default MainPage;
