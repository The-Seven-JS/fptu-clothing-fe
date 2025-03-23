import Header from './Header';
import Footer from './Footer';
import './styles/index.css';
import MainTestScreen from './MainTestScreen';
import MainPageAdmin from './Admin/MainPage';
import TestIntroScreen from './components/TestIntroScreen';
import GenderScreen from './components/GenderScreen';
import HeightWeightScreen from './components/HeightWeightScreen';
import BodyShapeScreen from './components/BodyShapeScreen';
import { Route, Routes, useLocation } from 'react-router-dom';
import UndertoneScreen from './components/UndertoneScreen';
import ResultScreen from './components/ResultScreen';
import LegComputeScreen from './components/LegComputeScreen';
import News from './fuctnews/News.jsx'
import KnowledgeMenu from './fuctKnowledge/KnowledgeMenu';
import MainPage from './MainPage';
import { useEffect, useState } from 'react';
import Login from './Admin/Login.jsx';
import ChangePassword from './Admin/ChangePassword';
import AddPost from './Admin/AddPost.jsx';
import NewsContent from './fuctnews/NewsContent.jsx';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation()
  useEffect(() =>{
    if (location.pathname.startsWith('/test')){
      document.body.style.backgroundImage = "url('/image/test-background.png')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
    }
    else{
      document.body.style.backgroundImage ="none"
      document.body.style.backgroundColor = "#fff"
    }
  },[location.pathname])
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily:'serif',  
    }}>
    
      <Header />  
      <Routes>
        <Route path='/' element={<MainPage />}w />
        <Route path='/news' element={<News/>}/>
        <Route path='/news/content' element={<NewsContent/>}/>
        <Route path='/knowledge' element={<KnowledgeMenu/>}/>
        <Route path='/admin/success' element={<MainPageAdmin/>} />
        <Route path={isLoggedIn? '/admin/success': '/admin'} element={isLoggedIn ? <MainPageAdmin /> : <Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path='/admin/changepass' element={<ChangePassword/>}/>
        {/* <Route path='/admin' element={<Login/>} /> */}
        <Route path='/admin/addpost' element={<AddPost />} />
        <Route path='/test' element={<MainTestScreen />}>
          <Route index element={<TestIntroScreen/>}/>
          <Route path='/test/intro' element={<TestIntroScreen />} />
          <Route path='/test/gender' element={<GenderScreen />} />
          <Route path='/test/height-weight' element={<HeightWeightScreen />} />
          <Route path='/test/body-shape' element={<BodyShapeScreen />} />
          <Route path='/test/undertone' element={<UndertoneScreen/>}/>
          <Route path='/test/result' element={<ResultScreen/>}/>
          <Route path='/test/leglength' element={<LegComputeScreen/>}/>
          
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
