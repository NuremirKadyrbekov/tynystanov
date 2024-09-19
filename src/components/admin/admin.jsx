import React, { useState } from 'react'
import Css from './admin.module.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import NewNews from './NewNews';
import NewUsers from './NewUsers';
import NewPosts from './NewPosts';


function Admin() {
    const [ShowBlock, SetShowBlock] = useState('newnews')

    const SetNewsShow = () => {
        SetShowBlock('newnews')
    }

    const SetNewUsers = () => {
        SetShowBlock('newusers')
    }
    const SetNewPosts = () => {
        SetShowBlock('newposts')
    }



    const RenderShowBlock = () => {
        switch (ShowBlock) {
            case 'newnews':
                return <NewNews />
                break;

            case 'newusers':
                return <NewUsers />
                break;
            case "newposts":
                return <NewPosts/>
                break;
        }

    }

    return (
        <div className={Css.Main}>

            <Sidebar
                rootStyles={{
                    color: 'black',
                    backgroundColor: '#003973',
                    height: '100vh'
                }}
            >
                <h1>ADMIN PANEL</h1>
                <Menu>
                    <SubMenu label="Добавить">
                        <MenuItem onClick={SetNewsShow}>Новую новость</MenuItem>
                        <MenuItem onClick={SetNewPosts}> Новое Обьявление </MenuItem>
                        <MenuItem onClick={SetNewUsers}> Нового пользователя </MenuItem>
                    </SubMenu>
                    <SubMenu label="Контакты">
                        <MenuItem>Нурэмир Кадырбеков</MenuItem>
                        <MenuItem>+996779119890</MenuItem>
                    </SubMenu>
                    <MenuItem> Информация </MenuItem>
                    <MenuItem>  </MenuItem>
                </Menu>
            </Sidebar>
            <div className={Css.Content}>
                {
                    RenderShowBlock()
                }
            </div>
        </div>
    )
}

export default Admin
