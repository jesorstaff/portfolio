import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

import image from '../../../images/bakucaviar.jpg';

export default () => (
    <PortfolioItemPage
        title="Baku Caviar"
        subtitle="Landing page Baku Caviar"
        link="http://bakucaviar.az/"
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
