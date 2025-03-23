import React, { useState } from 'react';
import './styles/survey.css';
import GenderScreen from './components/GenderScreen';
import HeightWeightScreen from './components/HeightWeightScreen';
import BodyShapeScreen from './components/BodyShapeScreen';
import UndertoneScreen from './components/UndertoneScreen';
import ResultScreen from './components/ResultScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [formData, setFormData] = useState({
    gender: '',
    height: '',
    weight: '',
    bodyShape: '',
    undertone: '',
  });

  const handleNext = () => {
    setCurrentScreen((prev) => Math.min(prev + 1, 4));
  };

  const handleGenderSelect = (gender) => {
    setFormData({ ...formData, gender });
    setCurrentScreen(1);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleShapeSelect = (shape) => {
    setFormData({ ...formData, bodyShape: shape });
    setCurrentScreen(3);
  };

  const handleUndertoneSelect = (undertone) => {
    setFormData({ ...formData, undertone });
    setCurrentScreen(4);
  };

  const screens = [
    <GenderScreen key="gender" onSelect={handleGenderSelect} />,
    <HeightWeightScreen 
      key="height-weight" 
      onNext={handleNext} 
      onChange={handleInputChange} 
      formData={formData} 
    />,
    <BodyShapeScreen 
      key="body-shape" 
      onSelect={handleShapeSelect} 
      onNext={handleNext} 
    />,
    <UndertoneScreen 
      key="undertone" 
      onSelect={handleUndertoneSelect} 
      onNext={handleNext} 
    />,
    <ResultScreen 
      key="result" 
      formData={formData} 
      onNext={handleNext} 
    />,
  ];

  return (
    <div className="container">
      <header>
        <h1>FUGT</h1>
      </header>
      {screens[currentScreen]}
    </div>
  );
}

export default App;