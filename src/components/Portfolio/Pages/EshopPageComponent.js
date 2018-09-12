import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

export default () => (
    <PortfolioItemPage
        title="eshop8"
        subtitle="Сайт разработан на bitrix"
        link="https://eshop8.ru/"
        image="https://pp.userapi.com/c845419/v845419494/e6ef1/YZtrkYFpIqo.jpg"
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Данный сайт был сделан с командой в компании интернет-маркетинга "Интернет решения".</p>
        <p>В этой компании я выступал в качестве веб-разработчика.</p>
        <section>
            <h2>Техническое описание</h2>
            <p>Какие технологии применялись</p>
            <hr/>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Bitrix Framework</li>
                <li>Figma</li>
                <li>Настройка Яндекс/Google целей</li>
            </ul>
        </section>
    </PortfolioItemPage>
);