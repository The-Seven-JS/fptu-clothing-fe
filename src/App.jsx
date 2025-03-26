import Header from './Header';
import Footer from './Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles/index.css';
import MainTestScreen from './MainTestScreen';
import MainPageAdmin from './Admin/MainPage';
import TestIntroScreen from './components/TestIntroScreen';
import GenderScreen from './components/GenderScreen';
import HeightWeightScreen from './components/HeightWeightScreen';
import BodyShapeScreen from './components/BodyShapeScreen';
import UndertoneScreen from './components/UndertoneScreen';
import ResultScreen from './components/ResultScreen';
import LegComputeScreen from './components/LegComputeScreen';
import News from './fuctnews/News.jsx'
import KnowledgeMenu from './fuctKnowledge/KnowledgeMenu';
import Appearance from './fuctKnowledge/Appearance.jsx'
import Accessory from './fuctKnowledge/Accessory.jsx';
import MainPage from './MainPage';
import Login from './Admin/Login.jsx';
import ChangePassword from './Admin/ChangePassword';
import AddPost from './Admin/AddPost.jsx';
import NewsContent from './fuctnews/NewsContent.jsx';
import Other from './fuctKnowledge/Other.jsx';
import Tips from './fuctKnowledge/Tips.jsx'
import PostManager from './Admin/PostManager.jsx';
import DraftManager from './Admin/DraftManager';
import ErrorPage from './utils/ErrorPage';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const location = useLocation()
  const paths = [
    '/',
    '/home',
    '/news',
    '/news/content',
    '/knowledge',
    '/knowledge/appearance',
    '/knowledge/Accessory',
    '/knowledge/Other',
    '/knowledge/Tips',
    '/admin/success',
    '/admin',
    '/admin/success/addpost',
    '/admin/success/draft',
    '/admin/success/changepass',
    '/test',
    '/test/intro',
    '/test/gender',
    '/test/height-weight',
    '/test/body-shape',
    '/test/undertone',
    '/test/result',
    '/test/leglength',
  ];
  useEffect(() =>{
    console.log(location.pathname)
    if (location.pathname.startsWith('/test')){
      document.body.style.backgroundImage = "url('/image/test-background.png')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "repeat";
    }
    else if (!paths.includes(location.pathname)){
      setIsNotFound(true);
      document.body.style.backgroundColor ="#181828";
    }
    else{
      setIsNotFound(false)
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
    
      {!isNotFound && <Header/>} 
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/home' element={<MainPage />}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/news/content' element={<NewsContent/>}/>
        <Route path='/knowledge' element={<KnowledgeMenu/>}/>
        <Route path='/knowledge/appearance' element={<Appearance/>}/>
        <Route path='/knowledge/Accessory' element={<Accessory/>}/>
        <Route path='/knowledge/Other' element={<Other/>}/>
        <Route path='/knowledge/Tips' element={<Tips/>}/>
        <Route path='/admin/success' element={<MainPageAdmin/>} />
        <Route path='/admin' element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path='/admin/success' element={<MainPageAdmin/>}> 
          <Route index element={<PostManager/>}/>
          <Route path='addpost' element={<AddPost/>}/>
          <Route path='draft' element={<DraftManager/>}/>
          <Route path='changepass' element={<ChangePassword/>}/>
        </Route>
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
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      {!isNotFound &&<Footer/>}
    </div>
  );
}

export default App;
