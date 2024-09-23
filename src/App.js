import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next'; 
import Head from './components/Header/Head/Head';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './components/admin/admin';
import Auth from './components/auth/auth';
import AdminRoute from './PrivateRoute';
import About from './components/Content/About/About';
import History from './components/Content/About/AboutComponents/History';
import Mission from './components/Content/About/AboutComponents/Misson';
import Accreditation from './components/Content/About/AboutComponents/accreditation';
import Main from './components/Main';
import Management from './components/Content/About/Management/Management';
import Manage from './components/Content/About/Management/Management/Manage/Manage';
import Education from './components/Content/About/Management/Management/Education/Education';
import Stewardship from './components/Content/About/Management/Management/Stewardship/Stewardship';
import Trade from './components/Content/About/Management/Management/Trade/Trade';
import Frame from './components/Content/About/Frame/Frame';
import Frames from './components/Content/About/Frame/Frames/Frames';
import { FramesMain } from './Data';
import Facolty1 from './components/Content/Education/Facolty/Facolty1/Facolty1';
import FacoltyMain from './components/Content/Education/Facolty/FacoltyMain';
import Facolty2 from './components/Content/Education/Facolty/Facolty2/Facolty2';
import Facolty3 from './components/Content/Education/Facolty/Facolty3/Facolty3';
import Facolty4 from './components/Content/Education/Facolty/Facolty4/Facolty4';
import Course from './components/Content/Education/Cours/Course';
import Applicant from './components/Content/Applicant/Applicant';
import MastersProgram from './components/Content/Applicant/Master/Master';
import Student from './components/Content/Student/Student';
import Sience from './components/Content/Sience/Sience';



function App() {
  const { i18n } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return ( 
    <Router basename='tynystanov'>
      <Routes>
        <Route path="/" element={<Main onChangeLanguage={changeLanguage}/>} > </Route>
        <Route path="/login" element={<Auth />} />
         <Route
             path="/admin"
              element={
                <AdminRoute>
                    <Admin/>
                  </AdminRoute>
                    }
                />
          <Route path='/about' element={<About onChangeLanguage={changeLanguage}/>}/>
          <Route path='/about/history' element={<History onChangeLanguage={changeLanguage}/>}/>
          <Route path='/about/mission' element={<Mission onChangeLanguage={changeLanguage}/>}/>
          <Route path='/about/accreditation' element={<Accreditation onChangeLanguage={changeLanguage}/>}/>
          <Route path='/management' element={<Management onChangeLanguage={changeLanguage}/>}/>
          <Route path='/management/manage' element={<Manage onChangeLanguage={changeLanguage}/>}/>
          <Route path='/management/edu' element={<Education onChangeLanguage={changeLanguage}/>}/>
          <Route path='/management/stepw' element={<Stewardship onChangeLanguage={changeLanguage}/>}/>
          <Route path='/management/trade' element={<Trade onChangeLanguage={changeLanguage}/>}/>
          <Route path='/frame' element={<Frame onChangeLanguage={changeLanguage}/>}/>
          {
            FramesMain.map((item,index)=>(
              <Route path={item.path} element={<Frames name={item.name} main={item.main} address={item.address} phone={item.phone} text={item.text} email={item.email} onChangeLanguage={changeLanguage}/>}/>
            ))
          }
          <Route path='/facolty' element={<FacoltyMain onChangeLanguage={changeLanguage}/>}/>
          <Route path='/facolty/1' element={<Facolty1 onChangeLanguage={changeLanguage}/>}/>
          <Route path='/facolty/2' element={<Facolty2 onChangeLanguage={changeLanguage}/>}/>
          <Route path='/facolty/3' element={<Facolty3 onChangeLanguage={changeLanguage}/>}/>
          <Route path='/facolty/4' element={<Facolty4 onChangeLanguage={changeLanguage}/>}/>
          <Route path='/course' element={<Course onChangeLanguage={changeLanguage}/>}/>
          <Route path='/applicant' element={<Applicant onChangeLanguage={changeLanguage}/>}/>
          <Route path='/applicant/master' element={<MastersProgram onChangeLanguage={changeLanguage}/>}/>
          <Route path='/student' element={<Student onChangeLanguage={changeLanguage}/>}/>
          <Route path='/sc' element={<Sience onChangeLanguage={changeLanguage}/>}/>

      </Routes>
    </Router>
  );
}

export default App;
