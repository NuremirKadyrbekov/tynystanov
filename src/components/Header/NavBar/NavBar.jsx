import React, { useEffect, useState } from 'react';
import Css from './NavBar.module.css';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import Logo from '../../assets/logo.png'


function NavBar() {
  const { t } = useTranslation();

  const [isSticky, setIsSticky] = useState(false);

  // Логика прокрутки
  const handleScroll = () => {
    if (window.scrollY > 150) { // Когда прокрутка больше 150px
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`Main ${isSticky ? 'stickyNavBar' : ''}`}>

      <div className={Css.LogoBlock}>
        <img src={Logo} className={`LogoImg ${isSticky ? 'LogoHidden' : ''}`} alt="" />
        <h1 className={`LogoTitle ${isSticky ? 'LogoTitleHidden' : ''}`}>{t('tynystanovName')}</h1>
      </div>
      <div className={Css.NavBarMain}>
        <nav className={Css.navbar}>
          <ul className={Css.NavBarUl}>
            <li className={Css.dropdown}>
              <a href="#" className={Css.dropbtn}>{t('nav.nav1.title')}</a>
              <ul className={Css.dropdownContent}>
                <li><a href="#">{t('nav.nav1.m1')}</a></li>
                <li><a href="#">{t('nav.nav1.m2')}</a></li>
                <li><a href="#">{t('nav.nav1.m3')}</a></li>
              </ul>
            </li>

            <li className={Css.dropdown}>
              <a href="#" className={Css.dropbtn}>{t('nav.nav2.title')}</a>
              <ul className={Css.dropdownContent}>
                <li><a href="#">{t('nav.nav2.m1')}</a></li>
                <li><a href="#">{t('nav.nav2.m2')}</a></li>
                <li><a href="#">{t('nav.nav2.m3')}</a></li>
                <li><a href="#">{t('nav.nav2.m4')}</a></li>

              </ul>
            </li>
            <li className={Css.dropdown}>
              <a href="#" className={Css.dropbtn}>{t('nav.nav3.title')}</a>
              <ul className={Css.dropdownContent}>

              </ul>
            </li>
            <li className={Css.dropdown}>
              <a href="#" className={Css.dropbtn}>{t('nav.nav4.title')}</a>
              <ul className={Css.dropdownContent}>

              </ul>
            </li>
            <li className={Css.dropdown}>
              <a href="#" className={Css.dropbtn}>{t('nav.nav5.title')}</a>
              <ul className={Css.dropdownContent}>

              </ul>
            </li>
            <li className={Css.dropdown}>
              <a href="#" className={Css.dropbtn}>{t('nav.nav6.title')}</a>
              <ul className={Css.dropdownContent}>

              </ul>
            </li>

          </ul>
        </nav>

      </div>
      <div className={Css.menu}>
        <input type="checkbox" id="burger-checkbox" className={Css.burgerCheckbox} />
        <label for="burger-checkbox" className={Css.burger}></label>
        <ul className={Css.menuList}>
        <li className={Css.dropdown}>
              <a href="#" className={Css.dropbtn}>{t('nav.nav1.title')}</a>
              <ul className={Css.dropdownContent}>
                <li><a href="#">{t('nav.nav1.m1')}</a></li>
                <li><a href="#">{t('nav.nav1.m2')}</a></li>
                <li><a href="#">{t('nav.nav1.m3')}</a></li>
              </ul>
            </li>

            <li className={Css.dropdown}>
              <a href="#" className={Css.dropbtn}>{t('nav.nav2.title')}</a>
              <ul className={Css.dropdownContent}>
                <li><a href="#">{t('nav.nav2.m1')}</a></li>
                <li><a href="#">{t('nav.nav2.m2')}</a></li>
                <li><a href="#">{t('nav.nav2.m3')}</a></li>
                <li><a href="#">{t('nav.nav2.m4')}</a></li>

              </ul>
            </li>
            <li className={Css.dropdown}>
              <a href="#" className={Css.dropbtn}>{t('nav.nav3.title')}</a>
              <ul className={Css.dropdownContent}>

              </ul>
            </li>
            <li className={Css.dropdown}>
              <a href="#" className={Css.dropbtn}>{t('nav.nav4.title')}</a>
              <ul className={Css.dropdownContent}>

              </ul>
            </li>
            <li className={Css.dropdown}>
              <a href="#" className={Css.dropbtn}>{t('nav.nav5.title')}</a>
              <ul className={Css.dropdownContent}>

              </ul>
            </li>
            <li className={Css.dropdown}>
              <a href="#" className={Css.dropbtn}>{t('nav.nav6.title')}</a>
              <ul className={Css.dropdownContent}>

              </ul>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
