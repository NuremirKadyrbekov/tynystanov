import { useState } from 'react';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next'; 
import Head from './components/Header/Head/Head';

function App() {
  const { i18n } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return ( 
    <div className="App">
      <Head onChangeLanguage={changeLanguage} />
    
    </div>
  );
}

export default App;
