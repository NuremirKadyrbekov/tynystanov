import React from 'react'
import Css from '../Facolty.module.css'
import Head from '../../../../Header/Head/Head'
import img from '../../../../assets/facolty/p1.jpg'


function People() {
  return (
    <div className={Css.wrapper}>
            <div className={Css.userCard} >
            <div className={Css.userCardImg}>
              <img src={img} alt=""/>
            </div>
            <div className={Css.userCardInfo}>
              <h2>Такырбашев Амангелди Бексултанович.,доцент</h2>
              <p><span>Кыргызcкая Республика, г. Каракол, ул. К.Тыныстанова, I корпус, ИГУ.</span></p>
              <p><span>+996 0709 915961</span></p>
              <p><span>Email:</span>amangelgin@mail.ru</p>
            </div>
        </div>
       
    </div>
  )
}

export default People
