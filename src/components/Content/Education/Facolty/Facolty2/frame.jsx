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
                        <p className={Css.cardTitle}>Кафедра кыргызского языка и литературы</p>
                    </div>
                </div>
                </Link>
               
               <Link to={''}>
                <div className={Css.card} >
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>Кафедра русского языка и литературы</p>
                        
                    </div>
                </div>
                </Link>
                <Link to={''}>
                <div className={Css.card} >
                <div className={Css.cardBg}></div>
                    <div className={Css.cardContent}>
                        <p className={Css.cardTitle}>Кафедра иностранных языков</p>
                        
                    </div>
                </div>
                </Link>
            </div>
    </div>
  )
}

export default Frame
