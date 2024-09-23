import React from 'react'
import Css from './Centers.module.css'
import Head from '../../Header/Head/Head'
import Img from '../../assets/tourist.png'
import Img2 from '../../assets/students.jpg'
import Img4 from '../../assets/zal.jpg'
import Img3 from '../../assets/flag.png'



import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'



function Centers() {
    const {t} = useTranslation()

    return (
        <div className={Css.Main}>
            <Head />
            <div className={Css.Cards}>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url(${Img})` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('centers.c1')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url(${Img2})` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('centers.c2')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url(${Img3})` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('centers.c3')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url(${Img4})` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('centers.c4')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url()` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('centers.c5')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Centers
