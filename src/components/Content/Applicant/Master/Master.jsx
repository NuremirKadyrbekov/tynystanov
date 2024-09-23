import React from 'react';
import Css from './Master.module.css'
import Head from '../../../Header/Head/Head';
import { useTranslation } from 'react-i18next';



const MastersProgram = ({ onChangeLanguage }) => {
    const { t } = useTranslation()

    return (
        <div className={Css.Main}>
            <Head onChangeLanguage={onChangeLanguage} />
            <div className={Css.mastersContainer}>
                <h1 className={Css.title}>{t('Master.title')}</h1>
                <p className={Css.description}>{t('Master.text')}</p>
                <h2 className={Css.subtitle}>{t('Master.title2')}</h2>
                <div className={Css.userCard} >
                    <div className={Css.userCardImg}>
                        <img src='' alt="" />
                    </div>
                    <div className={Css.userCardInfo}>
                        <h2>Молдакунова Назгул Курманбековна</h2>
                        <p><span>ул. Абдрахманова, 103    II корпус ИГУ, каб.№ 210</span></p>
                        <p><span>+996 3922 51497</span></p>
                        <p><span>Email:</span></p>
                    </div>
                </div>
                <h3 className={Css.documentTitle}>{t("Master.doc")}</h3>
                <ul className={Css.documentList}>
                    <li>{t('Master.doc1')}</li>
                    <li>{t('Master.doc2')}</li>
                    <li>{t('Master.doc3')}</li>
                    <li>{t('Master.doc4')}</li>
                    <li>{t('Master.doc5')}</li>
                </ul>
            </div>
        </div>

    );
};

export default MastersProgram;
