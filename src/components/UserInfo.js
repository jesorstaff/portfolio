import React from 'react';

import 'react-awesome-button/dist/styles.css';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';

function UserInfo() {
    return (
        <div className="my-about-text">
            <h1 className="title">Привет, меня зовут Тимур Байрамгулов.</h1>
            <h2>Я являюсь <b>Junior JavaScript Web Developer.</b> Посмотрите мои работы на React JS <Link to="/apps"><b>здесь</b></Link></h2>
            <h3>Так же вы можете посмотреть последние мои проекты на странице <Link to="/portfolio"><b>портфолио.</b></Link>
            </h3>
            <h3>Связь со мной через <a href="tg://resolve?domain=<@Timagood>">Telegram</a></h3>
            <div className="app-btn">
                <AwesomeButton type="primary" href="/portfolio">Перейти к портфолио</AwesomeButton>
            </div>
        </div>
    )
}

export default UserInfo;
