import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Подключение Route страниц
import Portfolio from './components/Portfolio/Portfolio';
import Work from './components/Portfolio/Work';
import Contact from './components/Portfolio/Contact';

import CpsPageComponent from "./components/Portfolio/Pages/CpsPageComponent";
import SportHoldPageComponent from "./components/Portfolio/Pages/SportHoldPageComponent";
import TvoederevoPageComponent from "./components/Portfolio/Pages/TvoederevoPageComponent";
import KursorPageComponent from "./components/Portfolio/Pages/KursorPageComponent";
import DivitPageComponent from "./components/Portfolio/Pages/DivitPageComponent";
import SushiPageComponent from "./components/Portfolio/Pages/SushiPageComponent";
import SaunaPageComponent from "./components/Portfolio/Pages/SaunaPageComponent";
import NeutronPageComponent from "./components/Portfolio/Pages/NeutronPageComponent";
import EshopPageComponent from "./components/Portfolio/Pages/EshopPageComponent";

import MyPageComponent from "./components/Portfolio/WorkPages/MyPageComponent";

const history = createBrowserHistory();

ReactDOM.render(
   <BrowserRouter history={history}>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/portfolio/cps" component={CpsPageComponent} />
                <Route path="/portfolio/sporthold" component={SportHoldPageComponent} />
                <Route path="/portfolio/kursor" component={KursorPageComponent} />
                <Route path="/portfolio/divitpro" component={DivitPageComponent} />
                <Route path="/portfolio/sushiburger" component={SushiPageComponent} />
                <Route path="/portfolio/sauna" component={SaunaPageComponent} />
                <Route path="/portfolio/tvoederevo" component={TvoederevoPageComponent} />
                <Route path="/portfolio/neutron" component={NeutronPageComponent} />
                <Route path="/portfolio/eshop" component={EshopPageComponent} />
            <Route path="/apps" exact component={Work} />
                <Route path="/apps/myPortfolio" component={MyPageComponent} />
            <Route path="/contact" exact component={Contact} />
        </div>
   </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
