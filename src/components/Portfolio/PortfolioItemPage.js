import React from 'react';
import { NavLink } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import './portfolioItemPageStyles.css';
import PopupComponent from '../Menubar/PopupComponent';
import PortfolioFooterComponent from "./PortfolioFooterComponent";

const PortfolioItemPage = ({ title, subtitle, link, image, children }) => (
    <div>
        <NavLink to="/portfolio" title="Back to portfolio" className="back-list">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </NavLink>
        <div className="wrapper">
            <PopupComponent />
            <header>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <div className="visit">
                    <a href={link} target="_blank">
                        <AwesomeButton type="facebook">Перейти на сайт</AwesomeButton>
                    </a>
                </div>
            </header>
            <div className="media">
                <div className="bar">
                    <i></i>
                </div>
                <div className="slider">
                    <img src={image} alt=""/>
                </div>
            </div>
            <div className="text">
                {children}
            </div>
            <PortfolioFooterComponent />
        </div>
    </div>
);

export default PortfolioItemPage;