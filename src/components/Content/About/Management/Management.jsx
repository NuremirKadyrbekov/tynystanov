import React from 'react'
import Css from './Management.module.css'
import Head from '../../../Header/Head/Head'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Rector from '../../../assets/rector.jpg'
import Edu from '../../../assets/education.jpg'
import View from '../../../assets/view.jpg'
import Prof from '../../../assets/prof.jpg'





function Management({ onChangeLanguage }) {
    const { t } = useTranslation()
    return (
        <div className={Css.Main}>
            <Head onChangeLanguage={onChangeLanguage} />
            <div className={Css.Cards}>
                <Link to={'/management/manage'}>
                    <div className={Css.card} style={{backgroundImage:`url(${Rector})`}}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('Management.card1.title')}</p>
                            <p className={Css.cardPara}>
                                {t('Management.card1.SubTitle')}
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to={'/management/edu'}>
                    <div className={Css.card} style={{backgroundImage:`url(${Edu})`}}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('Management.card2.title')}</p>
                            <p className={Css.cardPara}>
                                {t('Management.card2.SubTitle')}
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to={'/management/stepw'}>
                    <div className={Css.card} style={{backgroundImage:`url(${View})`}}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('Management.card3.title')}</p>
                            <p className={Css.cardPara}>
                                {t('Management.card3.SubTitle')}
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to={'/management/trade'}>
                    <div className={Css.card} style={{backgroundImage:`url(${Prof})`}}>
                        <div className={Css.cardBg}></div>
                        <div className={Css.cardContent}>
                            <p className={Css.cardTitle}>{t('Management.card4.title')}</p>
                            <p className={Css.cardPara}>
                                {t('Management.card4.SubTitle')}
                            </p>
                        </div>
                    </div>
                </Link>



            </div>
        </div>
    )
}

export default Management
