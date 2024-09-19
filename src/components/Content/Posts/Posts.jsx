import React, { useEffect, useState } from 'react'
import Css from './Posts.module.css'
import { useTranslation } from 'react-i18next'
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { t } from 'i18next';

function Posts() {
    const [news, setNews] = useState([]);
    const { i18n } = useTranslation();


    useEffect(() => {
        const fetchNews = async () => {
            const querySnapshot = await getDocs(collection(db, 'posts'));
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
        <>

            <div className={Css.container}>
                {news.map((item, index) => (
                    <div className={Css.post}>
                        <div className={Css.header_post}>
                            <img
                                src={item.imageUrl}
                                alt=""
                                className={Css.Image}
                            />
                        </div>
                        <div className={Css.body_post}>
                            <div className={Css.post_content}>
                                <h1 className={Css.Name}>{truncateText(getLocalizedField(item, 'name'), 35)}</h1>
                                <p className={Css.Title}>
                                {truncateText(getLocalizedField(item, 'title'), 100)}
                                </p>
                                <div className={Css.container_infos}>
                                    <div className={Css.postedBy}>
                                        <span>{t('Date')}</span>
                                        {item.date} 
                                    </div>
                                    <div className={Css.container_tags}>
                                        <span>tags</span>
                                        <div className={Css.tags}>
                                            <ul>
                                                <li>design</li>
                                                <li>front end</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>


        </>







    )
}

export default Posts
