import React, { useEffect } from 'react';
import Header from './Header';
import NavPane from './NavPane';
import './MainPage.css';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
function MainPage() {
  const navigate = useNavigate()
  const sendRequestCheck = async () => {
    try{
      const response = await axios.get('https://be.fuct.gay/admin', { withCredentials: true });
      console.log(response.data.isAuthorized)
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
