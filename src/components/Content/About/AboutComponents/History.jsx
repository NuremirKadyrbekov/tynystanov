import React from 'react'
import Css from './Abouts.module.css'
import Head from '../../../Header/Head/Head'
import Img from '../../../assets/history.png'
import img2 from '../../../assets/card1.png'
import { useTranslation } from 'react-i18next'
import { Rectors } from '../../../../Data'


function History({onChangeLanguage}) {
  const { t } = useTranslation()
  return (
    <div className={Css.Main}>
      <Head onChangeLanguage={onChangeLanguage}/>
      <div className={Css.History}>
        <div className={Css.HistoryImg}>
          <img src={Img} alt="" />
        </div>
        <div className={Css.HistoryContent}>
          <h1>{t('history.card1.title')}</h1>
          <div className={Css.HistoryText}>
            {t('history.card1.SubTitle')}
          </div>
        </div>
      </div>
      <div className={Css.History}>
        <div className={Css.HistoryImg}>
          <img src={img2} alt="" />
        </div>
        <div className={Css.HistoryContent}>
          <h1>{t('history.card2.title')}</h1>
          <div className={Css.HistoryText}>
            {t('history.card2.SubTitle')}
          </div>

        </div>
      </div>
      <div className={Css.Rectors}>
        <h1 className={Css.RectorsTitle}>{t('history.RecTitle')}</h1>
        <div className={Css.Cards}>
          {Rectors.map((item, index) => (
            <div class={Css.container} key={index}>
              <div class={Css.imageContainer}>
                <img src={item.img} className={Css.CardImg} alt={item.name} />
                <div class={Css.caption}>
                  <b>{item.name},{item.titul}</b>
                  ({item.age})
                </div>
              </div>
            </div>
          ))
          }



        </div>
      </div>
    </div>
  )
}

export default History
