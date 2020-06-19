import React from 'react';

import 'react-awesome-button/dist/styles.css';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';

function UserInfo() {
    return (
        <div className="my-about-text">
            <h1 className="title">Привет, меня зовут Тимур Байрамгулов.</h1>
            <h2>Я – Junior Frontend Developer.</h2>
            <h3>У меня отличный опыт в верстке - посмотрите <Link to="/portfolio"><b>портфолио,</b></Link></h3>
            <h3>а сейчас работаю с ReactJS – посмотрите некоторые проекты по <Link to="/apps"><b>ссылке.</b></Link></h3>
            <h3>Свяжитесь со мной в <a href="https://teleg.run/Timagood">Telegram</a></h3>
            <div className="app-btn">
                <AwesomeButton type="primary" href="/portfolio">Перейти к портфолио</AwesomeButton>
            </div>
        </div>
    )
}

export default UserInfo;
