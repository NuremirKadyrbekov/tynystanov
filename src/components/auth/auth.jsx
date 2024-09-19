import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore'; // Для работы с Firestore
import { auth, db } from '../../firebase'; // Импорт Firebase конфигурации
import Css from './auth.module.css'

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        // setEmail(`${email}@gmail.com`)
        const fastEmail = `${email}@gmail.com`

        try {
            // Авторизация через Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(auth, fastEmail, password);
            const user = userCredential.user;

            // Получаем данные пользователя из Firebase Firestore
            const userDocRef = doc(db, 'users', user.uid); // Запрашиваем данные пользователя по его ID
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                
                // Проверка, что email соответствует admin и проверяем права доступа
                if (user.email === 'admin@gmail.com' && userData.role === 'admin') {
                    // Сохраняем токен и email пользователя в localStorage
                    localStorage.setItem('userToken', user.accessToken);
                    localStorage.setItem('userEmail', user.email);

                    // Перенаправляем в админ-панель
                    navigate('/admin');
                } else {
                    localStorage.setItem('userToken', user.accessToken);
                    localStorage.setItem('userEmail', user.email);

                    navigate('/')
                }
            } else {
                setError('Пользователь не найден в базе данных');
            }
        } catch (error) {
            setError('Ошибка при авторизации. Проверьте логин и пароль.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={Css.Main}>
            <div className={Css.AuthBlock}>
                <img src='' alt="" className={Css.Logo} />
                <p>Касым Тыныстанов ИГУ</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Login'
                        required
                        className={Css.input}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                        className={Css.input} 
                    />
                    <button type='submit' disabled={loading}>
                        {loading ? 'Загрузка...' : 'Login'}
                    </button>
                </form>
                {error && <p className={Css.error}>{error}</p>}
            </div>
        </div>
    );
}

export default Auth;
