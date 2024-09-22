import React from 'react'
import Css from './FacoltyMain.module.css'
import Head from '../../../Header/Head/Head'
import { useTranslation } from 'react-i18next'
import img1 from '../../../assets/facolty/f1.jpg'
import img2 from '../../../assets/facolty/f2.jpg'
import img3 from '../../../assets/facolty/f3.jpeg'
import img4 from '../../../assets/facolty/f4.jpg'
import { Link } from 'react-router-dom'


function FacoltyMain({onChangeLanguage}) {
    const {t} = useTranslation()
  return (
    <div className={Css.Main}>
        <Head onChangeLanguage={onChangeLanguage}/>
      <div className={Css.Cards}>
                <Link to={'/facolty/1'}> 
                <div className={Css.card} style={{backgroundImage:`url(${img1})`}}>
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>{t('faculty.f3')}</p>
                        
                    </div>
                </div>
                </Link>
               
               <Link to={'/facolty/2'}>
                <div className={Css.card} style={{backgroundImage:`url(${img2})`}}>
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>{t('faculty.f1')}</p>
                        
                    </div>
                </div>
                </Link>
                <Link to={'/facolty/3'}>
                <div className={Css.card} style={{backgroundImage:`url(${img3})`}}>
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>{t('faculty.f2')}</p>
                        
                    </div>
                </div>
                </Link>
                <Link to={'/facolty/4'}>
                <div className={Css.card} style={{backgroundImage:`url(${img4})`}}>
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>{t('faculty.f4')}</p>
                        
                    </div>
                </div>
                </Link>
                
            </div>
    </div>
  )
}

export default FacoltyMain
