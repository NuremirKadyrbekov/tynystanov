import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Css from './slider.module.css'

const ImageSlider = () => {
  const settings = {
    dots: true, // точки навигации
    infinite: true, // бесконечный цикл
    speed: 500, // скорость анимации в миллисекундах
    slidesToShow: 1, // сколько слайдов показывать
    slidesToScroll: 1, // сколько слайдов скроллить за раз
    autoplay: true, // автопрокрутка
    autoplaySpeed: 2000, // интервал автопрокрутки
  };

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/tynystanov-6d8fa.appspot.com/o/images%2F%D0%98%D0%93%D0%A3_2-%D1%8F_%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B0_005-1200x600.jpg?alt=media&token=412d89d9-c049-45c9-af09-f65e121b02cb",
    "https://firebasestorage.googleapis.com/v0/b/tynystanov-6d8fa.appspot.com/o/images%2F%D0%98%D0%93%D0%A3_2-%D1%8F_%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B0_013-1200x600.jpg?alt=media&token=13e22990-8c23-4207-884f-10b67206ec3c",
    "https://firebasestorage.googleapis.com/v0/b/tynystanov-6d8fa.appspot.com/o/images%2F%D0%98%D0%93%D0%A3_2-%D1%8F_%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B0_022-1200x600.jpg?alt=media&token=cb7dbc2e-bf5b-4992-a6b7-f4e0bb630bae",
    "https://firebasestorage.googleapis.com/v0/b/tynystanov-6d8fa.appspot.com/o/images%2F%D0%98%D0%93%D0%A3_2-%D1%8F_%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B0_027-1200x600.jpg?alt=media&token=8dea4be5-2e7d-4e2e-9c7f-7888153f2923",
    "https://firebasestorage.googleapis.com/v0/b/tynystanov-6d8fa.appspot.com/o/images%2F%D0%98%D0%93%D0%A3_2-%D1%8F_%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B0_044-1200x600.jpg?alt=media&token=5983344c-7466-4870-a65f-18b164c55046",
    "https://firebasestorage.googleapis.com/v0/b/tynystanov-6d8fa.appspot.com/o/images%2F%D0%98%D0%93%D0%A3_%D0%B3%D0%BB.%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81-1200x600.jpg?alt=media&token=7876d5a0-64cf-46b3-b9dc-7e3c5123cd5",
    
  ];

  return (
    <div className={Css.sliderContainer}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
