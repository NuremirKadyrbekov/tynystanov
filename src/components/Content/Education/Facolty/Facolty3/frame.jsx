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
                        <p className={Css.cardTitle}>Кафедра “Психолого-педагогических и гуманитарных наук”</p>
                    </div>
                </div>
                </Link>
               
               <Link to={''}>
                <div className={Css.card} >
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>Кафедра “Изобразительного искусства и дизайна”</p>
                        
                    </div>
                </div>
                </Link>
                <Link to={''}>
                <div className={Css.card} >
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>Кафедра “Дошкольного и начального образования”</p>
                        
                    </div>
                </div>
                </Link>
                <Link to={''}>
                <div className={Css.card} >
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>Кафедра “Физического воспитания и методики его преподавания”</p>
                        
                    </div>
                </div>
                </Link>
            </div>
    </div>
  )
}

export default Frame
