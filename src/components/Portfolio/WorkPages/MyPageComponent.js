import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

export default () => (
    <PortfolioItemPage
        title="Портфолио"
        subtitle="Сделать с помощью React.js, этот веб-сайт представляет собой демонстраницию моих проектов и последних работ."
        link="http://www.jesorstaff.ru/"
        image="https://sun1-13.userapi.com/c830401/v830401494/16f984/d4TUfcXMF90.jpg"
    >
        <h2>Об этом проекте</h2>
        <p>Идея этого проекта заключалась в том, чтобы создать демонстрацию всего, над чем я работал в последние пол года.</p>
        <hr/>
        <p></p>
        <section>
            <h2>Техническое описание</h2>
            <p>Какие технологии применялись</p>
            <hr/>
            <ul>
                <li>UI/UX Design</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React.js</li>
            </ul>
        </section>
    </PortfolioItemPage>
);