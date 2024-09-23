import React, { useEffect, useState } from 'react';
import Css from './NavBar.module.css';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';


function NavBar() {
  const { t } = useTranslation();
  const [Local, isLocal] = useState()

  useEffect(() => {
    isLocal(localStorage.getItem('userToken'))
  }, [])

  const [isSticky, setIsSticky] = useState(false);

  // Логика прокрутки
  const handleScroll = () => {
    if (window.scrollY > 450) { // Когда прокрутка больше 150px
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
    <div className={`NavBarMain ${isSticky ? 'stickyNavBar' : ''}`}>

      <div className={Css.LogoBlock}>
        <img src={Logo} className={`LogoImg ${isSticky ? 'LogoHidden' : ''}`} alt="" />
        <h1 className={`LogoTitle ${isSticky ? 'LogoTitleHidden' : ''}`}>{t('tynystanovName')}</h1>
      </div>
      <div className={Css.NavBarMain}>
        <nav className={Css.navbar}>
          <ul className={Css.NavBarUl}>
            <li className={Css.dropdown}>
              <Link to={'/'}><a href="#" className={Css.dropbtn}>{t('nav.nav1.title')}</a></Link>
              <ul className={Css.dropdownContent}>
                <li><Link to={'/about'}>{t('nav.nav1.m1')}</Link></li>
                <li><Link to={'/management'}>{t('nav.nav1.m2')}</Link></li>
                <li><Link to={'/frame'}>{t('nav.nav1.m3')}</Link></li>
              </ul>
            </li>

            <li className={Css.dropdown}>
              <Link ><a href="#" className={Css.dropbtn}>{t('nav.nav2.title')}</a></Link>
              <ul className={Css.dropdownContent}>
                <li><Link to={'/facolty'}>{t('nav.nav2.m1')}</Link></li>
                <li><Link to={'https://college.iksu.kg/'}>{t('nav.nav2.m2')}</Link></li>
                <li><Link to={''}>{t('nav.nav2.m3')}</Link></li>
                <li><Link to={'/course'}>{t('nav.nav2.m4')}</Link></li>

              </ul>
            </li>
            <li className={Css.dropdown}>
              <Link to={'/applicant'}><a href="#" className={Css.dropbtn}>{t('nav.nav3.title')}</a></Link>
              <ul className={Css.dropdownContent}>

              </ul>
            </li>
            <li className={Css.dropdown}>
              <Link to={'/student'}><a href="#" className={Css.dropbtn}>{t('nav.nav4.title')}</a></Link>
              <ul className={Css.dropdownContent}>

              </ul>
            </li>
            <li className={Css.dropdown}>
              <Link to={'/sc'}><a href="#" className={Css.dropbtn}>{t('nav.nav5.title')}</a></Link>
              <ul className={Css.dropdownContent}>

              </ul>
            </li>
            <li className={Css.dropdown}>
              <Link><a href="#" className={Css.dropbtn}>{t('nav.nav6.title')}</a></Link>
              <ul className={Css.dropdownContent}>

              </ul>
            </li>

            {Local ? '' : <Link className={Css.Btn} to={'/login'}><p>{t('nav.login')}</p></Link>}

          </ul>

        </nav>



      </div>
      <div className={`menu ${isSticky ? 'stickyMenu' : ''}`}>
        <input type="checkbox" id="burger-checkbox" className={Css.burgerCheckbox} />
        <label for="burger-checkbox" className={Css.burger}></label>
        <ul className={Css.menuList}>
          <li className={Css.dropdown}>
            <Link to={'/'} className={Css.dropbtn}>{t('nav.nav1.title')}</Link>
            <ul className={Css.dropdownContent}>
              <li><Link to={'/about'}>{t('nav.nav1.m1')}</Link></li>
              <li><Link to={'/management'}>{t('nav.nav1.m2')}</Link></li>
              <li><Link to={'/frame'}>{t('nav.nav1.m3')}</Link></li>
            </ul>
          </li>

          <li className={Css.dropdown}>
            <a href="#" className={Css.dropbtn}>{t('nav.nav2.title')}</a>
            <ul className={Css.dropdownContent}>
              <li><Link to={'/facolty'}>{t('nav.nav2.m1')}</Link></li>
              <li><Link to={'https://college.iksu.kg'}>{t('nav.nav2.m2')}</Link></li>
              <li><a href="#">{t('nav.nav2.m3')}</a></li>
              <li><Link to={'/course'}>{t('nav.nav2.m4')}</Link></li>

            </ul>
          </li>
          <li className={Css.dropdown}>
            <Link to={'/applicant'} className={Css.dropbtn}>{t('nav.nav3.title')}</Link>
            <ul className={Css.dropdownContent}>

            </ul>
          </li>
          <li className={Css.dropdown}>
            <Link to={'/student'} className={Css.dropbtn}>{t('nav.nav4.title')}</Link>
            <ul className={Css.dropdownContent}>

            </ul>
          </li>
          <li className={Css.dropdown}>
            <Link to={'/sc'} className={Css.dropbtn}>{t('nav.nav5.title')}</Link>
            <ul className={Css.dropdownContent}>

            </ul>
          </li>
          <li className={Css.dropdown}>
            <a href="#" className={Css.dropbtn}>{t('nav.nav6.title')}</a>
            <ul className={Css.dropdownContent}>

            </ul>
          </li>
          {Local ? '' : <Link className={Css.Btn} to={'/login'}><p>{t('nav.login')}</p></Link>}

        </ul>
      </div>
    </div>
  );
}

export default NavBar;
