import React from 'react'
import Css from './Manage.module.css'
import img1 from '../../../../../assets/rector.jpg'
import Head from '../../../../../Header/Head/Head'
import { Management } from '../../../../../../Data'



function Manage({onChangeLanguage}) {
  return (
    <div className={Css.Main}>
        <Head onChangeLanguage={onChangeLanguage}/>
    <div className={Css.wrapper}>

        {Management.map((item, index)=>(
            <div className={Css.userCard} key={index}>
            <div className={Css.userCardImg}>
              <img src={item.avatar} alt=""/>
            </div>
            <div className={Css.userCardInfo}>
              <h2>{item.name}</h2>
              <p><span>{item.who}</span></p>
              <p><span>{item.edu}</span></p>
              <p><span>Email:</span>{item.email}</p>
            </div>
        </div>
        ))
        }
    </div>
      


    </div>
  )
}

export default Manage
