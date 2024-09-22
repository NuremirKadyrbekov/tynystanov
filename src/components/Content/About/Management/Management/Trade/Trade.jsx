import React from 'react'
import Css from './Trade.module.css'
import Head from '../../../../../Header/Head/Head'
import { useTranslation } from 'react-i18next'
import Img from '../../../../../assets/manage/card5.jpg'
import Img2 from '../../../../../assets/manage/card6.jpg'


function Trade({ onChangeLanguage }) {
    const { t } = useTranslation()
    return (
        <div className={Css.Main}>
            <Head onChangeLanguage={onChangeLanguage} />
            <div className={Css.Block1}>
                <div className={Css.MainText}>
                    <h1>{t('trade.title')}</h1>
                    <div className={Css.MoreText}>
                        {t('trade.SubTitle')}
                    </div>
                </div>
                <div className={Css.wrapper}>
                    <div className={Css.userCard}>
                        <div className={Css.userCardImg}>
                            <img src={Img} alt="" />
                        </div>
                        <div className={Css.userCardInfo}>
                            <h2>Асирдинова Толкун Жолдошовна</h2>
                            <p><span>Туулган жылы: </span>13-декабрь  1975-жыл</p>
                            <p><span>Үй-бүлөлүк абалы</span>Үй-бүлөлү, төрт баланын энеси</p>
                            <p><span>Email:</span>tolkun-1975@mail.ru</p>
                        </div>
                    </div>
                    <div className={Css.userCard}>
                        <div className={Css.userCardImg}>
                            <img src={Img2} alt="" />
                        </div>
                        <div className={Css.userCardInfo}>
                            <h2>Жумашева Жыпаркүл Сабыровна</h2>
                            <p><span>профсоюз комитетинин эсепчиси </span></p>
                            <p><span>Байланыш тел</span>03922 5-23-80,  моб.:0705 125913</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className={Css.Buttons}>
                    <div className={Css.buttonBorders}>
                    <a href="https://drive.google.com/file/d/1mFUjnXd8N4ca88EHks6mfQqReYYMqE2n/view"><button className={Css.primaryButton}>Коллективный договор</button></a>    
                    </div>
                    <div className={Css.buttonBorders}>
                       <a href="https://drive.google.com/file/d/1mFUjnXd8N4ca88EHks6mfQqReYYMqE2n/view"> <button className={Css.primaryButton}>2022-жылга болгон иш план</button></a>
                    </div>
                    <div className={Css.buttonBorders}>
                      <a href="https://drive.google.com/file/d/1G1ZZqB17HkmrpmCwDO6WB4Un9y4tQ5AT/view"><button className={Css.primaryButton}>2022-2023-окуу жылы үчүн иш план
                        </button></a>  
                    </div>
                    <div className={Css.buttonBorders}>
                      <a href="https://drive.google.com/file/d/1d8C544MnWakHUqO_faZLG1aYMskMb2VK/view"> <button className={Css.primaryButton}> Жалпы жоболор</button></a> 
                    </div>
                    <div className={Css.buttonBorders}>
                      <a href="https://drive.google.com/file/d/1zI6EuWcICfvpimhhf6itbGp_xcA4M7cu/view"> <button className={Css.primaryButton}> Студенттерди социалдык колдоо жөнүндө жобо
                        </button></a> 
                    </div>
                    <div className={Css.buttonBorders}>
                    <a href="https://drive.google.com/file/d/1uUMRvqEA7QsCagf8EjRik-1UJBul2EeC/view"> <button className={Css.primaryButton}> Жобо</button></a>   
                    </div>
                </div>
        </div>
    )
}

export default Trade
