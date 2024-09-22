import React from 'react'
import Css from './Education.module.css'
import { useTranslation } from 'react-i18next'
import Head from '../../../../../Header/Head/Head'
import Img from '../../../../../assets/education.jpg'


function Education({onChangeLanguage}) {
    const {t} = useTranslation()
  return (
    <div className={Css.Main}>
        <Head onChangeLanguage={onChangeLanguage}/>
       <div className={Css.History}>
        <div className={Css.HistoryImg}>
          <img src={Img} alt="" />
        </div>
        <div className={Css.HistoryContent}>
          <h1>{t('edu.title')}</h1>
          <div className={Css.HistoryText}>
            {t('edu.SubTitle')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
