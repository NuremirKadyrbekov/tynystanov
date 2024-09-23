import React from 'react'
import Css from './Applicant.module.css'
import Head from '../../Header/Head/Head'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Img from '../../assets/master.jpg'
import Img2 from '../../assets/Bakavi.png'
import Img3 from '../../assets/midl.jpg'
import Img4 from '../../assets/Design.jpg'


function Applicant({ onChangeLanguage }) {
    const { t } = useTranslation()
    return (
        <div className={Css.Main}>
            <Head onChangeLanguage={onChangeLanguage} />
            <div className={Css.Cards}>
                <Link to={'/applicant/master'}>
                    <div className={Css.card} style={{ backgroundImage: `url(${Img})` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('Master.title')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/'}>
                    <div className={Css.card} style={{ backgroundImage: `url(${Img2})` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('Baccalaureate.title')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/'}>
                    <div className={Css.card} style={{ backgroundImage: `url(${Img3})` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('SEE.title')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/'}>
                    <div className={Css.card} style={{ backgroundImage: `url(${Img4})` }}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('design.title')}</p>
                            <p className={Css.cardPara}>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Applicant
