import React, { useState } from 'react'
import Css from '../Facolty.module.css'
import { useTranslation } from 'react-i18next'
import Head from '../../../../Header/Head/Head'
import Short from './short'
import People from './people'
import Frame from './frame'
import Contacts from './contacts'



function Facolty2({ onChangeLanguage }) {
    const { t } = useTranslation()
    const [ShowBlock, SetShowBlock] = useState('short')

    const setShort = () => {
        SetShowBlock('short')
    }

    const setPeople = () => {
        SetShowBlock('people')
    }
    const setFrame = () => {
        SetShowBlock('frame')
    }

    const setContacts = () => {
        SetShowBlock('contacts')
    }



    const RenderShowBlock = () => {
        switch (ShowBlock) {
            case 'short':
                return <Short/>
                break;

            case 'people':
                return <People/>
                break;
            case "frame":
                return <Frame/>
                break;
            case "contacts":
                return <Contacts/>
                break;
        }

    }




    return (
        <div className={Css.Main}>
            <Head onChangeLanguage={onChangeLanguage} />
            <div className={Css.NavBar}>
                <nav>
                    <ul>
                        <li onClick={setShort}>{t('facoltyNav.nav.n1')}</li>
                        <li onClick={setPeople}>{t('facoltyNav.nav.n2')}</li>
                        <li onClick={setFrame}>{t('facoltyNav.nav.n3')}</li>
                        <li onClick={setContacts}>{t('facoltyNav.nav.n4')}</li>
                    </ul>
                </nav>
            </div>
            <div className={Css.Content}>
                {
                    RenderShowBlock()
                }
            </div>
        </div>
    )
}

export default Facolty2
