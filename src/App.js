import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next'; 
import Head from './components/Header/Head/Head';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './components/admin/admin';
import Auth from './components/auth/auth';
import AdminRoute from './PrivateRoute';



function App() {
  const { i18n } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return ( 
    <Router basename='tynystanov'>
      <Routes>
        <Route path="/" element={<Head onChangeLanguage={changeLanguage}/>} />
        <Route path="/login" element={<Auth />} />
         <Route
             path="/admin"
              element={
                <AdminRoute>
                    <Admin/>
                  </AdminRoute>
                    }
                />
      </Routes>
    </Router>
  );
}

export default App;
