import React from 'react'
import Css from '../Facolty.module.css'
import Head from '../../../../Header/Head/Head'
import img from '../../../../assets/facolty/p2.jpg'


function People() {
  return (
    <div className={Css.wrapper}>
            <div className={Css.userCard} >
            <div className={Css.userCardImg}>
              <img src={img} alt=""/>
            </div>
            <div className={Css.userCardInfo}>
              <h2>доцент Кадыркулова Упел Керимбаевна</h2>
              <p><span>г. Каракол, ул. Тыныстанова, 32 II к. 328 каб.</span></p>
              <p><span>+996  3922 5 25 97</span></p>
              <p><span>Email:</span>upol.kadyrkulova@iksu.kg</p>
            </div>
        </div>
       
    </div>
  )
}

export default People
