import React from 'react'
import Css from '../Facolty.module.css'


function Contacts() {
  return (
    <div className={Css.Block}>
        <div className={Css.Contacts}>
            <p><span>Адрес:</span>Кыргызская Республика, г. Каракол, ул. К.Тыныстанова 32, I корпус, 314каб.</p>
            <p><span>Телефон:</span>(03922)3922 5 26 92</p>
            <p><span>email:</span>Anapiyaeva@iksu.kg</p>
        </div>
    </div>
  )
}

export default Contacts
