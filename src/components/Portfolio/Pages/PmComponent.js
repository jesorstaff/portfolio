import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

import image from '../../../images/pm.jpg';

export default () => (
    <PortfolioItemPage
        title="Pm-beton"
        subtitle="Сайт компании профмонолит"
        link="https://pm-beton.ru/"
        image={image}
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Компания по продаже бетона</p>
        {/*<p>Нужен какой то текст :(</p>*/}
        <section>
            <h2>Техническое описание</h2>
            <p>Какие технологии применялись</p>
            <hr/>
            <ul>
                <li>Bitrix</li>
                <li>PHP</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>jQuery</li>
                <li>Owl-carousel</li>
            </ul>
        </section>
    </PortfolioItemPage>
);
