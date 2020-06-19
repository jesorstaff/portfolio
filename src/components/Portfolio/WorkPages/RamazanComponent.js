import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

import image from '../../../images/ramazan.png';

export default () => (
    <PortfolioItemPage
        title="Рамазан 2019"
        subtitle="Расписание поста по дням для жителей Баку и пригорода"
        // link=""
        image={image}
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Расписание поста по дням для жителей Баку и пригорода</p>
        {/*<p>Нужен какой то текст :(</p>*/}
        <section>
            <h2>Техническое описание</h2>
            <p>Какие технологии применялись</p>
            <hr/>
            <ul>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>HTML5</li>
                <li>CSS3</li>
            </ul>
        </section>
    </PortfolioItemPage>
);
