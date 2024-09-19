import React, { useEffect, useRef } from 'react';
import Css from './projectsslider.module.css'
import Pr1 from '../assets/projects/Defa_Logo-e1688630536518.jpg'
import Pr2 from '../assets/projects/SA2CC_icon_transp.png'
import Pr3 from '../assets/projects/WhatsApp-Image-2024-01-24-at-07.39.02.jpeg'
import Pr4 from '../assets/projects/photo_2022-07-01_22-27-57.jpg'
import Pr5 from '../assets/projects/pro1.jpg'
import Pr6 from '../assets/projects/pro10.jpg'
import Pr7 from '../assets/projects/pro11.jpg'
import Pr8 from '../assets/projects/pro2.jpg'
import Pr9 from '../assets/projects/pro3.jpg'
import Pr10 from '../assets/projects/pro5.jpg'
import Pr11 from '../assets/projects/pro6.jpg'
import Pr12 from '../assets/projects/ЖТ-лого-final-2.png'







const ProjectsSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const slideWidth = 150; // Задайте ширину слайда в пикселях

    const autoScroll = setInterval(() => {
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0; // Возвращаемся к началу, когда доходим до конца
      } else {
        scrollAmount += slideWidth; // Прокручиваем на ширину одного слайда
      }
      slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }, 3000); // Устанавливаем интервал в 3 секунды

    return () => clearInterval(autoScroll); // Очищаем интервал при размонтировании компонента
  }, []);

  return (
    <div className={Css.SliderContainer}>
      <h2>ПРОЕКТЫ</h2>
      <div className={Css.Slider} ref={sliderRef}>
        <div className={Css.Slide}>
          <img src={Pr1} className={Css.Project1} alt="Проект 1" />
        </div>
        <div className={Css.Slide}>
          <img src={Pr10} className={Css.Project} alt="Проект 2" />
        </div>
        <div className={Css.Slide}>
          <img src={Pr11} className={Css.Project} alt="Проект 3" />
        </div>
        <div className={Css.Slide}>
          <div>
          <img src={Pr12}  className={Css.Project12} alt="Проект 4" />
          </div>
        </div>
        <div className={Css.Slide}>
          <img src={Pr2} className={Css.Project} alt="Проект 5" />
        </div>
        <div className={Css.Slide}>
          <img src={Pr3} className={Css.Project} alt="Проект 6" />
        </div>
        <div className={Css.Slide}>
          <img src={Pr4} className={Css.Project} alt="Проект 1" />
        </div>
        <div className={Css.Slide}>
          <img src={Pr5} className={Css.Project} alt="Проект 1" />
        </div>
        <div className={Css.Slide}>
          <img src={Pr6} className={Css.Project} alt="Проект 1" />
        </div>
        <div className={Css.Slide}>
          <img src={Pr7} className={Css.Project} alt="Проект 1" />
        </div>

        <div className={Css.Slide}>
          <img src={Pr8} className={Css.Project} alt="Проект 1" />
        </div>
        <div className={Css.Slide}>
          <img src={Pr9} className={Css.Project} alt="Проект 1" />
        </div>

      </div>
    </div>
  );
};

export default ProjectsSlider;
