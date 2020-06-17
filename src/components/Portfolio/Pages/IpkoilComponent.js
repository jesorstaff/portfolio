import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

import image from '../../../images/ipkoil.jpg';

export default () => (
    <PortfolioItemPage
        title="Ipkoil"
        subtitle="Сайт Ipkoil"
        link="https://ipkoil.ru/"
        image={image}
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Натуральная, традиционная, вкусная чёрная икра</p>
        {/*<p>Нужен какой то текст :(</p>*/}
        <section>
            <h2>Техническое описание</h2>
            <p>Какие технологии применялись</p>
            <hr/>
            <ul>
                <li>PHP</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>UI / UX</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Swiper Slider</li>
                <li>Настройка Яндекс/Google целей</li>
            </ul>
        </section>
    </PortfolioItemPage>
);
