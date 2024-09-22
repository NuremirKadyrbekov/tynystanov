import React from 'react'
import Css from '../Facolty.module.css'
import Head from '../../../../Header/Head/Head'
import img from '../../../../assets/facolty/p3.jpg'


function People() {
  return (
    <div className={Css.wrapper}>
            <div className={Css.userCard} >
            <div className={Css.userCardImg}>
              <img src={img} alt=""/>
            </div>
            <div className={Css.userCardInfo}>
              <h2>доцент Анапияева Асел Абдысатаровна</h2>
              <p><span>Кыргызская Республика, г. Каракол, ул. К.Тыныстанова 32, I корпус, 314каб.</span></p>
              <p><span>+996 3922 5 26 92</span></p>
              <p><span>Email:</span>аnapiyaeva@iksu.kg</p>
            </div>
        </div>
       
    </div>
  )
}

export default People
