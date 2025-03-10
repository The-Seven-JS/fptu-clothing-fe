import Header from './Header';
import Footer from './Footer';
import './styles/index.css';
import MainTestScreen from './MainTestScreen';
import MainPage from './MainPage';
import TestIntroScreen from './components/TestIntroScreen';
import GenderScreen from './components/GenderScreen';
import HeightWeightScreen from './components/HeightWeightScreen';
import BodyShapeScreen from './components/BodyShapeScreen';
import { Route, Routes } from 'react-router-dom';
import UndertoneScreen from './components/UndertoneScreen';
import ResultScreen from './components/ResultScreen';
import LegComputeScreen from './components/LegComputeScreen';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
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
