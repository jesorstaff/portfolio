import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

import image from '../../../images/mercan.jpg';

export default () => (
    <PortfolioItemPage
        title="Mercan"
        subtitle="Сайт Mercan"
        link="http://marcan.az/"
        image={image}
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Высокие стандарты — вкусная продукция</p>
        {/*<p>Нужен какой то текст :(</p>*/}
        <section>
            <h2>Техническое описание</h2>
            <p>Какие технологии применялись</p>
            <hr/>
            <ul>
                <li>React.js</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>UI / UX</li>
                <li>JavaScript</li>
            </ul>
        </section>
    </PortfolioItemPage>
);
