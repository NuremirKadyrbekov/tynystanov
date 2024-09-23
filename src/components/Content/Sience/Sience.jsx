import React from 'react'
import Css from './Siencs.module.css'
import Head from '../../Header/Head/Head'
import Img from '../../assets/innivation_idea.jpg'
import Img2 from '../../assets/books.jpg'


import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'



function Sience() {
    const {t} = useTranslation()

    return (
        <div className={Css.Main}>
            <Head />
            <div className={Css.Cards}>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url(${Img})` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('siecne.c1')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url(${Img2})` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('siecne.c2')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url()` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('siecne.c3')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sience
