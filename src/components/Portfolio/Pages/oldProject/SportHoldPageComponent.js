import React from 'react';
import PortfolioItemPage from "../../PortfolioItemPage";

export default () => (
    <PortfolioItemPage
        title="Sport Hold"
        subtitle="Верста по макету PSD, за 10 часов использовал Bootstrap 4"
        image="https://pp.userapi.com/c845322/v845322655/e74a3/bActSxNdI5E.jpg"
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Верстал страницу используя технологии CSS фреймворк Bootstrap 4</p>
        <p>Данный макет нигде не используется</p>
        <section>
            <h2>Техническое описание</h2>
            <p>Какие технологии применялись</p>
            <hr/>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap4</li>
                <li>Adobe Photoshop CS6</li>
                <li>Gulp.js</li>
                <li>SASS/SCSS</li>
            </ul>
        </section>
    </PortfolioItemPage>
);
