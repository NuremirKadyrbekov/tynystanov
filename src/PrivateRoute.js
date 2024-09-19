import React from 'react';
import { Navigate } from 'react-router-dom';

function AdminRoute({ children }) {
    const userToken = localStorage.getItem('userToken');
    const userEmail = localStorage.getItem('userEmail');

    // Проверяем, есть ли токен пользователя и является ли это нужный пользователь
    if (userToken && userEmail === 'admin@gmail.com') {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}

export default AdminRoute;
