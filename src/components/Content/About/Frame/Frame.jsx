import React from 'react'
import Head from '../../../Header/Head/Head'
import { useTranslation } from 'react-i18next'
import Css from './Frame.module.css'
import { Frames } from '../../../../Data'
import { Link } from 'react-router-dom'


function Frame({onChangeLanguage}) {
    console.log(Frames)
    const { t } = useTranslation()
    return (
        <div className={Css.Main}>
            <Head onChangeLanguage={onChangeLanguage}/>
            <div className={Css.Cards}>
                {Frames.map((item, index) => (
                    <Link to={item.url}>
                        <div className={Css.card}  key={index}>
                            <div className={Css.cardContent}>
                                <p className={Css.cardTitle}>{t(item.name)}</p>
                                
                            </div>
                        </div>
                    </Link>
                ))

                }


            </div>
        </div>
    )
}

export default Frame
