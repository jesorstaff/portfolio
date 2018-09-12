import React from 'react';
import PortfolioItemPage from "../PortfolioItemPage";

export default () => (
    <PortfolioItemPage
        title="Samsung.cps-ural.ru"
        subtitle="Данный лендинг был сделан за 10-12 часов"
        link="http://samsung.cps-ural.ru"
        image="https://pp.userapi.com/c844720/v844720655/e6015/oNRAFYBk92g.jpg"
    >
        <h2>Об этом проекте</h2>
        <hr/>
        <p>Данный лендинг я разработал с командой в компании интернет-маркетинга "Интернет решения". Лендинг предназначен для узкоспециализированного направления по смартфонам компании Samsung.</p>
        <p>В этой компании я выступал в качестве веб-разработчика, а также по разработке интерфейса UI / UX дизайнера. Основная задача заключалась к лендингу в том, чтобы клиенты которые хотят отремонтировать свой смартфон от компании Samsung, могли быстро узнать какой ремонт и за какую стоимость производит данный сервис, а также клиенты могли получить скидку с этого сайта.</p>
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