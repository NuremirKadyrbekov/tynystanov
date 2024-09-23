import React from 'react'
import Css from './Student.module.css'
import Head from '../../Header/Head/Head'
import Img from '../../assets/money.jpg'
import Img2 from '../../assets/kontrak.jpg'

import Img3 from '../../assets/mob.jpg'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'



function Student() {
    const {t} = useTranslation()

    return (
        <div className={Css.Main}>
            <Head />
            <div className={Css.Cards}>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url(${Img})` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('student.c1')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url(${Img2})` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('student.c2')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url(${Img3})` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('student.c3')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url()` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('student.c4')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url()` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('student.c5')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url()` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('student.c6')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url()` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('student.c7')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url()` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('student.c8')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url()` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('student.c9')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url()` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('student.c10')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Student
