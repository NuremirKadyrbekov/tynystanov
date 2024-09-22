import React from 'react'
import Css from '../Facolty.module.css'
import Head from '../../../../Header/Head/Head'
import img from '../../../../assets/facolty/f4.jpg'


function People() {
  return (
    <div className={Css.wrapper}>
            <div className={Css.userCard} >
            <div className={Css.userCardImg}>
              <img src={img} alt=""/>
            </div>
            <div className={Css.userCardInfo}>
              <h2>Эркимбаев Максатбек Токтобекович ,кандидат экономических наук, доцент</h2>
              <p><span>г. Каракол, ул. К.Тыныстанова, I корпус, ИГУ, каб. № 32, № 21</span></p>
              <p><span> +996 3922 52688</span></p>
              <p><span>Email:</span>maksat_e@mail.ru</p>
            </div>
        </div>
       
    </div>
  )
}

export default People
