import React from 'react'
import Css from '../FacoltyMain.module.css'
import { Link } from 'react-router-dom'


function Frame() {
  return (
    <div className={Css.Main}>
      <div className={Css.Cards}>
                <Link to={''}> 
                <div className={Css.card} >
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>Кафедра Туризма и охраны окружающей среды</p>
                    </div>
                </div>
                </Link>
               
               <Link to={''}>
                <div className={Css.card} >
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>Кафедра Бухгалтерского учета, анализа и аудита</p>
                        
                    </div>
                </div>
                </Link>
                <Link to={''}>
                <div className={Css.card} >
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>Кафедра Экономики, финансов и налогообложения</p>
                        
                    </div>
                </div>
                </Link>
                <Link to={''}>
                <div className={Css.card} >
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>Кафедра Истории, государственного и муниципального управления</p>
                        
                    </div>
                </div>
                </Link>
                
                
            </div>
    </div>
  )
}

export default Frame
