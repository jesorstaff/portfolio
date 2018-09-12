import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

export default () => (
    <PortfolioItemPage
        title="УКК Курсор"
        subtitle="Верста посадочных страниц"
        link="http://ukkursor.ru/"
        image="https://pp.userapi.com/c846221/v846221494/e34fd/tEM_DzXoDtI.jpg"
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Верстка посадочных страниц. Добавление новых элементов на страницу не изменяя старые.</p>
        <section>
            <h2>Техническое описание</h2>
            <p>Какие технологии применялись</p>
            <hr/>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bitrix Framework</li>
                <li>Figma</li>
            </ul>
        </section>
    </PortfolioItemPage>
);