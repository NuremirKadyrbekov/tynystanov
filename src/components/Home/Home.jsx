import React from 'react'
import Css from './Home.module.css'
import Slideshow from '../slider/slider'
import { useTranslation } from 'react-i18next'
import ProjectsSlider from '../slider/ProjectsSlider'
import News from '../Content/News/News'
import LibIcon from '../assets/libCard.png'


function Home() {
  const { t } = useTranslation()

  return (
    <div className={Css.Main}>
      <div className={Css.Section1}>
        <Slideshow />
        <ProjectsSlider/>
        <div className={Css.News}>
          <News/>
          </div>        
      </div>


      <div className={Css.AddsBlock2}>
        <div className={Css.RegisterCard}>
          <div className={Css.RegisterContent}>
            <div className={Css.RegisterTitle}>{t('RegCardSubTitle')}</div>
            <div className={Css.RegisterPrice}>{t("RegCardTitle")}</div>
            <div className={Css.RegisterDescription}>
              {t("RegCardDesc")}
            </div>
          </div>
          <button className={Css.RegisterBtn}>{t('RegCardBtn')}</button>
        </div>


        <div className={Css.outer}>
          <div className={Css.dot} />
          <div className={Css.AvnCard}>
            <div className={Css.ray} />
            <div className={Css.text}>AVN</div>
            <div>{t('shortname')}</div>
            <div className={`${Css.line} ${Css.topl}`} />
            <div className={`${Css.line} ${Css.leftl}`} />
            <div className={`${Css.line} ${Css.bottoml}`} />
            <div className={`${Css.line} ${Css.rightl}`} />
          </div>
        </div>

        <div className={Css.agCoursesItem}>
          <a className={Css.agCoursesItemLink} href="#">
            <div className={Css.agCoursesItemBg} />
            <div className={Css.agCoursesItemTitle}>Moodle</div>

          </a>
        </div>
        <div className={Css.LibCard}>
          <img src={LibIcon} className={Css.LibCardImg} alt="" />
          <p className={Css.LibCardTitle}>{t('LibCard')}</p>
          <div className={Css.GoCorner}>
            <div className={Css.GoArrow}>→</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
