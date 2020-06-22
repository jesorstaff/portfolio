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

// Внутренние страницы WORK
import AzFishComponent from './components/Portfolio/Pages/AzFishComponent';
import BakuCaviarComponent from './components/Portfolio/Pages/BakuCaviarComponent';
import IpkoilComponent from './components/Portfolio/Pages/IpkoilComponent';
import PmComponent from './components/Portfolio/Pages/PmComponent';
import ZzbetonComponent from './components/Portfolio/Pages/ZzbetonComponent';
import OltaComponent from './components/Portfolio/Pages/OltaComponent';
import ArmatinalComponent from './components/Portfolio/Pages/ArmatinalComponent';
import OcufaComponent from './components/Portfolio/Pages/OcufaComponent';
import MegafonComponent from './components/Portfolio/Pages/MegafonComponent';
import TvoederevoPageComponent from "./components/Portfolio/Pages/TvoederevoPageComponent";
import KursorPageComponent from "./components/Portfolio/Pages/KursorPageComponent";
import SaunaPageComponent from "./components/Portfolio/Pages/SaunaPageComponent";
import EshopPageComponent from "./components/Portfolio/Pages/EshopPageComponent";

// Внутренние страницы APPS
import MyPageComponent from "./components/Portfolio/WorkPages/MyPageComponent";
import MercanComponent from './components/Portfolio/WorkPages/MercanComponent';
import RamazanComponent from './components/Portfolio/WorkPages/RamazanComponent';

const history = createBrowserHistory();

ReactDOM.render(
   <BrowserRouter history={history}>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/portfolio/megafon" component={MegafonComponent} />
                <Route path="/portfolio/azfish" component={AzFishComponent} />
                <Route path="/portfolio/bakucaviar" component={BakuCaviarComponent} />
                <Route path="/portfolio/ipkoil" component={IpkoilComponent} />
                <Route path="/portfolio/pm" component={PmComponent} />
                <Route path="/portfolio/zzb" component={ZzbetonComponent} />
                <Route path="/portfolio/olta" component={OltaComponent} />
                <Route path="/portfolio/armatinal" component={ArmatinalComponent} />
                <Route path="/portfolio/ocufa" component={OcufaComponent} />
                <Route path="/portfolio/kursor" component={KursorPageComponent} />
                <Route path="/portfolio/sauna" component={SaunaPageComponent} />
                <Route path="/portfolio/tvoederevo" component={TvoederevoPageComponent} />
                <Route path="/portfolio/eshop" component={EshopPageComponent} />
            <Route path="/apps" exact component={Work} />
                <Route path="/apps/myPortfolio" component={MyPageComponent} />
                <Route path="/apps/mercan" component={MercanComponent} />
              <Route path="/apps/ramazan" component={RamazanComponent} />
            <Route path="/contact" exact component={Contact} />
        </div>
   </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
