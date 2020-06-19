import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import PopupComponent from '../Menubar/PopupComponent';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../../data/appProduct';
import PortfolioFooterComponent from "./PortfolioFooterComponent";

// Название работ
const ProductItem = ({ category, name, image, slug }) => (
    <li className="portfolio-item">
        <NavLink exact to={`apps/${slug}`}>
            <div className="bar">
                <h2>{name}</h2>
                <i></i>
            </div>
            <div className="main">
                <img src={image} alt={name}/>
                <div className={`category--${category} circle`} />
            </div>
        </NavLink>
    </li>
);

const ProductItems = ({ state: { products, displayCategory } }) => (
    <ul className="portfolio-list">
        {products
            .filter(
                ({ category }) =>
                    displayCategory === category || displayCategory === "all"
            )
            .map(({ category, name, image, slug }) => (
                <ProductItem key={`ProductItems-${name}`}
                             category={category}
                             name={name}
                             image={image}
                             slug={slug}
                />
            ))}
    </ul>
);

//Название категорий
const ButtonCategories = (productCategories, setCategory ) => (
    productCategories.map((category) => (
        <li key={category} className={`btn-${category}`} onClick={() => setCategory(category)}>
            <span>{category}</span>
        </li>
    ))
);

//Фильтр и Портфолио лист
const UI = ({
                state,
                state: { productCategories },
                setCategory,
                allProducts
            }) => (
    <div>
        <div className="container" id="portfolio">
            <div className="wrapper">
                <header>
                    <h1>Сode laboratory</h1>
                    <p>Single page application</p>
                    <div className="portfolio-filter">
                        <ul>
                            {ButtonCategories(productCategories, setCategory )}
                        </ul>
                    </div>
                </header>
            </div>
        </div>
        <div>
            <ProductItems state={state} />
        </div>
    </div>
);

class Work extends Component{
    constructor(props) {
        super(props);
        this.state = {
            displayCategory: "all",
            products: PRODUCTS,
            productCategories: PRODUCT_CATEGORIES
        };
        this.setCategory = this.setCategory.bind(this);
    }
    setCategory(category) {
        this.setState({
            displayCategory: category
        });
    }
    render() {
        return (
            <div>
                <PageNavigation />
                <div className="wrapper">
                    <PopupComponent />
                    <UI setCategory={this.setCategory} state={this.state} />
                    <PortfolioFooterComponent />
                </div>
            </div>
        )
    }
}

const PageNavigation = () => {
    return (
        <div className="page-control">
            <NavLink to="/portfolio" className="prev">
                <span>Обо мне</span>
                <em></em>
            </NavLink>
            <NavLink to="/contact" className="next">
                <span>Приложения</span>
                <em></em>
            </NavLink>
        </div>
    )
}

export default Work;
