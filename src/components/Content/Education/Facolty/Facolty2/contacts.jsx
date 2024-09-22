import React from 'react'
import Css from '../Facolty.module.css'


function Contacts() {
  return (
    <div className={Css.Block}>
        <div className={Css.Contacts}>
            <p><span>Адрес:</span></p>
            <p><span>Телефон:</span></p>
            <p><span>email:</span></p>
        </div>
    </div>
  )
}

export default Contacts
