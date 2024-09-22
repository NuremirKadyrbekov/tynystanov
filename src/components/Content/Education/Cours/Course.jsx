import React from 'react'
import Css from './Course.module.css'
import Head from '../../../Header/Head/Head'
import img from '../../../assets/Course/arab.jpg'
import { CourseCard } from '../../../../Data'


function Course({ onChangeLanguage }) {
    return (
        <div className={Css.Main}>
            <Head onChangeLanguage={onChangeLanguage} />
            <div className={Css.Cards}>
                {CourseCard.map((item, index) => (
                    <div className={Css.card} style={{ backgroundImage: `url(${item.img})` }}>
                        <div className={Css.cardBg}>

                        </div>
                        <h1 className={Css.Name}>{item.name}</h1>
                        <div className={Css.card__content}>
                            <p className={Css.card__title}>{item.name}</p>
                            <p className={Css.card__description}>
                               
                            </p>
                        </div>
                    </div>
                ))

                }


            </div>
        </div>
    )
}

export default Course
