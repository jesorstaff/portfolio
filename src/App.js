import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButtonProgress } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import './App.css';
import PopupComponent from './components/Menubar/PopupComponent';
import Follow from './components/Follow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PopupComponent />
        <Follow />
        <div className="my-about-text">
            <h1>Привет, меня зовут Тимур Байрамгулов.</h1>
            <h2>Я являюсь <b>Junior JavaScript Web Developer.</b> Посмотрите мои работы на React JS <Link to="/apps"><b>здесь</b></Link></h2>
            <h3>Так же вы можете посмотреть последние мои проекты на странице <Link to="/portfolio"><b>портфолио.</b></Link>
            </h3>
            <h3>Связь со мной через <a href="tg://resolve?domain=<@Timagood>">Telegram</a></h3>
        </div>
        <div className="app-btn">
            <Link to="/portfolio">
                <AwesomeButtonProgress
                    size="200px"
                    type="primary"
                    loadingLabel="Загрузка.."
                    resultLabel="Готово !"
                    action={(element, next) => {
                        setTimeout(() => {
                            next();
                        }, 1500);
                    }}
                >
                    Перейти к портфолио
                </AwesomeButtonProgress>
            </Link>
        </div>
      </div>
    );
  }
}

export default App;