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
import Notification from './Admin/Notification.jsx';
import A1 from './fuctKnowledge/Pages/Appearance/A1.jsx';
import A2 from './fuctKnowledge/Pages/Appearance/A2.jsx';
import A3 from './fuctKnowledge/Pages/Appearance/A3.jsx';
import A4 from './fuctKnowledge/Pages/Appearance/A4.jsx';
import A5 from './fuctKnowledge/Pages/Appearance/A5.jsx';
import AC1 from './fuctKnowledge/Pages/Accessory/AC1.jsx';
import AC2 from './fuctKnowledge/Pages/Accessory/AC2.jsx';
import AC3 from './fuctKnowledge/Pages/Accessory/AC3.jsx';
import AC4 from './fuctKnowledge/Pages/Accessory/AC4.jsx';
import AC5 from './fuctKnowledge/Pages/Accessory/AC5.jsx';
import T1 from './fuctKnowledge/Pages/Tip/T1.jsx';
import T2 from './fuctKnowledge/Pages/Tip/T2.jsx';
import T3 from './fuctKnowledge/Pages/Tip/T3.jsx';
import T4 from './fuctKnowledge/Pages/Tip/T4.jsx';
import T5 from './fuctKnowledge/Pages/Tip/T5.jsx';
import T6 from './fuctKnowledge/Pages/Tip/T6.jsx';
import O1 from './fuctKnowledge/Pages/Other/O1.jsx';
import O2 from './fuctKnowledge/Pages/Other/O2.jsx';
import O3 from './fuctKnowledge/Pages/Other/O3.jsx';
import O4 from './fuctKnowledge/Pages/Other/O4.jsx';
import ProtectedRoute from "./ProtectedRoute.jsx";
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
    if (location.pathname.startsWith('/test')){
      document.body.style.backgroundImage = "url('/image/test-background.png')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "repeat";
    }
    else if (location.pathname.startsWith('/news/')){
      setIsNotFound(false);
      // document.body.style.backgroundColor ="#181828";
    }
    else if (!paths.includes(location.pathname)){
      setIsNotFound(true);
      // document.body.style.backgroundColor ="#181828";
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
        <Route path='/news/content/:idx?' element={<NewsContent/>}/>
        <Route path='/knowledge' element={<KnowledgeMenu/>}/>
        <Route path='/knowledge/appearance' element={<Appearance/>}/>
        <Route path='/knowledge/appearance/id1' element={<A1/>}/>
        <Route path='/knowledge/appearance/id2' element={<A2/>}/>
        <Route path='/knowledge/appearance/id3' element={<A3/>}/>
        <Route path='/knowledge/appearance/id4' element={<A4/>}/>
        <Route path='/knowledge/appearance/id5' element={<A5/>}/>
        <Route path='/knowledge/Accessory' element={<Accessory/>}/>
        <Route path='/knowledge/Accessory/id1' element={<AC1/>}/>
        <Route path='/knowledge/Accessory/id2' element={<AC2/>}/>
        <Route path='/knowledge/Accessory/id3' element={<AC3/>}/>
        <Route path='/knowledge/Accessory/id4' element={<AC4/>}/>
        <Route path='/knowledge/Accessory/id5' element={<AC5/>}/>
        <Route path='/knowledge/Other' element={<Other/>}/>
        <Route path='/knowledge/Other/id1' element={<O1/>}/>
        <Route path='/knowledge/Other/id2' element={<O2/>}/>
        <Route path='/knowledge/Other/id3' element={<O3/>}/>
        <Route path='/knowledge/Other/id4' element={<O4/>}/>
        <Route path='/knowledge/Tips' element={<Tips/>}/>
        <Route path='/knowledge/Tips/id1' element={<T1/>}/>
        <Route path='/knowledge/Tips/id2' element={<T2/>}/>
        <Route path='/knowledge/Tips/id3' element={<T3/>}/>
        <Route path='/knowledge/Tips/id4' element={<T4/>}/>
        <Route path='/knowledge/Tips/id5' element={<T5/>}/>
        <Route path='/knowledge/Tips/id6' element={<T6/>}/>
        <Route path='/admin' element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route element={<ProtectedRoute />}>
        <Route path='/admin/success' element={<MainPageAdmin/>}> 
            <Route index element={<PostManager/>}/>
            <Route path='addpost' element={<AddPost/>}/>
            <Route path='draft' element={<DraftManager/>}/>
            <Route path='notification' element={<Notification/>}/>
            <Route path='changepass' element={<ChangePassword/>}/>
          </Route>
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
