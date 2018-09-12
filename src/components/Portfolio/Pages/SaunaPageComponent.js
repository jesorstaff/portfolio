import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

export default () => (
    <PortfolioItemPage
        title="Сауна буль-буль"
        subtitle="Сайт разработан на UMI.CMS"
        link="https://ufasauna.com/"
        image="https://pp.userapi.com/c847017/v847017448/e18af/5_id6iupe8s.jpg"
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Данный лендинг я разработал с командой в компании интернет-маркетинга "Интернет решения".</p>
        <p>В этой компании я выступал в качестве веб-разработчика, а также по разработке интерфейса UI / UX дизайнера.</p>
        <section>
            <h2>Техническое описание</h2>
            <p>Какие технологии применялись</p>
            <hr/>
            <ul>
                <li>UI / UX</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>UMI.CMS c раширением .tpl</li>
                <li>Настройка Яндекс/Google целей</li>
            </ul>
        </section>
    </PortfolioItemPage>
);