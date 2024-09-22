import React from 'react'
import Css from './Frames.module.css'
import Head from '../../../../Header/Head/Head'


function Frames({onChangeLanguage, name, email, phone, main, address, text }) {
    return (
        <div className={Css.Main}>
            <Head onChangeLanguage={onChangeLanguage}/>
            <div className={Css.container}> 
                 <div className={Css.card}>
                <h2 className={Css.main}>Отдел: {main}</h2>
                <h3 className={Css.name}>Имя: {name}</h3>
                <p className={Css.address}>Адрес: {address}</p>
                <p className={Css.phone}>Телефон: {phone}</p>
                <p className={Css.email}>Email: {email}</p>
                <p className={Css.text}>
                    {text}
                </p>
            </div>
            </div>
           
        </div>
    )
}

export default Frames
