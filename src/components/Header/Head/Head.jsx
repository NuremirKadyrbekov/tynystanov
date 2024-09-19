import React, { useEffect, useState } from 'react'
import Css from './Head.module.css'
import NavBar from '../NavBar/NavBar'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Home from '../../Home/Home';
import Footer from '../../Footer/Footer';

function Head({ onChangeLanguage }) {
    const [isStickyCup, setIsStickyCup] = useState(false);
    const {t} = useTranslation()

    const handleScroll = () => {
      if (window.scrollY > 50) { // Примерно после 50px скролла
        setIsStickyCup(true);
      } else {
        setIsStickyCup(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  


    return (
        <div className={Css.Main}>
            <div className={`Cup ${isStickyCup ? 'stickyCup' : ''}`}>
                <ol className={Css.Lng}>
                        <li onClick={() => onChangeLanguage('kg')}>KG</li>
                        <li onClick={() => onChangeLanguage('ru')}>RU</li>
                        <li onClick={() => onChangeLanguage('en')}>EN</li>
                    </ol> 
                    <ol className={Css.Contacts}>
                       <li><FaPhone  color='#F24080'/> +996 392250123</li>
                       <li><IoMail size={'1.2em'} color='#F24080'  />interiksu@gmail.com</li>
                       <li><FaMapMarkerAlt size={'1.2em'} color='#F24080' />{t('location')}</li>
                    </ol>
                    <ol className={Css.SocialLinks}>
                        <a href=""><FaYoutube size={'2em'}/></a>
                        <a href=""><FaInstagram size={'2em'}/></a>
                        <a href=""><FaFacebook size={'2em'}/></a>
                    </ol>
                   
            </div>
            <div className={Css.Block}>
                <div className={Css.NavBar}>
                    <NavBar />
                </div>
            </div>
            <div className={Css.Block1}>
              <Home/>
            </div>
              <Footer/>
        </div>
    )
}

export default Head
