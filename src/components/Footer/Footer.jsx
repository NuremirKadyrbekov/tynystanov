import React from 'react'
import Css from './Footer.module.css'
import { useTranslation } from 'react-i18next'


function Footer() {
    const { t } = useTranslation()

    return (
        <div className={Css.Main}>
            <footer className={Css.footer}>
                <div className={Css.footer__addr}>
                    <h1 className={Css.footer__logo}><a href="https://www.instagram.com/nuremir.dev/" target='_blanck'>NUREMIR</a></h1>
                    <h2>Contact</h2>
                    <address>
                        722200, t.Karakol, Kyrgyztan
                        <br />
                        <a className={Css.footer__btn} href="mailto:interiksu@gmail.com">
                            Email Us
                        </a>
                    </address>
                </div>
                <ul className={Css.footer__nav}>
                    <li className={Css.nav__item}>
                        <h2 className={Css.nav__title}>{t('frame.title')}</h2>
                        <ul className={Css.nav__ul}>
                            <li>
                                <a href="#">{t('frame.f1')}</a>
                            </li>
                            <li>
                                <a href="#">{t('frame.f2')}</a>
                            </li>
                            <li>
                                <a href="#">{t("frame.f3")}</a>
                            </li>
                            <li>
                                <a href="#">{t("frame.f4")}</a>
                            </li>
                            
                        </ul>
                    </li>
                    <li className={`${Css.nav__item} ${Css.nav__item}`}>
                        <h2 className={Css.nav__title}>{t('faculty.title')}</h2>
                        <ul className={`${Css.nav__ul} ${Css.nav__ul}`}>
                            <li>
                                <a href="#">{t('faculty.f1')}</a>
                            </li>
                            <li>
                                <a href="#">{t('faculty.f2')}</a>
                            </li>
                            <li>
                                <a href="#">{t('faculty.f3')}</a>
                            </li>
                            <li>
                                <a href="#">{t('faculty.f4')}</a>
                            </li>
                        </ul>
                    </li>
                    <li className={Css.nav__item}>
                        <h2 className={Css.nav__title}>Contacts</h2>
                        <ul className={Css.nav__ul}>
                            <li>
                                <a href="#">+996 3922 50123</a>
                            </li>
                            <li>
                                <a href="#">996 3922 50498</a>
                            </li>
                            <li>
                                <a href="#"> www.iksu.kg</a>
                            </li>

                            
                        </ul>
                    </li>
                </ul>
                <div className={Css.legal}>
                    <p>© 2024 {t('tynystanovName')}</p>
                    <div className={Css.legal__links}>
                        <span>
                            Made with <span className={Css.heart}>♥</span> remotely from Nuremir.Dev
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
