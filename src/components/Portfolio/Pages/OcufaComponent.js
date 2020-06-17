import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

import image from '../../../images/oc.png';

export default () => (
    <PortfolioItemPage
        title="Офис Центер"
        // subtitle=""
        link="https://oc-ufa.ru/"
        image={image}
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Офис Центер</p>
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
                <li>Swiper carousel</li>
            </ul>
        </section>
    </PortfolioItemPage>
);
