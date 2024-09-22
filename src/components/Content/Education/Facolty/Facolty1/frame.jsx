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
                        <p className={Css.cardTitle}>Кафедра физики и электроснабжения</p>
                    </div>
                </div>
                </Link>
               
               <Link to={''}>
                <div className={Css.card} >
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>Кафедра машиноведения и автомобильного транспорта</p>
                        
                    </div>
                </div>
                </Link>
                <Link to={''}>
                <div className={Css.card} >
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>Кафедра естественных наук</p>
                        
                    </div>
                </div>
                </Link>
                <Link to={''}>
                <div className={Css.card} >
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>Кафедра математики и информатики,технологии обучения</p>
                        
                    </div>
                </div>
                </Link>
                <Link to={''}>
                <div className={Css.card} >
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>Кафедра информационных систем и технологий</p>
                        
                    </div>
                </div>
                </Link>
                
            </div>
    </div>
  )
}

export default Frame
