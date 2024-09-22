import React from 'react'
import Css from './About.module.css'
import Head from '../../Header/Head/Head'
import { useTranslation } from 'react-i18next'
import img1 from '../../assets/card1.png'
import img2 from '../../assets/card2.png'
import img3 from '../../assets/card3.png'
import { Link } from 'react-router-dom'



function About({onChangeLanguage}) {
    console.log('About receives:', typeof onChangeLanguage);
    const {t} = useTranslation()
    return (
        <div className={Css.Main}>
            <Head onChangeLanguage={onChangeLanguage}/>
            <div className={Css.Cards}>
                <Link to={'/about/history'}> 
                <div className={Css.card} style={{backgroundImage:`url(${img1})`}}>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>{t('cards.c1.title')}</p>
                        <p className={Css.cardPara}>
                        {t('cards.c1.SubTitle')}
                        </p>
                    </div>
                </div>
                </Link>
               
               <Link to={'/about/mission'}>
                <div className={Css.card} style={{backgroundImage:`url(${img2})`}}>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>{t('cards.c2.title')}</p>
                        <p className={Css.cardPara}>
                        {t('cards.c2.SubTitle')}
                        </p>
                    </div>
                </div>
                </Link>
                <div className={Css.card}  style={{backgroundImage:`url(${img3})`}}>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>{t('cards.c3.title')}</p>
                        <p className={Css.cardPara}>
                        {t('cards.c3.SubTitle')}
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About
