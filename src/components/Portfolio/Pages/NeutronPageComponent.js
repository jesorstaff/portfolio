import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

export default () => (
    <PortfolioItemPage
        title="NeutronMail"
        subtitle="Верстал по PSD макету"
        image="https://pp.userapi.com/c845419/v845419494/e6ee7/mgGorF5FPwo.jpg"
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Верстал страницу используя технологии Flexbox CSS / SCSS</p>
        <p>Данный макет нигде не используется</p>
        <section>
            <h2>Техническое описание</h2>
            <p>Какие технологии применялись</p>
            <hr/>
            <ul>
                <li>SASS/SCSS</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Gulp.js</li>
                <li>Adobe Photoshop CS6</li>
            </ul>
        </section>
    </PortfolioItemPage>
);