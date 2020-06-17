import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

import image from '../../../images/azfish.jpg';

export default () => (
    <PortfolioItemPage
        title="Azerbaijan Fish Farm"
        subtitle="Landing page azerbaijan fish farm"
        link="http://azfish.az/"
        image={image}
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Azerbaijan Fish Farm является новатором в технологиях по выращиванию осетровых, форели, а также производства осетровой икры на территории Азербайджана.</p>
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
