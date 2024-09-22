import React from 'react'
import Css from './Mission.module.css'
import Head from '../../../Header/Head/Head'
import Img from '../../../assets/mission.jpg'
import { useTranslation } from 'react-i18next'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'

function Mission({onChangeLanguage}) {
  const {t} = useTranslation()
  return (
    <div className={Css.Main}>
      <div className={Css.Cup}>
        <div className={Css.Arrow}>
       <Link to={'/about'}><IoIosArrowRoundBack  style={{color:"white", cursor:'pointer'}} size={45}/></Link> 
        </div>
          <ol className={Css.Lng}>
            <li onClick={() => onChangeLanguage('kg')}>KG</li>
            <li onClick={() => onChangeLanguage('ru')}>RU</li>
            <li onClick={() => onChangeLanguage('en')}>EN</li>
          </ol>
      </div>
      <div className={Css.Mission}>
        <div className={Css.MissionBg}>

        </div>
        <div className={Css.MissionBlock1}>
          <p className={Css.tag1}>{t('Mission.title1')} </p>
          <h1>{t('Mission.title2')}</h1>
          <p className={Css.tag2}>{t('Mission.title3')}</p>
        </div>
        <div className={Css.MissionBlock2}>
          <div className={Css.ImgBlock}>
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
