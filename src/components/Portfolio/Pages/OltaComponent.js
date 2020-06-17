import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

import image from '../../../images/olta.jpg';

export default () => (
    <PortfolioItemPage
        title="Travel Baikal"
        // subtitle=""
        link="http://olta.lmth.ru/"
        image={image}
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Travel Baikal</p>
        {/*<p>Нужен какой то текст :(</p>*/}
        <section>
            <h2>Техническое описание</h2>
            <p>Какие технологии применялись</p>
            <hr/>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bitrix</li>
                <li>JavaScript</li>
                <li>Owl carousel</li>
            </ul>
        </section>
    </PortfolioItemPage>
);
