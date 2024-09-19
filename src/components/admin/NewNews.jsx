import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebase'; // Импорт Firebase конфигурации
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Css from './styles.module.css';

function NewNews() {
    const [language, setLanguage] = useState('kg'); // По умолчанию кыргызский
    const [nameKg, setNameKg] = useState('');
    const [nameRu, setNameRu] = useState('');
    const [nameEn, setNameEn] = useState('');
    const [titleKg, setTitleKg] = useState('');
    const [titleRu, setTitleRu] = useState('');
    const [titleEn, setTitleEn] = useState('');
    const [image, setImage] = useState(null);
    const [date, setDate] = useState(new Date().toISOString());
    const [loading, setLoading] = useState(false);
    const [newsNumber, setNewsNumber] = useState(0);

    useEffect(() => {
        // Получение текущего номера новости при загрузке компонента
        const fetchNewsNumber = async () => {
            const counterDocRef = doc(db, 'metadata', 'newsCounter');
            const counterDoc = await getDoc(counterDocRef);
            if (counterDoc.exists()) {
                setNewsNumber(counterDoc.data().counter || 0);
            } else {
                // Если документа нет, создаем его с начальным значением 0
                await setDoc(counterDocRef, { counter: 0 });
                setNewsNumber(0);
            }
        };

        fetchNewsNumber();
    }, []);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!nameKg || !nameRu || !nameEn || !titleKg || !titleRu || !titleEn) {
            alert('Пожалуйста, заполните все поля на всех языках.');
            setLoading(false);
            return;
        }

        try {
            let imageUrl = '';

            // Загрузка изображения в Firebase Storage
            if (image) {
                const imageRef = ref(storage, `images/${Date.now()}_${image.name}`);
                await uploadBytes(imageRef, image);
                imageUrl = await getDownloadURL(imageRef);
            }

            // Создание объекта с новостью
            const newsData = {
                number: newsNumber + 1, // Увеличиваем номер на 1
                nameKg: nameKg,
                nameRu: nameRu,
                nameEn: nameEn,
                titleKg: titleKg,
                titleRu: titleRu,
                titleEn: titleEn,
                date: date,
                imageUrl: imageUrl,
            };

            // Отправка данных в Firestore
            await setDoc(doc(db, 'news', (newsNumber + 1).toString()), newsData);

            // Обновление счетчика новостей
            await updateDoc(doc(db, 'metadata', 'newsCounter'), { counter: newsNumber + 1 });

            alert('Новость успешно добавлена!');
        } catch (error) {
            console.error('Ошибка при добавлении новости:', error);
            alert('Ошибка при добавлении новости.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={Css.Main}>
            <form className={Css.Form} onSubmit={handleSubmit}>
                <div className={Css.LanguageSelector}>
                    <button
                        type="button"
                        className={language === 'kg' ? Css.Active : ''}
                        onClick={() => setLanguage('kg')}
                    >
                        Кыргызский
                    </button>
                    <button
                        type="button"
                        className={language === 'ru' ? Css.Active : ''}
                        onClick={() => setLanguage('ru')}
                    >
                        Русский
                    </button>
                    <button
                        type="button"
                        className={language === 'en' ? Css.Active : ''}
                        onClick={() => setLanguage('en')}
                    >
                        Английский
                    </button>
                </div>
                <input
                    className={Css.NewName}
                    placeholder='Название новости'
                    value={language === 'kg' ? nameKg : language === 'ru' ? nameRu : nameEn}
                    onChange={(e) => {
                        if (language === 'kg') setNameKg(e.target.value);
                        if (language === 'ru') setNameRu(e.target.value);
                        if (language === 'en') setNameEn(e.target.value);
                    }}
                />
                <textarea
                    className={Css.NewTitle}
                    placeholder='Описание новости'
                    value={language === 'kg' ? titleKg : language === 'ru' ? titleRu : titleEn}
                    onChange={(e) => {
                        if (language === 'kg') setTitleKg(e.target.value);
                        if (language === 'ru') setTitleRu(e.target.value);
                        if (language === 'en') setTitleEn(e.target.value);
                    }}
                />
                <div className={Css.Image}>
                    <input type="file" accept="image/png, image/jpeg" onChange={handleImageChange} />
                </div>
                <div className={Css.Date}>
                    <input
                        type="datetime-local"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <button type='submit' disabled={loading}>
                    {loading ? 'Загрузка...' : 'Добавить новость'}
                </button>
            </form>
            <div className={Css.Panel}></div>
        </div>
    );
}

export default NewNews;
