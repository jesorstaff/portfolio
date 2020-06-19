import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

import image from '../../../images/megafon.png';

export default () => (
    <PortfolioItemPage
        title="Megafon Jazz Band"
        subtitle="Frontend для кластера «Улучшай» и Уральского филиала ПАО «МегаФон»"
        // link=""
        image={image}
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Megafon Jazz Band</p>
        {/*<p>Нужен какой то текст :(</p>*/}
        <section>
            <h2>Техническое описание</h2>
            <p>Какие технологии применялись</p>
            <hr/>
            <ul>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>LESS</li>
                <li>PHP</li>
            </ul>
        </section>
    </PortfolioItemPage>
);
