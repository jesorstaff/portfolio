import React, { Component } from 'react';

import { AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import PopupComponent from '../Menubar/PopupComponent';
import './style.css';

class Contact extends Component{
    render() {
        return (
            <div>
                <PopupComponent />
                <div className="container">
                    <header>
                        <h1>Контакты</h1>
                        <p>Если вы хотите связаться со мной для сотрудничества или просто сказать Привет!</p>
                    </header>
                    {/*<div className="feedback">*/}
                        {/*<form action="/" method="post">*/}
                            {/*<input type="text" placeholder="Введите ваши данные" />*/}
                        {/*</form>*/}
                    {/*</div>*/}
                    <div className="share">
                        <h4>Давайте дружить</h4>
                        <p>Вы можете написать мне в <a style={{ margin: '0' }} href="tg://resolve?domain=<@Timagood>">Telegram</a>, Facebook, Instagram</p>
                        <div className="social">
                            <AwesomeButtonSocial type="facebook" url="https://jesorstaff.ru">
                                Facebook
                            </AwesomeButtonSocial>
                            <AwesomeButtonSocial type="whatsapp" phone="+79173465143">
                                Whatsapp
                            </AwesomeButtonSocial>
                            <AwesomeButtonSocial type="github" target="_blank" href="https://github.com/jesorstaff">
                                Github
                            </AwesomeButtonSocial>
                            <AwesomeButtonSocial
                                type="instagram"
                                target="_blank"
                                href="https://www.instagram.com/jesorstaff/"
                            >
                                Instagram
                            </AwesomeButtonSocial>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
