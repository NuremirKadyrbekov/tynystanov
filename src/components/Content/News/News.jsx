import React, { useEffect, useState } from 'react'
import Css from './News.module.css'
import { useTranslation } from 'react-i18next'
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { t } from 'i18next';

function News() {
    const [news, setNews] = useState([]);
    const { i18n } = useTranslation();


    useEffect(() => {
        const fetchNews = async () => {
            const querySnapshot = await getDocs(collection(db, 'news'));
            const newsArray = querySnapshot.docs.map(doc => doc.data());
            setNews(newsArray);
        };
        fetchNews();
    }, []);


    const getLocalizedField = (newsItem, field) => {
        const lang = i18n.language;
        switch (lang) {
            case 'kg':
                return newsItem[`${field}Kg`];
            case 'ru':
                return newsItem[`${field}Ru`];
            case 'en':
            default:
                return newsItem[`${field}En`];
        }
    };

    function truncateText(text, maxChars) {
        if (text.length > maxChars) {
            return text.slice(0, maxChars) + '...'; // Обрезаем текст и добавляем три точки
        }
        return text; // Если меньше 120 символов, оставляем как есть
    }


    return (
        <>{news.map((item, index) => (

            <div className="relative flex w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-2.5 mt-8 ">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 ">
                <img src={item.imageUrl} className={Css.Image} alt="" />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased break-words...">
                    {truncateText(getLocalizedField(item, 'name'), 50) }

                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased break-words ...">
                   {truncateText(getLocalizedField(item, 'title'), 120) }

                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        {t('RegCardBtn')}
                    </button>
                </div>
            </div>
        ))}

        </>







    )
}

export default News
