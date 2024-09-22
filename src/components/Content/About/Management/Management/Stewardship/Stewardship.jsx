import React from 'react'
import Head from '../../../../../Header/Head/Head'
import Css from './Stewardship.module.css'
import Img from '../../../../../assets/mission.jpg'
import { useTranslation } from 'react-i18next'


function Stewardship({onChangeLanguage}) {
  const {t} = useTranslation()
  return (
    <div className={Css.Main}> 
    <Head onChangeLanguage={onChangeLanguage}/>
    <div className={Css.History}>
        <div className={Css.HistoryImg}>
          <img src={Img} alt="" />
        </div>
        <div className={Css.HistoryContent}>
          <h1>{t('stepwardship.title')}</h1>
          <div className={Css.HistoryText}>
            {t('stepwardship.SubTitle')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stewardship
