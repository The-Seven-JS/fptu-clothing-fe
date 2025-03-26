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
import Appearance from './fuctKnowledge/Appearance.jsx'
import Accessory from './fuctKnowledge/Accessory.jsx';
import MainPage from './MainPage';
import { useEffect, useState } from 'react';
import Login from './Admin/Login.jsx';
import ChangePassword from './Admin/ChangePassword';
import AddPost from './Admin/AddPost.jsx';
import NewsContent from './fuctnews/NewsContent.jsx';
import Other from './fuctKnowledge/Other.jsx';
import Tips from './fuctKnowledge/Tips.jsx'
import PostManager from './Admin/PostManager.jsx';
import DraftManager from './Admin/DraftManager';
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
        <Route path='/knowledge/Tips' element={<Tips/>}/>
        <Route path='/admin/success' element={<MainPageAdmin/>} />
        <Route path='/admin' element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path='/admin/success' element={<MainPageAdmin/>}> 
          <Route index element={<PostManager/>}/>
          <Route path='addpost' element={<AddPost/>}/>
          <Route path='draft' element={<DraftManager/>}/>
          <Route path='notification' element={<Notification/>}/>
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
